
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

// Layer 4: Scenario-based emotional resonance questions
const layer4Questions: Question[] = [
  // Just Thinking About It Path - Decision Uncertainty
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
      questionId: "layer3_right_choice",
      optionId: ["difficult_feelings", "difficult_beliefs", "difficult_regret", "difficult_history"]
    },
    section: 4
  },
  // Financial Uncertainty Scenario
  {
    id: "layer4_financial_uncertainty",
    text: "\"You find yourself calculating expenses and wondering if you can maintain your lifestyle or support your family on a single income.\" How much does this scenario resonate with you?",
    type: "scale",
    options: [
      { id: "resonance_1", text: "Does not resonate at all", value: 1 },
      { id: "resonance_2", text: "Resonates slightly", value: 2 },
      { id: "resonance_3", text: "Resonates somewhat", value: 3 },
      { id: "resonance_4", text: "Resonates strongly", value: 4 },
      { id: "resonance_5", text: "Resonates very strongly", value: 5 }
    ],
    condition: {
      questionId: "layer3_financial_instability",
      optionId: ["financial_confidence_1", "financial_confidence_2", "financial_confidence_3", "financial_confidence_4", "financial_confidence_5"]
    },
    section: 4
  },
  // Emotional Anticipation Scenario
  {
    id: "layer4_emotional_anticipation",
    text: "\"You imagine the pain of separation and wonder if you're emotionally strong enough to handle the process.\" How much does this scenario resonate with you?",
    type: "scale",
    options: [
      { id: "resonance_1", text: "Does not resonate at all", value: 1 },
      { id: "resonance_2", text: "Resonates slightly", value: 2 },
      { id: "resonance_3", text: "Resonates somewhat", value: 3 },
      { id: "resonance_4", text: "Resonates strongly", value: 4 },
      { id: "resonance_5", text: "Resonates very strongly", value: 5 }
    ],
    condition: {
      questionId: "layer3_emotional_toll",
      optionId: ["emotional_grief", "emotional_reactions", "emotional_conflict", "emotional_alone"]
    },
    section: 4
  },
  // Child Impact Scenario
  {
    id: "layer4_child_impact",
    text: "\"You picture your children's reaction to the news and worry about how divorce might affect their development and happiness.\" How much does this scenario resonate with you?",
    type: "scale",
    options: [
      { id: "resonance_1", text: "Does not resonate at all", value: 1 },
      { id: "resonance_2", text: "Resonates slightly", value: 2 },
      { id: "resonance_3", text: "Resonates somewhat", value: 3 },
      { id: "resonance_4", text: "Resonates strongly", value: 4 },
      { id: "resonance_5", text: "Resonates very strongly", value: 5 }
    ],
    condition: {
      questionId: "layer3_concerned_kids",
      optionId: ["kids_telling", "kids_adjustment", "kids_coparenting", "kids_financial"]
    },
    section: 4
  },
  
  // Middle Process Path
  // Legal Complexity Scenario
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
      questionId: "layer3_legal_paperwork",
      optionId: ["legal_understanding", "legal_attorney", "legal_mediation", "legal_court"]
    },
    section: 4
  },
  // Emotional Rollercoaster Scenario
  {
    id: "layer4_emotional_rollercoaster",
    text: "\"You experience intense mood swings - anger, grief, relief, and anxiety - sometimes all in the same day.\" How much does this scenario resonate with you?",
    type: "scale",
    options: [
      { id: "resonance_1", text: "Does not resonate at all", value: 1 },
      { id: "resonance_2", text: "Resonates slightly", value: 2 },
      { id: "resonance_3", text: "Resonates somewhat", value: 3 },
      { id: "resonance_4", text: "Resonates strongly", value: 4 },
      { id: "resonance_5", text: "Resonates very strongly", value: 5 }
    ],
    condition: {
      questionId: "layer3_emotional_distress",
      optionId: ["stress_therapy", "stress_support", "stress_selfcare", "stress_struggling"]
    },
    section: 4
  },
  // Custody Negotiation Scenario
  {
    id: "layer4_custody_negotiation",
    text: "\"Each conversation about the children feels tense, and you worry about the impact of your negotiations on their well-being.\" How much does this scenario resonate with you?",
    type: "scale",
    options: [
      { id: "resonance_1", text: "Does not resonate at all", value: 1 },
      { id: "resonance_2", text: "Resonates slightly", value: 2 },
      { id: "resonance_3", text: "Resonates somewhat", value: 3 },
      { id: "resonance_4", text: "Resonates strongly", value: 4 },
      { id: "resonance_5", text: "Resonates very strongly", value: 5 }
    ],
    condition: {
      questionId: "layer3_coparenting_issues",
      optionId: ["coparent_custody", "coparent_communication", "coparent_adjustment", "coparent_disagreements"]
    },
    section: 4
  },
  // Asset Division Scenario
  {
    id: "layer4_asset_division",
    text: "\"Discussions about who gets what are becoming contentious, and you worry about securing your financial future.\" How much does this scenario resonate with you?",
    type: "scale",
    options: [
      { id: "resonance_1", text: "Does not resonate at all", value: 1 },
      { id: "resonance_2", text: "Resonates slightly", value: 2 },
      { id: "resonance_3", text: "Resonates somewhat", value: 3 },
      { id: "resonance_4", text: "Resonates strongly", value: 4 },
      { id: "resonance_5", text: "Resonates very strongly", value: 5 }
    ],
    condition: {
      questionId: "layer3_financial_planning",
      optionId: ["financial_division", "financial_longterm", "financial_support", "financial_debt"]
    },
    section: 4
  },
  
  // Recently Finalized Path
  // Financial Stress Scenario
  {
    id: "layer4_financial_stress",
    text: "\"You've always depended on a joint income, and now you're facing financial independence for the first time.\" How much does this scenario resonate with you?",
    type: "scale",
    options: [
      { id: "resonance_1", text: "Does not resonate at all", value: 1 },
      { id: "resonance_2", text: "Resonates slightly", value: 2 },
      { id: "resonance_3", text: "Resonates somewhat", value: 3 },
      { id: "resonance_4", text: "Resonates strongly", value: 4 },
      { id: "resonance_5", text: "Resonates very strongly", value: 5 }
    ],
    condition: {
      questionId: "layer3_financial_independence",
      optionId: ["financial_budget", "financial_credit", "financial_planning", "financial_income"]
    },
    section: 4
  },
  // Emotional Processing Scenario
  {
    id: "layer4_emotional_processing",
    text: "\"You often replay past conversations, wondering if you could have done something differently.\" How much does this scenario resonate with you?",
    type: "scale",
    options: [
      { id: "resonance_1", text: "Does not resonate at all", value: 1 },
      { id: "resonance_2", text: "Resonates slightly", value: 2 },
      { id: "resonance_3", text: "Resonates somewhat", value: 3 },
      { id: "resonance_4", text: "Resonates strongly", value: 4 },
      { id: "resonance_5", text: "Resonates very strongly", value: 5 }
    ],
    condition: {
      questionId: "layer3_emotional_closure",
      optionId: ["emotion_therapy", "emotion_meditation", "emotion_talking", "emotion_avoiding", "emotion_overwhelmed"]
    },
    section: 4
  },
  // Co-Parenting Conflict Scenario
  {
    id: "layer4_coparenting_conflict",
    text: "\"Your ex frequently ignores the custody schedule, makes last-minute changes, and dismisses your concerns.\" How much does this scenario resonate with you?",
    type: "scale",
    options: [
      { id: "resonance_1", text: "Does not resonate at all", value: 1 },
      { id: "resonance_2", text: "Resonates slightly", value: 2 },
      { id: "resonance_3", text: "Resonates somewhat", value: 3 },
      { id: "resonance_4", text: "Resonates strongly", value: 4 },
      { id: "resonance_5", text: "Resonates very strongly", value: 5 }
    ],
    condition: {
      questionId: "layer3_coparenting_ex",
      optionId: ["coparent_difficult", "coparent_child", "coparent_argue", "coparent_better"]
    },
    section: 4
  },
  // New Relationship Anxiety Scenario
  {
    id: "layer4_relationship_anxiety",
    text: "\"When someone shows interest in you, you feel a mix of excitement and fear, wondering if you're ready or if you'll repeat past mistakes.\" How much does this scenario resonate with you?",
    type: "scale",
    options: [
      { id: "resonance_1", text: "Does not resonate at all", value: 1 },
      { id: "resonance_2", text: "Resonates slightly", value: 2 },
      { id: "resonance_3", text: "Resonates somewhat", value: 3 },
      { id: "resonance_4", text: "Resonates strongly", value: 4 },
      { id: "resonance_5", text: "Resonates very strongly", value: 5 }
    ],
    condition: {
      questionId: "layer3_new_relationships",
      optionId: ["relationship_ready", "relationship_meet", "relationship_introduce", "relationship_trust"]
    },
    section: 4
  },
  
  // Rebuilding Path
  // Self-Discovery Scenario
  {
    id: "layer4_self_discovery",
    text: "\"After years of identifying as part of a couple, you're rediscovering who you are as an individual.\" How much does this scenario resonate with you?",
    type: "scale",
    options: [
      { id: "resonance_1", text: "Does not resonate at all", value: 1 },
      { id: "resonance_2", text: "Resonates slightly", value: 2 },
      { id: "resonance_3", text: "Resonates somewhat", value: 3 },
      { id: "resonance_4", text: "Resonates strongly", value: 4 },
      { id: "resonance_5", text: "Resonates very strongly", value: 5 }
    ],
    condition: {
      questionId: "layer3_selfcare",
      optionId: ["selfcare_physical", "selfcare_emotional", "selfcare_identity", "selfcare_purpose"]
    },
    section: 4
  },
  // Financial Rebuilding Scenario
  {
    id: "layer4_financial_rebuilding",
    text: "\"You're working to rebuild your financial foundation, which sometimes feels overwhelming but also empowering.\" How much does this scenario resonate with you?",
    type: "scale",
    options: [
      { id: "resonance_1", text: "Does not resonate at all", value: 1 },
      { id: "resonance_2", text: "Resonates slightly", value: 2 },
      { id: "resonance_3", text: "Resonates somewhat", value: 3 },
      { id: "resonance_4", text: "Resonates strongly", value: 4 },
      { id: "resonance_5", text: "Resonates very strongly", value: 5 }
    ],
    condition: {
      questionId: "layer3_financial_stability",
      optionId: ["financial_debt", "financial_income", "financial_home", "financial_security"]
    },
    section: 4
  },
  // Co-parenting Evolution Scenario
  {
    id: "layer4_coparenting_evolution",
    text: "\"You're working to establish a new, business-like relationship with your ex focused solely on the children's needs.\" How much does this scenario resonate with you?",
    type: "scale",
    options: [
      { id: "resonance_1", text: "Does not resonate at all", value: 1 },
      { id: "resonance_2", text: "Resonates slightly", value: 2 },
      { id: "resonance_3", text: "Resonates somewhat", value: 3 },
      { id: "resonance_4", text: "Resonates strongly", value: 4 },
      { id: "resonance_5", text: "Resonates very strongly", value: 5 }
    ],
    condition: {
      questionId: "layer3_coparenting_strengthen",
      optionId: ["coparent_communication", "coparent_boundaries", "coparent_routines", "coparent_disagreements"]
    },
    section: 4
  },
  // Social & Relationship Rebuilding Scenario
  {
    id: "layer4_social_rebuilding",
    text: "\"You feel disconnected from your social life after divorce and unsure where to start.\" How much does this scenario resonate with you?",
    type: "scale",
    options: [
      { id: "resonance_1", text: "Does not resonate at all", value: 1 },
      { id: "resonance_2", text: "Resonates slightly", value: 2 },
      { id: "resonance_3", text: "Resonates somewhat", value: 3 },
      { id: "resonance_4", text: "Resonates strongly", value: 4 },
      { id: "resonance_5", text: "Resonates very strongly", value: 5 }
    ],
    condition: {
      questionId: "layer3_dating",
      optionId: ["dating_notready", "dating_nervous", "dating_guidance", "dating_longterm"]
    },
    section: 4
  }
];

