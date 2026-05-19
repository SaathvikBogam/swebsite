import { defineCollection, z } from "astro:content";

const journey = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    kind: z.enum(["course", "research", "reading", "event", "other"]).default("other"),
    tags: z.array(z.string()).default([]),
  }),
});

const notes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    /** Short blurb on the notes index card. */
    description: z.string(),
    /** Groups cards under a section heading (e.g. Electromagnetism). */
    section: z.string().default("Other"),
    /** Thumbnail path under public/ (e.g. /images/notes/foo.jpg). */
    image: z.string().optional(),
    /** Sort order within a section (lower first). */
    order: z.number().default(0),
    date: z.coerce.date().optional(),
    course: z.string().optional(),
    pdf: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { journey, notes };
