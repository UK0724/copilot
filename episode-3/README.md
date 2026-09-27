# Episode 3: Declarative UI with A2UI (Fixed Schema)

Welcome to **Episode 3** of the **CopilotKit Complete Guide**!

In this episode, we dive into **Declarative Generative UI** powered by **A2UI** (Agent-to-User Interface). With Declarative UI, you define the layout structure once as clean JSON, and the AI agent streams only the dynamic data model to populate it.

---

## How A2UI Works

A2UI is built around three foundational pillars:
1. **Catalog**: The design system of UI primitives (`StatTile`, `TaskList`, standard text, buttons, and containers).
2. **Layout**: A declarative JSON hierarchy defining where components sit and how they bind to data via JSON Pointers (e.g. `/todo`, `/done`).
3. **Data Model**: The raw JSON payload streamed by the agent.

---

## Key Highlights in This Episode

- Pre-authored layouts created visually with **A2UI Composer** or handwritten in JSON (`sprint-report.layout.json`).
- `injectA2UITool: false`: Ensuring the model cannot hallucinate arbitrary layouts and must stick to the authorized report format.
- Returning three core A2UI operations on tool execution:
  - `createSurface`
  - `updateComponents`
  - `updateDataModel`

---

## Quick Start

```bash
cd episode-3
npm install
cp .env.example .env.local
# Set GOOGLE_API_KEY in .env.local
npm run dev
```

Ask the Copilot:
> *"Generate a sprint status report."*
