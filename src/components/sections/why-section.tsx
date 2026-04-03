import { whyReasons } from "@/content/site-content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function WhySection() {
  return (
    <section id="why" className="py-16 sm:py-20">
      <Container>
        <div className="section-reveal">
          <SectionHeading
            eyebrow="Why this exists"
            title="Chess improvement usually ignores the habits that decide whether progress sticks."
            description="Openings, tactics, and endgames matter. So do sleep, recovery, mobility, nutrition, and the people around you."
          />
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {whyReasons.map((reason, index) => (
            <article
              key={reason.title}
              className="section-reveal rounded-[1.7rem] border border-line bg-white/65 p-6 shadow-[var(--shadow-card)] backdrop-blur"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">{reason.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
