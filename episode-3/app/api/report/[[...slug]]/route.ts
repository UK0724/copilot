import {
  CopilotRuntime,
  BuiltInAgent,
  createCopilotRuntimeHandler,
} from "@copilotkit/runtime/v2";
import { showSprintReport } from "./sprintReport";

const runtime = new CopilotRuntime({
  agents: {
    default: new BuiltInAgent({
      model: "google/gemini-flash-lite-latest",
      tools: [showSprintReport],
    }),
  },
  // Fixed-schema: injectA2UITool is false so the model can only call our pre-authored tool
  a2ui: { injectA2UITool: false },
});

const handler = createCopilotRuntimeHandler({
  runtime,
  basePath: "/api/report",
});

export const GET = (req: Request) => handler(req);
export const POST = (req: Request) => handler(req);
