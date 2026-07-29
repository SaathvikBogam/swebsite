import { defineCollection, z } from "astro:content";

const journey = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    kind: z.enum(["course", "research", "reading", "event", "other"]).default("other"),
    tags: z.array(z.string()).default([]),
  }),
});

const notes = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.string().default("Other"),
    image: z.string().optional(),
    order: z.number().default(0),
    date: z.coerce.date().optional(),
    course: z.string().optional(),
    pdf: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { journey, notes };
