import { steps } from "@/content/site-content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="border-y border-line/70 bg-[color:rgba(255,255,255,0.36)] py-16 sm:py-20"
    >
      <Container>
        <div className="section-reveal">
          <SectionHeading
            eyebrow="How it works"
            title="Clear onboarding first, deeper product layers later."
            description="Version 1 focuses on a polished front door: explain the idea well, capture intent clearly, and prepare the architecture for the real application."
          />
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {steps.map((item, index) => (
            <article
              key={item.step}
              className="section-reveal rounded-[1.8rem] border border-line bg-white/75 p-6 shadow-[var(--shadow-card)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">
                {item.step}
              </p>
              <h3 className="mt-5 text-2xl font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
