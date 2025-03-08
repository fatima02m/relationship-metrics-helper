
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Question, Option } from "@/data/quizData";
import QuizOption from "./QuizOption";

interface QuizQuestionProps {
  question: Question;
  selectedOption: Option | null;
  onSelectOption: (option: Option) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ 
  question, 
  selectedOption, 
  onSelectOption 
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.4 }}
      >
        <div className="mb-6">
          <motion.h2 
            className="text-xl font-medium mb-2"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {question.text}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="h-[1px] w-16 bg-primary/30 mb-6"
          />
        </div>

        <div className="option-grid">
          {question.options.map((option, index) => (
            <QuizOption
              key={option.id}
              option={option}
              isSelected={selectedOption?.id === option.id}
              onSelect={onSelectOption}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default QuizQuestion;
