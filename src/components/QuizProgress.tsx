
import React from "react";
import { motion } from "framer-motion";
import { sections } from "@/data/sections";

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

  // Get section subtitle based on section ID
  const getSectionSubtitle = () => {
    switch (currentSection) {
      case 1:
        return "Where You Are";
      case 2:
        return "Your Concerns";
      case 3:
        return "Detailed Assessment";
      case 4:
        return "Emotional Scenarios";
      case 5:
        return "Growth Potential";
      case 6:
        return "Future Planning";
      case 7:
        return "Support & Resources";
      default:
        return "";
    }
  };

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <div className="text-sm font-medium">
          <span className="text-clean-green font-georgia">{sectionTitle}</span>
          {getSectionSubtitle() && (
            <span className="text-muted-foreground ml-2 font-georgia">
              • {getSectionSubtitle()}
            </span>
          )}
        </div>
        <div className="text-sm text-muted-foreground font-georgia">
          Question {currentQuestion} of {totalQuestions}
        </div>
      </div>
      
      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-clean-green rounded-full"
          initial={{ width: `${((currentQuestion - 1) / totalQuestions) * 100}%` }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default QuizProgress;
