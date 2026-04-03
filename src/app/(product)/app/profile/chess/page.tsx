import { getDashboardViewModel } from "@/server/services/dashboard-service";

export default async function ChessProfilePage() {
  const viewModel = await getDashboardViewModel();

  return (
    <section className="rounded-[2rem] border border-line bg-white/80 p-6 shadow-[var(--shadow-soft)]">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
        Chess profile
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-foreground">
        Seeded mock data, ready for later editing flows.
      </h2>
      <dl className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="rounded-[1.4rem] border border-line bg-white p-5">
          <dt className="text-sm font-semibold text-foreground">Focus area</dt>
          <dd className="mt-2 text-sm leading-7 text-muted">
            {viewModel.chessProfile.focusArea}
          </dd>
        </div>
        <div className="rounded-[1.4rem] border border-line bg-white p-5">
          <dt className="text-sm font-semibold text-foreground">Experience band</dt>
          <dd className="mt-2 text-sm leading-7 text-muted">
            {viewModel.chessProfile.experienceBand}
          </dd>
        </div>
        <div className="rounded-[1.4rem] border border-line bg-white p-5">
          <dt className="text-sm font-semibold text-foreground">Time controls</dt>
          <dd className="mt-2 text-sm leading-7 text-muted">
            {viewModel.chessProfile.preferredTimeControls.join(", ")}
          </dd>
        </div>
        <div className="rounded-[1.4rem] border border-line bg-white p-5">
          <dt className="text-sm font-semibold text-foreground">Platforms</dt>
          <dd className="mt-2 text-sm leading-7 text-muted">
            {viewModel.chessProfile.platforms.join(", ")}
          </dd>
        </div>
      </dl>
    </section>
  );
}
