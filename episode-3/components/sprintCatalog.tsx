"use client";

import { z } from "zod";
import {
  createCatalog,
  DynamicNumberSchema,
  DynamicStringListSchema,
  DynamicStringSchema,
} from "@copilotkit/a2ui-renderer";

export const SPRINT_CATALOG_ID = "sprint://catalog";

// The building blocks the agent may use, on top of the basic catalog
// (Text, Row, Column, Card, Button, ...).
export const sprintCatalog = createCatalog(
  {
    StatTile: {
      description: "A number with a label, e.g. how many tasks are in a column.",
      props: z.object({ label: DynamicStringSchema, value: DynamicNumberSchema }),
    },
    TaskList: {
      description: "A titled list of task names.",
      props: z.object({ title: DynamicStringSchema, items: DynamicStringListSchema }),
    },
  },
  {
    StatTile: ({ props }) => (
      <div className="a2ui-stat">
        <div className="a2ui-stat-value">{String(props.value ?? "")}</div>
        <div className="a2ui-stat-label">{String(props.label ?? "")}</div>
      </div>
    ),
    TaskList: ({ props }) => (
      <div className="a2ui-list">
        <div className="a2ui-list-title">{String(props.title ?? "")}</div>
        {(Array.isArray(props.items) ? props.items : []).map((item) => (
          <div key={String(item)} className="a2ui-list-item">
            {String(item)}
          </div>
        ))}
      </div>
    ),
  },
  { catalogId: SPRINT_CATALOG_ID, includeBasicCatalog: true },
);