// Layer 5: Behavioral & Growth Readiness
const layer5Questions: Question[] = [
  // Just Thinking Path
  // Decision-Making Style
  {
    id: "layer5_decision_making",
    text: "How do you typically approach major life decisions?",
    options: [
      { id: "decision_analyze", text: "I gather all information and analyze it thoroughly" },
      { id: "decision_intuition", text: "I rely strongly on my intuition and feelings" },
      { id: "decision_advice", text: "I seek advice from trusted friends and family" },
      { id: "decision_delay", text: "I tend to delay decisions until absolutely necessary" }
    ],
    condition: {
      questionId: "layer4_right_choice",
      optionId: ["resonance_1", "resonance_2", "resonance_3", "resonance_4", "resonance_5"]
    },
    section: 5
  },
  // Financial Knowledge Assessment
  {
    id: "layer5_financial_knowledge",
    text: "How would you rate your understanding of your current financial situation?",
    options: [
      { id: "financial_complete", text: "I know exactly what we own, owe, and earn" },
      { id: "financial_basics", text: "I understand the basics but don't know all details" },
      { id: "financial_spouse", text: "My spouse handles most financial matters" },
      { id: "financial_uncertain", text: "I'm uncertain about our complete financial picture" }
    ],
    condition: {
      questionId: "layer4_financial_uncertainty",
      optionId: ["resonance_1", "resonance_2", "resonance_3", "resonance_4", "resonance_5"]
    },
    section: 5
  },
  // Emotional Resilience Assessment
  {
    id: "layer5_emotional_resilience",
    text: "How have you handled difficult emotional situations in the past?",
    options: [
      { id: "emotional_process", text: "I typically process emotions well and bounce back quickly" },
      { id: "emotional_struggle", text: "I struggle initially but ultimately adapt" },
      { id: "emotional_support", text: "I often need support to work through emotional challenges" },
      { id: "emotional_avoid", text: "I tend to avoid confronting difficult emotions" }
    ],
    condition: {
      questionId: "layer4_emotional_anticipation",
      optionId: ["resonance_1", "resonance_2", "resonance_3", "resonance_4", "resonance_5"]
    },
    section: 5
  },
  // Parenting Communication Style
  {
    id: "layer5_parenting_communication",
    text: "How do you and your spouse currently discuss parenting decisions?",
    options: [
      { id: "parenting_effective", text: "We communicate effectively despite our differences" },
      { id: "parenting_mostly", text: "We agree on most child-related matters but clash on others" },
      { id: "parenting_strained", text: "Communication is strained but we manage for the children" },
      { id: "parenting_disagree", text: "We frequently disagree and struggle to compromise" }
    ],
    condition: {
      questionId: "layer4_child_impact",
      optionId: ["resonance_1", "resonance_2", "resonance_3", "resonance_4", "resonance_5"]
    },
    section: 5
  },
  
  // Middle Process Path
  // Legal Approach Assessment
  {
    id: "layer5_legal_approach",
    text: "How are you approaching the legal aspects of divorce?",
    options: [
      { id: "legal_engaged", text: "I'm fully engaged and understanding all documents" },
      { id: "legal_rely", text: "I rely on my attorney but stay informed" },
      { id: "legal_overwhelming", text: "I find it overwhelming but am trying to keep up" },
      { id: "legal_distance", text: "I prefer to distance myself from the legal details" }
    ],
    condition: {
      questionId: "layer4_legal_complexity",
      optionId: ["resonance_1", "resonance_2", "resonance_3", "resonance_4", "resonance_5"]
    },
    section: 5
  },
  // Stress Management Style
  {
    id: "layer5_stress_management",
    text: "How are you currently managing stress during this process?",
    options: [
      { id: "stress_effective", text: "I have effective coping strategies that help daily" },
      { id: "stress_developing", text: "I'm developing new coping skills as needed" },
      { id: "stress_sometimes", text: "I manage sometimes but feel overwhelmed often" },
      { id: "stress_struggling", text: "I'm struggling to find effective ways to cope" }
    ],
    condition: {
      questionId: "layer4_emotional_rollercoaster",
      optionId: ["resonance_1", "resonance_2", "resonance_3", "resonance_4", "resonance_5"]
    },
    section: 5
  },
  // Co-parenting Communication Assessment
  {
    id: "layer5_coparenting_communication",
    text: "How would you describe current communication with your co-parent?",
    options: [
      { id: "coparent_business", text: "Business-like and focused on the children" },
      { id: "coparent_tense", text: "Occasionally tense but generally productive" },
      { id: "coparent_minimal", text: "Minimal communication to avoid conflict" },
      { id: "coparent_frequent", text: "Frequent misunderstandings and arguments" }
    ],
    condition: {
      questionId: "layer4_custody_negotiation",
      optionId: ["resonance_1", "resonance_2", "resonance_3", "resonance_4", "resonance_5"]
    },
    section: 5
  },
  // Financial Decision-Making Style
  {
    id: "layer5_financial_decisions",
    text: "How are you approaching financial decisions during divorce?",
    options: [
      { id: "financial_research", text: "With careful research and professional advice" },
      { id: "financial_balance", text: "Balancing emotional needs with practical considerations" },
      { id: "financial_immediate", text: "Focusing on immediate needs more than long-term planning" },
      { id: "financial_difficult", text: "Finding it difficult to make financial decisions under stress" }
    ],
    condition: {
      questionId: "layer4_asset_division",
      optionId: ["resonance_1", "resonance_2", "resonance_3", "resonance_4", "resonance_5"]
    },
    section: 5
  },
  
  // Recently Finalized Path
  // Financial Mindset Assessment
  {
    id: "layer5_financial_mindset",
    text: "How do you feel when thinking about managing money alone?",
    options: [
      { id: "money_empowered", text: "Empowered – I know what I need to do" },
      { id: "money_cautious", text: "Cautiously optimistic – I'm learning, but I need guidance" },
      { id: "money_overwhelmed", text: "Overwhelmed – I don't know where to start" },
      { id: "money_fearful", text: "Fearful – I avoid dealing with financial decisions" }
    ],
    condition: {
      questionId: "layer4_financial_stress",
      optionId: ["resonance_1", "resonance_2", "resonance_3", "resonance_4", "resonance_5"]
    },
    section: 5
  },
  // Self-Healing Readiness
  {
    id: "layer5_self_healing",
    text: "When difficult emotions arise, what do you do?",
    options: [
      { id: "healing_feel", text: "I allow myself to feel them but manage them well" },
      { id: "healing_talk", text: "I talk to close friends or a therapist about them" },
      { id: "healing_distract", text: "I try to distract myself and push them away" },
      { id: "healing_stuck", text: "I feel stuck and don't know how to handle them" }
    ],
    condition: {
      questionId: "layer4_emotional_processing",
      optionId: ["resonance_1", "resonance_2", "resonance_3", "resonance_4", "resonance_5"]
    },
    section: 5
  },
  // Conflict Handling Style
  {
    id: "layer5_conflict_handling",
    text: "When disagreements arise with your ex, how do you respond?",
    options: [
      { id: "conflict_calm", text: "I stay calm and try to communicate solutions" },
      { id: "conflict_frustrated", text: "I get frustrated but try to negotiate" },
      { id: "conflict_avoid", text: "I avoid confrontation even when it's unfair" },
      { id: "conflict_emotional", text: "I react emotionally and find it hard to control" }
    ],
    condition: {
      questionId: "layer4_coparenting_conflict",
      optionId: ["resonance_1", "resonance_2", "resonance_3", "resonance_4", "resonance_5"]
    },
    section: 5
  },
  // Social Confidence & Relationship Readiness
  {
    id: "layer5_social_confidence",
    text: "How do you feel about opening up to new people?",
    options: [
      { id: "social_excited", text: "Excited – I enjoy meeting new people" },
      { id: "social_cautious", text: "Cautious – I'm open but hesitant" },
      { id: "social_nervous", text: "Nervous – I don't know where to start" },
      { id: "social_avoidant", text: "Avoidant – I don't think I'm ready for that yet" }
    ],
    condition: {
      questionId: "layer4_relationship_anxiety",
      optionId: ["resonance_1", "resonance_2", "resonance_3", "resonance_4", "resonance_5"]
    },
    section: 5
  },
  
  // Rebuilding Path
  // Self-Care Approach
  {
    id: "layer5_self_care",
    text: "How consistently do you prioritize your own needs?",
    options: [
      { id: "care_regular", text: "I have a regular self-care routine that I maintain" },
      { id: "care_understand", text: "I understand the importance but struggle with consistency" },
      { id: "care_others", text: "I put others' needs before my own most of the time" },
      { id: "care_rarely", text: "I rarely make time for my own well-being" }
    ],
    condition: {
      questionId: "layer4_self_discovery",
      optionId: ["resonance_1", "resonance_2", "resonance_3", "resonance_4", "resonance_5"]
    },
    section: 5
  },
  // Financial Growth Mindset
  {
    id: "layer5_financial_growth",
    text: "How do you view your financial future?",
    options: [
      { id: "growth_opportunity", text: "As an opportunity for growth and independence" },
      { id: "growth_cautious", text: "With cautious optimism and practical planning" },
      { id: "growth_anxiety", text: "With some anxiety but determination to improve" },
      { id: "growth_worry", text: "With worry about long-term stability" }
    ],
    condition: {
      questionId: "layer4_financial_rebuilding",
      optionId: ["resonance_1", "resonance_2", "resonance_3", "resonance_4", "resonance_5"]
    },
    section: 5
  },
  // Co-parenting Growth Approach
  {
    id: "layer5_coparenting_growth",
    text: "How do you approach improving your co-parenting relationship?",
    options: [
      { id: "coparent_active", text: "I actively seek out resources and strategies" },
      { id: "coparent_willing", text: "I'm willing to adapt and find middle ground" },
      { id: "coparent_try", text: "I try but find it difficult when my ex doesn't cooperate" },
      { id: "coparent_struggle", text: "I struggle to move beyond past conflicts" }
    ],
    condition: {
      questionId: "layer4_coparenting_evolution",
      optionId: ["resonance_1", "resonance_2", "resonance_3", "resonance_4", "resonance_5"]
    },
    section: 5
  },
  // Relationship Approach
  {
    id: "layer5_relationship_approach",
    text: "What is your attitude toward new relationships?",
    options: [
      { id: "relationship_know", text: "I know what I want and what to avoid this time" },
      { id: "relationship_cautious", text: "I'm cautiously exploring with clear boundaries" },
      { id: "relationship_excited", text: "I'm excited but unsure how dating works now" },
      { id: "relationship_worry", text: "I worry about making the same mistakes again" }
    ],
    condition: {
      questionId: "layer4_social_rebuilding",
      optionId: ["resonance_1", "resonance_2", "resonance_3", "resonance_4", "resonance_5"]
    },
    section: 5
  }
];

