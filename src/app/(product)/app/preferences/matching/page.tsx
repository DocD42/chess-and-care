import { getDashboardViewModel } from "@/server/services/dashboard-service";

export default async function MatchingPreferencesPage() {
  const viewModel = await getDashboardViewModel();

  return (
    <section className="rounded-[2rem] border border-line bg-white/80 p-6 shadow-[var(--shadow-soft)]">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
        Matching preferences
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-foreground">
        Compatibility should be understandable before it becomes “smart”.
      </h2>
      <dl className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="rounded-[1.4rem] border border-line bg-white p-5">
          <dt className="text-sm font-semibold text-foreground">Intent</dt>
          <dd className="mt-2 text-sm leading-7 text-muted">
            {viewModel.matchingPreferences.intents.join(", ")}
          </dd>
        </div>
        <div className="rounded-[1.4rem] border border-line bg-white p-5">
          <dt className="text-sm font-semibold text-foreground">Availability</dt>
          <dd className="mt-2 text-sm leading-7 text-muted">
            {viewModel.matchingPreferences.availability.join(", ")}
          </dd>
        </div>
        <div className="rounded-[1.4rem] border border-line bg-white p-5">
          <dt className="text-sm font-semibold text-foreground">Communication style</dt>
          <dd className="mt-2 text-sm leading-7 text-muted">
            {viewModel.matchingPreferences.communicationStyle}
          </dd>
        </div>
        <div className="rounded-[1.4rem] border border-line bg-white p-5">
          <dt className="text-sm font-semibold text-foreground">Duo Mode interest</dt>
          <dd className="mt-2 text-sm leading-7 text-muted">
            {viewModel.matchingPreferences.duoModeInterest}
          </dd>
        </div>
      </dl>
    </section>
  );
}
