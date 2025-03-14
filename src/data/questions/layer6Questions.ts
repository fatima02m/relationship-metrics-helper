
import { Question } from '../types/quizTypes';

// Layer 6: Setting Future Goals
export const layer6Questions: Question[] = [
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
