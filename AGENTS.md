# AGENTS.md — www.rblez.com

Minimal personal portfolio site for Ray (rblez). Single HTML file. Only JS: GSAP 3.15.1 (core, ScrollTrigger) from jsDelivr plus a small inline script.

## Stack

- **Deploy**: Cloudflare Workers static assets (`wrangler.jsonc`, `assets.directory: "."`) — not Pages, no Worker script
- **Animation**: GSAP via CDN `<script defer>`, used only on the project preview (entrance, tab switch, scroll zoom); the rest of the page has no GSAP; the page must stay fully readable if GSAP fails to load, and respect `prefers-reduced-motion`
- **Look**: interface and palette inspired by cursor.com without the orange (cream #f7f7f4, ink #26251e, greys, canela #f3ede6; dark #14120b). Noise overlay on the whole page and grain on primary buttons. No name text: isotype only. Layout is a hard grid: a framed column with hairline side rails, sections as cells split by hairlines, "+" crosses on the corners, mono uppercase section heads (01 — Proyectos), stack as a full-width cell grid (8 columns desktop, 4 tablet, 3 on mobile, a lone last item spans the row) (12 tools, logos in official colours at equal optical size; light/dark variants via <picture>)
- **Font**: SF Pro through the system stack (`-apple-system`, `ui-monospace`), never self-hosted (Apple's license forbids it); Inter and Geist Mono from Google Fonts are the fallback on Android and other non-Apple devices
- **Stack logos**: SVGs from svgl (github.com/pheralb/svgl) in `logos/`, greyscale until hover; mono logos (Resend, Vercel) invert in dark mode
- **No build step, no package.json, no tests, no CI**

## Commands

| Action | Command |
|--------|---------|
| Preview locally | `npx wrangler dev` |
| Deploy to prod | `npx wrangler deploy` |

## Structure

```
index.html        — the entire site (inline CSS, inline SVG icons, inline JS + GSAP CDN)
logos/            — stack logos from svgl
previews/         — real screenshots per project: <name>.webp desktop 1280×800, <name>-m.webp mobile 525×934 (shown under 640px); retake when a project UI changes
isotipo.svg       — logo, black (#000), used as header image
favicon-black.svg   — same logo, black (#000), for light browser theme (first <link rel="icon">, default)
favicon-white.svg   — same logo, white (#fff), for dark browser theme (second <link rel="icon"> with media query)
og-image.jpg      — 1200x630 OG/Twitter card image (cream grid, isotype, headline)
robots.txt        — allows all, references sitemap.xml
sitemap.xml       — single URL https://www.rblez.com/
manifest.json     — PWA manifest
wrangler.jsonc    — CF Workers config
```

## Constraints

- No JS frameworks, no build tools, no `npm install`; GSAP from CDN is the only external script
- Inline CSS only (no external stylesheets beyond Google Fonts)
- Site content is in Spanish (`lang="es"`)
- `assets.directory` is `"."` — everything in the repo root gets uploaded and served publicly; `.gitignore` only affects git, so keep secrets out of the root
- `isotipo.svg` stays black (#000) — only the favicon is white; don't merge them- **Contact**: hello@rblez.com, X @rblez_, Instagram @rayomarblez, Telegram @rblez, GitHub rblez; icons are inline Simple Icons (CC0) in currentColor, envelope drawn for email
- **SEO**: og-image.jpg 1200x630 (generated, same grid look), apple-touch-icon and manifest PNG icons, JSON-LD WebSite + Person (sameAs socials, founder of Tiendly); .assetsignore keeps AGENTS.md and wrangler.jsonc out of the public site
- /asciidot/ = build of rblez/asciidot (vite build --base=/asciidot/); /terminal/ = rblez/terminal-web rblez.html as index.html. Rebuild/copy when those repos change.
- /explorador/ = copy of rblez/explorador-tarjetas-cubanas (index.html + assets); report URLs point to www.rblez.com/explorador/.
