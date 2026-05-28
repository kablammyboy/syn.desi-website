# Syndesi IT Solutions — Website

Marketing site for **Syndesi IT Solutions**, rebuilt as a modern single-page landing.

- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS v4
- **UI foundation:** shadcn-compatible (`components.json`, `cn()` util, lucide icons) so
  [21st.dev](https://21st.dev) components drop in cleanly
- **Animation:** `motion` (Framer Motion)
- **Output:** static export (`output: "export"`) for GitHub Pages / any static host

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → ./out
```

## Project layout

```
src/
  app/
    layout.tsx        # metadata, fonts, <html> shell
    page.tsx          # assembles the landing sections
    globals.css       # brand theme tokens (dark + teal) and textures
  components/site/     # Navbar, Hero, Why, Excellence, Services, Coverage, Contact, Footer
  lib/
    content.ts         # ALL site copy lives here (single source of truth)
    utils.ts           # cn() helper
public/brand/          # logo-white.png (dark bg), logo-black.png (light bg)
content/               # research/reference: site-content.md + homepage screenshot
assets/                # original logo files as delivered
```

To edit copy (headlines, services, contact details), change **`src/lib/content.ts`** — no
component edits needed.

## Adding 21st.dev / shadcn components

The repo is preconfigured (`components.json`, `@/components/ui` alias, `cn()`). To add a component:

```bash
npx shadcn@latest add <component>
# then paste 21st.dev component code, importing { cn } from "@/lib/utils"
```

## Deploying to GitHub Pages

A workflow at `.github/workflows/deploy.yml` builds and publishes on every push to `main`.

1. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Push to `main`.

**Custom domain (syn.desi):** add a `public/CNAME` file containing `syn.desi`, point DNS at
GitHub Pages, and leave `NEXT_PUBLIC_BASE_PATH` unset.

**Project page** (`username.github.io/syn.desi-website`): uncomment the
`NEXT_PUBLIC_BASE_PATH` line in the workflow so asset paths resolve under the subpath.
