
export interface Option {
  id: string;
  text: string;
  scores: {
    caringHost: number;
    financialBurdens: number;
    emotionalTurmoil: number;
  };
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
  section: number;
}

export interface Section {
  id: number;
  title: string;
}

export const sections: Section[] = [
  { id: 1, title: "Understanding Emotion" },
  { id: 2, title: "Children & Family" },
  { id: 3, title: "Separation Plan" },
  { id: 4, title: "Finances and Resources" }
];

export const questions: Question[] = [
  {
    id: "q1",
    text: "How long have you been feeling dissatisfied in the relationship?",
    options: [
      {
        id: "q1_a",
        text: "Less than 6 months",
        scores: { caringHost: 2, financialBurdens: 1, emotionalTurmoil: 1 }
      },
      {
        id: "q1_b",
        text: "6 months to 1 year",
        scores: { caringHost: 3, financialBurdens: 2, emotionalTurmoil: 2 }
      },
      {
        id: "q1_c",
        text: "1 to 2 years",
        scores: { caringHost: 4, financialBurdens: 3, emotionalTurmoil: 3 }
      },
      {
        id: "q1_d",
        text: "More than 2 years",
        scores: { caringHost: 5, financialBurdens: 4, emotionalTurmoil: 4 }
      }
    ],
    section: 1
  },
  {
    id: "q2",
    text: "How often do you and your spouse argue?",
    options: [
      {
        id: "q2_a",
        text: "Rarely",
        scores: { caringHost: 1, financialBurdens: 1, emotionalTurmoil: 1 }
      },
      {
        id: "q2_b",
        text: "Occasionally",
        scores: { caringHost: 2, financialBurdens: 2, emotionalTurmoil: 2 }
      },
      {
        id: "q2_c",
        text: "Frequently",
        scores: { caringHost: 3, financialBurdens: 3, emotionalTurmoil: 3 }
      },
      {
        id: "q2_d",
        text: "Constantly",
        scores: { caringHost: 4, financialBurdens: 4, emotionalTurmoil: 4 }
      }
    ],
    section: 1
  },
  {
    id: "q3",
    text: "Do you feel like you are being heard and respected by your spouse?",
    options: [
      {
        id: "q3_a",
        text: "Always",
        scores: { caringHost: 1, financialBurdens: 1, emotionalTurmoil: 1 }
      },
      {
        id: "q3_b",
        text: "Most of the time",
        scores: { caringHost: 2, financialBurdens: 2, emotionalTurmoil: 2 }
      },
      {
        id: "q3_c",
        text: "Sometimes",
        scores: { caringHost: 3, financialBurdens: 3, emotionalTurmoil: 3 }
      },
      {
        id: "q3_d",
        text: "Rarely",
        scores: { caringHost: 4, financialBurdens: 4, emotionalTurmoil: 4 }
      }
    ],
    section: 1
  },
  {
    id: "q4",
    text: "Have you considered the effect of a divorce on the children?",
    options: [
      {
        id: "q4_a",
        text: "Yes, and have a plan",
        scores: { caringHost: 1, financialBurdens: 2, emotionalTurmoil: 3 }
      },
      {
        id: "q4_b",
        text: "Yes, but need more guidance",
        scores: { caringHost: 2, financialBurdens: 3, emotionalTurmoil: 4 }
      },
      {
        id: "q4_c",
        text: "Somewhat, but not in detail",
        scores: { caringHost: 3, financialBurdens: 4, emotionalTurmoil: 5 }
      },
      {
        id: "q4_d",
        text: "No, not yet",
        scores: { caringHost: 4, financialBurdens: 5, emotionalTurmoil: 6 }
      }
    ],
    section: 2
  },
  {
    id: "q5",
    text: "Have you considered the best option for the children after separation?",
    options: [
      {
        id: "q5_a",
        text: "Yes, fully considered",
        scores: { caringHost: 1, financialBurdens: 2, emotionalTurmoil: 3 }
      },
      {
        id: "q5_b",
        text: "Somewhat considered",
        scores: { caringHost: 2, financialBurdens: 3, emotionalTurmoil: 4 }
      },
      {
        id: "q5_c",
        text: "Barely considered",
        scores: { caringHost: 3, financialBurdens: 4, emotionalTurmoil: 5 }
      },
      {
        id: "q5_d",
        text: "Not considered at all",
        scores: { caringHost: 4, financialBurdens: 5, emotionalTurmoil: 6 }
      }
    ],
    section: 2
  },
  {
    id: "q6",
    text: "Does your partner involve your kids in adult issues, manipulate them, or make negative comments about you to them?",
    options: [
      {
        id: "q6_a",
        text: "Never",
        scores: { caringHost: 1, financialBurdens: 1, emotionalTurmoil: 1 }
      },
      {
        id: "q6_b",
        text: "Rarely",
        scores: { caringHost: 2, financialBurdens: 2, emotionalTurmoil: 2 }
      },
      {
        id: "q6_c",
        text: "Sometimes",
        scores: { caringHost: 3, financialBurdens: 3, emotionalTurmoil: 3 }
      },
      {
        id: "q6_d",
        text: "Often",
        scores: { caringHost: 4, financialBurdens: 4, emotionalTurmoil: 4 }
      }
    ],
    section: 2
  },
  {
    id: "q7",
    text: "How do you and your spouse handle parenting responsibilities?",
    options: [
      {
        id: "q7_a",
        text: "Equally shared",
        scores: { caringHost: 1, financialBurdens: 1, emotionalTurmoil: 1 }
      },
      {
        id: "q7_b",
        text: "Mostly me",
        scores: { caringHost: 2, financialBurdens: 2, emotionalTurmoil: 3 }
      },
      {
        id: "q7_c",
        text: "Mostly my spouse",
        scores: { caringHost: 2, financialBurdens: 2, emotionalTurmoil: 3 }
      },
      {
        id: "q7_d",
        text: "We both struggle with it",
        scores: { caringHost: 3, financialBurdens: 3, emotionalTurmoil: 4 }
      }
    ],
    section: 2
  },
  {
    id: "q8",
    text: "Are you concerned about your children's emotional well-being during the divorce process?",
    options: [
      {
        id: "q8_a",
        text: "Very concerned",
        scores: { caringHost: 1, financialBurdens: 1, emotionalTurmoil: 1 }
      },
      {
        id: "q8_b",
        text: "Somewhat concerned",
        scores: { caringHost: 2, financialBurdens: 2, emotionalTurmoil: 2 }
      },
      {
        id: "q8_c",
        text: "Slightly concerned",
        scores: { caringHost: 3, financialBurdens: 3, emotionalTurmoil: 3 }
      },
      {
        id: "q8_d",
        text: "Not concerned",
        scores: { caringHost: 4, financialBurdens: 4, emotionalTurmoil: 4 }
      }
    ],
    section: 2
  },
  {
    id: "q9",
    text: "Do you have a support system (e.g., family, friends) to help you and your children during this time?",
    options: [
      {
        id: "q9_a",
        text: "Yes, a strong support system",
        scores: { caringHost: 1, financialBurdens: 2, emotionalTurmoil: 3 }
      },
      {
        id: "q9_b",
        text: "Yes, but not very strong",
        scores: { caringHost: 2, financialBurdens: 3, emotionalTurmoil: 4 }
      },
      {
        id: "q9_c",
        text: "Some support, but limited",
        scores: { caringHost: 3, financialBurdens: 4, emotionalTurmoil: 5 }
      },
      {
        id: "q9_d",
        text: "No, not at all",
        scores: { caringHost: 4, financialBurdens: 5, emotionalTurmoil: 6 }
      }
    ],
    section: 2
  },
  {
    id: "q10",
    text: "Have you discussed the possibility of divorce with your children?",
    options: [
      {
        id: "q10_a",
        text: "Yes, and they understand",
        scores: { caringHost: 1, financialBurdens: 2, emotionalTurmoil: 3 }
      },
      {
        id: "q10_b",
        text: "Yes, but they are confused",
        scores: { caringHost: 2, financialBurdens: 3, emotionalTurmoil: 4 }
      },
      {
        id: "q10_c",
        text: "No, but planning to",
        scores: { caringHost: 3, financialBurdens: 4, emotionalTurmoil: 5 }
      },
      {
        id: "q10_d",
        text: "No, and unsure how to",
        scores: { caringHost: 4, financialBurdens: 5, emotionalTurmoil: 6 }
      }
    ],
    section: 2
  },
  {
    id: "q11",
    text: "Do you feel like there is still a chance to work things out?",
    options: [
      {
        id: "q11_a",
        text: "Yes, definitely",
        scores: { caringHost: 1, financialBurdens: 2, emotionalTurmoil: 3 }
      },
      {
        id: "q11_b",
        text: "Maybe with effort",
        scores: { caringHost: 2, financialBurdens: 3, emotionalTurmoil: 4 }
      },
      {
        id: "q11_c",
        text: "Uncertain",
        scores: { caringHost: 3, financialBurdens: 4, emotionalTurmoil: 5 }
      },
      {
        id: "q11_d",
        text: "No, not really",
        scores: { caringHost: 4, financialBurdens: 5, emotionalTurmoil: 6 }
      }
    ],
    section: 3
  },
  {
    id: "q12",
    text: "Are you willing to put in the effort to reconcile your differences?",
    options: [
      {
        id: "q12_a",
        text: "Yes, fully committed",
        scores: { caringHost: 1, financialBurdens: 2, emotionalTurmoil: 3 }
      },
      {
        id: "q12_b",
        text: "Yes, but unsure how",
        scores: { caringHost: 2, financialBurdens: 3, emotionalTurmoil: 4 }
      },
      {
        id: "q12_c",
        text: "Somewhat willing",
        scores: { caringHost: 3, financialBurdens: 4, emotionalTurmoil: 5 }
      },
      {
        id: "q12_d",
        text: "Not willing",
        scores: { caringHost: 4, financialBurdens: 5, emotionalTurmoil: 6 }
      }
    ],
    section: 3
  },
  {
    id: "q13",
    text: "Have you discussed your decision with your spouse?",
    options: [
      {
        id: "q13_a",
        text: "Yes, we both agree",
        scores: { caringHost: 1, financialBurdens: 2, emotionalTurmoil: 3 }
      },
      {
        id: "q13_b",
        text: "Yes, but we disagree",
        scores: { caringHost: 2, financialBurdens: 3, emotionalTurmoil: 4 }
      },
      {
        id: "q13_c",
        text: "Not yet, planning to",
        scores: { caringHost: 3, financialBurdens: 4, emotionalTurmoil: 5 }
      },
      {
        id: "q13_d",
        text: "No, and unsure how to",
        scores: { caringHost: 4, financialBurdens: 5, emotionalTurmoil: 6 }
      }
    ],
    section: 3
  },
  {
    id: "q14",
    text: "Does your partner want a divorce as well, or does he want to stay in the relationship?",
    options: [
      {
        id: "q14_a",
        text: "Wants a divorce",
        scores: { caringHost: 1, financialBurdens: 2, emotionalTurmoil: 3 }
      },
      {
        id: "q14_b",
        text: "Unsure, haven't discussed",
        scores: { caringHost: 2, financialBurdens: 3, emotionalTurmoil: 4 }
      },
      {
        id: "q14_c",
        text: "Wants to stay",
        scores: { caringHost: 3, financialBurdens: 4, emotionalTurmoil: 5 }
      },
      {
        id: "q14_d",
        text: "Completely opposed",
        scores: { caringHost: 4, financialBurdens: 5, emotionalTurmoil: 6 }
      }
    ],
    section: 3
  },
  {
    id: "q15",
    text: "Can you afford to go through with a divorce?",
    options: [
      {
        id: "q15_a",
        text: "Yes, I am financially prepared",
        scores: { caringHost: 1, financialBurdens: 4, emotionalTurmoil: 2 }
      },
      {
        id: "q15_b",
        text: "I think so, but unsure",
        scores: { caringHost: 2, financialBurdens: 3, emotionalTurmoil: 3 }
      },
      {
        id: "q15_c",
        text: "Not really, need more planning",
        scores: { caringHost: 3, financialBurdens: 2, emotionalTurmoil: 4 }
      },
      {
        id: "q15_d",
        text: "No, I cannot afford it",
        scores: { caringHost: 4, financialBurdens: 1, emotionalTurmoil: 5 }
      }
    ],
    section: 4
  },
  {
    id: "q16",
    text: "Have you considered the long-term implications of a divorce on your financial security?",
    options: [
      {
        id: "q16_a",
        text: "Yes, and have a plan",
        scores: { caringHost: 1, financialBurdens: 4, emotionalTurmoil: 2 }
      },
      {
        id: "q16_b",
        text: "Yes, but need more planning",
        scores: { caringHost: 2, financialBurdens: 3, emotionalTurmoil: 3 }
      },
      {
        id: "q16_c",
        text: "Somewhat, but not in detail",
        scores: { caringHost: 3, financialBurdens: 2, emotionalTurmoil: 4 }
      },
      {
        id: "q16_d",
        text: "No, not yet",
        scores: { caringHost: 4, financialBurdens: 1, emotionalTurmoil: 5 }
      }
    ],
    section: 4
  },
  {
    id: "q17",
    text: "Have you considered the living arrangement options following separation?",
    options: [
      {
        id: "q17_a",
        text: "Yes, fully planned",
        scores: { caringHost: 1, financialBurdens: 4, emotionalTurmoil: 2 }
      },
      {
        id: "q17_b",
        text: "Yes, but need more options",
        scores: { caringHost: 2, financialBurdens: 3, emotionalTurmoil: 3 }
      },
      {
        id: "q17_c",
        text: "Somewhat considered",
        scores: { caringHost: 3, financialBurdens: 2, emotionalTurmoil: 4 }
      },
      {
        id: "q17_d",
        text: "Not considered at all",
        scores: { caringHost: 4, financialBurdens: 1, emotionalTurmoil: 5 }
      }
    ],
    section: 4
  },
  {
    id: "q18",
    text: "Have you considered what documents and information you need to gather before initiating a divorce?",
    options: [
      {
        id: "q18_a",
        text: "Yes, fully prepared",
        scores: { caringHost: 1, financialBurdens: 4, emotionalTurmoil: 2 }
      },
      {
        id: "q18_b",
        text: "Somewhat prepared",
        scores: { caringHost: 2, financialBurdens: 3, emotionalTurmoil: 3 }
      },
      {
        id: "q18_c",
        text: "Barely started",
        scores: { caringHost: 3, financialBurdens: 2, emotionalTurmoil: 4 }
      },
      {
        id: "q18_d",
        text: "Not started at all",
        scores: { caringHost: 4, financialBurdens: 1, emotionalTurmoil: 5 }
      }
    ],
    section: 4
  }
];

