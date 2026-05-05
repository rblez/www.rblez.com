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
        <a href="/writing/${post.slug}.html" class="text-[16px] font-normal flex-1 hover:text-[#555] dark:hover:text-[#ccc]">${post.title}</a>
        <span class="font-mono text-[11px] font-light text-[#bbb] dark:text-[#666] shrink-0">${date}</span>
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
      darkMode: 'class',
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
    .dark ::selection { background: #fafaf8; color: #111; }
    .post-row:first-child { border-top: 1px solid #f0efed; }
    .post-row { border-bottom: 1px solid #f0efed; }
    a { transition: color 0.15s; }
    #lang-toggle, #theme-toggle { background: none; border: none; cursor: pointer; padding: 0; display: inline-flex; align-items: center; }
    .dark .post-row:first-child { border-top-color: #333; }
    .dark .post-row { border-bottom-color: #333; }
  </style>
  <script>
    const translations = {
      es: {
        title: "Ray",
        intro: "Soy desarrollador, construyo cosas en la web desde Cuba. Full-stack con JavaScript/TypeScript, PostgreSQL y Python, aprendiendo Rust. Creo herramientas para resolver mis propios problemas y, cuando tienen sentido, las publico.",
        building: "Ahora mismo estoy construyendo",
        tiendlyDesc: "— tu tienda digital en minutos. Crea tu menú o tienda online y recibe pedidos por WhatsApp. Sin complicaciones, sin comisiones. — y",
        auserDesc: "— universal memory async and organized for AI agents.",
        writing: "Writing",
        links: "Links",
        email: "Email"
      },
      en: {
        title: "Ray",
        intro: "I'm a developer, building things on the web from Cuba. Full-stack with JavaScript/TypeScript, PostgreSQL and Python, learning Rust. I build tools to solve my own problems and, when they make sense, I publish them.",
        building: "Right now I'm building",
        tiendlyDesc: "— your digital store in minutes. Create your menu or online store and receive orders via WhatsApp. No complications, no commissions. — and",
        auserDesc: "— universal memory async and organized for AI agents.",
        writing: "Writing",
        links: "Links",
        email: "Email"
      }
    };
    let currentLang = 'es';
    let isDark = localStorage.getItem('theme') === 'dark';
    if(isDark) document.documentElement.classList.add('dark');
    const sunIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
    const moonIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    function updateContent() {
      const t = translations[currentLang];
      document.querySelector('main > div:first-child > p').textContent = t.title;
      const introP = document.querySelectorAll('main > p')[0];
      introP.innerHTML = t.intro + '<br /><br />' + t.building + ' <a href="https://tiendly.lat" target="_blank" rel="noopener" class="underline decoration-[#bbb] dark:decoration-[#666] underline-offset-[3px] hover:decoration-[#111] dark:hover:decoration-[#fafaf8]">Tiendly</a> ' + t.tiendlyDesc + ' <a href="https://auser.rblez.com" target="_blank" rel="noopener" class="underline decoration-[#bbb] dark:decoration-[#666] underline-offset-[3px] hover:decoration-[#111] dark:hover:decoration-[#fafaf8]">Auser</a> ' + t.auserDesc;
      document.querySelectorAll('main > p')[1].textContent = t.writing;
      document.querySelectorAll('main > p')[2].textContent = t.links;
      const emailLink = document.querySelector('a[href^="mailto:"]');
      if(emailLink) emailLink.textContent = t.email;
      document.getElementById('lang-toggle').textContent = currentLang === 'es' ? 'EN' : 'ES';
      document.getElementById('theme-toggle').innerHTML = isDark ? sunIcon : moonIcon;
    }
    document.getElementById('theme-toggle').addEventListener('click', () => {
      isDark = !isDark;
      document.documentElement.classList.toggle('dark', isDark);
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateContent();
    });
    document.getElementById('lang-toggle').addEventListener('click', () => {
      currentLang = currentLang === 'es' ? 'en' : 'es';
      updateContent();
    });
    updateContent();
  </script>
</head>
<body class="font-serif text-[#111] dark:text-[#fafaf8] bg-[#fafaf8] dark:bg-[#111] antialiased transition-colors duration-300">

  <main class="max-w-[560px] mx-auto px-6 py-20 sm:py-24">

    <div class="flex items-center gap-3 mb-10">
      <img src="/isotipo.svg" alt="" class="w-7 h-7 dark:invert" />
      <p class="text-[17px] font-normal tracking-[0.01em]">Ray</p>
    </div>

    <p class="text-[17px] font-light leading-[1.8] text-[#1a1a1a] dark:text-[#f0efed] mb-12">
      Soy desarrollador, construyo cosas en la web desde Cuba.
      Full-stack con JavaScript/TypeScript, PostgreSQL y Python, aprendiendo Rust.
      Creo herramientas para resolver mis propios problemas y,
      cuando tienen sentido, las publico.
      <br /><br />
      Ahora mismo estoy construyendo
      <a href="https://tiendly.lat" target="_blank" rel="noopener"
        class="underline decoration-[#bbb] dark:decoration-[#666] underline-offset-[3px] hover:decoration-[#111] dark:hover:decoration-[#fafaf8]">Tiendly</a>
      — tu tienda digital en minutos. Crea tu menú o tienda online y recibe pedidos por WhatsApp. Sin complicaciones, sin comisiones. — y
      <a href="https://auser.rblez.com" target="_blank" rel="noopener"
        class="underline decoration-[#bbb] dark:decoration-[#666] underline-offset-[3px] hover:decoration-[#111] dark:hover:decoration-[#fafaf8]">Auser</a>
      — universal memory async and organized for AI agents.
    </p>

    <p class="font-mono text-[11px] font-light tracking-[0.12em] uppercase text-[#999] dark:text-[#888] mb-5">Writing</p>

    <ul class="mb-14">
${postList}
    </ul>

    <p class="font-mono text-[11px] font-light tracking-[0.12em] uppercase text-[#999] dark:text-[#888] mb-5">Links</p>

    <div class="flex flex-wrap gap-6 items-center">
      <a href="https://github.com/rblez" target="_blank" rel="noopener"
        class="font-mono text-[12px] font-light text-[#888] dark:text-[#999] hover:text-[#111] dark:hover:text-[#fafaf8]">GitHub</a>
      <a href="https://x.com/rblezX" target="_blank" rel="noopener"
        class="font-mono text-[12px] font-light text-[#888] dark:text-[#999] hover:text-[#111] dark:hover:text-[#fafaf8]">X / Twitter</a>
      <a href="mailto:hello@rblez.com" class="font-mono text-[12px] font-light text-[#888] dark:text-[#999] hover:text-[#111] dark:hover:text-[#fafaf8]">Email</a>
      <a href="https://rblez.bsky.social" target="_blank" rel="noopener"
        class="font-mono text-[12px] font-light text-[#888] dark:text-[#999] hover:text-[#111] dark:hover:text-[#fafaf8]">Bluesky</a>
      <button id="lang-toggle" class="font-mono text-[12px] font-light text-[#888] dark:text-[#999] hover:text-[#111] dark:hover:text-[#fafaf8]">EN</button>
      <button id="theme-toggle" class="font-mono text-[12px] font-light text-[#888] dark:text-[#999] hover:text-[#111] dark:hover:text-[#fafaf8]"></button>
    </div>

  </main>

</body>
</html>`;

  await fs.writeFile(INDEX_FILE, indexHtml);
  console.log("Generated: index.html");
}

generateSite().catch(console.error);
