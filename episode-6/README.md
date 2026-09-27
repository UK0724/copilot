# Episode 6: Choosing Between the Three Generative UI Paradigms

Welcome to **Episode 6** of the **CopilotKit Complete Guide**!

In this episode, we evaluate the complete **Generative UI Spectrum** side-by-side on the same application.

---

## The Decision Matrix

| Dimension | 1. Controlled UI (`useComponent`) | 2. Declarative UI (A2UI) | 3. Open Generative UI |
| :--- | :--- | :--- | :--- |
| **Who designs the UI?** | Developer in React | Developer / Designer in Catalog | AI Model in sandbox |
| **Output Format** | Structured Zod JSON props | A2UI JSON Operations | HTML / SVG / JS inside Iframe |
| **Design Consistency** | 100% pixel-perfect brand match | 100% matched to component catalog | Variable / exploratory |
| **Security Risk** | Zero (standard React component) | Zero (standard React catalog components) | Isolated in sandbox iframe |
| **Token Cost & Latency** | Lowest | Medium | Higher |
| **Ideal Use Case** | Metric cards, forms, tables, confirmations | Reports, dashboards, variable data layouts | Dynamic charts, custom diagrams, calculators |

---

## Quick Start

```bash
cd episode-6
npm install
cp .env.example .env.local
# Set GOOGLE_API_KEY in .env.local
npm run dev
```
