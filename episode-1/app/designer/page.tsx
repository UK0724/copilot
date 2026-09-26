"use client";

import { CopilotKitProvider, CopilotSidebar } from "@copilotkit/react-core/v2";
import "@copilotkit/react-core/v2/styles.css";
import TaskBoard from "@/components/TaskBoard";
import { sprintCatalog } from "@/components/sprintCatalog";

export default function DesignerPage() {
  return (
    <CopilotKitProvider
      runtimeUrl="/api/copilotkit"
      a2ui={{ catalog: sprintCatalog }}
    >
      <TaskBoard />
      <CopilotSidebar agentId="designer" defaultOpen={false} width={620} />
    </CopilotKitProvider>
  );
}
