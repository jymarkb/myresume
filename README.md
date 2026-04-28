# Jay Mark Borja — Portfolio

Personal portfolio and résumé site for Jay Mark Borja, a full-stack web developer based in Quezon City, Philippines.

**Live:** [resume.jymarkb.info](https://resume.jymarkb.info)

## Tech stack

- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS v3, CSS custom properties for theming
- **Theme:** `next-themes` with system / light / dark detection (cyan accent, dark-first)
- **Fonts:** Poppins + JetBrains Mono via `next/font/google` (self-hosted)
- **Icons:** `lucide-react` (tree-shaken SVG components)
- **Carousel:** Embla via shadcn/ui wrapper
- **Toasts:** sonner
- **SEO:** OpenGraph, Twitter Card, JSON-LD `Person` + `WebSite` schemas, dynamic OG image via `next/og`, sitemap, robots.txt, PWA manifest

## Local development

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
yarn build    # production build
yarn start    # serve the production build
yarn lint     # run ESLint
```

## Project structure

```
src/
├── app/                  # Next.js App Router — layout, routes, metadata, SEO files
│   ├── layout.tsx        # root layout, metadata, JSON-LD
│   ├── page.tsx          # home page
│   ├── opengraph-image.tsx   # dynamic OG image (edge runtime)
│   ├── manifest.ts       # PWA manifest
│   ├── sitemap.ts        # sitemap.xml
│   ├── robots.ts         # robots.txt
│   ├── icon.svg          # favicon
│   └── globals.css       # base tokens (light + dark)
├── component/            # React components
│   ├── animation/        # IntersectionObserver-based scroll animations
│   └── gallery/          # gallery modal + wrapper (portaled)
├── lib/
│   ├── static-data.ts    # all portfolio copy + data (services, projects, testimonials, tech stack)
│   ├── utils.ts          # shared types + helpers (cn, debounce, closeModal, formInputClass)
│   ├── icon-map.tsx      # lucide-react icon resolver for data-driven icon names
│   └── animate-element.ts # IntersectionObserver helper
├── components/ui/        # shadcn/ui primitives (carousel)
├── assets/css/           # additional CSS (home.css)
└── lib/                  # types, helpers, data
```

Convention: data → `lib/static-data.ts`, types → `lib/utils.ts`, components are UI-only.

## Environment variables

| Var | Required | Default | Purpose |
|-----|----------|---------|---------|
| `NEXT_PUBLIC_SITE_URL` | recommended | `https://resume.jymarkb.info` | Canonical URL for OG, sitemap, robots, JSON-LD |

Local: copy to `.env.local`. Production: set in your hosting dashboard.

## Deployment

Built for static + edge deployment on Vercel, Netlify, or any Next.js host.

Pre-deploy checklist:

- Set `NEXT_PUBLIC_SITE_URL` in production env.
- Point a DNS `CNAME` record for `resume` to your host.
- Submit `/sitemap.xml` to Google Search Console after first deploy.
