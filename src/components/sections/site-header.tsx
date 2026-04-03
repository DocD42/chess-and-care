import { navItems } from "@/content/site-content";
import { buttonClassNames } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[color:rgba(244,239,232,0.82)] backdrop-blur-xl">
      <Container>
        <div className="flex items-center justify-between gap-4 py-4">
          <a href="#top" className="flex items-center gap-3" aria-label="Chess & Care home">
            <span className="grid h-11 w-11 grid-cols-2 gap-1 rounded-2xl border border-line bg-white/75 p-2 shadow-[var(--shadow-card)]">
              <span className="rounded-[0.45rem] bg-brand" />
              <span className="rounded-[0.45rem] bg-white" />
              <span className="rounded-[0.45rem] bg-white" />
              <span className="rounded-[0.45rem] bg-accent" />
            </span>
            <span className="leading-tight">
              <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-muted">
                Chess & Care
              </span>
              <span className="block font-display text-xl text-foreground">
                Calm performance
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#waitlist" className={buttonClassNames()}>
            Join the waitlist
          </a>
        </div>
      </Container>
    </header>
  );
}
