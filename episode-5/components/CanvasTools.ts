"use client";

import { z } from "zod";
import { setTasks, type Status } from "./taskStore";

// Functions the agent-generated UI may call from inside its sandboxed iframe.
export const sandboxFunctions = [
  {
    name: "moveTask",
    description: "Move a task on the Sprint Board to another column.",
    parameters: z.object({
      title: z.string(),
      status: z.enum(["To Do", "In Progress", "Done"]),
    }),
    handler: async ({ title, status }: { title: string; status: Status }) => {
      setTasks((prev) => prev.map((t) => (t.title === title ? { ...t, status } : t)));
      return `Moved "${title}" to ${status}`;
    },
  },
];
