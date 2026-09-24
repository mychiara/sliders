export type SlideType =
  | 'cover'
  | 'agenda'
  | 'statement'
  | 'bignumber'
  | 'contrast'
  | 'bento'
  | 'timeline'
  | 'steps'
  | 'quote'
  | 'closing';

export interface BentoCard {
  title: string;
  desc: string;
  kicker?: string;
}

export interface TimelineItem {
  date: string;
  title: string;
  desc: string;
}

export interface StepItem {
  num: string;
  title: string;
  desc: string;
}

export interface SlideData {
  id: string;
  type: SlideType;
  nav?: string;
  notes?: string;
  kicker?: string;
  title: string;
  subtitle?: string;
  foot?: string;
  // Specific properties
  value?: string; // for bignumber
  label?: string; // for bignumber
  sub?: string;   // for bignumber
  items?: string[]; // for agenda
  // For contrast (before/after)
  leftKicker?: string;
  leftTitle?: string;
  leftItems?: string[];
  rightKicker?: string;
  rightTitle?: string;
  rightItems?: string[];
  // For bento
  cards?: BentoCard[];
  // For timeline
  timelineItems?: TimelineItem[];
  // For steps
  stepsItems?: StepItem[];
  // For quote
  quoteText?: string;
  author?: string;
  role?: string;
  // For closing / statement
  btnText?: string;
  btnLink?: string;
  // Contextual visual widgets
  visualType?: 'none' | 'finance' | 'anatomy' | 'globe';
}

export interface ThemePreset {
  id: string;
  name: string;
  bg: string;
  fg: string;
  primary: string;
  accent: string;
  surface: string;
  surface2: string;
  hair: string;
}
