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
import { readProductState, writeProductState } from "@/server/repositories/mock/mock-product-store";
import type { ProductRepository } from "@/server/repositories/product-repository";

function getRequiredValue<T>(value: T | undefined, label: string): T {
  if (value === undefined) {
    throw new Error(`Missing mock product state for ${label}`);
  }

  return value;
}

export class MockProductRepository implements ProductRepository {
  async getUser(userId: string): Promise<ProductUser> {
    const state = await readProductState();
    return getRequiredValue(state.users[userId], `user ${userId}`);
  }

  async getOnboardingState(userId: string): Promise<OnboardingState> {
    const state = await readProductState();
    return getRequiredValue(state.onboarding[userId], `onboarding state ${userId}`);
  }

  async saveOnboardingStep(
    userId: string,
    stepId: OnboardingStepId,
    answers: QuestionAnswerMap,
    nextStep: OnboardingStepId,
  ): Promise<OnboardingState> {
    const state = await readProductState();
    const onboardingState = getRequiredValue(
      state.onboarding[userId],
      `onboarding state ${userId}`,
    );

    const completedSteps = Array.from(
      new Set([...onboardingState.completedSteps, stepId]),
    ) as OnboardingStepId[];

    const updatedState: OnboardingState = {
      ...onboardingState,
      currentStep: nextStep,
      completedSteps,
      lastSavedAt: new Date().toISOString(),
      answersByStep: {
        ...onboardingState.answersByStep,
        [stepId]: answers,
      },
    };

    state.onboarding[userId] = updatedState;
    await writeProductState(state);

    return updatedState;
  }

  async getChessProfile(userId: string): Promise<ChessProfile> {
    const state = await readProductState();
    return getRequiredValue(state.chessProfiles[userId], `chess profile ${userId}`);
  }

  async getHealthProfile(userId: string): Promise<HealthProfile> {
    const state = await readProductState();
    return getRequiredValue(state.healthProfiles[userId], `health profile ${userId}`);
  }

  async getMatchingPreferences(userId: string): Promise<MatchingPreferences> {
    const state = await readProductState();
    return getRequiredValue(
      state.matchingPreferences[userId],
      `matching preferences ${userId}`,
    );
  }

  async listRoutineItems(userId: string): Promise<RoutineItem[]> {
    const state = await readProductState();
    return getRequiredValue(state.routineItems[userId], `routine items ${userId}`);
  }

  async getDuoModeSummary(userId: string): Promise<DuoModeSummary | null> {
    const state = await readProductState();
    return getRequiredValue(state.duoMode[userId], `duo mode ${userId}`);
  }
}
