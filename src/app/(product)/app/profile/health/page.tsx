import { getDashboardViewModel } from "@/server/services/dashboard-service";

export default async function HealthProfilePage() {
  const viewModel = await getDashboardViewModel();

  return (
    <section className="rounded-[2rem] border border-line bg-white/80 p-6 shadow-[var(--shadow-soft)]">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
        Health profile
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-foreground">
        The performance baseline behind better chess decisions.
      </h2>
      <dl className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="rounded-[1.4rem] border border-line bg-white p-5">
          <dt className="text-sm font-semibold text-foreground">Sleep consistency</dt>
          <dd className="mt-2 text-sm leading-7 text-muted">
            {viewModel.healthProfile.sleepConsistency}
          </dd>
        </div>
        <div className="rounded-[1.4rem] border border-line bg-white p-5">
          <dt className="text-sm font-semibold text-foreground">Nutrition style</dt>
          <dd className="mt-2 text-sm leading-7 text-muted">
            {viewModel.healthProfile.nutritionStyle}
          </dd>
        </div>
        <div className="rounded-[1.4rem] border border-line bg-white p-5">
          <dt className="text-sm font-semibold text-foreground">Mobility level</dt>
          <dd className="mt-2 text-sm leading-7 text-muted">
            {viewModel.healthProfile.mobilityLevel}
          </dd>
        </div>
        <div className="rounded-[1.4rem] border border-line bg-white p-5">
          <dt className="text-sm font-semibold text-foreground">Stress recovery</dt>
          <dd className="mt-2 text-sm leading-7 text-muted">
            {viewModel.healthProfile.stressRecovery}
          </dd>
        </div>
      </dl>
    </section>
  );
}
