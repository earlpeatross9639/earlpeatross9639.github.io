# Earl Peatross III — Cybersecurity Networking Landing Page

A fast, accessible, fully static "digital business card" for meeting recruiters,
hiring managers, and security professionals at conferences and networking events.
Someone scans your QR code, lands here, and immediately sees who you are, your
resume, LinkedIn, projects, and every way to reach you.

- **No backend, no build step, no framework.** Just HTML, CSS, and vanilla JS.
- **No trackers, no third-party scripts.** Everything loads from your own origin.
- **Mobile-first**, high-contrast SOC/dark aesthetic, tuned for phone screens.
- **Self-contained QR generator** — no external API, works offline.

---

## 1. Project structure

```
/
├── index.html          Main landing page
├── styles.css          All styling (design tokens at the top)
├── script.js           CONFIG object + page builder + QR engine + vCard
├── qr.html             Standalone QR generator / print utility
├── README.md           This file
└── assets/
    ├── resume.pdf       ← replace with your resume
    ├── profile.jpg      ← replace with your photo (square)
    ├── favicon.svg      Browser tab / bookmark icon
    ├── og-image.png     Social share preview (1200×630)
    ├── qr-page.css      Styles for qr.html only
    └── qr-page.js       Logic for qr.html only
```

---

## 2. Make it yours — edit ONE place

Open **`script.js`** and edit the `CONFIG` object at the very top. Everything on
the page (links, buttons, About text, focus areas, projects, vCard, QR target)
is generated from it. Fields marked `// TODO` are placeholders to replace before
you go live:

```js
const CONFIG = {
  name: "Earl Peatross III",
  email: "you@example.com",        // TODO
  phone: "+1 (555) 555-5555",      // TODO (or "" to hide)
  linkedin: "https://www.linkedin.com/in/YOUR-HANDLE",  // TODO
  github: "https://github.com/YOUR-HANDLE",             // TODO
  portfolio: "https://github.com/YOUR-HANDLE?tab=repositories", // TODO
  website: "https://YOUR-DOMAIN-HERE.com",              // TODO
  qrUrl: "https://YOUR-DOMAIN-HERE.com",                // TODO — what the QR points to
  resume: "assets/resume.pdf",
  // ...about, credentials, focus, projects below
};
```

Notes:
- Leave any link as `""` to hide that button.
- Placeholders (`YOUR-…`, `example.com`, `555) 555`) render as clearly-labelled,
  non-clickable "Add your link" cards so you never ship a broken link by accident.
- The **About**, **credentials**, and **projects** text was pre-filled with
  professional framing you can verify and edit — nothing was fabricated. Adjust
  anything that isn't current, and replace the placeholder projects with real ones.

### Add / edit projects
In `CONFIG.projects`, duplicate a project object and fill it in:

```js
{
  name: "SIEM Detection Ruleset",
  description: "Custom detections that cut alert noise by triaging on...",
  tech: ["Splunk", "Sigma", "Python"],
  link: "https://github.com/you/repo"   // or "" for no link
}
```

### Add / edit focus areas
Edit `CONFIG.focus`. The `icon` value must be one of the built-in keys:
`shield, alert, wrench, radar, monitor, server`.

---

## 3. Replace your resume

1. Export your resume as a **PDF**.
2. Name it **`resume.pdf`**.
3. Put it in the **`assets/`** folder, replacing the placeholder.

The "View Resume" and "Download Resume" buttons already point to
`assets/resume.pdf`, so no code changes are needed. (If you prefer a different
name, update `CONFIG.resume`.)

## 4. Replace your photo

1. Crop a photo to a **square** (e.g. 640×640 or larger).
2. Save it as **`profile.jpg`** in **`assets/`**, replacing the placeholder.

To use a different filename/format, update the `<img src="…">` in `index.html`
(the hero photo) — everything else is CSS.

**Optional but recommended:** replace `assets/og-image.png` (1200×630) with a
branded share image, and `assets/favicon.svg` with your own icon.

---

## 5. Generate your final QR code

Two options:

**A. Use the built-in generator (recommended).**
Open **`qr.html`** in a browser (after deploying, `https://your-domain.com/qr.html`).
Enter your live URL, pick an error-correction level, set a size, and click
**Download PNG** or **Download SVG**. For business cards, choose level **Q** or
**H** — they tolerate ink bleed and scuffs better.

**B. Let the homepage render it.**
Set `CONFIG.qrUrl` to your live URL and the QR block at the bottom of the
homepage renders automatically.

> ⚠️ Set `qrUrl` (and `website`) to your **real deployed URL** before printing
> anything. The QR only works if it points to a live address.

The QR engine is a self-contained port of Nayuki's QR Code generator (MIT) — no
external service is contacted, so it works offline and leaks nothing.

---

## 6. Deploy (pick one)

This is a plain static site — no build command, output directory is the repo root.

### GitHub Pages
1. Create a repo and push these files to the `main` branch.
2. Repo **Settings → Pages** → *Build and deployment* → **Deploy from a branch**.
3. Branch: `main`, folder: `/ (root)` → **Save**.
4. Your site appears at `https://<username>.github.io/<repo>/` in ~1 minute.
   For a custom domain, add it under Settings → Pages and create a `CNAME` DNS
   record at your registrar.

### Cloudflare Pages
1. **Workers & Pages → Create → Pages → Connect to Git**, pick your repo.
2. Framework preset: **None**. Build command: *(leave blank)*.
   Build output directory: `/`.
3. **Save and Deploy**. Add a custom domain under the project's *Custom domains*.

### Netlify
1. **Add new site → Import an existing project**, pick your repo.
2. Build command: *(blank)*. Publish directory: `.` (root). **Deploy**.
   Or drag-and-drop the folder onto the Netlify dashboard for an instant deploy.

### Vercel
1. **Add New → Project**, import your repo.
2. Framework preset: **Other**. Build/Output settings: leave defaults (no build).
3. **Deploy**, then add your domain under **Settings → Domains**.

After deploying, update `CONFIG.qrUrl`, `CONFIG.website`, the `<link rel="canonical">`
and the `og:url` in `index.html` to the final URL, redeploy, then generate the QR.

---

## 7. Security notes

- The site ships with a **Content-Security-Policy** `<meta>` tag restricting all
  resources to your own origin (`'self'`) — no third-party scripts, fonts, or
  trackers. There are **no API keys** anywhere (nothing needs one).
- `frame-ancestors` and `X-Frame-Options` can't be enforced from a `<meta>` tag.
  To block your page from being embedded in iframes, add these **HTTP headers**
  at your host:
  - Netlify: create a `_headers` file:
    ```
    /*
      X-Frame-Options: DENY
      X-Content-Type-Options: nosniff
      Referrer-Policy: strict-origin-when-cross-origin
    ```
  - Cloudflare Pages: same `_headers` file works.
  - Vercel: add a `headers` block in `vercel.json`.
  - GitHub Pages: custom headers aren't supported (the `<meta>` CSP still applies).
- Everything runs client-side; the vCard and QR downloads never leave the browser.

---

## 8. Accessibility & performance

- Semantic landmarks (`header`, `main`, `nav`, `section`, `footer`), a skip link,
  visible focus rings, `aria-label`s on icon-only controls, and honored
  `prefers-reduced-motion`.
- Touch targets are ≥ 44px; no horizontal scroll from ~320px up.
- No web fonts or external requests → near-instant loads.

---

## 9. Quick local preview

Because the pages use relative asset paths, just open `index.html` in a browser,
or serve the folder for the cleanest result:

```bash
# from the project root
python3 -m http.server 8080
# then visit http://localhost:8080
```