export interface ProfileType {
  id: string;
  title: string;
  description: string;
  color: string;
}

export const profileTypes: Record<string, ProfileType> = {
  caringHost: {
    id: "caringHost",
    title: "Caring Host",
    description: "You prioritize the emotional well-being of your family and children. You're willing to work on improving your relationship and taking thoughtful steps before making major decisions. Consider seeking family counseling or mediation to explore possibilities for reconciliation or a smooth transition.",
    color: "rgb(34, 139, 230)" // Blue
  },
  financialBurdens: {
    id: "financialBurdens",
    title: "Financial Planner",
    description: "Your primary concern is ensuring financial stability throughout this transition. You're practical and methodical, focusing on the material aspects of separation. Consider consulting with a financial advisor who specializes in divorce to help plan for long-term security and equitable asset division.",
    color: "rgb(10, 174, 142)" // Green  
  },
  emotionalTurmoil: {
    id: "emotionalTurmoil",
    title: "Emotional Processor",
    description: "You're experiencing significant emotional distress and may benefit from additional support during this challenging time. Your feelings are valid and deserve attention. Consider working with a therapist or counselor who specializes in relationship transitions to help process these emotions and develop healthy coping strategies.",
    color: "rgb(245, 101, 101)" // Red
  }
};

export const getProfileType = (scores: Record<string, number>): string => {
  const maxScore = Math.max(scores.caringHost, scores.financialBurdens, scores.emotionalTurmoil);
  
  if (scores.caringHost === maxScore) return "caringHost";
  if (scores.financialBurdens === maxScore) return "financialBurdens";
  return "emotionalTurmoil";
};

export const getShortQuiz = (): Question[] => {
  return [
    questions.find(q => q.id === "q1")!,
    questions.find(q => q.id === "q3")!,
    questions.find(q => q.id === "q4")!,
    questions.find(q => q.id === "q7")!,
    questions.find(q => q.id === "q11")!,
    questions.find(q => q.id === "q13")!,
    questions.find(q => q.id === "q15")!,
    questions.find(q => q.id === "q17")!
  ];
};
