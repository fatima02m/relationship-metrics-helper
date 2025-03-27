
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { profileTypes } from "@/data/profileTypes";
import { ProfileType, Option } from "@/data/types/quizTypes";

interface QuizResultsProps {
  primaryType: string;
  path: string[];
  answers: Record<string, Option | Option[]>;
  onRestart: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({ 
  primaryType,
  path,
  answers,
  onRestart
}) => {
  const profileType = profileTypes[primaryType] as ProfileType;
  
  // Log the results and primary type
  useEffect(() => {
    console.log("Assessment Results:", answers);
    console.log("Primary Type:", primaryType);
    console.log("Path:", path);
  }, [answers, primaryType, path]);

  // Get main journey stage
  const getJourneyStage = () => {
    if (path.length === 0) return "Just Thinking About It";
    
    switch (path[0]) {
      case "just_thinking":
        return "Just Thinking About It";
      case "middle_process":
        return "In the Middle of the Process";
      case "recently_finalized":
        return "Recently Finalized and Adjusting";
      case "rebuilding":
        return "Trying to Rebuild and Move Forward";
      default:
        return "Just Thinking About It";
    }
  };

  // Get primary concern based on the second path element
  const getPrimaryConcern = () => {
    if (path.length < 2) return null;
    
    const concernMap: Record<string, string> = {
      // Just thinking concerns
      "hesitant_right_choice": "Uncertainty about whether divorce is the right choice",
      "hesitant_financial": "Concerns about financial stability",
      "hesitant_emotional": "Worries about the emotional impact",
      "hesitant_kids": "Concerns about effects on your children",
      
      // Middle process concerns
      "stress_legal": "Legal paperwork and mediation",
      "stress_emotional": "Emotional distress and mental health",
      "stress_coparenting": "Co-parenting and child custody issues",
      "stress_financial": "Financial planning and asset division",
      
      // Recently finalized concerns
      "challenge_financial": "Establishing financial independence",
      "challenge_emotional": "Finding emotional closure",
      "challenge_coparenting": "Co-parenting with your ex",
      "challenge_relationships": "Navigating new relationships",
      
      // Rebuilding concerns
      "rebuild_selfcare": "Self-care and emotional healing",
      "rebuild_financial": "Financial stability and independence",
      "rebuild_coparenting": "Strengthening your co-parenting dynamic",
      "rebuild_dating": "Re-entering the dating world"
    };
    
    return concernMap[path[1]] || null;
  };

  // Get general insights based on journey stage
  const getJourneyInsights = () => {
    const insights: Record<string, string[]> = {
      "just_thinking": [
        "This is a time of important decision-making and reflection.",
        "It's normal to feel uncertain and to question whether divorce is right for you.",
        "Taking time to gather information and understand your options is valuable.",
        "Consider speaking with a therapist or counselor about your feelings."
      ],
      "middle_process": [
        "The divorce process can be emotionally and logistically challenging.",
        "Having professional support during this time is especially important.",
        "Remember to practice self-care and manage stress levels.",
        "Focus on what you can control and take things one step at a time."
      ],
      "recently_finalized": [
        "The post-divorce adjustment period requires patience with yourself.",
        "You may experience a mix of emotions from relief to grief.",
        "This is a time to establish new routines and boundaries.",
        "Focus on rebuilding your sense of self outside the marriage."
      ],
      "rebuilding": [
        "You're in a phase of growth and creating a new chapter.",
        "This is an opportunity to redefine what happiness means for you.",
        "Focus on your strengths and what you've learned through this process.",
        "Be patient with yourself as you navigate this new phase of life."
      ]
    };
    
    return path.length > 0 ? insights[path[0]] || [] : [];
  };

  // Get concern-specific insights
  const getConcernInsights = () => {
    if (path.length < 2) return [];
    
    const concernInsights: Record<string, string[]> = {
      // Just thinking concerns
      "hesitant_right_choice": [
        "Consider making a pros and cons list about your marriage and potential divorce.",
        "Reflect on whether your core needs and values are being met in the relationship.",
        "A trial separation might help provide clarity about your feelings.",
        "Marriage counseling can be valuable even if you're leaning toward divorce."
      ],
      "hesitant_financial": [
        "Gather information about your complete financial picture.",
        "Consider consulting with a financial advisor who specializes in divorce.",
        "Start building your financial literacy and independence.",
        "Create a post-divorce budget to understand what your life might look like."
      ],
      
      // Add more concern-specific insights for other paths
    };
    
    return concernInsights[path[1]] || [];
  };

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
          <div className="w-20 h-20 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="48" fill="#BFD34A" fillOpacity="0.2" />
              <circle cx="50" cy="50" r="38" fill="#FFFFFF" />
              <g transform="translate(32, 30)">
                <path d="M18,0 L36,40 L0,40 Z" fill="#442D1F" />
                <circle cx="18" cy="15" r="5" fill="#E26C65" />
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
            Assessment Complete
          </div>
        </motion.div>
        <motion.h1 
          className="text-3xl font-medium tracking-tight font-georgia"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Your Divorce Journey Assessment
        </motion.h1>
        <motion.p 
          className="mt-2 text-muted-foreground max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Based on your responses, we've identified where you are in your divorce journey.
        </motion.p>
      </div>

      <div className="space-y-8 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {/* Journey Stage Section */}
          <div className="mb-8">
            <h2 className="text-xl font-medium mb-4 font-georgia">Your Journey Stage</h2>
            <div className="p-6 rounded-md border border-clean-green/20 bg-clean-green/5">
              <h3 className="text-lg font-medium mb-2 font-georgia" style={{ color: "#442D1F" }}>
                {profileType?.title || "Your Divorce Journey"}
              </h3>
              <p className="text-muted-foreground mb-4">{profileType?.description || "Based on your answers, we've identified your current stage."}</p>
              
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2 bg-clean-green"></div>
                <div className="text-sm font-medium font-georgia">
                  {getJourneyStage()}
                </div>
              </div>
            </div>
          </div>

          {/* Primary Concern Section */}
          {getPrimaryConcern() && (
            <div className="mb-8">
              <h2 className="text-xl font-medium mb-4 font-georgia">Your Primary Concern</h2>
              <div className="p-6 rounded-md border border-border">
                <p className="font-medium font-georgia">{getPrimaryConcern()}</p>
              </div>
            </div>
          )}

          {/* Insights Section */}
          <div className="mb-8">
            <h2 className="text-xl font-medium mb-4 font-georgia">Insights For You</h2>
            <div className="space-y-4">
              {getJourneyInsights().map((insight, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + (i * 0.1) }}
                  className="p-4 rounded-md bg-muted/50"
                >
                  <p className="font-georgia">{insight}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Concern-Specific Recommendations */}
          {getConcernInsights().length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-medium mb-4 font-georgia">Recommendations</h2>
              <div className="space-y-4">
                {getConcernInsights().map((insight, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.2 + (i * 0.1) }}
                    className="p-4 rounded-md border border-border"
                  >
                    <p className="font-georgia">{insight}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          
          <div className="mt-8 p-4 bg-muted/50 rounded-md border border-border">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Next Steps:</span> Consider connecting with a divorce coach or therapist who can provide personalized guidance based on your specific situation.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mt-8 flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <Button 
            onClick={onRestart} 
            variant="outline" 
            className="border-clean-green text-clean-brown hover:bg-clean-green/10"
          >
            Take Assessment Again
          </Button>
        </motion.div>
      </div>
      
      <div className="mt-10 pt-6 border-t text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} The Clean Divorce. All rights reserved.
        </p>
      </div>
    </motion.div>
  );
};

export default QuizResults;
