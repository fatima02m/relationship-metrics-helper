
import { Question } from '../types/quizTypes';

// Layer 2: Biggest concerns based on Layer 1 answer
export const layer2Questions: Question[] = [
  {
    id: "layer2_just_thinking",
    text: "What is making you hesitant about divorce?",
    options: [
      { id: "hesitant_right_choice", text: "I'm unsure if it's the right choice" },
      { id: "hesitant_financial", text: "I'm afraid of financial instability" },
      { id: "hesitant_emotional", text: "I'm worried about the emotional toll" },
      { id: "hesitant_kids", text: "I'm concerned about my kids" }
    ],
    condition: {
      questionId: "layer1_q1",
      optionId: "just_thinking"
    },
    section: 2
  },
  {
    id: "layer2_middle_process",
    text: "What is causing the most stress for you right now?",
    options: [
      { id: "stress_legal", text: "Legal paperwork & mediation" },
      { id: "stress_emotional", text: "Emotional distress & mental health" },
      { id: "stress_coparenting", text: "Co-parenting & child custody issues" },
      { id: "stress_financial", text: "Financial planning & asset division" }
    ],
    condition: {
      questionId: "layer1_q1",
      optionId: "middle_process"
    },
    section: 2
  },
  {
    id: "layer2_recently_finalized",
    text: "What is the biggest challenge you're facing now?",
    options: [
      { id: "challenge_financial", text: "Establishing financial independence" },
      { id: "challenge_emotional", text: "Finding emotional closure" },
      { id: "challenge_coparenting", text: "Co-parenting with my ex" },
      { id: "challenge_relationships", text: "Navigating new relationships" }
    ],
    condition: {
      questionId: "layer1_q1",
      optionId: "recently_finalized"
    },
    section: 2
  },
  {
    id: "layer2_rebuilding",
    text: "What is your main focus for rebuilding?",
    options: [
      { id: "rebuild_selfcare", text: "Self-care & emotional healing" },
      { id: "rebuild_financial", text: "Financial stability & independence" },
      { id: "rebuild_coparenting", text: "Strengthening my co-parenting dynamic" },
      { id: "rebuild_dating", text: "Re-entering the dating world" }
    ],
    condition: {
      questionId: "layer1_q1",
      optionId: "rebuilding"
    },
    section: 2
  }
];
