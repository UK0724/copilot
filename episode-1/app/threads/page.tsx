"use client";

import { useEffect, useState } from "react";
import { CopilotKitProvider, CopilotSidebar } from "@copilotkit/react-core/v2";
import "@copilotkit/react-core/v2/styles.css";
import TaskBoard from "@/components/TaskBoard";
import { ThreadList } from "@/components/ThreadList";

// Keep the thread id across reloads, so the conversation comes back.
function useSavedThreadId() {
  const [threadId, setThreadId] = useState<string | null>(null);
  useEffect(() => {
    setThreadId(localStorage.getItem("threadId") ?? crypto.randomUUID());
  }, []);
  const select = (id: string) => {
    localStorage.setItem("threadId", id);
    setThreadId(id);
  };
  return [threadId, select] as const;
}

export default function ThreadsPage() {
  const [threadId, selectThread] = useSavedThreadId();
  if (!threadId) return null;
  return (
    <CopilotKitProvider runtimeUrl="/api/copilotkit">
      <TaskBoard />
      <ThreadList
        activeId={threadId}
        onSelect={selectThread}
        onNew={() => selectThread(crypto.randomUUID())}
      />
      <CopilotSidebar threadId={threadId} defaultOpen={false} width={620} />
    </CopilotKitProvider>
  );
}
