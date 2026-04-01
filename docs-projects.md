# Projects Documentation - rblez.com

## Overview

The Projects section showcases work and side projects. Projects are managed as MDX content collections using **Velite**, allowing rich content with images, descriptions, and technical details.

## File Structure

```
rblez.com/
├── content/
│   └── projects/
│       ├── project-slug.mdx
│       └── another-project.mdx
├── public/
│   └── projects/
│       ├── project-image.png
│       └── screenshots/
├── src/
│   ├── app/
│   │   ├── projects/
│   │   │   ├── page.tsx          # Projects listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Individual project page
│   └── components/
│       └── mdx-components.tsx    # Custom MDX components
└── .velite/                      # Generated content (auto)
```

## Creating a New Project

### 1. Create MDX File

Create a new file in `content/projects/`:

```mdx
---
title: "Project Name"
description: "One-line description of your project"
image: "/projects/project-name.png"
stack: ["Next.js", "TypeScript", "Tailwind CSS"]
github: "https://github.com/username/repo"
website: "https://project-url.com"
featured: true
published: true
---

## Project Details

Full project description, features, technologies, and more...
```

### 2. Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | Project name (max 99 characters) |
| `description` | string | Yes | Short description (max 999 characters) |
| `image` | string | No | Project thumbnail path |
| `stack` | string[] | Yes | Array of technologies used |
| `github` | string | No | GitHub repository URL |
| `website` | string | No | Live website URL |
| `featured` | boolean | No | Highlight on listing (default: false) |
| `published` | boolean | No | Visibility status (default: true) |

### 3. Project Content

Use Markdown and MDX components:

```mdx
## Description

Detailed project description...

## Features

- Feature 1
- Feature 2
- Feature 3

## Technologies

Built with modern technologies:

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: PostgreSQL

## Screenshots

![Dashboard](/projects/screenshots/dashboard.png)

## Installation

```bash
git clone https://github.com/username/repo.git
cd repo
pnpm install
pnpm dev
```

## Demo

<YouTube videoId="demo-video-id" />
```

## Image Guidelines

### Project Thumbnail

- **Location**: `public/projects/`
- **Size**: 1200x630px (16:9 aspect ratio)
- **Format**: PNG or WebP
- **Purpose**: Displayed on project cards and social sharing

### Screenshots

- **Location**: `public/projects/screenshots/`
- **Size**: Maximum 1920px width
- **Format**: WebP recommended for performance
- **Optimization**: Compress images before uploading

### Example Image Paths

```mdx
# Thumbnail
image: "/projects/my-project.png"

# In content
![Screenshot](/projects/screenshots/dashboard.png)
```

## URLs and Navigation

- Listing page: `/projects`
- Individual project: `/projects/[slug]`
- Slug derived from filename: `my-project.mdx` → `/projects/my-project`

## Project Page Layout

### Header Section
- Project image (or placeholder if none)
- Title and description
- GitHub and Website buttons
- Technology stack tags

### Content Section
- Full project description
- Features and capabilities
- Screenshots and demos
- Installation instructions
- Usage examples

## Development Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm start
```

## Best Practices

### Content

1. **Clear Description**: Explain what the project does in one sentence
2. **Tech Stack**: List all major technologies used
3. **Screenshots**: Include visual examples of the project
4. **Links**: Provide GitHub and live demo links when available
5. **Documentation**: Include installation and usage instructions

### SEO

1. Use descriptive titles and descriptions
2. Include relevant keywords in content
3. Add alt text to all images
4. Link to related projects
5. Use proper heading hierarchy

### Performance

1. Optimize all images (WebP format)
2. Use lazy loading for below-fold images
3. Compress screenshots
4. Consider using blur placeholders for large images

## Example Project

```mdx
---
title: "SMS Número Virtual"
description: "Online SMS reception service with virtual numbers from multiple countries"
image: "/projects/smsnumerovirtual.png"
stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "API REST"]
github: "https://github.com/rblez/smsnumerovirtual"
website: "https://smsnumerovirtual.com"
featured: true
published: true
---

## Description

SMS Número Virtual is a platform that allows receiving SMS messages online using virtual phone numbers.

## Features

- **Numbers from 50+ countries**
- **Real-time reception**
- **No registration required**
- **API available**
- **Privacy guaranteed**

## Technologies

- **Frontend**: Next.js 15, React Server Components, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **Cache**: Redis

## Screenshots

![Dashboard](/projects/screenshots/dashboard.png)
```

## Featured Projects

Featured projects appear at the top of the listing and have a special badge. Use this for:
- Major projects
- Active maintenance
- Personal highlights

Set `featured: true` in frontmatter to highlight a project.

## Draft Projects

To work on a project without publishing:

```mdx
---
title: "Work in Progress"
published: false
---
```

Draft projects are not visible on the site but remain in your content folder.

## Troubleshooting

### Images Not Showing

1. Verify image exists in `public/projects/`
2. Check path starts with `/`
3. Ensure correct file extension
4. Clear browser cache

### Build Errors

**Invalid frontmatter:**
- Check required fields are present
- Verify `stack` is an array
- Ensure `image` path is valid

**Component errors:**
- Ensure MDX components are properly imported
- Check component syntax in content

## Deployment

Projects are automatically deployed with the main site to Vercel.

### Build Process

1. Velite processes project MDX files
2. TypeScript types generated in `.velite/`
3. Next.js builds static pages
4. Deployed to Vercel

## Analytics

Track project page views using Vercel Analytics or your preferred analytics tool. Monitor:
- Most viewed projects
- Click-through rates on GitHub/Website links
- Time spent on project pages

## Support

For issues or questions, contact: rblez@proton.me
