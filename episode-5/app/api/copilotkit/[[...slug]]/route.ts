import {
  CopilotRuntime,
  BuiltInAgent,
  createCopilotRuntimeHandler,
} from "@copilotkit/runtime/v2";

const runtime = new CopilotRuntime({
  agents: {
    canvas: new BuiltInAgent({ model: "google/gemini-3.8-flash" }),
  },
  // Open generative UI: the canvas agent generates sandboxed visual widgets
  openGenerativeUI: { agents: ["canvas"] },
});

const handler = createCopilotRuntimeHandler({
  runtime,
  basePath: "/api/copilotkit",
});

export const GET = (req: Request) => handler(req);
export const POST = (req: Request) => handler(req);
