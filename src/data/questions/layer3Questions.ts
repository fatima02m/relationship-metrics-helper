
import { Question } from '../types/quizTypes';

// Layer 3: Personalized Deep-Dive Questions
export const layer3Questions: Question[] = [
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
