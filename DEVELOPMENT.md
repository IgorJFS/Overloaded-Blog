# Overloaded - Development Guide

## 📚 Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [File Structure](#file-structure)
4. [Key Features](#key-features)
5. [Development Workflow](#development-workflow)
6. [Adding Content](#adding-content)
7. [Styling Guide](#styling-guide)
8. [Deployment](#deployment)

## Project Overview

Overloaded is a modern blog platform built with:
- **Astro 5.15.3** - Static site generator with island architecture
- **Vue 3.5.22** - For interactive components
- **Tailwind CSS 4.0** - For styling with the new CSS-first approach
- **MDX** - For rich content with components
- **TypeScript** - For type safety

### Why This Stack?

- **Astro**: Fast, SEO-friendly, and ships zero JavaScript by default
- **Vue**: Familiar, reactive components for interactivity
- **Tailwind CSS 4**: Modern styling with CSS variables and no build step
- **MDX**: Write blog posts with embedded components
- **TypeScript**: Catch errors early, better DX

## Architecture

### Astro Islands Architecture
- Most of the site is static HTML/CSS
- Interactive components (Header, Footer) are hydrated on the client
- Uses `client:load` directive for Vue components that need interactivity

### Routing
- File-based routing in `src/pages/`
- Dynamic routes use `[slug].astro` pattern
- Automatic route generation based on file structure

## File Structure

```
src/
├── components/          # Reusable Vue components
│   ├── Header.vue      # Site header with navigation
│   ├── Footer.vue      # Site footer
│   ├── BlogPostCard.vue # Blog post preview card
│   └── LoadingSpinner.vue # Loading state component
│
├── layouts/            # Page layouts
│   └── Layout.astro    # Main layout wrapper
│
├── pages/              # Routes (file-based routing)
│   ├── index.astro     # Homepage (/)
│   ├── about.astro     # About page (/about)
│   ├── blog.astro      # Blog listing (/blog)
│   ├── 404.astro       # 404 error page
│   └── blog/
│       └── [slug].astro # Individual blog posts (/blog/[slug])
│
├── styles/             # Global styles
│   └── global.css      # Global CSS with Tailwind
│
├── types/              # TypeScript types
│   └── index.ts        # Shared type definitions
│
├── utils/              # Utility functions
│   └── blog.ts         # Blog post helpers
│
└── config/             # Configuration files
    └── site.ts         # Site configuration
```

## Key Features

### 1. Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- All pages fully responsive

### 2. Dark Theme
- Custom color palette in `global.css`
- Primary: Orange/Red gradient
- Background: Dark neutrals

### 3. Blog System
- 6 sample posts with categories
- Category filtering (ready for implementation)
- Dynamic routing for individual posts
- SEO-optimized meta tags

### 4. Performance
- Static generation for fast loads
- Minimal JavaScript shipping
- Optimized images (ready for implementation)
- CSS-only animations

### 5. Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation support
- Screen reader friendly

## Development Workflow

### Running the Dev Server
```bash
pnpm dev
```
Starts at http://localhost:4321

### Building for Production
```bash
pnpm build
```
Outputs to `dist/` directory

### Preview Production Build
```bash
pnpm preview
```

### Type Checking
```bash
pnpm astro check
```

## Adding Content

### Creating a New Blog Post

1. **Add to blog posts array** in `src/utils/blog.ts`:
```typescript
{
  id: 7,
  title: "Your Post Title",
  excerpt: "Brief description...",
  date: "2025-11-03",
  readTime: "5 min read",
  category: "Burnout",
  emoji: "🎯",
  slug: "your-post-slug",
  language: "en",
  tags: ["tag1", "tag2"],
}
```

2. **Add slug to static paths** in `src/pages/blog/[slug].astro`:
```typescript
export async function getStaticPaths() {
  return [
    // ... existing paths
    { params: { slug: 'your-post-slug' } },
  ];
}
```

3. **Create MDX file** (optional, for full content):
```bash
src/content/blog/your-post-slug.mdx
```

### Adding a New Page

1. Create a new `.astro` file in `src/pages/`
2. Import and use the Layout component
3. Add navigation link in `Header.vue`

Example:
```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="New Page">
  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4">
      <h1>New Page</h1>
    </div>
  </section>
</Layout>
```

## Styling Guide

### Tailwind CSS 4

This project uses Tailwind CSS 4, which is CSS-first:
- Colors defined in `@theme` in `global.css`
- No `tailwind.config.js` needed
- Uses modern CSS features

### Color Palette

**Primary (Orange/Red):**
- `primary-50` to `primary-950`
- Main brand color: `primary-500`

**Neutral (Dark Theme):**
- `neutral-50` to `neutral-950`
- Background: `neutral-950`
- Text: `neutral-100`

### Common Patterns

**Button (Primary):**
```html
<button class="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-full transition-colors">
  Click Me
</button>
```

**Card:**
```html
<div class="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-primary-500/50 transition-colors">
  Content
</div>
```

**Section Container:**
```html
<section class="py-16 sm:py-24">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    Content
  </div>
</section>
```

### Typography Scale

- Hero: `text-4xl sm:text-6xl lg:text-7xl`
- H1: `text-4xl sm:text-5xl lg:text-6xl`
- H2: `text-3xl sm:text-4xl`
- H3: `text-2xl`
- Body Large: `text-lg sm:text-xl`
- Body: `text-base`
- Small: `text-sm`

## Internationalization (i18n)

The site is ready for bilingual support (EN/PT):

1. **Language switcher** in Header (UI only)
2. **Language field** in blog post type
3. **Config** in `site.ts`

To implement:
1. Add Astro i18n integration
2. Create `/pt/` routes
3. Translate content
4. Update language switcher

## Performance Optimization

### Images
- Use Astro's `<Image />` component (not yet implemented)
- Optimize images before uploading
- Use appropriate formats (WebP, AVIF)

### JavaScript
- Keep Vue components small
- Use `client:visible` for below-fold components
- Consider `client:idle` for non-critical components

### CSS
- Tailwind purges unused styles automatically
- Custom CSS is minimal
- Animations are CSS-only where possible

## Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
pnpm i -g vercel

# Deploy
vercel
```

### Netlify
1. Connect your Git repository
2. Build command: `pnpm build`
3. Publish directory: `dist`

### Cloudflare Pages
1. Connect your Git repository
2. Build command: `pnpm build`
3. Output directory: `dist`

### Static Hosting
Build and upload `dist/` folder to any static host:
- GitHub Pages
- AWS S3
- Digital Ocean
- etc.

## Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
# Site Configuration
PUBLIC_SITE_NAME=Overloaded
PUBLIC_SITE_URL=https://yourdomain.com

# Social Media
PUBLIC_TWITTER_HANDLE=@youraccount
PUBLIC_SOCIAL_TWITTER=https://twitter.com/youraccount

# Analytics (optional)
PUBLIC_GOOGLE_ANALYTICS_ID=UA-XXXXXXXXX
```

## Future Enhancements

- [ ] Content Collections for blog posts
- [ ] Full i18n implementation
- [ ] Search functionality
- [ ] Newsletter integration
- [ ] Comments system
- [ ] RSS feed
- [ ] Sitemap generation
- [ ] Open Graph images
- [ ] Reading progress indicator
- [ ] Table of contents for posts
- [ ] Related posts algorithm
- [ ] Tags system
- [ ] Author profiles

## Troubleshooting

### Port already in use
```bash
# Kill process on port 4321
npx kill-port 4321

# Or use different port
pnpm dev -- --port 3000
```

### Build errors
```bash
# Clear Astro cache
rm -rf .astro
rm -rf dist

# Reinstall dependencies
rm -rf node_modules
pnpm install
```

### TypeScript errors
```bash
# Run type check
pnpm astro check

# Generate types
pnpm astro sync
```

## Resources

- [Astro Documentation](https://docs.astro.build)
- [Vue 3 Documentation](https://vuejs.org)
- [Tailwind CSS 4 Documentation](https://tailwindcss.com)
- [MDX Documentation](https://mdxjs.com)

## Support

For issues or questions:
1. Check the documentation
2. Search existing issues
3. Create a new issue with details

---

Happy coding! 🚀
