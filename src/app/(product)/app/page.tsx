import { DashboardOverview } from "@/features/dashboard/components/dashboard-overview";
import { getDashboardViewModel } from "@/server/services/dashboard-service";

export default async function DashboardPage() {
  const viewModel = await getDashboardViewModel();

  return (
    <DashboardOverview
      userName={viewModel.user.displayName}
      currentStepLabel={viewModel.onboarding.currentStepLabel}
      completionPercent={viewModel.onboarding.completionPercent}
      chessSummary={`${viewModel.chessProfile.focusArea}. ${viewModel.chessProfile.experienceBand}. Preferred environments: ${viewModel.chessProfile.platforms.join(", ")}.`}
      healthSummary={`Sleep: ${viewModel.healthProfile.sleepConsistency}. Mobility: ${viewModel.healthProfile.mobilityLevel}. Recovery: ${viewModel.healthProfile.stressRecovery}.`}
      matchingSummary={`Intent: ${viewModel.matchingPreferences.intents.join(", ")}. Availability: ${viewModel.matchingPreferences.availability.join(", ")}. Tone: ${viewModel.matchingPreferences.communicationStyle}.`}
      routineItems={viewModel.routineItems}
      duoMode={viewModel.duoMode}
    />
  );
}
