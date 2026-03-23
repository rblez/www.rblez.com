# Changelog

All notable changes to this project will be documented in this file.

## [0.2.0] - 2026-03-22

### 🎉 Major Changes

#### New Route Structure
- **`/me`** - New personal page with bio, avatar, and social links
- **`/stack`** - Tech stack showcase with category filtering
- **`/blog`** - Blog posts listing (moved from `/`)
- **`/`** - Now redirects to `/me`
- **Custom 404** - Branded not found page

#### Design System
- **Monochrome liquid glass** - Clean black/white aesthetic
- **No emojis** - Professional text-only interface
- **BerkeleyMono font** - Added as monospace font family
- **CursorGothic font** - Primary typeface
- **Background orbs** - Subtle liquid gradient effects

#### Navigation
- **Desktop** - Horizontal nav links (Me, Stack, Blog)
- **Mobile** - Full-screen menu with animated hamburger icon
- **Hamburger menu** - 2-line animated icon (transforms to X when open)
- **GitHub repo link** - Always visible in header

#### Stack Page
- **22 tools** in 7 categories:
  - Frontend (5): Next.js, React, Framer, TypeScript, Tailwind
  - Backend (6): Python, Node.js, FastAPI, Supabase, MongoDB, Clerk
  - Deploy (4): Vercel, Railway, Docker, GitHub
  - AI (3): OpenRouter, Claude, Cursor
  - Security (3): Proton Mail, Cloudflare, MCP
  - Communication (1): Resend
- **Category filters** - Filter by type
- **External links** - Each tool links to official website
- **Hover effects** - Scale animation

#### Social Integration
- **8 platforms** on `/me`:
  - X (Twitter)
  - GitHub
  - Telegram
  - Instagram
  - Facebook
  - Bluesky
  - Threads
  - Dev.to

### 🔧 Technical Changes

#### Content
- **All content in English** - Previously Spanish
- **MDX blog posts** - Powered by Velite
- **Dynamic routing** - Blog at `/blog/[slug]`

#### Architecture
- **Client/Server split** - Blog posts use separate client component
- **Static generation** - All pages pre-rendered
- **Mobile menu state** - Managed with React useState

#### Styling
- **Tailwind CSS v4** - Latest version
- **Custom fonts** - CursorGothic and BerkeleyMono
- **Dark mode** - System preference detection
- **Responsive** - Mobile-first approach

### 📝 Documentation

- **README.md** - Complete project documentation
- **CHANGELOG.md** - This changelog
- **docs.txt** - Technical documentation

### 🐛 Bug Fixes

- Fixed route conflicts between `/` and `/blog`
- Removed duplicate "blog/" prefix in URLs
- Fixed `generateStaticParams` with client components
- Corrected MCP icon (SiModelcontextprotocol)

### 🔄 Migrations

- Removed: Proton VPN, Proton Pass
- Changed: MCP icon to SiModelcontextprotocol
- Moved: Stack section to `/stack` route
- Updated: All text to English

---

## [0.1.0] - 2026-01-01

### Initial Release

- Basic blog structure
- MDX content support
- Dark mode
- Social links
