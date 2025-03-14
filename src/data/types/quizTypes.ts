
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

export interface ProfileType {
  id: string;
  title: string;
  description: string;
  color: string;
}
