
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import QuizProgress from "@/components/QuizProgress";
import QuizQuestion from "@/components/QuizQuestion";
import { useQuiz } from "@/hooks/useQuiz";

interface QuizContainerProps {
  quiz: ReturnType<typeof useQuiz>;
}

const QuizContainer: React.FC<QuizContainerProps> = ({ quiz }) => {
  const { 
    currentQuestion,
    currentSection,
    currentQuestionIndex,
    quizQuestions,
    currentAnswer,
    handleOptionSelect,
    goToNextQuestion,
    goToPreviousQuestion
  } = quiz;

  if (!currentQuestion) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-card text-card-foreground p-8 rounded-md shadow-sm border"
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
          className="flex items-center border-clean-green/70 text-clean-brown"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>

        <Button
          onClick={goToNextQuestion}
          size="lg"
          className="flex items-center bg-clean-green text-clean-brown hover:bg-clean-green/90"
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
  );
};

export default QuizContainer;
