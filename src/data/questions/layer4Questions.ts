
import { Question } from '../types/quizTypes';

// Layer 4: Scenario-based emotional resonance questions
export const layer4Questions: Question[] = [
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
