# rblez-blog

Personal blog and portfolio by Ray (rblez) - Vibecoder.

## Routes

- **`/`** → Home
- **`/stack`** → Tech stack showcase with filtering
- **`/blog`** → Blog posts listing
- **`/blog/[slug]`** → Individual blog posts
- **`404`** → Custom not found page

## Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first styling

### Backend & Content
- **Velite** - Content collection (MDX)
- **Node.js** - Runtime

### Deployment
- **Vercel** - Hosting and CI/CD

### AI Tools
- **Cursor** - AI-powered code editor
- **Claude** - AI assistant

## Project Structure

```
rblez-blog/
├── src/
│   ├── app/
│   │   ├── blog/              # Blog routes
│   │   │   ├── page.tsx       # Blog listing
│   │   │   └── [...slug]/     # Dynamic blog posts
│   │   ├── me/                # Personal page
│   │   ├── stack/             # Tech stack page
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Root redirect
│   │   └── not-found.tsx      # 404 page
│   ├── components/            # Reusable components
│   └── app/globals.css        # Global styles
├── content/                   # MDX blog posts
├── public/
│   └── fonts/                 # Custom fonts
└── package.json
```

## 🛠 Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint
```

## Design System

### Colors
- **Light mode**: White background, black text
- **Dark mode**: Black background, white text
- **Accent**: Monochrome with subtle gradients

### Typography
- **Primary**: CursorGothic (Regular & Bold)
- **Mono**: BerkeleyMono

### Effects
- Liquid glass background orbs
- Subtle blur effects
- Smooth hover transitions
- Scale animations on interactive elements

## Content

Blog posts are written in MDX and stored in `content/blog/`. Each post requires:

```mdx
---
title: "Post Title"
description: "Short description"
date: "2026-01-01"
published: true
---
```

## Social Links

- [X/Twitter](https://x.com/rblezX)
- [GitHub](https://github.com/rblez)

## Repository

- [rblez.com](https://github.com/rblez/rblez.com)

## License

© 2026 rblez. All rights reserved.
