/** URL segment from a content collection entry `id` (strips `.md` / `.mdx`). */
export function contentSlug(id: string) {
  return id.replace(/\.mdx?$/, "");
}
