# Episode 7: Human-in-the-Loop

Welcome to **Episode 7** of the **CopilotKit Complete Guide**!

Autonomous agents can perform incredible actions, but destructive actions (deleting data, making financial transactions, sending emails) require a human safety gate. In this episode, we implement **Human-in-the-Loop** using `useHumanInTheLoop`.

---

## How Human-in-the-Loop Works

1. The user asks the agent to delete a task: *"Delete the Fix login bug task"*.
2. Instead of executing immediately, the agent triggers the `useHumanInTheLoop` tool and **pauses execution in the `executing` status**.
3. A confirmation modal (`ConfirmDelete.tsx`) renders inside the chat with **Delete** and **Keep it** buttons.
4. When the user clicks **Delete**, the frontend runs the mutation, sends `{ approved: true }` back through `respond()`, and the agent marks the run complete.
5. If the user clicks **Keep it**, the agent receives `{ approved: false }` and safely aborts.

---

## Quick Start

```bash
cd episode-7
npm install
cp .env.example .env.local
# Set GOOGLE_API_KEY in .env.local
npm run dev
```

Ask the Copilot:
> *"Delete the Setup database task."*
