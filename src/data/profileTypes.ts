
import { ProfileType } from './types/quizTypes';
import { Option } from './types/quizTypes';

export const profileTypes: Record<string, ProfileType> = {
  justThinking: {
    id: "justThinking",
    title: "Contemplation Stage",
    description: "You're in the early stages of considering whether divorce is right for you. This is a time for gathering information, understanding your options, and carefully weighing the potential impacts of your decision.",
    color: "rgb(34, 139, 230)" // Blue
  },
  midProcess: {
    id: "midProcess",
    title: "Transition Navigator",
    description: "You're in the midst of the divorce process and navigating the legal, emotional, and practical challenges that come with it. This is a time that requires resilience, organization, and support to move through effectively.",
    color: "rgb(245, 101, 101)" // Red
  },
  recentlyFinalized: {
    id: "recentlyFinalized",
    title: "New Chapter Builder",
    description: "You've recently completed the legal process and are now adjusting to your new reality. This transition period is about establishing new routines, finding emotional closure, and setting the foundation for your independent life.",
    color: "rgb(10, 174, 142)" // Green
  },
  rebuilding: {
    id: "rebuilding",
    title: "Life Rebuilder",
    description: "You're focused on rebuilding your life after divorce, whether that's through personal growth, financial stability, improved co-parenting, or new relationships. This stage is about creating a fulfilling future on your own terms.",
    color: "rgb(144, 97, 249)" // Purple
  }
};

// Function to determine the profile type based on Layer 1 response
export const getProfileType = (answers: Record<string, Option | Option[]>): string => {
  const layer1Answer = answers["layer1_q1"] as Option;
  
  if (!layer1Answer) return "justThinking"; // Default
  
  switch (layer1Answer.id) {
    case "just_thinking":
      return "justThinking";
    case "middle_process":
      return "midProcess";
    case "recently_finalized":
      return "recentlyFinalized";
    case "rebuilding":
      return "rebuilding";
    default:
      return "justThinking";
  }
};
