# ASO-Suite Pro Website

Modern, responsive marketing website for **ASO-Suite Pro** - Advanced WordPress admin security and optimization plugin with 22+ modular tools.

**Live Site:** [asosuitepro.com](https://asosuitepro.com)

## 🎯 Project Overview

This is a production-ready HTML/CSS/JavaScript website designed to showcase ASO-Suite Pro plugin features, pricing, documentation, and support. The site is built with modern web standards and deployed via GitHub Pages.

**Key Stats:**
- 11 HTML pages (homepage + 10 feature pages)
- 100% responsive design (mobile-first)
- Dark/Light theme toggle with persistence
- Full accessibility compliance (WCAG AA)
- SEO optimized with meta tags, OG, Twitter Card, and Schema.org structured data
- Performance optimized (lazy loading, defer scripts, CSS minification)

## 📁 Project Structure

```
asosuitepro.com/
├── index.html                    # Homepage
├── 404.html                      # Error page
├── manifest.json                 # PWA manifest
├── robots.txt                    # SEO robots file
├── sitemap.xml                   # XML sitemap for search engines
├── assets/
│   ├── logo/                     # Brand logos
│   └── images/                   # Product screenshots, testimonials
├── css/
│   ├── theme.css                 # CSS variables, dark mode, base styles (270 lines)
│   ├── components.css            # Reusable UI components (700+ lines)
│   └── main.css                  # Main styles, header, hero, footer (600+ lines)
├── js/
│   ├── theme-toggle.js           # Dark/light mode toggle (50 lines)
│   ├── main.js                   # Core functionality: menu, scroll, forms (400+ lines)
│   ├── lazy-load.js              # Image lazy loading (30 lines)
│   └── form-handler.js           # Contact form validation (150 lines)
└── pages/
    ├── features.html             # Feature showcase with all 22+ modules
    ├── pricing.html              # Pricing plans and comparison
    ├── contact.html              # Contact form + support channels
    ├── about.html                # Company mission, founder, timeline
    ├── faq.html                  # 20+ FAQ items in 5 categories
    ├── support.html              # Support hub with documentation links
    ├── changelog.html            # Version history and release notes
    ├── privacy.html              # Privacy policy
    ├── terms.html                # Terms of service
    └── docs/
        └── index.html            # Documentation hub

```

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Cyan | #0ea5e9 | Main CTAs, highlights, active states |
| Primary Dark | #0284c7 | Hover states, darker backgrounds |
| Accent Yellow | #ffc107 | Premium features, upgrade buttons |
| Secondary Indigo | #6366f1 | Secondary actions, links |
| Success | #16a34a | Positive feedback, checkmarks |
| Warning | #f59e0b | Warnings, alerts |
| Danger | #dc2626 | Errors, destructive actions |
| Info | #3b82f6 | Information messages |

**Dark Mode:** Complete CSS variable override system with `.dark-mode` class

### Typography

- **Headlines:** Bold, professional serif (system default)
- **Body:** Clean, readable sans-serif (14-16px)
- **Code:** Monospace for technical content

### Spacing Scale

- xs: 4px
- sm: 8px
- md: 12px
- lg: 16px
- xl: 24px
- 2xl: 32px
- 3xl: 64px

### Border Radius

- xs: 4px
- sm: 8px
- md: 12px
- lg: 18px

## 🚀 Features

### ✨ Frontend Features
- ✅ **Responsive Design** - Mobile-first CSS Grid layout
- ✅ **Dark/Light Mode** - Theme toggle with localStorage persistence
- ✅ **Hamburger Menu** - Mobile navigation with smooth animations
- ✅ **Sticky Header** - Navigation stays visible while scrolling
- ✅ **Scroll-to-Top Button** - Animated SVG progress circle
- ✅ **Contact Form** - Full client-side validation with email/phone regex
- ✅ **Accordion Component** - FAQ and collapsible sections with keyboard support
- ✅ **Lazy Loading** - Image optimization with IntersectionObserver
- ✅ **WhatsApp Widget** - Floating button for customer engagement
- ✅ **Animated Elements** - Subtle hover effects and fade-in animations

### ♿ Accessibility
- ✅ **WCAG AA Compliance** - Color contrast 4.5:1+ ratio
- ✅ **Semantic HTML5** - Proper use of `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- ✅ **ARIA Labels** - Form fields, buttons, and interactive elements properly labeled
- ✅ **Keyboard Navigation** - Full support for Tab, Enter, Space, Arrow keys
- ✅ **Focus Management** - Visible focus indicators on all interactive elements
- ✅ **Skip Links** - Skip-to-content link for screen reader users
- ✅ **Reduced Motion** - CSS media query for motion-sensitive users

### 📱 Mobile Optimization
- ✅ **16px Font Size** - Prevents unwanted iOS zoom on input fields
- ✅ **Touch-Friendly** - Buttons sized for touch interaction (44x44px minimum)
- ✅ **Responsive Images** - Uses `data-lazy-src` with blur-up effect
- ✅ **Mobile Navigation** - Hamburger menu for small screens

### 🔍 SEO Optimization
- ✅ **Meta Tags** - Title, description, keywords, author on every page
- ✅ **Open Graph (OG)** - Social media sharing optimization
- ✅ **Twitter Card** - Twitter-specific sharing metadata
- ✅ **Schema.org JSON-LD** - Structured data (Organization, Product, BreadcrumbList)
- ✅ **Sitemap** - XML sitemap for search engine crawling
- ✅ **Robots.txt** - Crawler directives and crawl-delay settings
- ✅ **Link Structure** - Proper internal linking across all pages

### ⚡ Performance
- ✅ **CSS Minification** - Optimized main.css structure
- ✅ **JavaScript Deferral** - All scripts load with `defer` attribute
- ✅ **Lazy Image Loading** - IntersectionObserver with blur-up effect
- ✅ **CSS Variables** - Efficient theme switching without runtime calculations

## 📄 Pages & Content

### Homepage (`index.html`)
- Hero section with dual CTAs
- About section with 22+ module highlights
- Features showcase (6 key categories)
- Testimonials (3 customer quotes)
- Pricing comparison (Free vs Pro)
- FAQ accordion (6 questions)
- CTA banner with gradient
- Footer with social links

### Features (`pages/features.html`)
- 9 Free modules showcase
- 13 Premium modules organized by category:
  - Security & Protection (3 modules)
  - Content & Media (4 modules)
  - Admin Control (3 modules)
  - Automation (3 modules)
- Detailed comparison table (15 feature rows)

### Pricing (`pages/pricing.html`)
- Free tier ($0/forever)
- Pro tier ($49/one-time, "Most Popular")
- 30-day money-back guarantee badge
- Detailed feature comparison (17 rows × 6 categories)
- 5-question pricing FAQ
- 4 benefit cards (Instant Activation, Secure Checkout, 24/7 Support, Free Updates)

### Contact (`pages/contact.html`)
- Contact form (name, email, subject, message)
- Email: info@azad.co
- WhatsApp widget integration
- Help cards (Documentation, FAQ, Support)
- Response time grid (Standard, Priority, WhatsApp, Urgent)

### About (`pages/about.html`)
- Founder profile (Ayyaz Ahmad)
- Company mission and values (4 key values)
- Timeline (5 milestones from 2023-2026)
- Stats cards (22+ Modules, 10K+ Users, 99% Satisfaction, 24/7 Support)
- Company information grid

### FAQ (`pages/faq.html`)
- 20+ Q&A items organized in 5 categories:
  - General Questions
  - Installation & Compatibility
  - Features & Functionality
  - Pricing & Licensing
  - Support & Help

### Support (`pages/support.html`)
- 6 support channel cards (Email, WhatsApp, Docs, FAQ, Bug Report, Feature Request)
- 5 documentation category cards
- Links to contact page and documentation hub

### Legal Pages
- **Privacy Policy** (`pages/privacy.html`) - 9 sections
- **Terms of Service** (`pages/terms.html`) - 10 sections

### Additional Pages
- **Changelog** (`pages/changelog.html`) - Version history and release notes
- **Documentation Hub** (`pages/docs/index.html`) - Links to guides and tutorials
- **404 Error Page** (`404.html`) - Custom error page with navigation

## 🛠️ Technology Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Tailwind CSS | CDN (Latest) |
| Scripting | Vanilla JavaScript | ES6+ |
| Markup | HTML5 | Semantic |
| Icons | SVG | Inline |
| Package Mgr | None | Zero dependencies |

**No Build Process Required** - Static files deploy directly to GitHub Pages.

## 📦 Installation

### Option 1: Clone from Git

```bash
git clone https://github.com/yourusername/asosuitepro.com.git
cd asosuitepro.com
# Open index.html in browser or serve with local server
```

### Option 2: Download ZIP

1. Download the repository as ZIP
2. Extract to a folder
3. Open `index.html` in your web browser

### Option 3: Local Server (Recommended)

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using Node.js (simple-http-server)
node -e "require('http').createServer((req,res)=>{res.writeHead(200);require('fs').createReadStream('.'+req.url).pipe(res)}).listen(8000)"
```

Visit `http://localhost:8000` in your browser.

## 🚀 GitHub Pages Deployment

### Setup Instructions

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: ASO-Suite Pro website"
   git remote add origin https://github.com/yourusername/asosuitepro.com.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to Repository Settings
   - Navigate to "Pages" section
   - Source: Select "Deploy from a branch"
   - Branch: Select "main" or your default branch
   - Folder: Select "root" (for files in root) or "docs/" (if files are in docs folder)
   - Save

3. **Configure Custom Domain (Optional)**
   - Add `CNAME` file to root with your domain:
     ```
     asosuitepro.com
     ```
   - Update DNS A records to point to GitHub Pages:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

4. **Enable HTTPS**
   - GitHub Pages automatically issues SSL certificate
   - Enable "Enforce HTTPS" in Settings → Pages

### Deployment Checklist

- [ ] Repository created and pushed to GitHub
- [ ] GitHub Pages enabled in Settings
- [ ] Branch and folder configured correctly
- [ ] Custom domain setup (if applicable)
- [ ] HTTPS enabled
- [ ] Test homepage loads correctly
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Test dark/light theme toggle
- [ ] Test contact form validation
- [ ] Test all page navigation
- [ ] Verify sitemap accessible at `/sitemap.xml`
- [ ] Verify robots.txt accessible at `/robots.txt`
- [ ] Check SEO meta tags in browser head
- [ ] Verify 404.html error handling

## 📝 Customization Guide

### Update Contact Email

Search and replace in all HTML files:
```
info@azad.co  →  your-email@domain.com
```

**Files to update:**
- `index.html`
- `pages/contact.html`
- `pages/about.html`
- `pages/privacy.html`
- `pages/terms.html`

### Update WhatsApp Number

Search and replace in all HTML files:
```
+1234567890  →  your-phone-number
```

**WhatsApp Link Format:**
```html
https://wa.me/1234567890?text=Hello%20ASO-Suite%20Pro%20Team
```

### Update Brand Logo

Replace logo files in `/assets/logo/`:
- `logo-dark.svg` - Logo for light theme
- `logo-light.svg` - Logo for dark theme (if needed)

Update logo paths in header template:
```html
<img src="/assets/logo/logo-dark.svg" alt="ASO-Suite Pro">
```

### Update Address & Company Info

Edit in these files:
- `pages/contact.html` - Contact form
- `pages/about.html` - Company information grid
- `pages/privacy.html` - Privacy policy contact section
- `pages/terms.html` - Terms contact section

### Modify Color Scheme

Edit `/css/theme.css`:

```css
:root {
  --primary-color: #0ea5e9;           /* Primary cyan */
  --primary-dark: #0284c7;            /* Darker cyan */
  --accent-color: #ffc107;            /* Yellow accent */
  --secondary-color: #6366f1;         /* Indigo */
  --success-color: #16a34a;           /* Green */
  --warning-color: #f59e0b;           /* Orange */
  --danger-color: #dc2626;            /* Red */
  --info-color: #3b82f6;              /* Blue */
}
```

All components inherit colors from these variables.

### Add New Page

1. Create HTML file in appropriate folder:
   ```
   pages/new-page.html
   ```

2. Use template structure:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta name="description" content="">
     <title>Page Title - ASO-Suite Pro</title>
     <link rel="stylesheet" href="https://cdn.tailwindcss.com">
     <link rel="stylesheet" href="/css/main.css">
   </head>
   <body>
     <!-- Header -->
     <!-- Main content -->
     <!-- Footer -->
     <script src="/js/theme-toggle.js" defer></script>
     <script src="/js/main.js" defer></script>
   </body>
   </html>
   ```

3. Add link to navigation in header of all pages:
   ```html
   <li class="nav-item"><a href="/pages/new-page.html">New Page</a></li>
   ```

4. Update sitemap.xml with new page URL

5. Test responsive design on all devices

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| GitHub Pages not loading | Verify branch/folder in Settings → Pages |
| Custom domain not working | Check CNAME file and DNS records (wait up to 24h) |
| Theme toggle not working | Check browser console for JavaScript errors (F12) |
| Form not submitting | Ensure contact form handler endpoint configured |
| Images not loading | Check paths are correct: `/assets/images/` |
| Mobile menu not closing | Clear browser cache (Ctrl+Shift+Del) |
| Dark mode colors wrong | Verify CSS variables in theme.css |

## 📊 SEO Checklist

- [x] Meta tags on all pages (title, description, keywords)
- [x] Open Graph tags for social sharing
- [x] Twitter Card meta tags
- [x] Schema.org JSON-LD structured data
- [x] Mobile-responsive design
- [x] Fast page load time
- [x] Accessible navigation
- [x] Internal linking strategy
- [x] sitemap.xml created
- [x] robots.txt configured
- [x] HTTPS enabled on GitHub Pages
- [ ] Submit sitemap to Google Search Console
- [ ] Monitor Core Web Vitals
- [ ] Test with Google PageSpeed Insights

## 📱 Browser Support

| Browser | Latest | Version |
|---------|--------|---------|
| Chrome | ✅ | 90+ |
| Firefox | ✅ | 88+ |
| Safari | ✅ | 14+ |
| Edge | ✅ | 90+ |
| IE 11 | ⚠️ | Limited support (CSS Grid fallback) |
| Mobile | ✅ | iOS 12+, Android 9+ |

## 📄 License

This website is part of the ASO-Suite Pro project. All rights reserved.

## 🤝 Support

- Email: info@azad.co
- WhatsApp: [Contact us](https://wa.me/1234567890)
- Documentation: [/pages/docs/index.html](/pages/docs/index.html)
- FAQ: [/pages/faq.html](/pages/faq.html)

## 🔄 Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Feb 12, 2026 | Initial website launch with 11 pages, dark mode, contact form |

---

**Last Updated:** February 12, 2026  
**Maintained by:** ASO-Suite Pro Team  
**Repository:** [github.com/yourusername/asosuitepro.com](https://github.com/yourusername/asosuitepro.com)
