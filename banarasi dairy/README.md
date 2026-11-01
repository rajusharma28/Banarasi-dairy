# Banarasi Dudh Dairy — Website

A premium, fully responsive, multi-page website for **Banarasi Dudh Dairy (बनारसी दूधालय)** — a
traditional Indian sweets and dairy shop in Powai, Mumbai.

Built with **React + Vite + Tailwind CSS v4**. The production build compiles to a single portable
`index.html` plus an `images/` folder, so it can be hosted on any static host, shared as a file, or
dropped into an existing site.

---

## 1. Replacing the homepage banner with your own advertising creative

The homepage hero banner is defined in **one place only**:

```
src/data/banners.ts
```

To use your own Banarasi Dudh Dairy advertising banner:

1. Save your banner image into `public/images/` as **`banner.jpg`** (and, for faster loading,
   **`banner.webp`** — same image, WebP format).
2. Keep the original **20:8 aspect ratio**. The hero stage uses `object-fit: contain`, so your banner
   is displayed in full — never cropped, stretched or re-typeset.
3. Nothing else needs to change. The banner text, logo and business information are part of your
   image and are never recreated by the website.

To turn the hero into a **slider**, add more entries to the `HERO_BANNERS` array. When two or more
banners are supplied, the hero cross-fades automatically and shows navigation dots.

> The banner currently shipped in `public/images/banner.jpg` is a placeholder created for this
> build. Replace it with your own creative before going live.

---

## 2. Where the business details live

All verified business information is centralised in **`src/data/business.ts`**:

- Business name (English + Hindi)
- Shop address
- Contact people and phone numbers (Ramesh, Ranjeet, Harsh)
- Free-delivery threshold (₹1000)
- WhatsApp message templates and `wa.me` link builders
- Google Maps links and embed URL
- Primary navigation

Changing a phone number or the address here updates it everywhere — header, footer, every page,
structured data and WhatsApp links.

---

## 3. Pages

| Route | Page |
| --- | --- |
| `/` | Home — banner, intro, sweets collection, services, why choose us, free delivery, blog, CTA |
| `/about` | About Banarasi Dudh Dairy |
| `/sweets` | Full sweets collection + ordering services |
| `/blog` | Blog listing with category filters |
| `/blog/:slug` | Individual blog article + related articles |
| `/contact` | Contact details, map, enquiry form |
| `/privacy-policy` | Privacy policy |
| `/terms-and-conditions` | Terms & conditions |
| `/sitemap` | HTML sitemap |
| `*` | 404 page |

The site uses **hash-based routing** (`#/about`, `#/blog/top-10-traditional-indian-sweets`). This
keeps the build to a single portable HTML file while still giving every page a unique URL. If you
deploy to a host that supports clean URLs, add a rewrite rule so `/about` serves `index.html`.

---

## 4. SEO

Implemented in `index.html` and `src/hooks/useSeo.ts`:

- Unique `<title>` and meta description per page
- Canonical URLs and Open Graph / Twitter cards
- Semantic HTML5 with a single `<h1>` per page and a correct `h2 → h3` hierarchy
- Alt text and explicit width/height on every image (zero layout shift)
- **LocalBusiness** structured data with verified details only (name, Hindi name, address, phone
  numbers, service offers) — no ratings, awards or invented opening hours
- `BlogPosting` structured data on every article
- `BreadcrumbList` structured data on inner pages
- `public/sitemap.xml`, `public/robots.txt`, `public/rss.xml`
- Mobile-first responsive layout, lazy-loaded below-the-fold images, WebP with JPEG fallback

**Before going live:** update `BUSINESS.siteUrl` in `src/data/business.ts` to your real domain, then
update the matching URLs in `public/sitemap.xml`, `public/robots.txt` and `public/rss.xml`.

---

## 5. Design system

Defined in `src/index.css` using Tailwind v4 `@theme`:

| Token | Value | Usage |
| --- | --- | --- |
| `maroon` | `#720D16` | Primary buttons, headings, nav highlights |
| `burgundy` | `#950F1D` | Footer, deep sections |
| `gold` | `#D6A63B` | Accents, rules, icon emphasis |
| `champagne` | `#F5DFA6` | Borders, decorative elements |
| `cream` | `#FFF3D9` | Section backgrounds |
| `ink` | `#29201D` | Body text |
| `white` | `#FFFFFF` | Content cards |

Typography: **Playfair Display** (headings), **Poppins** (body), **Noto Sans Devanagari**
(Hindi branding). Custom utilities: `pattern-maroon`, `pattern-cream` (traditional CSS motifs),
`shadow-soft` / `shadow-card` / `shadow-lift`, and `.prose-bdd` for editorial article typography.

---

## 6. Enquiries & WhatsApp

`src/data/business.ts` builds `wa.me` deep links with the **+91 India country code**:

- Every sweet card sends a pre-filled message naming that sweet.
- The contact page offers a separate WhatsApp button for **Ramesh, Ranjeet and Harsh**.
- The floating button and every CTA use the default enquiry message.
- The contact form validates input and hands the composed enquiry to WhatsApp — the site makes **no
  claim of online ordering or payment processing**, and there is no backend to mislead anyone.

---

## 7. Commands

```bash
npm install       # install dependencies
npm run dev       # local development server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

---

## 8. Content policy

The site deliberately contains **no fabricated content**: no invented prices, weights, availability
windows, establishment year, awards, certifications, customer reviews or author credentials. Every
claim on the site is either supplied by the business or verifiable from the shop itself.
