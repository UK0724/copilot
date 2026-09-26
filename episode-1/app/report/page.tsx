"use client";

import { CopilotKitProvider, CopilotSidebar } from "@copilotkit/react-core/v2";
import "@copilotkit/react-core/v2/styles.css";
import TaskBoard from "@/components/TaskBoard";
import { sprintCatalog } from "@/components/sprintCatalog";

export default function ReportPage() {
  return (
    <CopilotKitProvider
      runtimeUrl="/api/report"
      a2ui={{ catalog: sprintCatalog }}
    >
      <TaskBoard />
      <CopilotSidebar defaultOpen={false} width={620} />
    </CopilotKitProvider>
  );
}
