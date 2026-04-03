import Link from "next/link";

type CompletionBannerProps = {
  currentStepLabel: string;
  completionPercent: number;
};

export function CompletionBanner({
  currentStepLabel,
  completionPercent,
}: CompletionBannerProps) {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-line bg-[linear-gradient(135deg,rgba(255,255,255,0.84),rgba(216,230,221,0.52))] p-6 shadow-[var(--shadow-soft)]">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
        MVP flow
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-foreground">
        Keep the product simple enough to learn from real use.
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
        The next highest-leverage step is still onboarding. It sets the data
        shape for chess profile, health profile, matching preferences, dashboard,
        and the first Duo Mode concepts.
      </p>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-foreground">
            Current step: {currentStepLabel}
          </p>
          <p className="mt-1 text-sm text-muted">
            Completion: {completionPercent}% of the MVP onboarding skeleton
          </p>
        </div>
        <Link
          href="/app/onboarding"
          className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-card)] transition-colors hover:bg-brand-strong"
        >
          Continue onboarding
        </Link>
      </div>
    </section>
  );
}
