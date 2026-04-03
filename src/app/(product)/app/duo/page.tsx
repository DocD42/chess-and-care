import { getDashboardViewModel } from "@/server/services/dashboard-service";

export default async function DuoModePage() {
  const viewModel = await getDashboardViewModel();

  return (
    <section className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
      <article className="rounded-[2rem] border border-line bg-white/80 p-6 shadow-[var(--shadow-soft)]">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
          Duo Mode concept
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-foreground">
          A shared operating layer for two people who want better routines.
        </h2>
        <p className="mt-4 text-sm leading-7 text-muted">
          Duo Mode is not messaging-first. It is a structure for shared check-ins,
          mutual accountability, and quiet momentum. This page is a concept anchor
          for the next implementation slice.
        </p>
        <div className="mt-6 rounded-[1.5rem] border border-line bg-white p-5">
          <p className="text-sm font-semibold text-foreground">Core concept</p>
          <p className="mt-2 text-sm leading-7 text-muted">
            Shared routines, progress visibility, and a light-weight rhythm that
            supports health and chess goals without turning into noise.
          </p>
        </div>
      </article>

      <article className="rounded-[2rem] border border-line bg-white/80 p-6 shadow-[var(--shadow-soft)]">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
          Mock status
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-foreground">
          {viewModel.duoMode?.title ?? "Duo Mode placeholder"}
        </h2>
        <p className="mt-4 text-sm leading-7 text-muted">
          {viewModel.duoMode?.description ?? "No Duo Mode summary in mock data yet."}
        </p>
        <div className="mt-6 rounded-[1.5rem] bg-surface-muted p-5">
          <p className="text-sm font-semibold text-foreground">Next action</p>
          <p className="mt-2 text-sm leading-7 text-muted">
            {viewModel.duoMode?.nextAction ?? "Define the duo invite flow."}
          </p>
        </div>
      </article>
    </section>
  );
}
