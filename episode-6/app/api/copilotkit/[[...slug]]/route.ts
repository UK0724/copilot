import {
  CopilotRuntime,
  BuiltInAgent,
  createCopilotRuntimeHandler,
} from "@copilotkit/runtime/v2";

const runtime = new CopilotRuntime({
  agents: {
    default: new BuiltInAgent({ model: "google/gemini-flash-lite-latest" }),
    designer: new BuiltInAgent({ model: "google/gemini-3.5-flash" }),
    canvas: new BuiltInAgent({ model: "google/gemini-3.8-flash" }),
  },
  a2ui: { agents: ["designer"], injectA2UITool: true },
  openGenerativeUI: { agents: ["canvas"] },
});

const handler = createCopilotRuntimeHandler({
  runtime,
  basePath: "/api/copilotkit",
});

export const GET = (req: Request) => handler(req);
export const POST = (req: Request) => handler(req);
