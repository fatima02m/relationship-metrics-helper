
import { Question } from '../types/quizTypes';

// Layers 7-10: Final questions
export const finalQuestions: Question[] = [
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
