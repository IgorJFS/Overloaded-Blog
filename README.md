# ⚡ Overloaded

A modern blog focused on discussing burnout, mental health, and the challenges facing society today. Built with cutting-edge web technologies for a smooth, fast, and beautiful user experience.

## 🎯 About

Overloaded is a platform dedicated to honest conversations about:
- 🔥 **Burnout Recognition & Recovery**
- 🧠 **Mental Health Awareness**
- ⚖️ **Work-Life Balance**
- 🌍 **Societal Challenges**

## 🚀 Tech Stack

- **[Astro](https://astro.build)** - The web framework for content-driven websites
- **[Vue 3](https://vuejs.org/)** - Progressive JavaScript framework for interactive components
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework with latest features
- **[MDX](https://mdxjs.com/)** - Markdown for the component era
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager


## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd overloaded
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open your browser and visit `http://localhost:4321`

## 📝 Commands

| Command | Action |
|---------|--------|
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start dev server at `localhost:4321` |
| `pnpm build` | Build production site to `./dist/` |
| `pnpm preview` | Preview production build locally |
| `pnpm astro ...` | Run Astro CLI commands |

## 🌐 Features

- ✅ Modern, dark-themed UI
- ✅ Fully responsive design
- ✅ Blog with category filtering
- ✅ Dynamic routing for blog posts
- ✅ SEO-friendly
- ✅ Fast page loads with Astro
- ✅ Interactive components with Vue
- ✅ Type-safe with TypeScript
- ✅ Bilingual support ready (EN/PT)

## 🎨 Customization

### Colors

The color scheme is defined in `src/styles/global.css` using CSS custom properties. You can customize:
- Primary colors (orange/red theme)
- Neutral colors (dark theme)

### Content

- Add new blog posts by creating MDX files or updating the posts array in `src/pages/blog.astro`
- Modify navigation links in `src/components/Header.vue`
- Update footer content in `src/components/Footer.vue`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel auto-detects Astro and configures everything
4. Deploy! 🎉

**See [VERCEL-DEPLOY.md](./VERCEL-DEPLOY.md) for detailed deployment instructions.**

## 🔍 SEO Features

This project includes comprehensive SEO optimization:

- ✅ Automatic sitemap generation (`/sitemap-index.xml`)
- ✅ Robots.txt configured
- ✅ Open Graph meta tags for social sharing
- ✅ Twitter Card support
- ✅ Structured data (JSON-LD) for rich snippets
- ✅ Canonical URLs
- ✅ Custom 404 page with suggested content
- ✅ Optimized meta descriptions and titles

**See [SEO-IMPROVEMENTS.md](./SEO-IMPROVEMENTS.md) for complete SEO documentation.**

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ♥ using Astro & Vue
