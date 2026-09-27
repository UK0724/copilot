# Episode 2: Controlled Generative UI

Welcome to **Episode 2** of the **CopilotKit Complete Guide**!

In this episode, we explore **Controlled Generative UI** using [CopilotKit](https://www.copilotkit.ai/). Instead of letting an LLM generate unstructured or hallucinated HTML, Controlled Generative UI restricts the agent to rendering exact, pre-built React components with strictly typed props.

---

## The Mental Model: The Generative UI Spectrum

CopilotKit provides three distinct approaches to Generative UI:
1. **Controlled UI (This Episode)**: You write the React component. The AI only provides the structured props and triggers the render.
2. **Declarative UI (Episodes 3 & 4)**: UI described as structured data (A2UI) rendered by a dynamic layout engine.
3. **Open Generative UI (Episode 5)**: Code generation in sandboxed iframes.

Controlled UI is the **safest, fastest, and most design-consistent** approach for production enterprise apps.

---

## Key Concepts Covered

1. **Building Custom React Components**:
   - `SprintSummaryCard`: A clean React card displaying total tasks, completion percentage bar, and blocked task badges.
2. **The `useComponent` Hook**:
   - Exposes the React component to the agent as an executable tool.
   - Defines exact parameters using **Zod** (`done`, `total`, `blocked`).
3. **Rendering in Chat**:
   - The LLM streams structured arguments that seamlessly populate the component directly in the chat feed.

---

## Quick Start

```bash
cd episode-2
npm install
cp .env.example .env.local
# Set GOOGLE_API_KEY in .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and ask the assistant:
> *"Can you show me a summary of the current sprint progress?"*
