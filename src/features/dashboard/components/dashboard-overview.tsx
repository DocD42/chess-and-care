import Link from "next/link";

import { CompletionBanner } from "@/components/app-shell/completion-banner";
import type { DuoModeSummary, RoutineItem } from "@/lib/types/product";

type DashboardOverviewProps = {
  userName: string;
  currentStepLabel: string;
  completionPercent: number;
  chessSummary: string;
  healthSummary: string;
  matchingSummary: string;
  routineItems: RoutineItem[];
  duoMode: DuoModeSummary | null;
};

export function DashboardOverview({
  userName,
  currentStepLabel,
  completionPercent,
  chessSummary,
  healthSummary,
  matchingSummary,
  routineItems,
  duoMode,
}: DashboardOverviewProps) {
  return (
    <div className="space-y-8">
      <CompletionBanner
        currentStepLabel={currentStepLabel}
        completionPercent={completionPercent}
      />

      <section className="grid gap-4 xl:grid-cols-3">
        <article className="rounded-[1.7rem] border border-line bg-white/80 p-6 shadow-[var(--shadow-card)]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            Chess profile
          </p>
          <p className="mt-4 text-sm leading-7 text-muted">{chessSummary}</p>
          <Link
            href="/app/profile/chess"
            className="mt-5 inline-flex text-sm font-semibold text-brand transition-colors hover:text-brand-strong"
          >
            Open chess profile
          </Link>
        </article>

        <article className="rounded-[1.7rem] border border-line bg-white/80 p-6 shadow-[var(--shadow-card)]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            Health profile
          </p>
          <p className="mt-4 text-sm leading-7 text-muted">{healthSummary}</p>
          <Link
            href="/app/profile/health"
            className="mt-5 inline-flex text-sm font-semibold text-brand transition-colors hover:text-brand-strong"
          >
            Open health profile
          </Link>
        </article>

        <article className="rounded-[1.7rem] border border-line bg-white/80 p-6 shadow-[var(--shadow-card)]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            Matching preferences
          </p>
          <p className="mt-4 text-sm leading-7 text-muted">{matchingSummary}</p>
          <Link
            href="/app/preferences/matching"
            className="mt-5 inline-flex text-sm font-semibold text-brand transition-colors hover:text-brand-strong"
          >
            Open preferences
          </Link>
        </article>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-[1.9rem] border border-line bg-white/80 p-6 shadow-[var(--shadow-card)]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                Routine snapshot
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-foreground">
                Small habits that support steadier play
              </h2>
            </div>
            <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand">
              {userName}
            </span>
          </div>
          <div className="mt-6 grid gap-3">
            {routineItems.map((routine) => (
              <div
                key={routine.id}
                className="flex items-start justify-between gap-4 rounded-[1.3rem] border border-line bg-white px-4 py-4"
              >
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {routine.title}
                  </p>
                  <p className="mt-1 text-sm text-muted">{routine.cadence}</p>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${
                    routine.status === "on-track"
                      ? "bg-brand-soft text-brand"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {routine.status === "on-track" ? "On track" : "Needs attention"}
                </span>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-[1.9rem] border border-line bg-white/80 p-6 shadow-[var(--shadow-card)]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            Duo mode
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-foreground">
            {duoMode?.title ?? "No duo state yet"}
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            {duoMode?.description ??
              "This area will later host pair setup, shared routines, and progress rituals."}
          </p>
          <div className="mt-6 rounded-[1.3rem] border border-line bg-surface-muted p-4">
            <p className="text-sm font-semibold text-foreground">Next action</p>
            <p className="mt-2 text-sm leading-7 text-muted">
              {duoMode?.nextAction ?? "Define the first duo onboarding questions."}
            </p>
          </div>
          <Link
            href="/app/duo"
            className="mt-5 inline-flex text-sm font-semibold text-brand transition-colors hover:text-brand-strong"
          >
            Open Duo Mode concept
          </Link>
        </article>
      </section>
    </div>
  );
}
