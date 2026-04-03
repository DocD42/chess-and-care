import Link from "next/link";

import { getDashboardViewModel } from "@/server/services/dashboard-service";

export default async function ProfileOverviewPage() {
  const viewModel = await getDashboardViewModel();

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <article className="rounded-[1.8rem] border border-line bg-white/80 p-6 shadow-[var(--shadow-card)]">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
          Profile architecture
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-foreground">
          Normalized profile layers come after onboarding.
        </h2>
        <p className="mt-4 text-sm leading-7 text-muted">
          This overview page exists so the product shell already has clear
          destinations for the next implementation slices.
        </p>
      </article>

      <article className="rounded-[1.8rem] border border-line bg-white/80 p-6 shadow-[var(--shadow-card)]">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
          Chess snapshot
        </p>
        <p className="mt-4 text-sm leading-7 text-muted">
          {viewModel.chessProfile.focusArea}
        </p>
        <Link
          href="/app/profile/chess"
          className="mt-5 inline-flex text-sm font-semibold text-brand transition-colors hover:text-brand-strong"
        >
          Open chess profile
        </Link>
      </article>

      <article className="rounded-[1.8rem] border border-line bg-white/80 p-6 shadow-[var(--shadow-card)]">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
          Health snapshot
        </p>
        <p className="mt-4 text-sm leading-7 text-muted">
          {viewModel.healthProfile.sleepConsistency}
        </p>
        <Link
          href="/app/profile/health"
          className="mt-5 inline-flex text-sm font-semibold text-brand transition-colors hover:text-brand-strong"
        >
          Open health profile
        </Link>
      </article>
    </div>
  );
}
