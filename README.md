# rblez-blog

Personal blog by Ray ([@rblezX](https://x.com/rblezX)), built with [Next.js](https://nextjs.org) and [MDX](https://mdxjs.com).

Inspired by [Guillermo Rauch's blog](https://github.com/rauchg/blog).

## Features

- **MDX Support** - Write Markdown with embedded React components
- **Dark Mode** - Automatic based on system preference
- **Static Generation** - Fast, SEO-friendly pages
- **TypeScript** - Full type safety
- **Tailwind CSS** - Utility-first styling

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your blog.

### Build

```bash
pnpm build
pnpm start
```

## Creating New Posts

1. Create a new `.mdx` file in the `posts/` directory:

```mdx
---
title: "My New Post"
date: "Mar 12, 2026"
---

# My New Post

Content goes here...
```

2. Update `src/app/posts.json` with the new post metadata:

```json
{
  "posts": [
    {
      "id": "my-new-post",
      "date": "Mar 12, 2026",
      "title": "My New Post"
    }
  ]
}
```

3. The post will be available at `/posts/my-new-post`

## Project Structure

```
rblez-blog/
├── posts/              # MDX blog posts
├── src/
│   └── app/
│       ├── api/        # API routes
│       ├── posts/      # Post pages
│       ├── layout.tsx  # Root layout
│       ├── page.tsx    # Homepage
│       └── posts.json  # Posts metadata
├── mdx-components.ts   # MDX component mapping
├── next.config.ts      # Next.js configuration
└── tailwind.config.js  # Tailwind configuration
```

## Deployment

Deploy to [Vercel](https://vercel.com) with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## License

MIT
