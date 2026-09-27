import { defineTool } from "@copilotkit/runtime/v2";
import { createSurface, updateComponents, updateDataModel } from "@ag-ui/a2ui-toolkit";
import { z } from "zod";
// Fixed layout: a JSON file, hand-written or exported from A2UI Composer.
import layout from "./sprint-report.layout.json";

const CATALOG = "sprint://catalog";

export const showSprintReport = defineTool({
  name: "showSprintReport",
  description: "Show the sprint report: task counts per column and the blocked tasks.",
  parameters: z.object({
    todo: z.number(),
    doing: z.number(),
    done: z.number(),
    blocked: z.array(z.string()),
  }),
  // The agent only supplies the data; the layout never changes.
  execute: async (data) => ({
    a2ui_operations: [
      createSurface("sprint-report", CATALOG),
      updateComponents("sprint-report", layout),
      updateDataModel("sprint-report", data),
    ],
  }),
});
