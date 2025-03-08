
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { profileTypes, ProfileType } from "@/data/quizData";

interface QuizResultsProps {
  scores: Record<string, number>;
  primaryType: string;
  onRestart: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({ 
  scores, 
  primaryType,
  onRestart
}) => {
  // Calculate total score for percentage calculation
  const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
  
  // Sort types by score (highest first)
  const sortedTypes = Object.keys(scores).sort(
    (a, b) => scores[b] - scores[a]
  );

  // Log the results and primary type
  useEffect(() => {
    console.log("Assessment Results:", scores);
    console.log("Primary Type:", primaryType);
  }, [scores, primaryType]);

  // Animation variants for each result bar
  const barVariants = {
    hidden: { width: 0 },
    visible: (percentage: number) => ({
      width: `${percentage}%`,
      transition: { 
        duration: 1.5,
        delay: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="quiz-card"
    >
      <div className="quiz-header">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="inline-block px-3 py-1 mb-3 text-xs font-medium bg-primary/10 text-primary rounded-full">
            Assessment Complete
          </div>
        </motion.div>
        <motion.h1 
          className="text-3xl font-medium tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Your Relationship Assessment Results
        </motion.h1>
        <motion.p 
          className="mt-2 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Based on your responses, we've identified your primary relationship profile.
        </motion.p>
      </div>

      <div className="quiz-body">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {/* Primary profile section */}
          <div className="mb-8">
            <h2 className="text-xl font-medium mb-4">Your Primary Profile</h2>
            <div className="result-card border-primary/20 bg-primary/5">
              <h3 className="text-lg font-medium mb-2">{profileTypes[primaryType].title}</h3>
              <p className="text-muted-foreground mb-4">{profileTypes[primaryType].description}</p>
              
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2" style={{ 
                  backgroundColor: profileTypes[primaryType].color 
                }}></div>
                <div className="text-sm font-medium">
                  {Math.round((scores[primaryType] / totalScore) * 100)}% affinity
                </div>
              </div>
            </div>
          </div>

          {/* Profile breakdown section */}
          <div>
            <h2 className="text-xl font-medium mb-4">Profile Breakdown</h2>
            <div className="space-y-6">
              {sortedTypes.map((type, index) => {
                const profileType = profileTypes[type] as ProfileType;
                const percentage = Math.round((scores[type] / totalScore) * 100);
                
                return (
                  <motion.div 
                    key={type}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + (index * 0.1) }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div 
                          className="w-3 h-3 rounded-full mr-2"
                          style={{ backgroundColor: profileType.color }}
                        ></div>
                        <span className="font-medium">{profileType.title}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{percentage}%</span>
                    </div>
                    <div className="result-meter">
                      <motion.div 
                        className="result-value"
                        style={{ backgroundColor: profileType.color }}
                        initial="hidden"
                        animate="visible"
                        custom={percentage}
                        variants={barVariants}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-muted/50 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Next Steps:</span> Consider sharing these results with a relationship counselor or therapist who can provide personalized guidance based on your profile.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="quiz-footer">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <Button onClick={onRestart} variant="outline">
            Take Assessment Again
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default QuizResults;
