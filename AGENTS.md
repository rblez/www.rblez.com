# AGENTS.md — www.rblez.com

Minimal personal portfolio site for Ray (rblez). Single HTML file, zero JS, zero dependencies.

## Stack

- **Deploy**: Cloudflare Workers via `wrangler.jsonc` (static assets mode, not a Worker script)
- **Font**: Geist (Google Fonts), loaded via `<link>` in HTML
- **No build step, no package.json, no tests, no CI**

## Commands

| Action | Command |
|--------|---------|
| Preview locally | `npx wrangler pages dev .` |
| Deploy to prod | `npx wrangler deploy` |

## Structure

```
index.html        — the entire site (inline CSS, no JS)
wrangler.jsonc    — CF Workers config, assets dir is "."
manifest.json     — PWA manifest
```

## Constraints

- Keep it zero-dependency: no JS frameworks, no build tools, no npm install needed
- Inline CSS only (no external stylesheets beyond the Geist font preconnect)
- `wrangler deploy` uploads the entire directory — `.wrangler/` and `.env*` are gitignored
- Wrangler config uses `nodejs_compat` flag
