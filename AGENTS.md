# AGENTS.md — www.rblez.com

Minimal personal portfolio site for Ray (rblez). Single HTML file, zero JS, zero dependencies.

## Stack

- **Deploy**: Cloudflare Workers static assets (`wrangler.jsonc`, `assets.directory: "."`) — not Pages, no Worker script
- **Font**: Geist via Google Fonts `<link>` in HTML
- **No build step, no package.json, no tests, no CI**

## Commands

| Action | Command |
|--------|---------|
| Preview locally | `npx wrangler dev` |
| Deploy to prod | `npx wrangler deploy` |

## Structure

```
index.html        — the entire site (inline CSS, inline SVG icons, no JS)
isotipo.svg       — logo, black (#000), used as header image
favicon-black.svg   — same logo, black (#000), for light browser theme (first <link rel="icon">, default)
favicon-white.svg   — same logo, white (#fff), for dark browser theme (second <link rel="icon"> with media query)
og-image.svg      — 1200x630 OG/Twitter card image (white bg, black logo)
robots.txt        — allows all, references sitemap.xml
sitemap.xml       — single URL https://www.rblez.com/
manifest.json     — PWA manifest
wrangler.jsonc    — CF Workers config
```

## Constraints

- Keep it zero-dependency: no JS frameworks, no build tools, no `npm install` needed
- Inline CSS only (no external stylesheets beyond the Geist font preconnect)
- Site content is in Spanish (`lang="es"`)
- `assets.directory` is `"."` — everything in the repo root gets uploaded and served publicly; `.gitignore` only affects git, so keep secrets out of the root
- `isotipo.svg` stays black (#000) — only the favicon is white; don't merge them