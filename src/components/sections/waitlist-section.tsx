import { waitlistHighlights } from "@/content/site-content";
import { Container } from "@/components/ui/container";
import { WaitlistForm } from "@/components/sections/waitlist-form";

export function WaitlistSection() {
  return (
    <section id="waitlist" className="pb-20 pt-16 sm:pb-24 sm:pt-20">
      <Container>
        <div className="overflow-hidden rounded-[2.35rem] border border-line bg-[linear-gradient(135deg,rgba(255,255,255,0.78),rgba(216,230,221,0.48))] p-6 shadow-[var(--shadow-soft)] sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="section-reveal">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand">
                Join the waitlist
              </p>
              <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight text-foreground sm:text-5xl">
                Be first to see Chess & Care in motion.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-muted sm:text-lg">
                Early access is for players, clubs, coaches, and curious supporters
                who want a more grounded way to connect performance, health, and
                meaningful fit.
              </p>

              <ul className="mt-8 space-y-4">
                {waitlistHighlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-sm leading-7 text-muted-strong"
                  >
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="section-reveal delay-1">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
