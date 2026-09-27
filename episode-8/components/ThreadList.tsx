"use client";

import { useThreads } from "@copilotkit/react-core/v2";

// Our own thread list: useThreads reads the runtime's in-memory threads.
export function ThreadList({ activeId, onSelect, onNew }: {
  activeId: string;
  onSelect: (id: string) => void;
  onNew: () => void;
}) {
  const { threads, refetchThreads } = useThreads({ agentId: "default" });
  return (
    <aside className="thread-list">
      <div className="thread-head">
        <span>Threads</span>
        <button onClick={() => { onNew(); refetchThreads(); }}>+ New</button>
      </div>
      {threads.map((t, i) => (
        <button
          key={t.id}
          className={t.id === activeId ? "thread active" : "thread"}
          onClick={() => onSelect(t.id)}
        >
          Conversation {threads.length - i}
        </button>
      ))}
      <button className="thread-refresh" onClick={() => refetchThreads()}>Refresh</button>
    </aside>
  );
}
