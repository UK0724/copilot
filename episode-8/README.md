# Episode 8: Chat Threads & State Persistence

Welcome to **Episode 8** of the **CopilotKit Complete Guide**!

In this episode, we build a multi-session chat experience using **Chat Threads**. Users can start new conversations, switch between existing threads, and preserve conversation history across page refreshes.

---

## Key Features

1. **`useThreads` Hook**:
   - Queries the backend runtime for active conversation threads and handles thread creation.
2. **`threadId` Prop on `CopilotSidebar`**:
   - Isolates message history to the selected thread ID.
3. **Local Storage Synchronization**:
   - Persists the active `threadId` so users resume their active session seamlessly on reload.

---

## Quick Start

```bash
cd episode-8
npm install
cp .env.example .env.local
# Set GOOGLE_API_KEY in .env.local
npm run dev
```
