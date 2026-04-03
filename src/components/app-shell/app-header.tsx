type AppHeaderProps = {
  userName: string;
  completionPercent: number;
};

export function AppHeader({ userName, completionPercent }: AppHeaderProps) {
  return (
    <header className="border-b border-line bg-[color:rgba(255,255,255,0.72)] backdrop-blur-xl">
      <div className="flex flex-col gap-4 px-5 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
            Product foundation
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-foreground">
            Welcome back, {userName}
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">
            This MVP product area is running on a demo session and mock repository
            layer so onboarding, dashboard, and future matching flows can evolve
            without locking the data model too early.
          </p>
        </div>

        <div className="rounded-[1.4rem] border border-line bg-white/80 px-5 py-4 shadow-[var(--shadow-card)]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
            Onboarding progress
          </p>
          <p className="mt-2 text-2xl font-semibold text-foreground">
            {completionPercent}%
          </p>
          <div className="mt-3 h-2.5 w-44 overflow-hidden rounded-full bg-surface-muted">
            <div
              className="h-full rounded-full bg-brand transition-[width]"
              style={{ width: `${completionPercent}%` }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
