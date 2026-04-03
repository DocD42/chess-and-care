export const onboardingStepIds = [
  "basics",
  "chess",
  "health",
  "matching",
] as const;

export type OnboardingStepId = (typeof onboardingStepIds)[number];

export type QuestionValue = string | string[];
export type QuestionAnswerMap = Record<string, QuestionValue>;
export type OnboardingQuestionType =
  | "text"
  | "single-select"
  | "multi-select"
  | "textarea";

export type OnboardingQuestionOption = {
  value: string;
  label: string;
  hint?: string;
};

export type OnboardingQuestionDefinition = {
  key: string;
  label: string;
  description: string;
  type: OnboardingQuestionType;
  placeholder?: string;
  options?: OnboardingQuestionOption[];
};

export type OnboardingStepDefinition = {
  id: OnboardingStepId;
  title: string;
  shortTitle: string;
  description: string;
  fields: OnboardingQuestionDefinition[];
};

export type ProductUser = {
  id: string;
  email: string;
  displayName: string;
  homeBase: string;
  headline: string;
};

export type OnboardingState = {
  currentStep: OnboardingStepId;
  completedSteps: OnboardingStepId[];
  lastSavedAt: string | null;
  answersByStep: Partial<Record<OnboardingStepId, QuestionAnswerMap>>;
};

export type ChessProfile = {
  focusArea: string;
  experienceBand: string;
  preferredTimeControls: string[];
  studyCadence: string;
  platforms: string[];
};

export type HealthProfile = {
  sleepConsistency: string;
  nutritionStyle: string;
  mobilityLevel: string;
  stressRecovery: string;
};

export type MatchingPreferences = {
  intents: string[];
  availability: string[];
  communicationStyle: string;
  distancePreference: string;
  duoModeInterest: string;
};

export type RoutineItem = {
  id: string;
  title: string;
  category: "sleep" | "nutrition" | "mobility" | "recovery" | "study";
  cadence: string;
  status: "on-track" | "needs-attention";
};

export type DuoModeSummary = {
  status: "not-matched" | "invited" | "active";
  title: string;
  description: string;
  nextAction: string;
  partnerName?: string;
};

export type ProductState = {
  users: Record<string, ProductUser>;
  onboarding: Record<string, OnboardingState>;
  chessProfiles: Record<string, ChessProfile>;
  healthProfiles: Record<string, HealthProfile>;
  matchingPreferences: Record<string, MatchingPreferences>;
  routineItems: Record<string, RoutineItem[]>;
  duoMode: Record<string, DuoModeSummary | null>;
};
