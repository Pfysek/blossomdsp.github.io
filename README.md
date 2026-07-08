# Bloosom DSP Website

A minimalist, editorial single-page website for Bloosom DSP — an independent audio software company.

**Live site:** [https://bloosomdsp.com](https://bloosomdsp.com)

---

## About

This is a static website built with pure HTML, CSS, and vanilla JavaScript. No frameworks, build tools, or dependencies required.

### Features

- **Single-page design** with three sections: Hero, About, and Shop
- **Editorial typography** using Inter font from Google Fonts
- **Scroll-triggered text reveal animations** with staggered timing
- **Smooth scrolling** navigation between sections
- **Strong pink accent** (#ff2d78) reserved exclusively for the shop CTA
- **Fully responsive** for desktop, tablet, and mobile
- **Respects `prefers-reduced-motion`** for accessibility
- **Semantic HTML** with proper ARIA labels
- **Keyboard-accessible** hover, focus, and active states on all interactive elements

### File Structure

```
bloosomdsp/
├── index.html    # Main HTML document
├── style.css     # All styles (no external CSS dependencies)
├── script.js     # Smooth scroll + reveal animations
└── README.md     # This file
```

---

## Deploy to GitHub Pages

Follow these steps to deploy this website using **GitHub Pages**:

### Step 1: Create a new GitHub repository

1. Go to [github.com/new](https://github.com/new)
2. Name your repository `bloosomdsp.com` (or any name you prefer)
3. Make it **Public**
4. Click **Create repository**

### Step 2: Upload the files

**Option A — Using the GitHub web interface:**

1. In your new repository, click **"Add file"** → **"Upload files"**
2. Drag and drop all four files (`index.html`, `style.css`, `script.js`, `README.md`)
3. Click **"Commit changes"**

**Option B — Using the command line:**

```bash
# Clone your new repository
git clone https://github.com/YOUR_USERNAME/bloosomdsp.com.git
cd bloosomdsp.com

# Copy the website files into this folder
# (copy index.html, style.css, script.js, README.md here)

# Push to GitHub
git add .
git commit -m "Initial website upload"
git push origin main
```

### Step 3: Enable GitHub Pages

1. In your repository, go to **Settings** (top tab)
2. Scroll down to the **Pages** section (left sidebar)
3. Under **"Build and deployment"** → **Source**, select **"Deploy from a branch"**
4. Under **Branch**, select `main` and folder `/ (root)`
5. Click **Save**

6. Wait 1-2 minutes, then visit:
   ```
   https://YOUR_USERNAME.github.io/bloosomdsp.com
   ```

### Step 4: Connect your custom domain (optional)

To use `bloosomdsp.com` instead of the GitHub subdomain:

1. In **Settings** → **Pages**, find **"Custom domain"**
2. Enter: `bloosomdsp.com`
3. Click **Save**

4. At your domain registrar, add these DNS records:

   | Type | Host | Value |
   |------|------|-------|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | CNAME | www | YOUR_USERNAME.github.io |

5. Wait for DNS propagation (up to 24 hours), then enable **"Enforce HTTPS"**

---

## Customization

### Editing content

- **Hero title:** Edit the `<h1>` in `index.html`
- **About text:** Edit the `<p class="about-line">` elements in `index.html`
- **Shop heading:** Edit the `<h2 class="shop-heading">` in `index.html`
- **Shop link:** Change `https://shop.bloosomdsp.com` in the shop section
- **Footer links:** Replace `#` with actual URLs for Terms and Privacy pages

### Editing styles

- **Pink accent color:** Change `--color-accent` in `:root` at the top of `style.css`
- **Typography:** Adjust font sizes in the `clamp()` functions throughout `style.css`
- **Spacing:** Modify padding values in section rules

### Adding new sections

1. Add a new `<section>` element in `index.html`
2. Style it in `style.css`
3. Add a navigation link in the `<nav>` element

---

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari (iOS 14+)
- Chrome for Android (last 2 versions)

---

## License

This website code is proprietary to Bloosom DSP. All rights reserved.
