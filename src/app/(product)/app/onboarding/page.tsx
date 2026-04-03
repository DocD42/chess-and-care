import Link from "next/link";

import { OnboardingStepper } from "@/features/onboarding/components/onboarding-stepper";
import { getOnboardingOverviewViewModel } from "@/server/services/onboarding-service";

export default async function OnboardingPage() {
  const viewModel = await getOnboardingOverviewViewModel();

  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-line bg-white/80 p-6 shadow-[var(--shadow-soft)]">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
          Onboarding questionnaire
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-foreground">
          Shape the first version of the product profile.
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
          This skeleton flow defines the core data structure for onboarding,
          profile normalization, matching, and Duo Mode. It is intentionally
          simpler than the future production experience.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href={`/app/onboarding/${viewModel.currentStep}`}
            className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-card)] transition-colors hover:bg-brand-strong"
          >
            Continue current step
          </Link>
          <p className="text-sm leading-7 text-muted">
            Last saved: {viewModel.lastSavedAt ? new Date(viewModel.lastSavedAt).toLocaleString() : "Not yet"}
          </p>
        </div>
      </section>

      <OnboardingStepper steps={viewModel.steps} />

      <section className="grid gap-4 lg:grid-cols-2">
        {viewModel.steps.map((step) => (
          <article
            key={step.id}
            className="rounded-[1.7rem] border border-line bg-white/75 p-6 shadow-[var(--shadow-card)]"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                  Step {step.index}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-foreground">
                  {step.title}
                </h3>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${
                  step.isComplete
                    ? "bg-brand-soft text-brand"
                    : step.isCurrent
                      ? "bg-amber-100 text-amber-800"
                      : "bg-surface-muted text-muted-strong"
                }`}
              >
                {step.isComplete ? "Complete" : step.isCurrent ? "Current" : "Pending"}
              </span>
            </div>
            <p className="mt-4 text-sm leading-7 text-muted">{step.description}</p>
            <Link
              href={step.href}
              className="mt-5 inline-flex text-sm font-semibold text-brand transition-colors hover:text-brand-strong"
            >
              Open step
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
