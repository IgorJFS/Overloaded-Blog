# 🚀 Vercel Deployment Checklist

Use this checklist to ensure smooth deployment to Vercel.

## ✅ Pre-Deployment Checklist

### Code Quality
- [ ] All pages build without errors (`pnpm build`)
- [ ] Preview server works locally (`pnpm preview`)
- [ ] 404 page displays correctly
- [ ] All images load properly
- [ ] Navigation links work
- [ ] Blog posts are accessible
- [ ] Theme toggle works

### Git & GitHub
- [ ] Latest changes committed
- [ ] Repository pushed to GitHub
- [ ] Repository is public or you have Vercel access
- [ ] `.gitignore` excludes build artifacts
- [ ] No sensitive data in commits

### Configuration Files
- [ ] `vercel.json` exists in root directory
- [ ] `.vercelignore` exists in root directory
- [ ] `public/robots.txt` exists
- [ ] `astro.config.mjs` configured correctly
- [ ] `package.json` has correct scripts

### SEO Preparation
- [ ] Sitemap generates successfully
- [ ] Meta descriptions are set
- [ ] Open Graph images exist
- [ ] Structured data is implemented

## 🌐 Deployment Steps

### 1. Initial Setup
- [ ] Go to [vercel.com](https://vercel.com) and sign in
- [ ] Click "Add New Project"
- [ ] Select "Import Git Repository"
- [ ] Choose your repository

### 2. Configure Project
- [ ] Framework Preset: **Astro** (auto-detected)
- [ ] Build Command: `pnpm build`
- [ ] Output Directory: `dist`
- [ ] Install Command: `pnpm install`
- [ ] Root Directory: `./` (leave as default)

### 3. Environment Variables (Optional)
- [ ] Add any required environment variables
- [ ] Set production values

### 4. Deploy
- [ ] Click "Deploy"
- [ ] Wait for build to complete (usually 1-2 minutes)
- [ ] Check deployment logs for errors

## ✅ Post-Deployment Checklist

### Verify Deployment
- [ ] Visit your Vercel URL
- [ ] Homepage loads correctly
- [ ] Blog page works
- [ ] Individual blog posts open
- [ ] About page displays
- [ ] Test non-existent URL (should show 404)
- [ ] Test on mobile device
- [ ] Check different browsers

### Test 404 Handling
- [ ] Visit `https://your-domain.vercel.app/this-page-does-not-exist`
- [ ] Verify custom 404 page displays
- [ ] Check that suggested posts appear
- [ ] Test "Go Home" and "Read the Blog" buttons

### SEO Verification
- [ ] Visit `https://your-domain.vercel.app/sitemap-index.xml`
- [ ] Visit `https://your-domain.vercel.app/robots.txt`
- [ ] Check page titles in browser tabs
- [ ] Test Open Graph with [OpenGraph.xyz](https://www.opengraph.xyz/)
- [ ] Test Twitter Cards with [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Verify structured data with [Rich Results Test](https://search.google.com/test/rich-results)

### Performance
- [ ] Run [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Check Core Web Vitals
- [ ] Test loading speed
- [ ] Verify images are optimized

### Update URLs (Critical!)
After first successful deployment, update these files with your production URL:

#### Update `astro.config.mjs`:
```javascript
site: 'https://your-actual-domain.vercel.app'
```

#### Update `src/config/site.ts`:
```typescript
url: 'https://your-actual-domain.vercel.app'
```

#### Update `public/robots.txt`:
```
Sitemap: https://your-actual-domain.vercel.app/sitemap-index.xml
```

#### Update `vercel.json` (if you added production URL)
No changes needed - uses relative paths

- [ ] All URLs updated
- [ ] Changes committed and pushed
- [ ] Vercel automatically redeploys

## 🔒 Security Checklist

- [ ] Security headers configured in `vercel.json`
- [ ] No API keys in frontend code
- [ ] `.env` files in `.gitignore`
- [ ] HTTPS enabled (automatic with Vercel)

## 📊 Analytics & Monitoring

### Optional Setup
- [ ] Enable Vercel Analytics (Pro plan feature)
- [ ] Set up Google Analytics
- [ ] Configure Plausible Analytics
- [ ] Set up Google Search Console
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Bing Webmaster Tools

## 🎯 Custom Domain (Optional)

If adding a custom domain:
- [ ] Go to Project Settings → Domains
- [ ] Add your custom domain
- [ ] Update DNS records as instructed
- [ ] Wait for DNS propagation (can take 24-48 hours)
- [ ] Update all config files with new domain
- [ ] Test SSL certificate (automatic)

## 🔄 Continuous Deployment

Verify automatic deployments:
- [ ] Make a small change (e.g., typo fix)
- [ ] Commit and push to GitHub
- [ ] Check Vercel dashboard for automatic deployment
- [ ] Verify change appears on live site

## 🐛 Troubleshooting

If deployment fails, check:
- [ ] Build logs in Vercel dashboard
- [ ] Node version compatibility (18.x+)
- [ ] All dependencies in `package.json`
- [ ] No build errors locally
- [ ] File paths are correct (case-sensitive)
- [ ] Images exist in `/public` directory

## 📝 Documentation

- [ ] Update README with live site URL
- [ ] Document any custom configuration
- [ ] Update repository description
- [ ] Add deployment badge to README

## 🎉 Launch Checklist

Ready to share your site:
- [ ] All pages working perfectly
- [ ] Content reviewed and proofread
- [ ] SEO optimized
- [ ] Social sharing tested
- [ ] Mobile-friendly verified
- [ ] Performance optimized
- [ ] Analytics tracking (if desired)
- [ ] Share on social media!

---

## 📞 Support Resources

- **Vercel Documentation**: https://vercel.com/docs
- **Astro Documentation**: https://docs.astro.build
- **Vercel Support**: support@vercel.com
- **Vercel Community**: https://github.com/vercel/vercel/discussions

---

**Date Prepared**: November 2, 2025
**Last Updated**: Check git history for latest changes
