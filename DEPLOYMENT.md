# GitHub Pages Deployment Guide for ASO-Suite Pro Website

Complete step-by-step instructions for deploying the ASO-Suite Pro website to GitHub Pages.

## 📋 Prerequisites

Before you start, ensure you have:
- A GitHub account (free)
- Git installed on your computer
- The complete website files from `/asosuitepro.com` folder

## 🚀 Quick Start (5 minutes)

### Step 1: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. **Repository name:** `asosuitepro.com` (or your preferred name)
3. **Description:** ASO-Suite Pro Website
4. **Visibility:** Choose Public (required for GitHub Pages free tier)
5. **Initialize:** Leave unchecked (we'll push existing files)
6. Click **Create repository**

### Step 2: Push Files to GitHub

Open terminal/command prompt and navigate to your project folder:

```bash
# Navigate to project folder
cd /path/to/asosuitepro.com

# Initialize git (if not already)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: ASO-Suite Pro website"

# Add remote repository
git remote add origin https://github.com/YOUR-USERNAME/asosuitepro.com.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Replace `YOUR-USERNAME` with your actual GitHub username.**

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Find **Pages** in left sidebar (under "Code and automation")
4. Under "Build and deployment"
   - **Source:** Select "Deploy from a branch"
   - **Branch:** Select `main`
   - **Folder:** Select `/` (root)
5. Click **Save**
6. Wait 1-2 minutes for GitHub to build and deploy

Your site will be available at: `https://username.github.io/asosuitepro.com`

## 🏠 Using Custom Domain (Optional)

### Option A: Using Your Own Domain

If you have `asosuitepro.com` domain registered:

#### Step 1: Update Name Servers (Registrar)

1. Log in to your domain registrar (e.g., GoDaddy, Namecheap)
2. Find DNS settings
3. Point name servers to GitHub's DNS:
   - **Nameserver 1:** `ns-123.awsdns-12.com`
   - **Nameserver 2:** `ns-456.awsdns-34.co.uk`
   
   (GitHub provides exact nameservers - check their docs)

4. Save changes (wait 24-48 hours for propagation)

#### Step 2: Configure GitHub Pages

1. Repository **Settings** → **Pages**
2. Under "Custom domain":
   - Enter your domain: `asosuitepro.com`
   - Click **Save**
3. GitHub will verify domain ownership
4. Enable **"Enforce HTTPS"** (appears after domain is verified)

#### Step 3: Create CNAME File

Create file: `CNAME` (no extension) in repository root:

```
asosuitepro.com
```

Push to GitHub:

```bash
git add CNAME
git commit -m "Add custom domain CNAME"
git push
```

Your site will be at: `https://asosuitepro.com`

### Option B: GitHub Subdomain

If you don't have a custom domain, your site is automatically available at:

```
https://YOUR-USERNAME.github.io/asosuitepro.com
```

This is free and requires no additional setup.

## 🔒 Enable HTTPS

GitHub Pages automatically provides SSL/TLS certificates for all sites.

1. Go to repository **Settings** → **Pages**
2. Under "Enforce HTTPS":
   - ✅ Check the box "Enforce HTTPS"
   - Save

**Wait:** If this option is grayed out, wait 5-10 minutes for GitHub to issue the certificate.

After enabling:
- All HTTP requests automatically redirect to HTTPS
- Your site is secure

## 🌐 DNS Configuration Details

If using custom domain with GitHub-provided nameservers:

**GitHub's Nameservers:**
```
ns-123.awsdns-12.com
ns-456.awsdns-34.co.uk
ns-789.awsdns-56.net
ns-012.awsdns-78.org
```

**A Records (if not using nameservers):**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME Record (if using subdomain):**
```
CNAME: www.asosuitepro.com → asosuitepro.com
```

## ✅ Verification Steps

After deployment, verify everything works:

1. **Homepage loads:** Visit `https://asosuitepro.com` (or your URL)
2. **All pages accessible:**
   - Features: `/pages/features.html`
   - Pricing: `/pages/pricing.html`
   - Contact: `/pages/contact.html`
   - FAQ: `/pages/faq.html`
3. **Responsive design:** Test on mobile, tablet, desktop
4. **Theme toggle:** Click moon icon, verify dark mode works
5. **Navigation:** Click all menu items, verify links work
6. **404 page:** Visit non-existent page, verify custom 404.html loads
7. **SEO files:** Check `/sitemap.xml` and `/robots.txt` are accessible
8. **SSL certificate:** Verify padlock icon in browser (HTTPS)

## 📊 Performance Optimization

After deployment, test performance:

### Google PageSpeed Insights

1. Visit [PageSpeed Insights](https://pagespeed.web.dev/)
2. Enter your site URL
3. Check Mobile and Desktop scores
4. Target: 90+ score on both

### Core Web Vitals

Test at [web.dev/measure](https://web.dev/measure/)

**Target metrics:**
- Largest Contentful Paint (LCP): < 2.5 seconds
- First Input Delay (FID): < 100 milliseconds
- Cumulative Layout Shift (CLS): < 0.1

**Optimization tips:**
- Images are lazy-loaded (already implemented)
- JavaScript is deferred (already implemented)
- CSS is optimized (already implemented)
- Consider CDN for assets if traffic is high

## 🔄 Updating Your Site

### Make Changes Locally

1. Edit files in your project folder
2. Test changes by opening in browser
3. Commit changes:

```bash
git add .
git commit -m "Update: describe your changes"
git push
```

GitHub automatically rebuilds and deploys within 1-2 minutes.

### Deploying Specific Files

```bash
# Single file
git add pages/features.html
git commit -m "Update features page"
git push

# Multiple files
git add pages/*.html css/*.css
git commit -m "Update pages and styles"
git push

# All changes
git add .
git commit -m "Update: describe batch changes"
git push
```

### Reverting Changes

If you need to undo recent changes:

```bash
# View commit history
git log --oneline

# Revert to specific commit
git revert COMMIT-HASH
git push

# OR reset to previous commit (careful - loses recent changes)
git reset --hard HEAD~1
git push --force
```

## 🐛 Troubleshooting

### Site Not Loading

1. **Check branch:** Settings → Pages → verify `main` branch is selected
2. **Check folder:** Ensure index.html is in root or `/` is selected
3. **Clear cache:** Hard refresh (Ctrl+Shift+R on Windows)
4. **Wait:** First deployment can take 1-2 minutes
5. **Check logs:** Go to Settings → Pages, scroll down to see build logs

### Custom Domain Not Working

1. **Verify CNAME:** Check if `CNAME` file exists in repository root
2. **DNS propagation:** Try again in 24-48 hours
3. **DNS records:** Verify your registrar shows GitHub nameservers
4. **Browser cache:** Clear cache or use incognito window

### HTTPS Certificate Not Issuing

1. **Wait:** First HTTPS certificate can take 10+ minutes
2. **Domain verification:** Ensure DNS is configured correctly
3. **Check email:** GitHub might send verification email to your account
4. **Re-save domain:** Try removing and re-adding custom domain in Settings

### Pages Not Updating

1. **Check push:** Verify `git push` completed successfully
2. **Check branch:** Ensure commits are on `main` branch
3. **Reload page:** Hard refresh (Ctrl+Shift+R)
4. **Check logs:** Look for build errors in Settings → Pages
5. **Wait longer:** Large changes can take 2-3 minutes

### Build Failure

Check Settings → Pages for error message:

**"Can't find index.html"**
- Move index.html to root directory
- Change folder setting from `/docs` to `/`

**"Jekyll error"**
- Add `.nojekyll` file to repository root
- GitHub will skip Jekyll processing

**"Permission denied"**
- Check file permissions (should be readable by GitHub)
- Re-push all files

## 📈 Monitoring & Maintenance

### Check Site Traffic

1. Go to repository
2. Click **Insights** → **Traffic**
3. View unique visitors and page views

### Monitor Uptime

Use free services:
- [UptimeRobot](https://uptimerobot.com/) - Monitor uptime
- [StatusPage.io](https://www.statuspage.io/) - Display status
- [Pingdom](https://www.pingdom.com/) - Performance monitoring

### SSL Certificate Renewal

GitHub automatically renews SSL certificates 60 days before expiration. No action required.

### Regular Maintenance

**Weekly:**
- Check for broken links
- Verify form submissions work
- Test on different browsers

**Monthly:**
- Review PageSpeed Insights score
- Check Core Web Vitals
- Update analytics

**Quarterly:**
- Review visitor statistics
- Check for outdated content
- Update testimonials/pricing if needed

## 🚨 Emergency Procedures

### Quickly Rollback Entire Site

If something goes wrong:

```bash
# View recent commits
git log --oneline -5

# Revert to stable version
git revert COMMIT-HASH
git push
```

### Emergency Maintenance Mode

Create temporary maintenance page:

1. Rename `index.html` → `index.html.bak`
2. Create new `index.html` with maintenance message:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Maintenance</title>
  <style>
    body { display: flex; align-items: center; justify-content: center; height: 100vh; font-family: sans-serif; }
  </style>
</head>
<body>
  <div style="text-align: center;">
    <h1>Under Maintenance</h1>
    <p>We're currently updating the site. Check back soon!</p>
  </div>
</body>
</html>
```

3. `git add index.html && git commit -m "Maintenance mode" && git push`
4. Fix issues locally
5. Restore: `git checkout HEAD index.html && git push`

## 📞 Support Resources

### GitHub Pages Documentation
- Official guide: [pages.github.com](https://pages.github.com/)
- Troubleshooting: [docs.github.com/en/pages](https://docs.github.com/en/pages)

### ASO-Suite Pro Support
- Email: info@azad.co
- Contact form: [asosuitepro.com/pages/contact.html](https://asosuitepro.com/pages/contact.html)

## ✅ Deployment Checklist

- [ ] GitHub repository created
- [ ] All files pushed to GitHub
- [ ] GitHub Pages enabled
- [ ] Site loads at `YOUR-USERNAME.github.io/asosuitepro.com`
- [ ] Custom domain configured (if using)
- [ ] CNAME file committed (if using custom domain)
- [ ] HTTPS enabled
- [ ] SSL certificate issued (padlock visible)
- [ ] Homepage loads without errors
- [ ] All navigation links work
- [ ] Mobile responsive design verified
- [ ] Dark/Light theme toggle works
- [ ] Contact form validates
- [ ] 404 page works for broken links
- [ ] sitemap.xml accessible
- [ ] robots.txt accessible
- [ ] PageSpeed Insights score 90+
- [ ] Core Web Vitals acceptable
- [ ] Analytics set up (optional)

## 🎉 Deployment Complete!

Your ASO-Suite Pro website is now live on GitHub Pages. 

**Next steps:**
1. Share your site URL
2. Add to Google Search Console
3. Monitor analytics and performance
4. Gather user feedback
5. Update content regularly

---

**Need help?** Check the main [README.md](README.md) or contact support at info@azad.co
