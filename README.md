# CopilotKit Complete Guide

Welcome to the companion repository for the **CopilotKit Complete Guide** video series.

This repository contains clean, modular, production-ready code examples demonstrating how to build intelligent, interactive AI Copilots with **CopilotKit (v2 API)**, **Next.js**, **React 19**, and modern LLMs.

---

## Series Episodes

| Episode | Title | Description | Code |
|:---:|---|---|:---:|
| **01** | **How CopilotKit Works** | Architecture walkthrough, context injection (`useAgentContext`), frontend tool execution (`useFrontendTool`), and AG-UI streaming with Gemini. | [📁 episode-1](./episode-1) |
| **02** | **Controlled Generative UI** | Rendering custom React UI components (`useComponent`) directly in the chat stream with strict schema validation. | [📁 episode-2](./episode-2) |
| **03** | **Declarative UI (A2UI Fixed Schema)** | Pre-authored layouts with structured dynamic data streaming using Google A2UI. | [📁 episode-3](./episode-3) |
| **04** | **Dynamic A2UI Schemas** | Dynamic layout composition on the fly from an element catalog (`injectA2UITool`). | [📁 episode-4](./episode-4) |
| **05** | **Open Generative UI** | Sandboxed iframe charts and interactive widgets that call back into the parent app state. | [📁 episode-5](./episode-5) |
| **06** | **The Generative UI Spectrum** | Side-by-side comparison of Controlled, Declarative, and Open Generative UI paradigms. | [📁 episode-6](./episode-6) |
| **07** | **Human-in-the-Loop** | Approval gates (`useHumanInTheLoop`) for safe agent actions and confirmations. | [📁 episode-7](./episode-7) |
| **08** | **Chat Threads & Persistence** | In-memory and persistent threads with `useThreads` and multi-conversation switching. | [📁 episode-8](./episode-8) |

---

## Quick Start

Every episode folder is a self-contained Next.js application. To run any episode (e.g., Episode 2):

```bash
cd episode-2
npm install
cp .env.example .env.local
# Add your GOOGLE_API_KEY to .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to interact with the demo.

---

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) (App Router) + React 19
- **Copilot Framework**: [CopilotKit](https://www.copilotkit.ai/) (`@copilotkit/react-core`, `@copilotkit/react-ui`, `@copilotkit/runtime` v2)
- **Model Provider**: Google Gemini (`google/gemini-flash-lite-latest`, `google/gemini-3.5-flash`)
- **Protocol**: AG-UI (Agent-User Interaction protocol)
- **Declarative UI**: Google A2UI (Agent-to-User Interface)
