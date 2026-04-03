"use server";

import { redirect } from "next/navigation";

import type { OnboardingStepId } from "@/lib/types/product";
import {
  formDataToAnswers,
  getNextStepId,
  saveOnboardingStep,
} from "@/server/services/onboarding-service";

export async function submitOnboardingStep(
  stepId: OnboardingStepId,
  formData: FormData,
) {
  const answers = formDataToAnswers(stepId, formData);
  const nextStepId = getNextStepId(stepId);

  await saveOnboardingStep(stepId, answers);

  if (nextStepId === stepId) {
    redirect("/app/onboarding?saved=1");
  }

  redirect(`/app/onboarding/${nextStepId}?saved=1`);
}
