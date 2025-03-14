
import React from "react";
import { motion } from "framer-motion";
import { sections } from "@/data/quizData";

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  currentSection: number;
}

const QuizProgress: React.FC<QuizProgressProps> = ({ 
  currentQuestion, 
  totalQuestions,
  currentSection
}) => {
  const progress = (currentQuestion / totalQuestions) * 100;
  
  // Find current section title
  const section = sections.find(s => s.id === currentSection);
  const sectionTitle = section ? section.title : "";

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <div className="text-sm font-medium">
          <span className="text-primary">{sectionTitle}</span>
        </div>
        <div className="text-sm text-muted-foreground">
          Question {currentQuestion} of {totalQuestions}
        </div>
      </div>
      
      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: `${((currentQuestion - 1) / totalQuestions) * 100}%` }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default QuizProgress;
