import { footerLinks } from "@/content/site-content";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="pb-10 pt-6">
      <Container>
        <div className="border-t border-line pt-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                Chess & Care
              </p>
              <p className="mt-3 max-w-md text-sm leading-7 text-muted">
                Play better. Live healthier. Connect deeper.
              </p>
            </div>

            <nav className="flex flex-wrap gap-4 text-sm text-muted">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href="mailto:hello@chessandcare.com"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Contact: hello@chessandcare.com
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
