# Nexus Energy

A professional corporate website for an independent power producer / energy infrastructure
company, built with the same stack as AVSPRO:

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS v4** (CSS-based `@theme` tokens, same pattern as AVSPRO's `globals.css`)
- **lucide-react** for icons
- **framer-motion** available for future animation work

This site mirrors the information architecture of a large independent power producer's
marketing site — energy technologies, expertise/capabilities, a project portfolio, an
operations/services arm, partner relationships, "who we are," news & insights, and careers —
but all copy, branding, names, and data are original to **Nexus Energy** (a fictional brand
created for this project). No third-party text, images, or trademarks are reproduced.

## Structure

```
app/
  page.tsx                 Home
  energy/page.tsx          Energy Technologies overview
  energy/[slug]/page.tsx   Natural Gas / Solar / Wind / Storage / Transmission / Geothermal
  expertise/page.tsx       Capabilities
  projects/page.tsx        Filterable project portfolio table
  services/page.tsx        Operations & asset management services
  partners/page.tsx        Communities / Customers / Affiliates
  who-we-are/page.tsx      People / Leadership / History / Awards
  news/page.tsx            News & Insights listing
  news/[slug]/page.tsx     Article detail
  careers/page.tsx         Open roles
  contact/page.tsx         Contact form
  privacy, terms, compliance/page.tsx   Legal stubs
components/
  Navbar.tsx, Footer.tsx, Ui.tsx
lib/
  technologies.ts, projects.ts, news.ts   Content data
```

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Customizing

- **Colors / fonts:** edit the `@theme` block in `app/globals.css`.
- **Nav links:** edit `components/Navbar.tsx` and `components/Footer.tsx`.
- **Technologies, projects, news:** edit the data files in `lib/`.
- **Real photography:** swap the gradient/icon hero sections for `next/image` once you have
  licensed imagery; add allowed image hosts to `next.config.mjs`.
