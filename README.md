# Personal site — IISER Bhopal / physics

Static site built with [Astro](https://astro.build/): a **Journey** timeline (Markdown in `src/content/journey/`) and **Notes** (Markdown with KaTeX math in `src/content/notes/`).

## Quick start

```bash
cd iiser-journey
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:4321`).

Set your real URL in `astro.config.mjs` (`site:`) before deploying.

## LaTeX notes on the site

Pick one or combine:

1. **PDF (recommended for full `.tex` documents)**  
   Compile locally (`latexmk`, `tectonic`, or your editor). Copy the PDF to `public/notes/pdfs/your-file.pdf`. In the note’s frontmatter (in `src/content/notes/some-page.md`), add:
   ```yaml
   pdf: "/notes/pdfs/your-file.pdf"
   ```
   The note page will show a “Download PDF” link; you can still write a short summary in Markdown below.

2. **Markdown + math**  
   Write in `.md` / `.mdx` under `src/content/notes/`. Use `$...$` and `$$...$$` for math (KaTeX). Good for problem sets, chapter summaries, or re-typed highlights.

3. **Pandoc (optional)**  
   Convert `.tex` to Markdown for a first draft (often needs cleanup):
   ```bash
   pandoc lecture.tex -o lecture.md --standalone
   ```
   Then move the result into `src/content/notes/` and fix figures/paths.

## Journey entries

Add a new file under `src/content/journey/` with frontmatter:

```yaml
---
title: "Short title"
date: 2026-05-01
kind: course   # course | research | reading | event | other
tags: ["QM", "semester 4"]
---

Your narrative here.
```

## Deploy

- **GitHub Pages / Cloudflare Pages / Netlify:** connect the repo, build command `npm run build`, output directory `dist`.
- Keep the repo **private** if notes must not be public; or only commit PDFs you are comfortable sharing.

## Privacy

This template includes no analytics. Do not commit graded assignments or solutions if your institute’s academic-integrity rules restrict sharing.
