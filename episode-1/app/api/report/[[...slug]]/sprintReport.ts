import { defineTool } from "@copilotkit/runtime/v2";
import { createSurface, updateComponents, updateDataModel } from "@ag-ui/a2ui-toolkit";
import { z } from "zod";

const CATALOG = "sprint://catalog";

// Fixed schema: the layout is written here, once. The agent only sends the data.
const layout = [
  { id: "root", component: "Column", children: ["heading", "stats", "blocked"] },
  { id: "heading", component: "Text", text: "Sprint report", variant: "h3" },
  { id: "stats", component: "Row", children: ["todo", "doing", "done"] },
  { id: "todo", component: "StatTile", label: "To Do", value: { path: "/todo" } },
  { id: "doing", component: "StatTile", label: "In Progress", value: { path: "/doing" } },
  { id: "done", component: "StatTile", label: "Done", value: { path: "/done" } },
  { id: "blocked", component: "TaskList", title: "Blocked", items: { path: "/blocked" } },
];

export const showSprintReport = defineTool({
  name: "showSprintReport",
  description: "Show the sprint report: task counts per column and the blocked tasks.",
  parameters: z.object({
    todo: z.number(),
    doing: z.number(),
    done: z.number(),
    blocked: z.array(z.string()),
  }),
  execute: async (data) => ({
    a2ui_operations: [
      createSurface("sprint-report", CATALOG),
      updateComponents("sprint-report", layout),
      updateDataModel("sprint-report", data),
    ],
  }),
});
