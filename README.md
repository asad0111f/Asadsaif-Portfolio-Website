# Asad Saif — Portfolio

Modern, fast personal portfolio built with Vite + React + TypeScript + Tailwind CSS + Framer Motion.

## Tech
- Build: Vite + React + TypeScript
- Styling: Tailwind CSS
- Motion: Framer Motion
- Icons: lucide-react
- SEO: react-helmet-async with JSON-LD

## Scripts
- `npm run dev` — start dev server
- `npm run build` — type-check and build for production
- `npm run preview` — preview production build

## Setup
1) Install deps: `npm install`
2) Copy `.env.example` to `.env` and set:
   - `VITE_CONTACT_ENDPOINT` — Formspree/EmailJS endpoint
   - `VITE_GA_ID` — optional Google Analytics ID
3) Start: `npm run dev`

## Edit Content
- All portfolio content is in `src/data/site.ts`:
  - `owner`, `highlights`, `businesses`, `projects`, `testimonials`, `skills`, `nav`, `cta`, `seo`
- Add/modify projects/testimonials/businesses by editing arrays in that file.

## Structure
- `src/components` — UI components (Header, Footer, Hero, ProjectsGrid, etc.)
- `src/pages` — route pages (Home, Projects, About, Businesses, Reviews, Contact)
- `src/layouts/MainLayout.tsx` — layout with header/footer + page transitions
- `src/lib/seo.tsx` — SEO helpers (Helmet, JSON‑LD)

## SEO
- Default meta via `DefaultSEO` (site-wide). Per-page overrides using `SEO` component in each page.
- Static `public/robots.txt` and `public/sitemap.xml` provided. Update `site.seo.siteUrl` accordingly.

## Accessibility
- Keyboard focus styles, aria labels on interactive elements, high-contrast palette.

## Deploy
- Vercel: import repo → set `Build Command: npm run build`, `Output: dist`.
- Netlify: set build command `npm run build` and publish directory `dist`.
- Set your domain and ensure `site.seo.siteUrl` matches.

## Notes
- Images use `loading="lazy"` and responsive, lightweight UI.
- Tailwind and small design system keep bundle lean; no heavy UI kits.

---

Checklist
- Run locally: `npm install && npm run dev`
- Edit content: `src/data/site.ts`
- Deploy: push to GitHub → Vercel/Netlify (build `npm run build`)

Where to add more content
- Projects: `src/data/site.ts: projects` array
- Testimonials: `src/data/site.ts: testimonials` array
- Businesses: `src/data/site.ts: businesses` array
