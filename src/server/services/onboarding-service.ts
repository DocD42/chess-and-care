import { onboardingStepDefinitions } from "@/features/onboarding/schema";
import type {
  OnboardingStepId,
  QuestionAnswerMap,
  QuestionValue,
} from "@/lib/types/product";
import { getProductRepository } from "@/server/repositories/product-repository";
import { getDemoSession } from "@/server/session/get-demo-session";

function stepIndex(stepId: OnboardingStepId) {
  return onboardingStepDefinitions.findIndex((step) => step.id === stepId);
}

export function getNextStepId(stepId: OnboardingStepId): OnboardingStepId {
  const index = stepIndex(stepId);
  const nextStep = onboardingStepDefinitions[index + 1];
  return nextStep?.id ?? stepId;
}

export function getPreviousStepId(stepId: OnboardingStepId): OnboardingStepId | null {
  const index = stepIndex(stepId);
  return index > 0 ? onboardingStepDefinitions[index - 1].id : null;
}

export async function getOnboardingOverviewViewModel() {
  const session = await getDemoSession();
  const repository = getProductRepository();

  const [user, onboardingState] = await Promise.all([
    repository.getUser(session.userId),
    repository.getOnboardingState(session.userId),
  ]);

  return {
    user,
    currentStep: onboardingState.currentStep,
    completedSteps: onboardingState.completedSteps,
    lastSavedAt: onboardingState.lastSavedAt,
    steps: onboardingStepDefinitions.map((step, index) => ({
      ...step,
      index: index + 1,
      href: `/app/onboarding/${step.id}`,
      isComplete: onboardingState.completedSteps.includes(step.id),
      isCurrent: onboardingState.currentStep === step.id,
      answers: onboardingState.answersByStep[step.id] ?? {},
    })),
  };
}

export async function getOnboardingStepViewModel(stepId: OnboardingStepId) {
  const session = await getDemoSession();
  const repository = getProductRepository();

  const [user, onboardingState] = await Promise.all([
    repository.getUser(session.userId),
    repository.getOnboardingState(session.userId),
  ]);

  const step = onboardingStepDefinitions.find((item) => item.id === stepId);

  if (!step) {
    throw new Error(`Unknown onboarding step: ${stepId}`);
  }

  return {
    user,
    step,
    answers: onboardingState.answersByStep[stepId] ?? {},
    completedSteps: onboardingState.completedSteps,
    previousStepId: getPreviousStepId(stepId),
    nextStepId: getNextStepId(stepId),
    currentStepId: onboardingState.currentStep,
  };
}

function normalizeFormValue(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value.trim() : "";
}

export function formDataToAnswers(
  stepId: OnboardingStepId,
  formData: FormData,
): QuestionAnswerMap {
  const step = onboardingStepDefinitions.find((item) => item.id === stepId);

  if (!step) {
    throw new Error(`Unknown onboarding step: ${stepId}`);
  }

  const answers = step.fields.reduce<QuestionAnswerMap>((accumulator, field) => {
    let value: QuestionValue;

    if (field.type === "multi-select") {
      value = formData
        .getAll(field.key)
        .map((item) => normalizeFormValue(item))
        .filter(Boolean);
    } else {
      value = normalizeFormValue(formData.get(field.key));
    }

    accumulator[field.key] = value;
    return accumulator;
  }, {});

  return answers;
}

export async function saveOnboardingStep(
  stepId: OnboardingStepId,
  answers: QuestionAnswerMap,
) {
  const session = await getDemoSession();
  const repository = getProductRepository();
  const nextStepId = getNextStepId(stepId);

  return repository.saveOnboardingStep(
    session.userId,
    stepId,
    answers,
    nextStepId,
  );
}
