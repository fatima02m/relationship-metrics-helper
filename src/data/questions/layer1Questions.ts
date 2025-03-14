
import { Question } from '../types/quizTypes';

// Layer 1: Where are you in your divorce journey?
export const layer1Questions: Question[] = [
  {
    id: "layer1_q1",
    text: "Where are you in your divorce journey?",
    options: [
      { id: "just_thinking", text: "Just thinking about it" },
      { id: "middle_process", text: "In the middle of the process" },
      { id: "recently_finalized", text: "Recently finalized and adjusting" },
      { id: "rebuilding", text: "Trying to rebuild and move forward" }
    ],
    section: 1
  }
];
