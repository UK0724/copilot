import {
  CopilotRuntime,
  BuiltInAgent,
  createCopilotRuntimeHandler,
} from "@copilotkit/runtime/v2";

const runtime = new CopilotRuntime({
  agents: {
    designer: new BuiltInAgent({ model: "google/gemini-3.5-flash" }),
  },
  // Dynamic-schema A2UI: the agent composes new UI layouts from the catalog on the fly
  a2ui: { agents: ["designer"], injectA2UITool: true },
});

const handler = createCopilotRuntimeHandler({
  runtime,
  basePath: "/api/copilotkit",
});

export const GET = (req: Request) => handler(req);
export const POST = (req: Request) => handler(req);
