"use client";

import { z } from "zod";
import { useAgentContext, useFrontendTool } from "@copilotkit/react-core/v2";
import { COLUMNS, setTasks, useTasks } from "./taskStore";

export default function TaskBoard() {
  const tasks = useTasks();

  // Context in: the agent can read the current board.
  useAgentContext({
    description: "Current sprint tasks on the board",
    value: tasks,
  });

  // Tools out: the agent can ask the app to add a task.
  useFrontendTool({
    name: "addTask",
    description: "Add a new task to the sprint board",
    parameters: z.object({
      title: z.string(),
      status: z.enum(["To Do", "In Progress", "Done"]),
    }),
    handler: async ({ title, status }) => {
      setTasks((prev) => [
        ...prev,
        { id: Date.now(), title, status, blocked: false },
      ]);
      return `Added "${title}" to ${status}`;
    },
    render: ({ args, status }) => (
      <div className="tool-call">
        addTask → {args.title} · {status}
      </div>
    ),
  });

  return (
    <main className="board">
      <h1>Sprint Board</h1>
      <div className="columns">
        {COLUMNS.map((column) => (
          <section key={column} className="column">
            <h2>{column}</h2>
            {tasks
              .filter((task) => task.status === column)
              .map((task) => (
                <article key={task.id} className="card">
                  <span>{task.title}</span>
                  {task.blocked && <span className="badge">Blocked</span>}
                </article>
              ))}
          </section>
        ))}
      </div>
    </main>
  );
}
