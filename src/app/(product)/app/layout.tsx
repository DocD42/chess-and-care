import type { ReactNode } from "react";

import { AppShell } from "@/components/app-shell/app-shell";
import { getAppShellViewModel } from "@/server/services/dashboard-service";

export default async function ProductLayout({
  children,
}: {
  children: ReactNode;
}) {
  const shellViewModel = await getAppShellViewModel();

  return (
    <AppShell
      userName={shellViewModel.user.displayName}
      completionPercent={shellViewModel.onboarding.completionPercent}
    >
      {children}
    </AppShell>
  );
}
