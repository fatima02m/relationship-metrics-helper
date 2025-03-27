
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { 
  questions, 
  getProfileType,
  getShortQuiz
} from "@/data/quizData";
import { Question, Option } from "@/data/types/quizTypes";

export function useQuiz() {
  // Quiz state
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  // Use full quiz by default
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentPath, setCurrentPath] = useState<string[]>([]);
  const [useFullQuiz, setUseFullQuiz] = useState(true); // Full quiz by default
  
  // Answers state
  const [answers, setAnswers] = useState<Record<string, Option | Option[]>>({});
  const [currentAnswer, setCurrentAnswer] = useState<Option | Option[] | null>(null);
  
  // Results state
  const [primaryType, setPrimaryType] = useState("");

  // Initialize quiz questions
  useEffect(() => {
    const allQuestions = useFullQuiz ? questions : getShortQuiz();
    // Get all questions that don't have conditions
    const unconditionalQuestions = allQuestions.filter(q => !q.condition);
    setQuizQuestions(unconditionalQuestions);
  }, [useFullQuiz]);

  // Update available questions based on answers
  useEffect(() => {
    if (Object.keys(answers).length === 0) return;

    const allQuestions = useFullQuiz ? questions : getShortQuiz();
    
    // Get all available questions based on current answers
    let availableQuestions = getAvailableQuestions(allQuestions, answers);
    
    // Sort questions to maintain a logical flow
    availableQuestions.sort((a, b) => {
      if (!a.section && !b.section) return 0;
      if (!a.section) return 1;
      if (!b.section) return -1;
      
      // First sort by section
      if (a.section !== b.section) {
        return a.section - b.section;
      }
      
      // Then sort by question ID for questions in the same section
      // This helps maintain the hierarchy within sections (e.g., 3AA comes before 3AB)
      return a.id.localeCompare(b.id);
    });
    
    setQuizQuestions(availableQuestions);
    
    // Update current path
    const newPath = generatePath(answers);
    setCurrentPath(newPath);
    
    // Console log for debugging
    console.log(`Quiz now has ${availableQuestions.length} questions based on answers`);
    
  }, [answers, useFullQuiz]);

  // Recursive function to get all available questions based on current answers
  const getAvailableQuestions = (allQuestions: Question[], currentAnswers: Record<string, Option | Option[]>): Question[] => {
    // Start with questions that don't have conditions
    let result = allQuestions.filter(q => !q.condition);
    
    // Track added questions to avoid duplicates
    const addedQuestionIds = new Set(result.map(q => q.id));
    
    // Function to check if a question should be included
    const shouldIncludeQuestion = (question: Question): boolean => {
      if (!question.condition) return true;
      
      const { questionId, optionId } = question.condition;
      const answer = currentAnswers[questionId];
      
      if (!answer) return false;
      
      if (Array.isArray(answer)) {
        // For multiple-choice questions
        if (Array.isArray(optionId)) {
          // Check if any of the selected options match any of the condition options
          return answer.some(opt => optionId.includes(opt.id));
        } else {
          // Check if any of the selected options match the condition option
          return answer.some(opt => opt.id === optionId);
        }
      } else {
        // For single-choice questions
        if (Array.isArray(optionId)) {
          // Check if the selected option matches any of the condition options
          return optionId.includes(answer.id);
        } else {
          // Check if the selected option matches the condition option
          return answer.id === optionId;
        }
      }
    };
    
    // Recursively check for new questions that should be included
    let addedNewQuestion = true;
    while (addedNewQuestion) {
      addedNewQuestion = false;
      
      allQuestions.forEach(question => {
        if (!addedQuestionIds.has(question.id) && shouldIncludeQuestion(question)) {
          result.push(question);
          addedQuestionIds.add(question.id);
          addedNewQuestion = true;
        }
      });
    }
    
    return result;
  };

  // Generate path based on answers
  const generatePath = (answers: Record<string, Option | Option[]>) => {
    const path: string[] = [];
    
    // Layer 1
    const layer1Answer = answers["layer1_q1"] as Option;
    if (layer1Answer) {
      path.push(layer1Answer.id);
      
      // Layer 2
      const layer2QuestionId = `layer2_${layer1Answer.id}`;
      const layer2Answer = answers[layer2QuestionId] as Option;
      
      if (layer2Answer) {
        path.push(layer2Answer.id);
        
        // Layer 3 and beyond
        // For each answer, find the corresponding questions and follow the path
        const findDeeperPaths = (currentQuestionId: string, currentOptionId: string, level: number) => {
          // Find questions that depend on this answer
          const nextQuestion = questions.find(q => 
            q.condition && 
            q.condition.questionId === currentQuestionId && 
            (Array.isArray(q.condition.optionId) 
              ? q.condition.optionId.includes(currentOptionId)
              : q.condition.optionId === currentOptionId)
          );
          
          if (nextQuestion && answers[nextQuestion.id]) {
            const nextAnswer = answers[nextQuestion.id] as Option;
            if (!Array.isArray(nextAnswer)) {
              path.push(nextAnswer.id);
              // Recursively follow the path, but limit depth to prevent infinite loops
              if (level < 10) {
                findDeeperPaths(nextQuestion.id, nextAnswer.id, level + 1);
              }
            }
          }
        };
        
        findDeeperPaths(layer2QuestionId, layer2Answer.id, 3);
      }
    }
    
    return path;
  };

  // Reset current answer when question changes
  useEffect(() => {
    if (quizStarted && !quizCompleted && quizQuestions.length > 0) {
      const questionId = quizQuestions[currentQuestionIndex].id;
      setCurrentAnswer(answers[questionId] || null);
    }
  }, [currentQuestionIndex, answers, quizQuestions, quizStarted, quizCompleted]);

  const startQuiz = () => {
    setQuizStarted(true);
    toast.success("Assessment started");
  };

  const handleOptionSelect = (option: Option | Option[]) => {
    setCurrentAnswer(option);
  };

  const calculateResults = () => {
    // Determine primary type based on Layer 1 answer
    const primary = getProfileType(answers);
    setPrimaryType(primary);
    
    // Log answers for debugging
    console.log("Final answers:", answers);
    console.log("Total questions answered:", Object.keys(answers).length);
    
    // Complete the quiz
    setQuizCompleted(true);
    toast.success("Assessment completed!");

    // For Wix integration - send the results to the parent window
    try {
      if (window.parent) {
        window.parent.postMessage({
          type: 'quizComplete',
          payload: {
            primaryType: primary,
            path: currentPath,
            answers: answers
          }
        }, '*');
      }
    } catch (error) {
      console.error("Error sending quiz results to parent window:", error);
    }
  };

  const goToNextQuestion = () => {
    if (!currentAnswer) {
      toast.error("Please select an answer before continuing");
      return;
    }
    
    // Save current answer
    const questionId = quizQuestions[currentQuestionIndex].id;
    setAnswers(prev => ({
      ...prev,
      [questionId]: currentAnswer
    }));
    
    // Go to next question or finish quiz
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      calculateResults();
    }
  };
  
  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    }
  };
  
  const restartQuiz = () => {
    setQuizStarted(false);
    setQuizCompleted(false);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setCurrentAnswer(null);
    setPrimaryType("");
    setCurrentPath([]);
    toast.info("Assessment restarted");
  };

  const toggleQuizLength = () => {
    if (!quizStarted) {
      setUseFullQuiz(!useFullQuiz);
      toast.info(useFullQuiz ? "Short assessment selected" : "Comprehensive assessment selected");
    }
  };

  // Get current question
  const currentQuestion = quizStarted && !quizCompleted && quizQuestions.length > 0 
    ? quizQuestions[currentQuestionIndex] 
    : null;
  
  // Get current section
  const currentSection = currentQuestion?.section || 1;

  return {
    quizStarted,
    quizCompleted,
    currentQuestionIndex,
    quizQuestions,
    currentPath,
    useFullQuiz,
    answers,
    currentAnswer,
    primaryType,
    currentQuestion,
    currentSection,
    startQuiz,
    handleOptionSelect,
    goToNextQuestion,
    goToPreviousQuestion,
    restartQuiz,
    toggleQuizLength
  };
}
