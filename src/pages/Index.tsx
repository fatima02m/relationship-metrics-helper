
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
  const [quizQuestions, setQuizQuestions] = useState<Question[]>(getShortQuiz());
  const [useFullQuiz, setUseFullQuiz] = useState(false);
  
  // Answers state
  const [answers, setAnswers] = useState<Record<string, Option>>({});
  const [currentAnswer, setCurrentAnswer] = useState<Option | null>(null);
  
  // Results state
  const [scores, setScores] = useState<Record<string, number>>({
    caringHost: 0,
    financialBurdens: 0,
    emotionalTurmoil: 0
  });
  const [primaryType, setPrimaryType] = useState("");

  // Update quiz questions when useFullQuiz changes
  useEffect(() => {
    setQuizQuestions(useFullQuiz ? questions : getShortQuiz());
  }, [useFullQuiz]);

  // Reset current answer when question changes
  useEffect(() => {
    if (quizStarted && !quizCompleted) {
      const questionId = quizQuestions[currentQuestionIndex].id;
      setCurrentAnswer(answers[questionId] || null);
    }
  }, [currentQuestionIndex, answers, quizQuestions, quizStarted, quizCompleted]);

  const startQuiz = () => {
    setQuizStarted(true);
    toast.success("Assessment started");
  };

  const handleOptionSelect = (option: Option) => {
    setCurrentAnswer(option);
  };

  const calculateResults = () => {
    // Initialize scores
    const newScores = {
      caringHost: 0,
      financialBurdens: 0,
      emotionalTurmoil: 0
    };
    
    // Sum up scores from all answers
    Object.values(answers).forEach(option => {
      newScores.caringHost += option.scores.caringHost;
      newScores.financialBurdens += option.scores.financialBurdens;
      newScores.emotionalTurmoil += option.scores.emotionalTurmoil;
    });
    
    setScores(newScores);
    
    // Determine primary type
    const primary = getProfileType(newScores);
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
    setScores({
      caringHost: 0,
      financialBurdens: 0,
      emotionalTurmoil: 0
    });
    setPrimaryType("");
    toast.info("Assessment restarted");
  };

  const toggleQuizLength = () => {
    if (!quizStarted) {
      setUseFullQuiz(!useFullQuiz);
      toast.info(useFullQuiz ? "Short assessment selected" : "Comprehensive assessment selected");
    }
  };

  // Get current question
  const currentQuestion = quizStarted && !quizCompleted && quizQuestions[currentQuestionIndex];
  
  // Get current section
  const currentSection = currentQuestion?.section || 1;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted/30 py-12">
      <div className="quiz-container">
        {!quizStarted && !quizCompleted && (
          <>
            <QuizIntro onStart={startQuiz} />
            <div className="mt-4 text-center">
              <button 
                onClick={toggleQuizLength} 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Switch to {useFullQuiz ? "Short" : "Comprehensive"} Assessment ({useFullQuiz ? "8" : "18"} questions)
              </button>
            </div>
          </>
        )}

        {quizStarted && !quizCompleted && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="quiz-card"
          >
            <div className="quiz-header">
              <QuizProgress 
                currentQuestion={currentQuestionIndex + 1} 
                totalQuestions={quizQuestions.length}
                currentSection={currentSection}
              />
            </div>

            <div className="quiz-body">
              <QuizQuestion 
                question={currentQuestion}
                selectedOption={currentAnswer}
                onSelectOption={handleOptionSelect}
              />
            </div>

            <div className="quiz-footer">
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
            scores={scores}
            primaryType={primaryType}
            onRestart={restartQuiz}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
