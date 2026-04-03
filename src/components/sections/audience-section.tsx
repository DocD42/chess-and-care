import { audiences } from "@/content/site-content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function AudienceSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="section-reveal">
          <SectionHeading
            eyebrow="Who it is for"
            title="Made for adults who care about both their chess and the quality of their routines."
            description="Chess & Care is not limited to one type of player. It is for people who want improvement to feel sustainable and human."
          />
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {audiences.map((audience, index) => (
            <article
              key={audience.title}
              className="section-reveal rounded-[1.8rem] border border-line bg-white/70 p-6 shadow-[var(--shadow-card)]"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <h3 className="text-2xl font-semibold text-foreground">{audience.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{audience.description}</p>
              <ul className="mt-5 space-y-3">
                {audience.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-muted-strong">
                    <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
