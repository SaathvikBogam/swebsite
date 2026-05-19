import type { CollectionEntry } from "astro:content";

export type NoteEntry = CollectionEntry<"notes">;

const DEFAULT_SECTION_ORDER = [
  "Classical Mechanics",
  "Electromagnetism",
  "Quantum Mechanics",
  "Other",
];

export function groupNotesBySection(
  notes: NoteEntry[],
  sectionOrder: string[] = DEFAULT_SECTION_ORDER,
) {
  const groups = new Map<string, NoteEntry[]>();

  for (const note of notes) {
    const section = note.data.section;
    if (!groups.has(section)) groups.set(section, []);
    groups.get(section)!.push(note);
  }

  for (const items of groups.values()) {
    items.sort((a, b) => a.data.order - b.data.order);
  }

  const orderedSections = sectionOrder.filter((s) => groups.has(s));
  const extra = [...groups.keys()].filter((s) => !sectionOrder.includes(s)).sort();

  return [...orderedSections, ...extra].map((section) => ({
    section,
    notes: groups.get(section)!,
  }));
}
