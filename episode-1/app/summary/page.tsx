"use client";

import { CopilotKitProvider, CopilotSidebar } from "@copilotkit/react-core/v2";
import "@copilotkit/react-core/v2/styles.css";
import TaskBoard from "@/components/TaskBoard";
import { SprintSummary } from "@/components/SprintSummary";

export default function SummaryPage() {
  return (
    <CopilotKitProvider runtimeUrl="/api/copilotkit">
      <TaskBoard />
      <SprintSummary />
      <CopilotSidebar defaultOpen={false} width={620} />
    </CopilotKitProvider>
  );
}
