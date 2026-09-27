"use client";

import { useSyncExternalStore } from "react";

export type Status = "To Do" | "In Progress" | "Done";
export type Task = { id: number; title: string; status: Status; blocked: boolean };

export const COLUMNS: Status[] = ["To Do", "In Progress", "Done"];

const SEED_TASKS: Task[] = [
  { id: 1, title: "Design settings page", status: "To Do", blocked: false },
  { id: 2, title: "Payment webhook retries", status: "To Do", blocked: true },
  { id: 3, title: "Migrate users table", status: "In Progress", blocked: true },
  { id: 4, title: "Dark mode toggle", status: "In Progress", blocked: false },
  { id: 5, title: "Signup form validation", status: "Done", blocked: false },
  { id: 6, title: "Update README", status: "Done", blocked: false },
];

// A tiny shared store so every page and hook sees the same board.
let tasks = SEED_TASKS;
const listeners = new Set<() => void>();

export function setTasks(update: (prev: Task[]) => Task[]) {
  tasks = update(tasks);
  listeners.forEach((listener) => listener());
}

export function useTasks() {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    () => tasks,
    () => tasks,
  );
}
