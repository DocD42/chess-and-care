import Link from "next/link";
import { notFound } from "next/navigation";

import { submitOnboardingStep } from "@/features/onboarding/actions";
import { OnboardingStepShell } from "@/features/onboarding/components/onboarding-step-shell";
import { OnboardingStepper } from "@/features/onboarding/components/onboarding-stepper";
import { QuestionField } from "@/features/onboarding/components/question-field";
import { onboardingStepDefinitions } from "@/features/onboarding/schema";
import type { OnboardingStepId } from "@/lib/types/product";
import { getOnboardingOverviewViewModel, getOnboardingStepViewModel } from "@/server/services/onboarding-service";

type StepPageProps = {
  params: Promise<{
    step: string;
  }>;
};

function isStepId(value: string): value is OnboardingStepId {
  return onboardingStepDefinitions.some((step) => step.id === value);
}

export default async function OnboardingStepPage({ params }: StepPageProps) {
  const { step } = await params;

  if (!isStepId(step)) {
    notFound();
  }

  const [overview, viewModel] = await Promise.all([
    getOnboardingOverviewViewModel(),
    getOnboardingStepViewModel(step),
  ]);
  const stepIndex = onboardingStepDefinitions.findIndex((item) => item.id === step) + 1;

  return (
    <div className="space-y-8">
      <OnboardingStepper steps={overview.steps} />

      <OnboardingStepShell
        title={viewModel.step.title}
        description={viewModel.step.description}
        stepIndex={stepIndex}
        totalSteps={onboardingStepDefinitions.length}
        previousHref={
          viewModel.previousStepId ? `/app/onboarding/${viewModel.previousStepId}` : undefined
        }
      >
        <form action={submitOnboardingStep.bind(null, step)} className="space-y-5">
          {viewModel.step.fields.map((field) => (
            <QuestionField key={field.key} field={field} answers={viewModel.answers} />
          ))}

          <div className="flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/app/onboarding"
              className="text-sm font-semibold text-muted transition-colors hover:text-foreground"
            >
              Back to onboarding overview
            </Link>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-card)] transition-colors hover:bg-brand-strong"
            >
              {viewModel.nextStepId === step ? "Save onboarding step" : "Save and continue"}
            </button>
          </div>
        </form>
      </OnboardingStepShell>
    </div>
  );
}
