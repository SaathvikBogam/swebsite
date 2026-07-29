import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import { unified } from "@astrojs/markdown-remark";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const markdownProcessor = unified({
  remarkPlugins: [remarkMath],
  rehypePlugins: [rehypeKatex],
});

export default defineConfig({
  site: "https://saathvikbogam.github.io/swebsite",
  base: "/swebsite/",
  srcDir: "./src",
  integrations: [mdx()],
  markdown: { processor: markdownProcessor },
});
