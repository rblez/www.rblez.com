#!/usr/bin/env node
import { build } from "velite";
import fs from "fs/promises";
import path from "path";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeStringify from "rehype-stringify";

const POSTS_DIR = "writing";
const INDEX_FILE = "index.html";

const layoutTemplate = (title, content, date) => `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} — Ray</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;1,6..72,300;1,6..72,400&family=Geist+Mono:wght@300;400&display=swap" rel="stylesheet" />
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            serif: ['Newsreader', 'Georgia', 'serif'],
            mono: ['Geist Mono', 'Courier New', 'monospace'],
          }
        }
      }
    }
  </script>
  <style>
    ::selection { background: #111; color: #fafaf8; }
    body { background: #fafaf8; }
    .prose { max-width: 100%; }
    .prose p { margin-bottom: 1.2em; line-height: 1.8; }
    .prose h2 { font-size: 1.4em; margin-top: 2em; margin-bottom: 0.8em; font-weight: 400; }
    .prose h3 { font-size: 1.2em; margin-top: 1.8em; margin-bottom: 0.6em; font-weight: 400; }
    .prose pre { background: #111; color: #fafaf8; padding: 1em; overflow-x: auto; font-family: 'Geist Mono', monospace; font-size: 0.85em; margin: 1.5em 0; }
    .prose code { font-family: 'Geist Mono', monospace; font-size: 0.9em; background: #f0efed; padding: 0.2em 0.4em; }
    .prose pre code { background: none; padding: 0; }
    .prose a { color: #111; text-decoration: underline; text-decoration-color: #bbb; text-underline-offset: 3px; }
    .prose a:hover { text-decoration-color: #111; }
    .prose ul, .prose ol { margin-left: 1.5em; margin-bottom: 1.2em; }
    .prose li { margin-bottom: 0.4em; }
    .prose blockquote { border-left: 2px solid #111; padding-left: 1em; margin: 1.5em 0; font-style: italic; }
    a { transition: color 0.15s; }
  </style>
</head>
<body class="font-serif text-[#111] antialiased">
  <main class="max-w-[560px] mx-auto px-6 py-20 sm:py-24">
    <a href="/" class="font-mono text-[11px] font-light tracking-[0.12em] uppercase text-[#999] hover:text-[#111] mb-10 block">← Back</a>
    <h1 class="text-[28px] font-normal leading-[1.3] mb-4">${title}</h1>
    <time class="font-mono text-[11px] font-light text-[#bbb] block mb-12">${date}</time>
    <article class="prose text-[17px] font-light leading-[1.8] text-[#1a1a1a]">
${content}
    </article>
  </main>
</body>
</html>`;

async function generateSite() {
  console.log("Building with Velite...");

  await build({ config: "./velite.config.js" });

  const { posts } = await import("../.velite/index.js");

  await fs.mkdir(POSTS_DIR, { recursive: true });

  const publishedPosts = posts
    .filter(p => p.published)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  for (const post of publishedPosts) {
    const mdContent = post.raw.replace(/^---[\s\S]*?---\n/, "");

    const result = await remark()
      .use(remarkGfm)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeSlug)
      .use(rehypePrettyCode, { theme: "github-dark" })
      .use(rehypeAutolinkHeadings, {
        behavior: "wrap",
        properties: {
          className: ["subheading-anchor"],
          ariaLabel: "Link to section",
        },
      })
      .use(rehypeStringify, { allowDangerousHtml: true })
      .process(mdContent);

    const html = layoutTemplate(
      post.title,
      String(result),
      new Date(post.date).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric"
      })
    );
    await fs.writeFile(path.join(POSTS_DIR, `${post.slug}.html`), html);
    console.log(`Generated: writing/${post.slug}.html`);
  }

  await generateIndex(publishedPosts);
  console.log("Done!");
}

async function generateIndex(posts) {
  const postList = posts.map(post => {
    const date = new Date(post.date).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric"
    });
    return `
      <li class="post-row flex items-baseline gap-4 py-[10px]">
        <a href="/writing/${post.slug}.html" class="text-[16px] font-normal flex-1 hover:text-[#555]">${post.title}</a>
        <span class="font-mono text-[11px] font-light text-[#bbb] shrink-0">${date}</span>
      </li>`;
  }).join("");

  const indexHtml = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ray</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;1,6..72,300;1,6..72,400&family=Geist+Mono:wght@300;400&display=swap" rel="stylesheet" />
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            serif: ['Newsreader', 'Georgia', 'serif'],
            mono: ['Geist Mono', 'Courier New', 'monospace'],
          }
        }
      }
    }
  </script>
  <style>
    ::selection { background: #111; color: #fafaf8; }
    body { background: #fafaf8; }
    .post-row:first-child { border-top: 1px solid #f0efed; }
    .post-row { border-bottom: 1px solid #f0efed; }
    a { transition: color 0.15s; }
  </style>
</head>
<body class="font-serif text-[#111] antialiased">

  <main class="max-w-[560px] mx-auto px-6 py-20 sm:py-24">

    <p class="text-[17px] font-normal tracking-[0.01em] mb-10">Ray</p>

    <p class="text-[17px] font-light leading-[1.8] text-[#1a1a1a] mb-12">
      Soy desarrollador, construyo cosas en la web desde Cuba.
      Full-stack con JavaScript/TypeScript, PostgreSQL y Python, aprendiendo Rust.
      Creo herramientas para resolver mis propios problemas y,
      cuando tienen sentido, las publico.
      <br /><br />
      Ahora mismo estoy construyendo
      <a href="#" target="_blank" rel="noopener"
        class="underline decoration-[#bbb] underline-offset-[3px] hover:decoration-[#111]">Crow Code</a>
      — un asistente de código con IA —,
      <a href="#" class="underline decoration-[#bbb] underline-offset-[3px] hover:decoration-[#111]">Tiendly</a>
      — storefronts conectados a WhatsApp —, y
      <a href="#" class="underline decoration-[#bbb] underline-offset-[3px] hover:decoration-[#111]">Auser</a>
      — una capa anti-bot para el edge.
    </p>

    <p class="font-mono text-[11px] font-light tracking-[0.12em] uppercase text-[#999] mb-5">Writing</p>

    <ul class="mb-14">
${postList}
    </ul>

    <p class="font-mono text-[11px] font-light tracking-[0.12em] uppercase text-[#999] mb-5">Links</p>

    <div class="flex flex-wrap gap-6">
      <a href="https://github.com/rblez" target="_blank" rel="noopener"
        class="font-mono text-[12px] font-light text-[#888] hover:text-[#111]">GitHub</a>
      <a href="https://x.com/rblezX" target="_blank" rel="noopener"
        class="font-mono text-[12px] font-light text-[#888] hover:text-[#111]">X / Twitter</a>
      <a href="mailto:hello@rblez.com" class="font-mono text-[12px] font-light text-[#888] hover:text-[#111]">Email</a>
      <a href="https://rblez.bsky.social" target="_blank" rel="noopener"
        class="font-mono text-[12px] font-light text-[#888] hover:text-[#111]">Bluesky</a>
    </div>

  </main>

</body>
</html>`;

  await fs.writeFile(INDEX_FILE, indexHtml);
  console.log("Generated: index.html");
}

generateSite().catch(console.error);
