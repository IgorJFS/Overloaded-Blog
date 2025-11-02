# Vercel Deployment Guide for Overloaded Blog

## 🚀 Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 📋 Prerequisites

- GitHub account
- Vercel account (free tier works fine)
- Your repository pushed to GitHub

## 🔧 Deployment Steps

### 1. Push to GitHub

```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### 2. Import to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Astro configuration

### 3. Configure Build Settings

Vercel should auto-detect these settings (verify they match):

- **Framework Preset**: Astro
- **Build Command**: `pnpm build`
- **Output Directory**: `dist`
- **Install Command**: `pnpm install`
- **Node Version**: 18.x or higher

### 4. Environment Variables (Optional)

If you have any environment variables, add them in Vercel dashboard:
- Go to Project Settings → Environment Variables
- Add variables from `.env.example`

### 5. Deploy

Click "Deploy" and wait for the build to complete!

## ✅ Post-Deployment Checklist

### Update Configuration Files

After your first deployment, update these files with your production URL:

#### 1. `astro.config.mjs`
```javascript
export default defineConfig({
  site: 'https://your-domain.vercel.app', // Update this
  // ...
});
```

#### 2. `src/config/site.ts`
```typescript
export const siteConfig = {
  url: 'https://your-domain.vercel.app', // Update this
  // ...
};
```

#### 3. `public/robots.txt`
```
Sitemap: https://your-domain.vercel.app/sitemap-index.xml
```

### Submit Sitemap to Search Engines

1. **Google Search Console**
   - Add your site: https://search.google.com/search-console
   - Submit sitemap: `https://your-domain.vercel.app/sitemap-index.xml`

2. **Bing Webmaster Tools**
   - Add your site: https://www.bing.com/webmasters
   - Submit sitemap: `https://your-domain.vercel.app/sitemap-index.xml`

## 🔍 Features Configured for Vercel

### ✅ 404 Page Handling
- Custom 404 page at `/src/pages/404.astro`
- Automatically served for non-existent routes
- Configured in `vercel.json`

### ✅ Security Headers
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`

### ✅ Caching Strategy
- Static assets cached for 1 year
- Astro build assets optimally cached
- Images and fonts cached with immutable flag

### ✅ SEO Optimization
- Sitemap automatically generated
- Robots.txt configured
- Open Graph and Twitter Cards
- Structured data (JSON-LD)
- Canonical URLs

## 🔄 Automatic Deployments

Vercel automatically deploys when you push to GitHub:

- **Production**: Pushes to `main` branch
- **Preview**: Pull requests and other branches

## 🌐 Custom Domain

To add a custom domain:

1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed
4. Update the URLs in config files (see checklist above)

## 📊 Monitoring & Analytics

### Vercel Analytics (Built-in)
- Automatically enabled on Pro plan
- Shows page views, performance metrics

### Add Google Analytics (Optional)
1. Get GA tracking ID
2. Add to environment variables
3. Install analytics package
4. Add tracking script to Layout.astro

### Add Plausible (Privacy-friendly alternative)
1. Sign up at plausible.io
2. Add script tag to Layout.astro
3. Lightweight and privacy-focused

## 🐛 Troubleshooting

### Build Fails
- Check Node version (18.x or higher)
- Verify all dependencies in package.json
- Check build logs in Vercel dashboard

### 404 Page Not Working
- Verify `vercel.json` is in root directory
- Check that `/src/pages/404.astro` exists
- Redeploy after making changes

### Images Not Loading
- Ensure images are in `/public` directory
- Use absolute paths: `/image.jpg` not `./image.jpg`
- Check image file names (case-sensitive)

### Fonts Not Loading
- Verify font links in Layout.astro
- Check preconnect links
- Use Google Fonts or self-hosted fonts

## 🔒 Security Best Practices

1. **Never commit secrets**
   - Use environment variables
   - Add `.env` to `.gitignore`

2. **Keep dependencies updated**
   ```bash
   pnpm update
   ```

3. **Review security headers** in `vercel.json`

4. **Enable Vercel Authentication** for preview deployments (optional)

## 📈 Performance Optimization

Your site is already optimized with:
- ✅ Static site generation (SSG)
- ✅ Astro's zero-JS by default
- ✅ Optimized asset caching
- ✅ CDN distribution via Vercel

### Additional Optimizations
- Consider image optimization with `@astrojs/image`
- Enable compression for assets
- Use WebP format for images
- Lazy load images below the fold

## 📝 Maintenance

### Regular Updates
```bash
# Update dependencies
pnpm update

# Test locally
pnpm dev

# Build and test
pnpm build
pnpm preview

# Commit and push
git add .
git commit -m "Update dependencies"
git push
```

### Monitor Site Health
- Check Vercel deployment logs
- Monitor Google Search Console
- Review analytics regularly
- Test 404 handling periodically

## 🆘 Support

- **Astro Docs**: https://docs.astro.build
- **Vercel Docs**: https://vercel.com/docs
- **Vercel Support**: support@vercel.com
- **GitHub Issues**: For this project's issues

---

**Last Updated**: November 2, 2025
