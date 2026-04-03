import type { ReactNode } from "react";

import { AppHeader } from "@/components/app-shell/app-header";
import { AppSidebar } from "@/components/app-shell/app-sidebar";

type AppShellProps = {
  children: ReactNode;
  userName: string;
  completionPercent: number;
};

export function AppShell({
  children,
  userName,
  completionPercent,
}: AppShellProps) {
  return (
    <div className="min-h-screen lg:flex">
      <AppSidebar />
      <div className="min-w-0 flex-1">
        <AppHeader
          userName={userName}
          completionPercent={completionPercent}
        />
        <main className="px-5 py-8 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
