# Lendiago

Marketing site for **Lendiago**, a financial marketplace and strategic brokerage matching small businesses with curated lending partners across eight financing products.

This is a fully static website. There is no build step, no framework, and no server. Open `index.html` in a browser to view it.

---

## Live preview

Drop the contents of this folder into any static host:

- **GitHub Pages** — push to a repo, enable Pages on the `main` branch (root). The included workflow at `.github/workflows/deploy.yml` automates this.
- **Netlify / Vercel / Cloudflare Pages** — point the project at the repo root with **no build command** and `./` as the publish directory.
- **Local** — `python3 -m http.server 8000` (or any static file server) from this folder, then open `http://localhost:8000`.

---

## Structure

```
.
├── index.html                  ← Home page
├── home.js                     ← Home-page section renderers
├── data.js                     ← Site-wide content data (products, industries, partners, FAQ, etc.)
├── shared.js                   ← Header, footer, breadcrumbs, scroll-reveal, shared utilities
├── shared.css                  ← Theme tokens (CSS variables) and shared styles
│
├── page-template.js            ← Renderer for product detail pages
├── page-template-flat.js       ← Renderer for listing/info pages (industries list, partners, FAQ, etc.)
│
├── about.html                  ← About
├── apply.html                  ← Application form
├── contact.html                ← Contact
├── faq.html                    ← FAQ
├── financing-solutions.html    ← All 8 financing products (listing)
├── industries.html             ← All industries (listing)
├── partners.html               ← Partner program
├── resources.html              ← Resources / blog index
│
├── business-term-loan.html     ┐
├── business-line-of-credit.html│
├── credit-repair.html          │
├── credit-stacking.html        │ Eight product detail pages
├── merchant-cash-advance.html  │ (each is a thin shell calling page-template.js)
├── personal-term-loans.html    │
├── real-estate-loan.html       │
├── sba-loan.html               ┘
│
├── industries/                 ← One HTML page per industry vertical (10 files)
├── resources/                  ← Long-form articles (4 files)
│
├── licenses.html               ┐
├── privacy-policy.html         │ Legal
├── terms-of-service.html       ┘
│
└── assets/
    ├── Favicon.svg
    ├── Full-Logo.svg
    ├── Full-Logo-white.svg
    └── hero-graphic.png
```

### How pages are composed

Each HTML file is a thin entry point. It loads `shared.js` (which injects the header and footer), the relevant template script, and a single page-specific renderer call.

```html
<!-- example: industries.html -->
<script src="data.js"></script>
<script src="shared.js"></script>
<script src="page-template-flat.js"></script>
<script>LendiagoRenderIndustriesListing()</script>
```

All copy, product details, industry lists, partner data, and FAQ entries live in `data.js`. Edit content there once and it propagates across the site.

---

## Tech notes

- **Tailwind** is loaded via the official CDN (`cdn.tailwindcss.com`) with the `forms` and `typography` plugins. The theme is configured inline in each HTML file's `<head>` and reads color tokens from CSS variables defined in `shared.css`.
- **Fonts**: Inter (body) and Outfit (headlines), loaded from Google Fonts.
- **Icons**: inline SVGs, defined in `data.js` and `page-template*.js`. No icon library.
- **Animations**: a small IntersectionObserver-based scroll reveal in `shared.js`. Elements with class `reveal` (and an optional `data-delay` attribute in milliseconds) fade up into view.
- **Forms** (Apply, Contact): client-side only — they don't post anywhere. Hook them up to your CRM / form provider of choice.

---

## Editing content

- **Product details, industries, partners, FAQ, audience copy** → `data.js`
- **Home page sections** → `home.js`
- **Listing/info page rendering** → `page-template-flat.js`
- **Product detail page rendering** → `page-template.js`
- **Header / footer / breadcrumbs** → `shared.js`
- **Theme colors, typography variables** → `shared.css`

---

## Browser support

Modern evergreen browsers. Uses CSS custom properties, `IntersectionObserver`, and template literals — all baseline since ~2018.

---

## License

See [LICENSE](./LICENSE).
