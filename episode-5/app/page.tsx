import { CopilotKitProvider, CopilotSidebar } from "@copilotkit/react-core/v2";
import "@copilotkit/react-core/v2/styles.css";
import TaskBoard from "@/components/TaskBoard";
import { sandboxFunctions } from "@/components/CanvasTools";

export default function Page() {
  return (
    <CopilotKitProvider
      runtimeUrl="/api/copilotkit"
      openGenerativeUI={{ sandboxFunctions }}
    >
      <TaskBoard />
      <CopilotSidebar agentId="canvas" defaultOpen={false} width={620} />
    </CopilotKitProvider>
  );
}
