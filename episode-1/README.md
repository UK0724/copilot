# Episode 1: How CopilotKit Works

Welcome to **Episode 1** of the **CopilotKit Complete Guide**!

This project demonstrates the core architectural concepts of [CopilotKit](https://www.copilotkit.ai/) using a live **Sprint Board** application built with **Next.js (App Router)** and **React 19**.

---

## What This Demo Covers

1. **Context In (`useAgentContext`)**:
   - Injects live React application state (tasks on the board) directly into the LLM's system context.
   - Enables the agent to answer questions like *"Which tasks are currently blocked?"* or *"What is in progress?"* without manual copy-pasting.

2. **Tools Out (`useFrontendTool`)**:
   - Exposes frontend actions with type-safe parameters defined using [Zod](https://zod.dev/).
   - Allows the agent to take actions directly inside your app (e.g., adding a task to "In Progress") and renders a custom visual chip in the chat feed.

3. **Copilot Runtime (`CopilotRuntime` + `BuiltInAgent`)**:
   - Backend API route (`/api/copilotkit/[[...slug]]/route.ts`) configured with Google Gemini (`google/gemini-flash-lite-latest`).
   - Uses the AG-UI streaming protocol to stream agent responses and tool executions in real-time.

---

## Architecture Diagram

```
┌────────────────────────────────────────────────────────┐
│                      Next.js Frontend                  │
│                                                        │
│  ┌──────────────────┐           ┌───────────────────┐  │
│  │   Sprint Board   │           │   CopilotSidebar  │  │
│  │   (TaskBoard)    │           │     (Chat UI)     │  │
│  └────────┬─────────┘           └─────────▲─────────┘  │
│           │                               │            │
│    useAgentContext                 useFrontendTool     │
│   (Live Board State)              (addTask mutation)   │
│           │                               │            │
│           ▼                               ▼            │
│  ┌──────────────────────────────────────────────────┐  │
│  │                 CopilotKitProvider               │  │
│  └──────────────────────────┬───────────────────────┘  │
└─────────────────────────────┼──────────────────────────┘
                              │ AG-UI Streaming Protocol
                              ▼
┌────────────────────────────────────────────────────────┐
│                   Next.js API Route                    │
│                (/api/copilotkit/route.ts)              │
│                                                        │
│               CopilotRuntime + BuiltInAgent            │
│                     (Google Gemini)                    │
└────────────────────────────────────────────────────────┘
```

---

## Getting Started

### 1. Prerequisites
- **Node.js** (v18 or higher recommended)
- **Google Gemini API Key** (free tier available at [Google AI Studio](https://aistudio.google.com/))

### 2. Installation
Install project dependencies:
```bash
npm install
```

### 3. Configure Environment Variables
Create a local `.env.local` file from the example:
```bash
cp .env.example .env.local
```

Open `.env.local` and insert your Gemini API key:
```env
GOOGLE_API_KEY=your_actual_gemini_api_key_here
```

### 4. Run Development Server
```bash
npm run dev
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

---

## Live Prompts to Try

Click the Copilot floating button on the bottom right to open the sidebar, then try:

1. **Context Query**:
   > *"Which tasks are currently blocked?"*
   >
   > *The agent reads the board state via `useAgentContext` and accurately reports the blocked items.*

2. **Frontend Tool Call**:
   > *"Add a task to fix the login bug and set its status to In Progress."*
   >
   > *The agent invokes `addTask` with arguments `{ title: "Fix the login bug", status: "In Progress" }`, which updates the board state and renders a tool execution badge.*

---

## Key Files & Code Reference

- [`components/TaskBoard.tsx`](./components/TaskBoard.tsx) — Implements `useAgentContext` and `useFrontendTool`.
- [`app/page.tsx`](./app/page.tsx) — Configures `CopilotKitProvider` and `CopilotSidebar`.
- [`app/api/copilotkit/[[...slug]]/route.ts`](./app/api/copilotkit/[[...slug]]/route.ts) — Server-side CopilotKit runtime handler using Gemini.
