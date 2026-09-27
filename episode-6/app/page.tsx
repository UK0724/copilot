import { useState } from "react";
import { CopilotKitProvider, CopilotSidebar } from "@copilotkit/react-core/v2";
import "@copilotkit/react-core/v2/styles.css";
import TaskBoard from "@/components/TaskBoard";
import { SprintSummary } from "@/components/SprintSummary";
import { sprintCatalog } from "@/components/sprintCatalog";
import { sandboxFunctions } from "@/components/CanvasTools";

type Mode = "controlled" | "declarative" | "open";

export default function Page() {
  const [mode, setMode] = useState<Mode>("controlled");

  return (
    <div className="spectrum-container">
      <nav className="spectrum-nav" style={{ padding: "12px 24px", background: "#111827", color: "#fff", display: "flex", gap: "16px", alignItems: "center" }}>
        <strong>Mode:</strong>
        <button onClick={() => setMode("controlled")} style={{ background: mode === "controlled" ? "#3b82f6" : "#374151", color: "#fff", border: "none", padding: "6px 14px", borderRadius: "6px", cursor: "pointer" }}>Controlled (useComponent)</button>
        <button onClick={() => setMode("declarative")} style={{ background: mode === "declarative" ? "#8b5cf6" : "#374151", color: "#fff", border: "none", padding: "6px 14px", borderRadius: "6px", cursor: "pointer" }}>Declarative (A2UI)</button>
        <button onClick={() => setMode("open")} style={{ background: mode === "open" ? "#ec4899" : "#374151", color: "#fff", border: "none", padding: "6px 14px", borderRadius: "6px", cursor: "pointer" }}>Open (Sandboxed Canvas)</button>
      </nav>

      <CopilotKitProvider
        runtimeUrl="/api/copilotkit"
        a2ui={mode === "declarative" ? { catalog: sprintCatalog } : undefined}
        openGenerativeUI={mode === "open" ? { sandboxFunctions } : undefined}
      >
        <TaskBoard />
        {mode === "controlled" && <SprintSummary />}
        <CopilotSidebar
          agentId={mode === "declarative" ? "designer" : mode === "open" ? "canvas" : "default"}
          defaultOpen={false}
          width={620}
        />
      </CopilotKitProvider>
    </div>
  );
}
