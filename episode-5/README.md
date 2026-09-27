# Episode 5: Open Generative UI

Welcome to **Episode 5** of the **CopilotKit Complete Guide**!

In this episode, we implement **Open Generative UI**. The AI generates arbitrary interactive visualizations (such as an SVG/HTML sprint burndown chart) in a secure, sandboxed iframe while communicating back with your Next.js application via `sandboxFunctions`.

---

## Security & Bidirectional State Bridge

Running AI-generated code directly in the main DOM is dangerous. CopilotKit isolates Open Generative UI in an iframe sandbox while exposing explicit helper functions through `sandboxFunctions`:
- `getSprintTasks()`: Allows the sandboxed chart to query live board tasks.
- `updateTaskStatus(id, status)`: Allows clicking chart elements to trigger state mutations in the parent React app.

---

## Quick Start

```bash
cd episode-5
npm install
cp .env.example .env.local
# Set GOOGLE_API_KEY in .env.local
npm run dev
```

Ask the Copilot:
> *"Draw a visual sprint burndown chart with our current tasks."*
