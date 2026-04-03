import { onboardingStepDefinitions } from "@/features/onboarding/schema";
import type { OnboardingStepId } from "@/lib/types/product";
import { getProductRepository } from "@/server/repositories/product-repository";
import { getDemoSession } from "@/server/session/get-demo-session";

function toPercent(completed: number, total: number) {
  return Math.round((completed / total) * 100);
}

function getStepLabel(stepId: OnboardingStepId) {
  return (
    onboardingStepDefinitions.find((step) => step.id === stepId)?.title ??
    "Onboarding"
  );
}

export async function getAppShellViewModel() {
  const session = await getDemoSession();
  const repository = getProductRepository();

  const [user, onboarding] = await Promise.all([
    repository.getUser(session.userId),
    repository.getOnboardingState(session.userId),
  ]);

  return {
    user,
    onboarding: {
      currentStep: onboarding.currentStep,
      currentStepLabel: getStepLabel(onboarding.currentStep),
      completedCount: onboarding.completedSteps.length,
      totalSteps: onboardingStepDefinitions.length,
      completionPercent: toPercent(
        onboarding.completedSteps.length,
        onboardingStepDefinitions.length,
      ),
    },
  };
}

export async function getDashboardViewModel() {
  const session = await getDemoSession();
  const repository = getProductRepository();

  const [shell, chessProfile, healthProfile, matchingPreferences, routineItems, duoMode] =
    await Promise.all([
      getAppShellViewModel(),
      repository.getChessProfile(session.userId),
      repository.getHealthProfile(session.userId),
      repository.getMatchingPreferences(session.userId),
      repository.listRoutineItems(session.userId),
      repository.getDuoModeSummary(session.userId),
    ]);

  return {
    ...shell,
    chessProfile,
    healthProfile,
    matchingPreferences,
    routineItems,
    duoMode,
  };
}
