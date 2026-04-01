# Blog Documentation - rblez.com

## Overview

The blog at rblez.com is built with **Next.js 16** and **Velite** for MDX content collection. Posts are written in MDX format, allowing you to use React components within your markdown content.

## File Structure

```
rblez.com/
├── content/
│   └── blog/
│       ├── post-slug.mdx
│       └── another-post.mdx
├── src/
│   ├── app/
│   │   ├── blog/
│   │   │   ├── page.tsx          # Blog listing page
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Individual post page
│   └── components/
│       ├── mdx-components.tsx    # Custom MDX components
│       └── mdx-content.tsx       # MDX renderer wrapper
└── .velite/                      # Generated content (auto)
```

## Creating a New Post

### 1. Create MDX File

Create a new file in `content/blog/` with the following frontmatter:

```mdx
---
title: "Your Post Title"
description: "A short description (max 999 characters)"
date: "2026-01-01"
author: "Ray"  # Optional
tags: ["tag1", "tag2"]  # Optional
published: true
---

Your content here...
```

### 2. Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | Post title (max 99 characters) |
| `description` | string | No | Short description (max 999 characters) |
| `date` | ISO date | Yes | Publication date (YYYY-MM-DD) |
| `author` | string | No | Author name |
| `tags` | string[] | No | Array of tags |
| `published` | boolean | No | Visibility status (default: true) |

### 3. Writing Content

Use standard Markdown syntax:

```mdx
# Heading 1
## Heading 2
### Heading 3

This is a paragraph with **bold** and *italic* text.

- List item 1
- List item 2

[Link text](https://example.com)

![Alt text](/image.png)

```typescript
// Code block
const hello = "world";
```
```

### 4. Using Custom Components

MDX components are available in your posts:

```mdx
<Callout type="info" title="Note">
  This is an informational callout.
</Callout>

<Button href="https://example.com">Click me</Button>

<YouTube videoId="dQw4w9WgXcQ" />

| Column 1 | Column 2 |
|----------|----------|
| Data 1   | Data 2   |
```

### Available Components

| Component | Props | Description |
|-----------|-------|-------------|
| `<Button>` | `href`, `variant`, `size` | Styled button |
| `<Callout>` | `type`, `title` | Info/warning/error boxes |
| `<CodeBlock>` | `language`, `title`, `filename` | Code with syntax highlighting |
| `<YouTube>` | `videoId`, `title` | YouTube embed |
| `<Video>` | `src`, `title` | Video player |
| `<Iframe>` | `src`, `title`, `height` | Embedded iframe |
| `<Step>` | `number` | Numbered steps |
| `<Card>` | `title`, `href` | Content card |

### Callout Types

- `info` - General information
- `warning` - Warnings
- `error` - Errors
- `success` - Success messages
- `tip` - Tips and hints

## Image Handling

### Local Images

Place images in `public/` and reference them:

```mdx
![Description](/images/my-image.png)
```

### Remote Images

The site allows images from:
- `pbs.twimg.com`
- `abs.twimg.com`
- `m.media-amazon.com`
- `images-na.ssl-images-amazon.com`

## URLs and Slugs

- Posts are accessed at `/blog/[slug]`
- Slug is automatically generated from filename
- Example: `content/blog/my-post.mdx` → `/blog/my-post`

## Development Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm start

# Run linter
pnpm lint
```

## Best Practices

### SEO

1. Write descriptive titles (under 99 characters)
2. Include meta descriptions (under 160 characters)
3. Use proper heading hierarchy (H1 → H2 → H3)
4. Add alt text to all images
5. Use semantic HTML elements

### Content

1. Keep paragraphs short (2-4 sentences)
2. Use subheadings to break up content
3. Include code examples when relevant
4. Add callouts for important information
5. Link to related posts

### Performance

1. Optimize images before uploading
2. Use WebP format when possible
3. Lazy load below-fold images
4. Minimize custom component usage

## Troubleshooting

### Build Errors

**Error: Invalid frontmatter**
- Check that all required fields are present
- Ensure dates are in ISO format (YYYY-MM-DD)
- Verify title length is under 99 characters

**Error: Component not found**
- Ensure component names are capitalized
- Check that the component is exported from `mdx-components.tsx`

### Common Issues

**Images not loading:**
- Verify image path starts with `/`
- Check that image exists in `public/` folder

**Links not working:**
- Internal links should not include `.html` extension
- External links need full URL with protocol

## Deployment

The blog is automatically deployed to Vercel when you push to the main branch.

### Build Process

1. Velite processes MDX files
2. TypeScript types are generated in `.velite/`
3. Next.js builds the static pages
4. Pages are deployed to Vercel

### Environment Variables

No environment variables are required for the blog.

## Support

For issues or questions, contact: rblez@proton.me
