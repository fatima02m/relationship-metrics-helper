
import React from "react";

interface QuizLengthToggleProps {
  useFullQuiz: boolean;
  toggleQuizLength: () => void;
}

const QuizLengthToggle: React.FC<QuizLengthToggleProps> = ({ 
  useFullQuiz, 
  toggleQuizLength 
}) => {
  return (
    <div className="mt-4 text-center">
      <button 
        onClick={toggleQuizLength} 
        className="text-sm text-muted-foreground hover:text-clean-green transition-colors"
      >
        Switch to {useFullQuiz ? "Short" : "Comprehensive"} Assessment
      </button>
    </div>
  );
};

export default QuizLengthToggle;
