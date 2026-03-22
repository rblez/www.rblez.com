# rblez.com Blog

Personal blog by Ray ([@rblezX](https://x.com/rblezX)), built with [Next.js](https://nextjs.org) and [MDX](https://mdxjs.com).

Inspired by [Guillermo Rauch's blog](https://github.com/rauchg/blog).

## Features

- **MDX Support** - Write Markdown with embedded React components
- **Dark Mode** - Automatic based on system preference
- **Static Generation** - Fast, SEO-friendly pages
- **TypeScript** - Full type safety
- **Tailwind CSS v4** - Utility-first styling
- **Rich MDX Components** - Buttons, Callouts, Cards, Code Blocks, Steps, and more
- **Syntax Highlighting** - Powered by rehype-pretty-code
- **Auto-generated TOC** - Headings are automatically linked

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

1. Create a new `.mdx` file in the `content/blog/` directory:

```mdx
---
title: "My New Post"
date: "2026-03-22"
description: "A brief description of your post"
published: true
tags: ["tutorial", "web-development"]
---

# My New Post

Content goes here...
```

2. The post will be available at `/my-new-post`

For detailed documentation on writing posts, see [/docs.txt](/docs.txt).

## MDX Components

This blog includes custom MDX components for rich content:

| Component | Description |
|-----------|-------------|
| `<Button>` | Styled buttons with variants (primary, secondary, outline) |
| `<Callout>` | Info/warning/error/success/tip callouts |
| `<Card>` | Card containers with optional links |
| `<CodeBlock>` | Code blocks with titles and filenames |
| `<Step>` | Numbered steps with icons for tutorials |

### Example Usage

```mdx
<Callout type="tip">
  This is a helpful tip!
</Callout>

<Button href="https://example.com" variant="primary">
  Click Me
</Button>

<Card title="Related Post" href="/another-post">
  Check out this related content.
</Card>

<Step number={1}>
  First, do this...
</Step>
```

## Project Structure

```
rblez-blog/
├── content/
│   └── blog/           # MDX blog posts
├── public/             # Static assets (images, fonts, etc.)
├── src/
│   ├── app/
│   │   ├── [...slug]/  # Dynamic post pages
│   │   ├── layout.tsx  # Root layout
│   │   ├── page.tsx    # Homepage
│   │   └── globals.css # Global styles
│   └── components/
│       ├── header.tsx          # Header component
│       ├── mdx-components.tsx  # MDX component mapping
│       └── mdx-content.tsx     # MDX content renderer
├── docs.txt            # Documentation for LLMs/writers
├── velite.config.ts    # Velite (content) configuration
├── next.config.ts      # Next.js configuration
└── tailwind.config.js  # Tailwind configuration
```

## Deployment

Deploy to [Vercel](https://vercel.com) with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## License

MIT - See [LICENSE](./LICENSE) for details.
