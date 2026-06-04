<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# robby-porfolio

Single-page portfolio app (Next.js 16, React 19, TypeScript, Tailwind v4).

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run lint` — ESLint check
- No test framework exists (don't add or run tests)

## Architecture

- **One route**: `src/app/page.tsx` is the only page. Navigation is hash-based (`#skills`, `#projects`, etc.) via `<a href="#...">` — no dynamic routes, no page router.
- **Components**: `src/components/` — Nav, Hero, Skills, Projects, Experience, Contact, Footer. All are `"use client"` except the layout and page (Server Components by default).
- **Hook**: `src/hooks/useScrollAnimation.ts` — IntersectionObserver-based fade-in (`"use client"`).
- **Style**: Tailwind v4 via `@tailwindcss/postcss`. Custom theme defined in `src/app/globals.css` using `@theme`. No `tailwind.config.*` file — all customization lives in CSS.
- **Path alias**: `@/*` → `./src/*` (from `tsconfig.json`).

## Framework quirks

- **Next.js 16 breaking changes** — consult `node_modules/next/dist/docs/` before any framework code. The bundled docs are the source of truth.
- **Tailwind v4** uses `@tailwindcss/postcss` (not `tailwindcss` directly) and the `@theme` CSS directive. `@import "tailwindcss"` replaces the old `@tailwind` directives.
- **Fonts**: Atkinson Hyperlegible loaded via `next/font/google`. Outfit (sans-serif) and Cormorant Garamond (serif) imported via CSS `@import` in `globals.css`.

## Stale artifacts

Ignore these files — they are remnants from a previous Jekyll version:
- `_config.yml`, `portfolio.html`, `portfolio-silver.html`
- `README.md` references `assets/` and `_data/` directories that no longer exist
