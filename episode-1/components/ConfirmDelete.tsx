"use client";

import { z } from "zod";
import { useHumanInTheLoop } from "@copilotkit/react-core/v2";
import { setTasks } from "./taskStore";

// Human in the loop: the agent must ask before it deletes anything.
export function ConfirmDelete() {
  useHumanInTheLoop({
    name: "deleteTask",
    description: "Delete a task from the board. The user must approve first.",
    parameters: z.object({ title: z.string() }),
    render: ({ args, status, respond, result }) => {
      if (status === "executing") {
        return (
          <div className="approval-card">
            <div className="approval-title">Delete “{args.title}”?</div>
            <div className="approval-actions">
              <button
                className="approval-yes"
                onClick={() => {
                  setTasks((prev) => prev.filter((t) => t.title !== args.title));
                  respond({ approved: true });
                }}
              >
                Delete
              </button>
              <button
                className="approval-no"
                onClick={() => respond({ approved: false })}
              >
                Keep it
              </button>
            </div>
          </div>
        );
      }
      if (status === "complete") {
        const approved = result.includes('"approved":true');
        const verb = approved ? "Deleted" : "Kept";
        return <div className="approval-done">{verb} “{args.title}”</div>;
      }
      return <div className="approval-done">Preparing request…</div>;
    },
  });
  return null;
}
