import { heroSignals, matchingSignals, routinePreview } from "@/content/site-content";
import { buttonClassNames } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-16 sm:pb-24 sm:pt-20">
      <Container className="relative">
        <div
          aria-hidden="true"
          className="board-aura board-matrix pointer-events-none absolute inset-x-8 top-0 -z-10 h-[32rem] rounded-[2.5rem] opacity-80 blur-3xl"
        />

        <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="section-reveal">
            <p className="inline-flex rounded-full border border-line bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand shadow-[var(--shadow-card)]">
              Health, performance, and meaningful matching for adult chess players
            </p>

            <h1 className="mt-7 max-w-3xl font-display text-5xl leading-none tracking-tight text-foreground sm:text-6xl lg:text-[5.25rem]">
              Play better. Live healthier. Connect deeper.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              Chess & Care helps you improve sleep, nutrition, fitness, mobility,
              and mental stability for better chess performance while finding
              training partners, accountability buddies, companions, and optional
              romantic matches that genuinely fit your life.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#waitlist" className={buttonClassNames()}>
                Join the waitlist
              </a>
              <a
                href="#how-it-works"
                className={buttonClassNames({ variant: "secondary" })}
              >
                See how it works
              </a>
            </div>

            <ul className="mt-10 grid gap-3 sm:grid-cols-3">
              {heroSignals.map((signal) => (
                <li
                  key={signal.title}
                  className="rounded-[1.5rem] border border-line bg-white/65 p-5 shadow-[var(--shadow-card)] backdrop-blur"
                >
                  <p className="text-sm font-semibold text-foreground">{signal.title}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{signal.copy}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="section-reveal delay-1">
            <div className="relative overflow-hidden rounded-[2rem] border border-line bg-white/50 p-4 shadow-[var(--shadow-soft)] backdrop-blur">
              <div aria-hidden="true" className="board-matrix absolute inset-0 opacity-30" />

              <div className="relative grid gap-4 sm:grid-cols-2">
                <article className="panel rounded-[1.6rem] p-6 sm:col-span-2">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
                        Performance rhythm
                      </p>
                      <h2 className="mt-3 text-2xl font-semibold text-foreground">
                        Better chess starts before the board.
                      </h2>
                    </div>
                    <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
                      Version 1
                    </span>
                  </div>

                  <div className="mt-6 grid gap-3">
                    {routinePreview.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-start gap-4 rounded-[1.2rem] border border-line bg-white/70 px-4 py-4"
                      >
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand" />
                        <div>
                          <p className="text-sm font-semibold text-foreground">{item.label}</p>
                          <p className="mt-1 text-sm leading-6 text-muted">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>

                <article className="panel rounded-[1.6rem] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
                    Matching signals
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {matchingSignals.map((signal) => (
                      <li
                        key={signal}
                        className="rounded-full border border-line bg-white/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-strong"
                      >
                        {signal}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-sm leading-6 text-muted">
                    Compatibility should account for rhythm, intent, and how people
                    actually want to improve, not just rating alone.
                  </p>
                </article>

                <article className="rounded-[1.6rem] bg-brand p-6 text-white shadow-[var(--shadow-card)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                    Duo Mode
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold">
                    Build routines together, not just conversations.
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-white/78">
                    Shared check-ins, habit streaks, and steady collaboration for
                    pairs who want momentum to last.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
