"use client";

import { z } from "zod";
import { useComponent } from "@copilotkit/react-core/v2";

type SummaryProps = { done: number; total: number; blocked: string[] };

// A component we designed. The agent can only choose it and fill in the data.
function SprintSummaryCard({ done, total, blocked }: Partial<SummaryProps>) {
  const percent = total ? Math.round(((done ?? 0) / total) * 100) : 0;
  return (
    <div className="summary-card">
      <div className="summary-title">Sprint summary</div>
      <div className="summary-progress">
        <div className="summary-bar" style={{ width: `${percent}%` }} />
      </div>
      <div className="summary-stat">
        {done ?? 0} of {total ?? 0} tasks done · {percent}%
      </div>
      {blocked && blocked.length > 0 && (
        <div className="summary-blocked">Blocked: {blocked.join(", ")}</div>
      )}
    </div>
  );
}

export function SprintSummary() {
  useComponent({
    name: "showSprintSummary",
    description: "Show a visual summary of the sprint: progress and blocked tasks.",
    parameters: z.object({
      done: z.number(),
      total: z.number(),
      blocked: z.array(z.string()),
    }),
    render: SprintSummaryCard,
  });
  return null;
}
