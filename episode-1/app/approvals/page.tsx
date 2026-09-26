"use client";

import { CopilotKitProvider, CopilotSidebar } from "@copilotkit/react-core/v2";
import "@copilotkit/react-core/v2/styles.css";
import TaskBoard from "@/components/TaskBoard";
import { ConfirmDelete } from "@/components/ConfirmDelete";

export default function ApprovalsPage() {
  return (
    <CopilotKitProvider runtimeUrl="/api/copilotkit">
      <TaskBoard />
      <ConfirmDelete />
      <CopilotSidebar defaultOpen={false} width={620} />
    </CopilotKitProvider>
  );
}
