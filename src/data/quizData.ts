
import { Question, Option, Section, ProfileType } from './types/quizTypes';
import { sections } from './sections';
import { profileTypes, getProfileType } from './profileTypes';
import { layer1Questions } from './questions/layer1Questions';
import { layer2Questions } from './questions/layer2Questions';
import { layer3Questions } from './questions/layer3Questions';
import { layer4Questions } from './questions/layer4Questions';
import { layer5Questions } from './questions/layer5Questions';
import { layer6Questions } from './questions/layer6Questions';
import { finalQuestions } from './questions/finalQuestions';

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

// Export everything for backward compatibility
export { 
  sections,
  profileTypes,
  getProfileType,
  layer1Questions,
  layer2Questions,
  layer3Questions,
  layer4Questions,
  layer5Questions,
  layer6Questions,
  finalQuestions,
  Option,  // Export the types
  Question,
  Section,
  ProfileType
};
