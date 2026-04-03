import { pillars } from "@/content/site-content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function PillarsSection() {
  return (
    <section id="pillars" className="py-16 sm:py-20">
      <Container>
        <div className="section-reveal">
          <SectionHeading
            eyebrow="Product pillars"
            title="Six connected pillars for healthier, steadier chess."
            description="The product is designed to feel coherent: better routines, better recovery, and better-fit relationships all feed the same goal."
          />
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.name}
              className="section-reveal rounded-[1.8rem] border border-line bg-surface p-6 shadow-[var(--shadow-card)]"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-2xl font-semibold text-foreground">{pillar.name}</h3>
                <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                  {pillar.tag}
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-muted">{pillar.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
