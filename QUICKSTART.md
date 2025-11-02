# Quick Start Guide

## Getting Started in 3 Minutes ⚡

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Start Development Server
```bash
pnpm dev
```

Visit: http://localhost:4321

### 3. Explore the Site

- **Homepage** (`/`) - Hero section, featured topics, latest posts
- **Blog** (`/blog`) - All blog posts with category filters
- **About** (`/about`) - Mission and values
- **Individual Post** (`/blog/[slug]`) - Full blog post view

## Project Structure

```
src/
├── components/     # Vue components (Header, Footer, etc.)
├── layouts/        # Page layouts (Layout.astro)
├── pages/          # Routes (index, blog, about)
├── styles/         # Global CSS
├── types/          # TypeScript types
├── utils/          # Helper functions
└── config/         # Site configuration
```

## Common Tasks

### Add a New Blog Post

Edit `src/utils/blog.ts` and add to the array:
```typescript
{
  id: 7,
  title: "Your Title",
  excerpt: "Description...",
  date: "2025-11-03",
  readTime: "5 min read",
  category: "Burnout",
  emoji: "🎯",
  slug: "your-slug",
}
```

Then add the slug to `src/pages/blog/[slug].astro`:
```typescript
{ params: { slug: 'your-slug' } }
```

### Change Colors

Edit `src/styles/global.css`:
```css
@theme {
  --color-primary-500: #your-color;
}
```

### Modify Navigation

Edit `src/components/Header.vue`:
```typescript
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Your Page', href: '/your-page' },
]
```

## Build for Production

```bash
# Build
pnpm build

# Preview build
pnpm preview
```

Output is in `dist/` - deploy to any static host!

## Need Help?

- Check `DEVELOPMENT.md` for detailed docs
- Check `README.md` for overview
- Visit [Astro Docs](https://docs.astro.build)

---

🚀 Happy building!
