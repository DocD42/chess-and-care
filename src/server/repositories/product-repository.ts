import type {
  ChessProfile,
  DuoModeSummary,
  HealthProfile,
  MatchingPreferences,
  OnboardingState,
  OnboardingStepId,
  ProductUser,
  QuestionAnswerMap,
  RoutineItem,
} from "@/lib/types/product";
import { MockProductRepository } from "@/server/repositories/mock/mock-product-repository";

export interface ProductRepository {
  getUser(userId: string): Promise<ProductUser>;
  getOnboardingState(userId: string): Promise<OnboardingState>;
  saveOnboardingStep(
    userId: string,
    stepId: OnboardingStepId,
    answers: QuestionAnswerMap,
    nextStep: OnboardingStepId,
  ): Promise<OnboardingState>;
  getChessProfile(userId: string): Promise<ChessProfile>;
  getHealthProfile(userId: string): Promise<HealthProfile>;
  getMatchingPreferences(userId: string): Promise<MatchingPreferences>;
  listRoutineItems(userId: string): Promise<RoutineItem[]>;
  getDuoModeSummary(userId: string): Promise<DuoModeSummary | null>;
}

const repository = new MockProductRepository();

export function getProductRepository(): ProductRepository {
  return repository;
}
