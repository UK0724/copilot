# CopilotKit Complete Guide

Welcome to the companion repository for the **CopilotKit Complete Guide** video series.

This repository contains clean, modular, production-ready code examples demonstrating how to build intelligent, interactive AI Copilots with **CopilotKit (v2 API)**, **Next.js**, **React 19**, and modern LLMs.

---

## Series Episodes

| Episode | Title | Description | Code |
|:---:|---|---|:---:|
| **01** | **How CopilotKit Works** | Architecture walkthrough, context injection (`useAgentContext`), frontend tool execution (`useFrontendTool`), and AG-UI streaming with Gemini. | [📁 episode-1](./episode-1) |
| **02** | *Controlled Generative UI* | Rendering custom UI components (`useComponent`) directly in the chat stream. | *Coming soon* |
| **03** | *Declarative UI with A2UI* | Pre-authored layouts with structured dynamic data streaming. | *Coming soon* |
| **04** | *Dynamic A2UI Schemas* | Composing dynamic interfaces on the fly from an element catalog. | *Coming soon* |
| **05** | *Open Generative UI* | Sandboxed iframe charts and interactive widgets that call back into the app. | *Coming soon* |

---

## Quick Start (Episode 1)

To run the Episode 1 Sprint Board demo:

```bash
cd episode-1
npm install
cp .env.example .env.local
# Add your GOOGLE_API_KEY in .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to interact with the Sprint Board and test live Copilot queries.

---

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) (App Router) + React 19
- **Copilot Framework**: [CopilotKit](https://www.copilotkit.ai/) (`@copilotkit/react-core`, `@copilotkit/react-ui`, `@copilotkit/runtime` v2)
- **Model Provider**: Google Gemini (`google/gemini-flash-lite-latest` / `google/gemini-3.5-flash`)
- **Protocol**: AG-UI (Agent-User Interaction protocol)
