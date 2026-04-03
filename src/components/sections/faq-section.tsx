import { faqs } from "@/content/site-content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function FaqSection() {
  return (
    <section id="faq" className="py-16 sm:py-20">
      <Container>
        <div className="section-reveal">
          <SectionHeading
            eyebrow="FAQ"
            title="Straight answers for an early-stage product."
            description="The goal is clarity, not hype. Version 1 is a strong marketing site and waitlist foundation that can grow into the full experience later."
          />
        </div>

        <div className="mt-10 grid gap-4">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="section-reveal group rounded-[1.7rem] border border-line bg-white/70 px-6 py-5 shadow-[var(--shadow-card)]"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-6">
                <span className="text-lg font-semibold text-foreground">
                  {faq.question}
                </span>
                <span className="text-2xl leading-none text-brand transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
