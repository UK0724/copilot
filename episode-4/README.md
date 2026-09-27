# Episode 4: Dynamic A2UI Schemas

Welcome to **Episode 4** of the **CopilotKit Complete Guide**!

In Episode 3, we used a fixed, pre-written layout JSON. In this episode, we unlock **Dynamic A2UI Schemas** where the AI agent acts as the UI designer, composing custom layout hierarchies in real-time from your component catalog.

---

## Fixed vs. Dynamic A2UI

| Feature | Fixed Schema (Ep. 3) | Dynamic Schema (Ep. 4) |
| :--- | :--- | :--- |
| **Layout Creator** | Developer (pre-authored JSON) | AI Agent (`designer`) |
| **`injectA2UITool`** | `false` | `true` |
| **Flexibility** | Deterministic, identical every time | Adaptive, custom layouts per prompt |
| **Safety** | Absolute layout control | Bound strictly to catalog primitives |

---

## Quick Start

```bash
cd episode-4
npm install
cp .env.example .env.local
# Set GOOGLE_API_KEY in .env.local
npm run dev
```

Ask the Copilot:
> *"Create a custom dashboard layout comparing blocked tasks against in-progress tasks."*
