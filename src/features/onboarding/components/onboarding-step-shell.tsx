import Link from "next/link";
import type { ReactNode } from "react";

type OnboardingStepShellProps = {
  title: string;
  description: string;
  stepIndex: number;
  totalSteps: number;
  previousHref?: string;
  children: ReactNode;
};

export function OnboardingStepShell({
  title,
  description,
  stepIndex,
  totalSteps,
  previousHref,
  children,
}: OnboardingStepShellProps) {
  return (
    <section className="mx-auto max-w-4xl">
      <div className="rounded-[2rem] border border-line bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,255,255,0.58))] p-6 shadow-[var(--shadow-soft)] sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
              Step {stepIndex} of {totalSteps}
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              {title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
              {description}
            </p>
          </div>
          {previousHref ? (
            <Link
              href={previousHref}
              className="inline-flex items-center text-sm font-semibold text-brand transition-colors hover:text-brand-strong"
            >
              Back to previous step
            </Link>
          ) : null}
        </div>

        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
