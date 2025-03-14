
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Question, Option } from "@/data/quizData";
import QuizOption from "./QuizOption";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

interface QuizQuestionProps {
  question: Question;
  selectedOption: Option | Option[] | null;
  onSelectOption: (option: Option | Option[]) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ 
  question, 
  selectedOption, 
  onSelectOption 
}) => {
  // For single choice questions
  const handleSingleSelect = (option: Option) => {
    onSelectOption(option);
  };

  // For multiple choice questions
  const handleMultipleSelect = (option: Option) => {
    if (!selectedOption || !Array.isArray(selectedOption)) {
      onSelectOption([option]);
      return;
    }
    
    const isSelected = selectedOption.some(opt => opt.id === option.id);
    let updatedOptions;
    
    if (isSelected) {
      // Remove the option if already selected
      updatedOptions = selectedOption.filter(opt => opt.id !== option.id);
    } else {
      // Add the option if not already selected
      updatedOptions = [...selectedOption, option];
    }
    
    onSelectOption(updatedOptions);
  };

  // For scale questions
  const handleScaleSelect = (value: number) => {
    const option = question.options.find(opt => Number(opt.value) === value);
    if (option) {
      onSelectOption(option);
    }
  };

  // Check if an option is selected in multiple choice
  const isOptionSelected = (option: Option) => {
    if (!selectedOption || !Array.isArray(selectedOption)) return false;
    return selectedOption.some(opt => opt.id === option.id);
  };

  // Check if an option is selected in single choice
  const isSingleOptionSelected = (option: Option) => {
    if (!selectedOption || Array.isArray(selectedOption)) return false;
    return selectedOption.id === option.id;
  };

  // Get current value for scale question
  const getCurrentScaleValue = () => {
    if (!selectedOption || Array.isArray(selectedOption)) return [1];
    return [Number(selectedOption.value) || 1];
  };

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

        {question.type === 'multiple' ? (
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + (index * 0.1), ease: "easeOut" }}
                className="flex items-center space-x-3 p-3 rounded-md border border-border hover:bg-accent/40 transition-colors cursor-pointer"
                onClick={() => handleMultipleSelect(option)}
              >
                <Checkbox 
                  id={option.id} 
                  checked={isOptionSelected(option)}
                  onCheckedChange={() => handleMultipleSelect(option)}
                />
                <label 
                  htmlFor={option.id} 
                  className="text-sm font-medium leading-none cursor-pointer flex-1"
                >
                  {option.text}
                </label>
              </motion.div>
            ))}
          </div>
        ) : question.type === 'scale' ? (
          <div className="space-y-6">
            <Slider
              defaultValue={[1]}
              value={getCurrentScaleValue()}
              min={1}
              max={5}
              step={1}
              onValueChange={(value) => handleScaleSelect(value[0])}
              className="my-6"
            />
            <div className="grid grid-cols-5 gap-1 text-xs text-muted-foreground">
              {question.options.map((option) => (
                <div key={option.id} className="text-center">
                  <div 
                    className={`h-2 w-2 mx-auto mb-1 rounded-full ${Number(option.value) === getCurrentScaleValue()[0] ? 'bg-primary' : 'bg-muted'}`}
                  />
                  {option.text}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="option-grid">
            {question.options.map((option, index) => (
              <QuizOption
                key={option.id}
                option={option}
                isSelected={isSingleOptionSelected(option)}
                onSelect={handleSingleSelect}
                index={index}
              />
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default QuizQuestion;
