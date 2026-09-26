"use client";

import { CopilotKitProvider, CopilotSidebar } from "@copilotkit/react-core/v2";
import "@copilotkit/react-core/v2/styles.css";
import TaskBoard from "@/components/TaskBoard";

export default function Page() {
  return (
    <CopilotKitProvider runtimeUrl="/api/copilotkit">
      <TaskBoard />
      <CopilotSidebar defaultOpen={false} width={620} />
    </CopilotKitProvider>
  );
}
