import Link from "next/link";

import type { OnboardingStepId } from "@/lib/types/product";

type StepItem = {
  id: OnboardingStepId;
  title: string;
  shortTitle: string;
  href: string;
  isComplete: boolean;
  isCurrent: boolean;
  index: number;
};

type OnboardingStepperProps = {
  steps: StepItem[];
};

export function OnboardingStepper({ steps }: OnboardingStepperProps) {
  return (
    <div className="grid gap-3 lg:grid-cols-4">
      {steps.map((step) => (
        <Link
          key={step.id}
          href={step.href}
          className={`rounded-[1.5rem] border px-4 py-4 transition-colors ${
            step.isCurrent
              ? "border-brand bg-brand text-white shadow-[var(--shadow-card)]"
              : step.isComplete
                ? "border-brand/25 bg-brand-soft text-foreground"
                : "border-line bg-white/75 text-muted hover:border-line-strong hover:bg-white"
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] opacity-80">
            Step {step.index}
          </p>
          <p className="mt-2 text-lg font-semibold">{step.shortTitle}</p>
        </Link>
      ))}
    </div>
  );
}
