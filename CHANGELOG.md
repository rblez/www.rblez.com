# Changelog

All notable changes to rblez.com blog will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2026-03-22

### Added

- **New MDX Components** for rich blog post formatting:
  - `<Button>` - Styled buttons with variants (primary, secondary, outline) and sizes (sm, md, lg)
  - `<Callout>` - Info/warning/error/success/tip callouts with icons
  - `<Card>` - Card containers with optional titles and links
  - `<CodeBlock>` - Enhanced code blocks with titles, filenames, and language labels
  - `<Step>` - Numbered steps with circular icons for tutorial-style posts
- **Table support** - Styled tables with header rows and bordered cells
- **Enhanced typography** - Added `<h4>` headings, `<del>` for strikethrough, improved `<code>` styling
- **Documentation** - New `docs.txt` file with comprehensive guide for LLMs and writers
- **LICENSE** - Added MIT license file
- **CHANGELOG.md** - This changelog file

### Changed

- **Footer positioning** - Footer now stays at the bottom of the page using flexbox layout
- **Homepage design** - Removed post descriptions from the homepage; only titles are shown
- **Image styling** - Images now use `<figure>` and `<figcaption>` for better semantics
- **Blockquote styling** - Enhanced with background color and rounded corners
- **Link styling** - External links now include an icon indicator
- **README.md** - Updated with new features, MDX components documentation, and corrected project structure

### Fixed

- Footer no longer floats in the middle of the page on short content
- MDX components now properly handle external links with `target="_blank"` and `rel="noopener noreferrer"`

## [0.1.0] - 2026-03-14

### Added

- Initial release
- Next.js 16 with App Router
- MDX support via `@mdx-js/react` and `@next/mdx`
- Velite for content collection and MDX processing
- Tailwind CSS v4 for styling
- Dark mode support (system preference based)
- Syntax highlighting with rehype-pretty-code
- Auto-linked headings with rehype-autolink-headings
- Remix Icons for social links
- TypeScript for type safety
- ESLint for code quality
- Blog post template with frontmatter (title, date, description, tags, published)
- Responsive design for mobile and desktop
- SEO metadata with Open Graph and Twitter Card support
- Custom MDX components for basic Markdown elements

---

## Version History

- **0.2.0** - 2026-03-22 - Major MDX enhancements and documentation
- **0.1.0** - 2026-03-14 - Initial release
