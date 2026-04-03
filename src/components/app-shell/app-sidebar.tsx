"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { href: "/app", label: "Dashboard" },
  { href: "/app/onboarding", label: "Onboarding" },
  { href: "/app/profile", label: "Profile" },
  { href: "/app/profile/chess", label: "Chess profile" },
  { href: "/app/profile/health", label: "Health profile" },
  { href: "/app/preferences/matching", label: "Matching preferences" },
  { href: "/app/duo", label: "Duo mode" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/app") {
    return pathname === href;
  }

  return pathname.startsWith(href);
}

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="border-b border-line bg-[color:rgba(255,255,255,0.66)] px-5 py-5 backdrop-blur-xl lg:min-h-screen lg:w-[19rem] lg:border-b-0 lg:border-r lg:px-6 lg:py-8">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 grid-cols-2 gap-1 rounded-2xl border border-line bg-white p-2 shadow-[var(--shadow-card)]">
          <span className="rounded-[0.45rem] bg-brand" />
          <span className="rounded-[0.45rem] bg-white" />
          <span className="rounded-[0.45rem] bg-white" />
          <span className="rounded-[0.45rem] bg-accent" />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
            Chess & Care
          </p>
          <p className="font-display text-xl text-foreground">Product MVP</p>
        </div>
      </div>

      <nav className="mt-8 grid gap-2">
        {navigationItems.map((item) => {
          const active = isActive(pathname, item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-[1.15rem] px-4 py-3 text-sm font-semibold transition-colors ${
                active
                  ? "bg-brand text-white shadow-[var(--shadow-card)]"
                  : "text-muted hover:bg-white/80 hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-8 rounded-[1.5rem] border border-line bg-white/80 p-4 shadow-[var(--shadow-card)]">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
          Demo mode
        </p>
        <p className="mt-3 text-sm leading-7 text-muted">
          Routes, services, and repositories are wired for a future real backend.
          Today they read from seeded mock state.
        </p>
        <Link
          href="/"
          className="mt-4 inline-flex text-sm font-semibold text-brand transition-colors hover:text-brand-strong"
        >
          Back to marketing site
        </Link>
      </div>
    </aside>
  );
}