// Layer 6: Setting Future Goals
const layer6Questions: Question[] = [
  // Just Thinking Path
  // Decision Goal
  {
    id: "layer6_decision_goal",
    text: "What is your most important goal regarding this decision?",
    options: [
      { id: "goal_clarity", text: "Getting clarity about whether divorce is right for us" },
      { id: "goal_counseling", text: "Exploring marriage counseling or reconciliation" },
      { id: "goal_understand", text: "Understanding the divorce process before deciding" },
      { id: "goal_courage", text: "Finding the courage to make a decision either way" },
      { id: "goal_conversation", text: "Having an honest conversation with my spouse" }
    ],
    condition: {
      questionId: "layer5_decision_making",
      optionId: ["decision_analyze", "decision_intuition", "decision_advice", "decision_delay"]
    },
    section: 6
  },
  // Financial Goal (thinking)
  {
    id: "layer6_financial_goal_thinking",
    text: "What is your top financial goal if you proceed with divorce?",
    options: [
      { id: "goal_understand", text: "Understanding our complete financial picture" },
      { id: "goal_budget", text: "Creating a post-divorce budget" },
      { id: "goal_protect", text: "Protecting my financial interests" },
      { id: "goal_independence", text: "Developing financial independence" },
      { id: "goal_fair", text: "Ensuring fair division of assets and debts" }
    ],
    condition: {
      questionId: "layer5_financial_knowledge",
      optionId: ["financial_complete", "financial_basics", "financial_spouse", "financial_uncertain"]
    },
    section: 6
  },
  // Emotional Goal (thinking)
  {
    id: "layer6_emotional_goal_thinking",
    text: "What is your main emotional goal in the coming months?",
    options: [
      { id: "goal_support", text: "Finding emotional support systems" },
      { id: "goal_anxiety", text: "Managing anxiety about potential changes" },
      { id: "goal_resilience", text: "Building emotional resilience" },
      { id: "goal_grief", text: "Working through grief about the marriage" },
      { id: "goal_coping", text: "Finding healthy coping mechanisms" }
    ],
    condition: {
      questionId: "layer5_emotional_resilience",
      optionId: ["emotional_process", "emotional_struggle", "emotional_support", "emotional_avoid"]
    },
    section: 6
  },
  // Children Goal (thinking)
  {
    id: "layer6_children_goal_thinking",
    text: "What is your primary goal regarding your children?",
    options: [
      { id: "goal_tell", text: "Planning how to tell them about divorce" },
      { id: "goal_wellbeing", text: "Ensuring their emotional well-being" },
      { id: "goal_coparenting", text: "Creating a preliminary co-parenting plan" },
      { id: "goal_stability", text: "Maintaining stability in their lives" },
      { id: "goal_resources", text: "Getting resources to help them adjust" }
    ],
    condition: {
      questionId: "layer5_parenting_communication",
      optionId: ["parenting_effective", "parenting_mostly", "parenting_strained", "parenting_disagree"]
    },
    section: 6
  },
  
  // Middle Process Path
  // Legal Goal
  {
    id: "layer6_legal_goal",
    text: "What is your top legal goal for the next 6 months?",
    options: [
      { id: "goal_support", text: "Finding the right legal support" },
      { id: "goal_options", text: "Understanding all my legal options" },
      { id: "goal_paperwork", text: "Completing paperwork efficiently" },
      { id: "goal_settlement", text: "Achieving a fair settlement" },
      { id: "goal_finalizing", text: "Finalizing the divorce process" }
    ],
    condition: {
      questionId: "layer5_legal_approach",
      optionId: ["legal_engaged", "legal_rely", "legal_overwhelming", "legal_distance"]
    },
    section: 6
  },
  // Emotional Goal (process)
  {
    id: "layer6_emotional_goal_process",
    text: "What is your primary emotional goal during this process?",
    options: [
      { id: "goal_boundaries", text: "Establishing healthy boundaries with my ex" },
      { id: "goal_grief", text: "Processing grief and anger constructively" },
      { id: "goal_support", text: "Building a support network" },
      { id: "goal_stress", text: "Learning stress management techniques" },
      { id: "goal_stability", text: "Maintaining emotional stability for myself and others" }
    ],
    condition: {
      questionId: "layer5_stress_management",
      optionId: ["stress_effective", "stress_developing", "stress_sometimes", "stress_struggling"]
    },
    section: 6
  },
  // Co-parenting Goal (process)
  {
    id: "layer6_coparenting_goal_process",
    text: "What is your most important co-parenting goal?",
    options: [
      { id: "goal_plan", text: "Creating a detailed parenting plan" },
      { id: "goal_communication", text: "Improving communication with my co-parent" },
      { id: "goal_routines", text: "Establishing consistent routines across households" },
      { id: "goal_adjustment", text: "Supporting my children's emotional adjustment" },
      { id: "goal_strategies", text: "Learning effective co-parenting strategies" }
    ],
    condition: {
      questionId: "layer5_coparenting_communication",
      optionId: ["coparent_business", "coparent_tense", "coparent_minimal", "coparent_frequent"]
    },
    section: 6
  },
  // Financial Goal (process)
  {
    id: "layer6_financial_goal_process",
    text: "What is your main financial goal during divorce?",
    options: [
      { id: "goal_division", text: "Securing fair division of assets" },
      { id: "goal_support", text: "Ensuring appropriate support arrangements" },
      { id: "goal_stability", text: "Planning for post-divorce financial stability" },
      { id: "goal_tax", text: "Understanding tax implications" },
      { id: "goal_credit", text: "Protecting my credit and financial future" }
    ],
    condition: {
      questionId: "layer5_financial_decisions",
      optionId: ["financial_research", "financial_balance", "financial_immediate", "financial_difficult"]
    },
    section: 6
  },
  
  // Recently Finalized Path
  // Financial Goal (finalized)
  {
    id: "layer6_financial_goal_finalized",
    text: "What is your top financial goal post-divorce?",
    options: [
      { id: "goal_budget", text: "Creating a sustainable budget" },
      { id: "goal_emergency", text: "Building an emergency fund" },
      { id: "goal_credit", text: "Improving my credit score" },
      { id: "goal_career", text: "Advancing my career or income" },
      { id: "goal_investment", text: "Learning investment strategies" }
    ],
    condition: {
      questionId: "layer5_financial_mindset",
      optionId: ["money_empowered", "money_cautious", "money_overwhelmed", "money_fearful"]
    },
    section: 6
  },
  // Emotional Goal (finalized)
  {
    id: "layer6_emotional_goal_finalized",
    text: "What is your main emotional healing goal?",
    options: [
      { id: "goal_closure", text: "Finding closure from the marriage" },
      { id: "goal_esteem", text: "Rebuilding self-esteem and confidence" },
      { id: "goal_grief", text: "Processing lingering grief or anger" },
      { id: "goal_outlook", text: "Developing a positive outlook" },
      { id: "goal_memories", text: "Creating new memories and experiences" }
    ],
    condition: {
      questionId: "layer5_self_healing",
      optionId: ["healing_feel", "healing_talk", "healing_distract", "healing_stuck"]
    },
    section: 6
  },
  // Co-parenting Goal (finalized)
  {
    id: "layer6_coparenting_goal_finalized",
    text: "What is your primary co-parenting goal?",
    options: [
      { id: "goal_communication", text: "Establishing consistent communication methods" },
      { id: "goal_boundaries", text: "Creating healthier boundaries with my ex" },
      { id: "goal_resolution", text: "Developing conflict resolution strategies" },
      { id: "goal_transition", text: "Supporting my children through the transition" },
      { id: "goal_cooperation", text: "Building a more cooperative co-parenting relationship" }
    ],
    condition: {
      questionId: "layer5_conflict_handling",
      optionId: ["conflict_calm", "conflict_frustrated", "conflict_avoid", "conflict_emotional"]
    },
    section: 6
  },
  // Relationship Goal (finalized)
  {
    id: "layer6_relationship_goal_finalized",
    text: "What is your top relationship goal?",
    options: [
      { id: "goal_understand", text: "Understanding what I want in future relationships" },
      { id: "goal_patterns", text: "Learning from past relationship patterns" },
      { id: "goal_social", text: "Building a fulfilling social life" },
      { id: "goal_children", text: "Navigating dating with children involved" },
      { id: "goal_boundaries", text: "Setting healthy boundaries in new relationships" }
    ],
    condition: {
      questionId: "layer5_social_confidence",
      optionId: ["social_excited", "social_cautious", "social_nervous", "social_avoidant"]
    },
    section: 6
  },
  
  // Rebuilding Path
  // Self-care Goal
  {
    id: "layer6_selfcare_goal",
    text: "What is your primary self-care goal?",
    options: [
      { id: "goal_independence", text: "Financial independence" },
      { id: "goal_emotional", text: "Emotional well-being" },
      { id: "goal_physical", text: "Physical health improvement" },
      { id: "goal_interests", text: "Rediscovering personal interests" },
      { id: "goal_support", text: "Building a support network" },
      { id: "goal_routines", text: "Creating new positive routines" },
      { id: "goal_purpose", text: "Finding meaning and purpose" }
    ],
    condition: {
      questionId: "layer5_self_care",
      optionId: ["care_regular", "care_understand", "care_others", "care_rarely"]
    },
    section: 6
  },
  // Financial Goal (rebuilding)
  {
    id: "layer6_financial_goal_rebuilding",
    text: "What is your main financial rebuilding goal?",
    options: [
      { id: "goal_income", text: "Achieving stable monthly income" },
      { id: "goal_debt", text: "Eliminating divorce-related debt" },
      { id: "goal_savings", text: "Rebuilding savings and emergency funds" },
      { id: "goal_retirement", text: "Planning for retirement" },
      { id: "goal_literacy", text: "Improving financial literacy" },
      { id: "goal_home", text: "Home ownership or housing stability" },
      { id: "goal_new", text: "Creating new financial goals" }
    ],
    condition: {
      questionId: "layer5_financial_growth",
      optionId: ["growth_opportunity", "growth_cautious", "growth_anxiety", "growth_worry"]
    },
    section: 6
  },
  // Co-parenting Goal (rebuilding)
  {
    id: "layer6_coparenting_goal_rebuilding",
    text: "What is your top co-parenting rebuilding goal?",
    options: [
      { id: "goal_conflict", text: "Moving past conflict with my ex" },
      { id: "goal_traditions", text: "Creating new family traditions" },
      { id: "goal_thrive", text: "Helping children thrive despite changes" },
      { id: "goal_communication", text: "Building a workable communication system" },
      { id: "goal_blended", text: "Managing blended family dynamics" },
      { id: "goal_relationship", text: "Supporting children's relationship with both parents" },
      { id: "goal_joy", text: "Finding joy in my parenting role" }
    ],
    condition: {
      questionId: "layer5_coparenting_growth",
      optionId: ["coparent_active", "coparent_willing", "coparent_try", "coparent_struggle"]
    },
    section: 6
  },
  // Relationship Goal (rebuilding)
  {
    id: "layer6_relationship_goal_rebuilding",
    text: "What is your primary relationship rebuilding goal?",
    options: [
      { id: "goal_circle", text: "Building a healthy social circle" },
      { id: "goal_trust", text: "Learning to trust again" },
      { id: "goal_needs", text: "Understanding my relationship needs" },
      { id: "goal_parent", text: "Navigating dating as a parent" },
      { id: "goal_patterns", text: "Moving forward without repeating patterns" },
      { id: "goal_compatibility", text: "Finding compatibility in new relationships" },
      { id: "goal_intimate", text: "Creating a fulfilling intimate relationship" }
    ],
    condition: {
      questionId: "layer5_relationship_approach",
      optionId: ["relationship_know", "relationship_cautious", "relationship_excited", "relationship_worry"]
    },
    section: 6
  }
];

// Layers 7-10: Final questions
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
  ...layer5Questions,
  ...layer6Questions,
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

