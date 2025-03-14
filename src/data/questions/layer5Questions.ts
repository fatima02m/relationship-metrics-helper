
import { Question } from '../types/quizTypes';

// Layer 5: Behavioral & Growth Readiness
export const layer5Questions: Question[] = [
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
