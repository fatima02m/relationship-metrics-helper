
import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { 
  questions, 
  Question, 
  Option, 
  getProfileType,
  getShortQuiz
} from "@/data/quizData";
import QuizIntro from "@/components/QuizIntro";
import QuizQuestion from "@/components/QuizQuestion";
import QuizProgress from "@/components/QuizProgress";
import QuizResults from "@/components/QuizResults";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  // Quiz state
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  // Use short quiz by default
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentPath, setCurrentPath] = useState<string[]>([]);
  const [useFullQuiz, setUseFullQuiz] = useState(false);
  
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
    
    // Start with questions that don't have conditions
    let availableQuestions = allQuestions.filter(q => !q.condition);
    
    // Add questions whose conditions are met
    Object.entries(answers).forEach(([questionId, answer]) => {
      // Find questions that depend on this answer
      const conditionalQuestions = allQuestions.filter(q => 
        q.condition && q.condition.questionId === questionId
      );
      
      conditionalQuestions.forEach(question => {
        const { condition } = question;
        if (!condition) return;
        
        const answerOption = answer as Option; // For single choice
        
        // Check if this answer matches the condition
        if (Array.isArray(condition.optionId)) {
          // For multiple possible options
          if (condition.optionId.includes(answerOption.id)) {
            if (!availableQuestions.some(q => q.id === question.id)) {
              availableQuestions.push(question);
            }
          }
        } else {
          // For single option
          if (answerOption.id === condition.optionId) {
            if (!availableQuestions.some(q => q.id === question.id)) {
              availableQuestions.push(question);
            }
          }
        }
      });
    });
    
    // Sort questions to maintain a logical flow
    availableQuestions.sort((a, b) => {
      if (!a.section && !b.section) return 0;
      if (!a.section) return 1;
      if (!b.section) return -1;
      return a.section - b.section;
    });
    
    setQuizQuestions(availableQuestions);
    
    // Update current path
    const newPath = generatePath(answers);
    setCurrentPath(newPath);
    
  }, [answers, useFullQuiz]);

  // Generate path based on answers
  const generatePath = (answers: Record<string, Option | Option[]>) => {
    const path: string[] = [];
    
    // Layer 1
    const layer1Answer = answers["layer1_q1"] as Option;
    if (layer1Answer) {
      path.push(layer1Answer.id);
      
      // Layer 2
      const layer2QuestionId = `layer2_${layer1Answer.id}`;
      const layer2Questions = questions.filter(q => q.id === layer2QuestionId);
      
      if (layer2Questions.length > 0 && answers[layer2Questions[0].id]) {
        const layer2Answer = answers[layer2Questions[0].id] as Option;
        path.push(layer2Answer.id);
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
    
    // Complete the quiz
    setQuizCompleted(true);
    toast.success("Assessment completed!");
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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted/30 py-12 px-4">
      <div className="w-full max-w-3xl">
        {!quizStarted && !quizCompleted && (
          <>
            <QuizIntro onStart={startQuiz} />
            <div className="mt-4 text-center">
              <button 
                onClick={toggleQuizLength} 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Switch to {useFullQuiz ? "Short" : "Comprehensive"} Assessment
              </button>
            </div>
          </>
        )}

        {quizStarted && !quizCompleted && currentQuestion && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-card text-card-foreground p-8 rounded-xl shadow-sm"
          >
            <div className="mb-6">
              <QuizProgress 
                currentQuestion={currentQuestionIndex + 1} 
                totalQuestions={quizQuestions.length}
                currentSection={currentSection}
              />
            </div>

            <div className="mb-8">
              <QuizQuestion 
                question={currentQuestion}
                selectedOption={currentAnswer}
                onSelectOption={handleOptionSelect}
              />
            </div>

            <div className="flex justify-between">
              <Button
                variant="outline"
                size="sm"
                onClick={goToPreviousQuestion}
                disabled={currentQuestionIndex === 0}
                className="flex items-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>

              <Button
                onClick={goToNextQuestion}
                size="lg"
                className="flex items-center"
              >
                {currentQuestionIndex < quizQuestions.length - 1 ? (
                  <>
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                ) : (
                  "See Results"
                )}
              </Button>
            </div>
          </motion.div>
        )}

        {quizCompleted && (
          <QuizResults 
            primaryType={primaryType}
            path={currentPath}
            answers={answers}
            onRestart={restartQuiz}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
