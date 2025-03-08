
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Option as OptionType } from "@/data/quizData";
import { CheckCircle } from "lucide-react";

interface QuizOptionProps {
  option: OptionType;
  isSelected: boolean;
  onSelect: (option: OptionType) => void;
  index: number;
}

const QuizOption: React.FC<QuizOptionProps> = ({ 
  option, 
  isSelected, 
  onSelect,
  index 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        delay: 0.1 + (index * 0.1), 
        ease: "easeOut" 
      }}
    >
      <div
        className={cn(
          "option-card flex justify-between items-center",
          isSelected && "selected"
        )}
        onClick={() => onSelect(option)}
      >
        <div className="flex-1">
          <p className="text-md">{option.text}</p>
        </div>
        <div className={cn(
          "w-5 h-5 rounded-full border-2 border-muted transition-all duration-300 ml-4",
          isSelected && "border-primary bg-primary/10"
        )}>
          {isSelected && (
            <CheckCircle className="w-4 h-4 text-primary" />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default QuizOption;
