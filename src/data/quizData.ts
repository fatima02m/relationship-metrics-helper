
export interface Option {
  id: string;
  text: string;
  value?: string | number;
  scores?: {
    caringHost?: number;
    financialBurdens?: number;
    emotionalTurmoil?: number;
  };
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
  type?: 'single' | 'multiple' | 'scale';
  section?: number;
  condition?: {
    questionId: string;
    optionId: string | string[];
  };
}

export interface Section {
  id: number;
  title: string;
}

export const sections: Section[] = [
  { id: 1, title: "Where You Are" },
  { id: 2, title: "Your Concerns" },
  { id: 3, title: "Detailed Assessment" },
  { id: 4, title: "Emotional Resonance" },
  { id: 5, title: "Growth Readiness" },
  { id: 6, title: "Future Goals" },
  { id: 7, title: "Support Preferences" }
];

// Layer 1: Where are you in your divorce journey?
const layer1Questions: Question[] = [
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

// Layer 2: Biggest concerns based on Layer 1 answer
const layer2Questions: Question[] = [
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

// Layer 3: Personalized Deep-Dive Questions
const layer3Questions: Question[] = [
  // Just Thinking About It Path
  {
    id: "layer3_right_choice",
    text: "What factors are making this decision difficult?",
    options: [
      { id: "difficult_feelings", text: "I still have feelings for my spouse" },
      { id: "difficult_beliefs", text: "Religious or cultural beliefs about marriage" },
      { id: "difficult_regret", text: "Fear of regret or making the wrong choice" },
      { id: "difficult_history", text: "Shared history and memories" }
    ],
    condition: {
      questionId: "layer2_just_thinking",
      optionId: "hesitant_right_choice"
    },
    section: 3
  },
  {
    id: "layer3_financial_instability",
    text: "How confident are you about managing money alone?",
    type: "scale",
    options: [
      { id: "financial_confidence_1", text: "I feel completely lost", value: 1 },
      { id: "financial_confidence_2", text: "I'm worried but trying to figure it out", value: 2 },
      { id: "financial_confidence_3", text: "I know the basics, but need long-term planning", value: 3 },
      { id: "financial_confidence_4", text: "I'm confident but need strategy", value: 4 },
      { id: "financial_confidence_5", text: "I feel financially secure", value: 5 }
    ],
    condition: {
      questionId: "layer2_just_thinking",
      optionId: "hesitant_financial"
    },
    section: 3
  },
  {
    id: "layer3_emotional_toll",
    text: "What emotional aspect worries you most?",
    options: [
      { id: "emotional_grief", text: "Personal grief and loss" },
      { id: "emotional_reactions", text: "Handling others' reactions and judgment" },
      { id: "emotional_conflict", text: "The stress of conflict during separation" },
      { id: "emotional_alone", text: "Fear of being alone" }
    ],
    condition: {
      questionId: "layer2_just_thinking",
      optionId: "hesitant_emotional"
    },
    section: 3
  },
  {
    id: "layer3_concerned_kids",
    text: "What is your biggest concern regarding your children?",
    options: [
      { id: "kids_telling", text: "How to tell them about the divorce" },
      { id: "kids_adjustment", text: "Their emotional adjustment" },
      { id: "kids_coparenting", text: "Creating a stable co-parenting plan" },
      { id: "kids_financial", text: "Financial support for their needs" }
    ],
    condition: {
      questionId: "layer2_just_thinking",
      optionId: "hesitant_kids"
    },
    section: 3
  },
  
  // In the Middle of the Process Path
  {
    id: "layer3_legal_paperwork",
    text: "What legal aspect is most challenging?",
    options: [
      { id: "legal_understanding", text: "Understanding the process and terminology" },
      { id: "legal_attorney", text: "Finding the right attorney" },
      { id: "legal_mediation", text: "Mediation and negotiation" },
      { id: "legal_court", text: "Court appearances and documentation" }
    ],
    condition: {
      questionId: "layer2_middle_process",
      optionId: "stress_legal"
    },
    section: 3
  },
  {
    id: "layer3_emotional_distress",
    text: "How are you currently managing emotional stress?",
    options: [
      { id: "stress_therapy", text: "Professional therapy or counseling" },
      { id: "stress_support", text: "Support groups or community resources" },
      { id: "stress_selfcare", text: "Self-care practices and mindfulness" },
      { id: "stress_struggling", text: "I'm struggling to cope effectively" }
    ],
    condition: {
      questionId: "layer2_middle_process",
      optionId: "stress_emotional"
    },
    section: 3
  },
  {
    id: "layer3_coparenting_issues",
    text: "What is your biggest co-parenting challenge during this process?",
    options: [
      { id: "coparent_custody", text: "Creating a fair custody schedule" },
      { id: "coparent_communication", text: "Communication with my ex about the children" },
      { id: "coparent_adjustment", text: "Helping children adjust to new arrangements" },
      { id: "coparent_disagreements", text: "Disagreements about parenting decisions" }
    ],
    condition: {
      questionId: "layer2_middle_process",
      optionId: "stress_coparenting"
    },
    section: 3
  },
  {
    id: "layer3_financial_planning",
    text: "What financial aspect is most concerning?",
    options: [
      { id: "financial_division", text: "Fair division of assets and property" },
      { id: "financial_longterm", text: "Understanding long-term financial implications" },
      { id: "financial_support", text: "Securing appropriate spousal or child support" },
      { id: "financial_debt", text: "Managing debt and credit issues" }
    ],
    condition: {
      questionId: "layer2_middle_process",
      optionId: "stress_financial"
    },
    section: 3
  },
  
  // Recently Finalized & Adjusting Path
  {
    id: "layer3_financial_independence",
    text: "What is your most pressing financial need?",
    options: [
      { id: "financial_budget", text: "Creating a sustainable budget" },
      { id: "financial_credit", text: "Building or rebuilding credit" },
      { id: "financial_planning", text: "Long-term financial planning (retirement, investments)" },
      { id: "financial_income", text: "Finding better income opportunities" }
    ],
    condition: {
      questionId: "layer2_recently_finalized",
      optionId: "challenge_financial"
    },
    section: 3
  },
  {
    id: "layer3_emotional_closure",
    text: "How do you currently handle emotions related to your divorce?",
    type: "multiple",
    options: [
      { id: "emotion_therapy", text: "Therapy or counseling" },
      { id: "emotion_meditation", text: "Meditation or mindfulness" },
      { id: "emotion_talking", text: "Talking to friends/family" },
      { id: "emotion_avoiding", text: "Avoiding thinking about it" },
      { id: "emotion_overwhelmed", text: "Overwhelmed, unsure how to cope" }
    ],
    condition: {
      questionId: "layer2_recently_finalized",
      optionId: "challenge_emotional"
    },
    section: 3
  },
  {
    id: "layer3_coparenting_ex",
    text: "What is your biggest co-parenting frustration?",
    options: [
      { id: "coparent_difficult", text: "My ex is difficult & uncooperative" },
      { id: "coparent_child", text: "My child is struggling emotionally" },
      { id: "coparent_argue", text: "We argue about schedules & logistics" },
      { id: "coparent_better", text: "I want to co-parent better but need strategies" }
    ],
    condition: {
      questionId: "layer2_recently_finalized",
      optionId: "challenge_coparenting"
    },
    section: 3
  },
  {
    id: "layer3_new_relationships",
    text: "What aspect of new relationships concerns you most?",
    options: [
      { id: "relationship_ready", text: "Knowing when I'm ready to date" },
      { id: "relationship_meet", text: "How to meet potential partners" },
      { id: "relationship_introduce", text: "Introducing new partners to my children" },
      { id: "relationship_trust", text: "Building trust after divorce" }
    ],
    condition: {
      questionId: "layer2_recently_finalized",
      optionId: "challenge_relationships"
    },
    section: 3
  },
  
  // Trying to Rebuild Life Path
  {
    id: "layer3_selfcare",
    text: "What area of self-care do you most want to improve?",
    options: [
      { id: "selfcare_physical", text: "Physical health and wellness" },
      { id: "selfcare_emotional", text: "Emotional resilience and mental health" },
      { id: "selfcare_identity", text: "Reclaiming personal identity" },
      { id: "selfcare_purpose", text: "Finding purpose and meaning" }
    ],
    condition: {
      questionId: "layer2_rebuilding",
      optionId: "rebuild_selfcare"
    },
    section: 3
  },
  {
    id: "layer3_financial_stability",
    text: "What is your primary financial goal right now?",
    options: [
      { id: "financial_debt", text: "Getting out of divorce-related debt" },
      { id: "financial_income", text: "Creating stable income and savings" },
      { id: "financial_home", text: "Buying or maintaining my own home" },
      { id: "financial_security", text: "Long-term financial security" }
    ],
    condition: {
      questionId: "layer2_rebuilding",
      optionId: "rebuild_financial"
    },
    section: 3
  },
  {
    id: "layer3_coparenting_strengthen",
    text: "What would most improve your co-parenting relationship?",
    options: [
      { id: "coparent_communication", text: "Better communication strategies" },
      { id: "coparent_boundaries", text: "Clearer boundaries with my ex" },
      { id: "coparent_routines", text: "More consistent routines for the children" },
      { id: "coparent_disagreements", text: "Tools for resolving disagreements" }
    ],
    condition: {
      questionId: "layer2_rebuilding",
      optionId: "rebuild_coparenting"
    },
    section: 3
  },
  {
    id: "layer3_dating",
    text: "How do you feel about dating post-divorce?",
    options: [
      { id: "dating_notready", text: "I don't think I'm ready yet" },
      { id: "dating_nervous", text: "I'm interested but nervous" },
      { id: "dating_guidance", text: "I've started dating but need guidance" },
      { id: "dating_longterm", text: "I'm actively dating & want long-term relationship strategies" }
    ],
    condition: {
      questionId: "layer2_rebuilding",
      optionId: "rebuild_dating"
    },
    section: 3
  }
];

// Layer 4-6: More questions following the same pattern
// For brevity, I'm adding only a subset of these questions
const layer4Questions: Question[] = [
  // Just Thinking Path - Decision Uncertainty
  {
    id: "layer4_right_choice",
    text: "\"You lie awake at night weighing the pros and cons, wondering if you're overreacting or if your marriage truly cannot be saved.\" How much does this scenario resonate with you?",
    type: "scale",
    options: [
      { id: "resonance_1", text: "Does not resonate at all", value: 1 },
      { id: "resonance_2", text: "Resonates slightly", value: 2 },
      { id: "resonance_3", text: "Resonates somewhat", value: 3 },
      { id: "resonance_4", text: "Resonates strongly", value: 4 },
      { id: "resonance_5", text: "Resonates very strongly", value: 5 }
    ],
    condition: {
      questionId: "layer2_just_thinking",
      optionId: "hesitant_right_choice"
    },
    section: 4
  },
  // Middle Process - Legal Complexity
  {
    id: "layer4_legal_complexity",
    text: "\"The legal terminology feels overwhelming, and you're unsure if you're making the right decisions that will affect your future.\" How much does this scenario resonate with you?",
    type: "scale",
    options: [
      { id: "resonance_1", text: "Does not resonate at all", value: 1 },
      { id: "resonance_2", text: "Resonates slightly", value: 2 },
      { id: "resonance_3", text: "Resonates somewhat", value: 3 },
      { id: "resonance_4", text: "Resonates strongly", value: 4 },
      { id: "resonance_5", text: "Resonates very strongly", value: 5 }
    ],
    condition: {
      questionId: "layer2_middle_process",
      optionId: "stress_legal"
    },
    section: 4
  }
];

// Layers 7-10
const finalQuestions: Question[] = [
  {
    id: "layer7_resource_preferences",
    text: "How do you prefer to receive support and guidance?",
    type: "multiple",
    options: [
      { id: "resource_coaching", text: "One-on-one professional coaching or therapy" },
      { id: "resource_online", text: "Online courses and self-guided resources" },
      { id: "resource_books", text: "Books and reading materials" },
      { id: "resource_groups", text: "Support groups with others in similar situations" },
      { id: "resource_video", text: "Video content and webinars" },
      { id: "resource_audio", text: "Podcasts and audio learning" },
      { id: "resource_programs", text: "Structured programs with clear action steps" }
    ],
    section: 7
  },
  {
    id: "layer8_support_system",
    text: "Who makes up your current support system?",
    type: "multiple",
    options: [
      { id: "support_friends", text: "Close friends who understand my situation" },
      { id: "support_family", text: "Family members who provide emotional support" },
      { id: "support_therapist", text: "Professional therapist or counselor" },
      { id: "support_coach", text: "Divorce coach or mediator" },
      { id: "support_group", text: "Support group (online or in-person)" },
      { id: "support_religious", text: "Religious or community organization" },
      { id: "support_coworkers", text: "Co-workers or professional network" },
      { id: "support_none", text: "I don't have a strong support system yet" }
    ],
    section: 7
  },
  {
    id: "layer9_immediate_needs",
    text: "What would be most helpful to you right now?",
    options: [
      { id: "need_information", text: "Clear information about my options and next steps" },
      { id: "need_emotions", text: "Tools to manage difficult emotions" },
      { id: "need_communication", text: "Strategies for effective communication with my ex" },
      { id: "need_financial", text: "Financial planning guidance" },
      { id: "need_children", text: "Resources for helping my children through this transition" },
      { id: "need_connection", text: "Connection with others who understand my experience" },
      { id: "need_selfcare", text: "Self-care strategies and personal rebuilding tools" },
      { id: "need_legal", text: "Legal guidance and process clarification" }
    ],
    section: 7
  },
  {
    id: "layer10_reflection",
    text: "As you look ahead, which statement best reflects your perspective?",
    options: [
      { id: "reflection_oneDayAtATime", text: "I need to take things one day at a time right now." },
      { id: "reflection_specificPlan", text: "I'm ready to create a specific plan for moving forward." },
      { id: "reflection_healing", text: "I'm focused on healing before making any big decisions." },
      { id: "reflection_newLife", text: "I want to build a completely new life and future." },
      { id: "reflection_children", text: "I'm determined to create a healthy situation for my children." },
      { id: "reflection_avoidMistakes", text: "I'm seeking wisdom to avoid repeating past mistakes." },
      { id: "reflection_embrace", text: "I'm ready to embrace new opportunities despite challenges." },
      { id: "reflection_resolveIssues", text: "I need to resolve specific issues before I can move forward." }
    ],
    section: 7
  }
];

// Combine all questions
export const questions: Question[] = [
  ...layer1Questions,
  ...layer2Questions,
  ...layer3Questions,
  ...layer4Questions,
  ...finalQuestions
];

// Define the short quiz (simplified version)
export const getShortQuiz = (): Question[] => {
  return [
    questions.find(q => q.id === "layer1_q1")!,
    ...layer2Questions,
    ...finalQuestions
  ];
};

export interface ProfileType {
  id: string;
  title: string;
  description: string;
  color: string;
}

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

// Updated function to determine the profile type based on Layer 1 response
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
