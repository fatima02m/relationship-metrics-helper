
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface QuizIntroProps {
  onStart: () => void;
}

const QuizIntro: React.FC<QuizIntroProps> = ({ onStart }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-card text-card-foreground p-8 rounded-md shadow-sm border"
    >
      <div className="mb-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex justify-center mb-5"
        >
          <div className="w-16 h-16 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="45" fill="#BFD34A" fillOpacity="0.2" />
              <g transform="translate(25, 20)">
                <rect x="0" y="0" width="50" height="60" rx="4" fill="#442D1F" />
                <rect x="10" y="10" width="30" height="4" rx="2" fill="#BFD34A" />
                <rect x="10" y="20" width="30" height="4" rx="2" fill="#BFD34A" />
                <rect x="10" y="30" width="30" height="4" rx="2" fill="#BFD34A" />
                <rect x="10" y="40" width="20" height="4" rx="2" fill="#BFD34A" />
              </g>
            </svg>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="inline-block px-3 py-1 mb-3 text-xs font-medium bg-clean-green/10 text-clean-green rounded-full">
            Personal Assessment
          </div>
        </motion.div>
        <motion.h1 
          className="text-3xl font-medium tracking-tight font-georgia"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Divorce Journey Assessment
        </motion.h1>
        <motion.p 
          className="mt-2 text-muted-foreground max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Gain insights into where you are in your divorce journey and receive personalized guidance.
        </motion.p>
      </div>

      <div className="mb-8 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h2 className="text-xl font-medium mb-4 font-georgia text-center">Before you begin</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start">
              <span className="mr-2 text-clean-green">•</span>
              <span>This assessment takes approximately 5-8 minutes to complete.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-clean-green">•</span>
              <span>Your answers will help identify where you are in your divorce journey.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-clean-green">•</span>
              <span>Answer each question honestly for the most accurate guidance.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-clean-green">•</span>
              <span>Your responses are private and will not be shared.</span>
            </li>
          </ul>
          
          <div className="mt-6 p-4 bg-muted/50 rounded-md border border-border">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Note:</span> This assessment is designed to provide general guidance and is not a substitute for professional advice from a therapist, divorce coach, or legal professional.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Button 
            onClick={onStart} 
            size="lg" 
            className="px-8 bg-clean-green text-clean-brown hover:bg-clean-green/90"
          >
            Start Assessment
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default QuizIntro;
