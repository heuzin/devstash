# Current Feature

Dashboard UI — Phase 1 (of 3): base layout, shadcn/ui setup, and the `/dashboard` route.

## Status

In Progress

## Goals

- ShadCN UI initialization and components
- ShadCN component installation
- Dashboard route at /dashboard
- Main dashboard layout and any global styles
- Dark mode by default
- Top bar with search and new item button (display only)
- Placeholder for sidebar and main area. Just add an h2 with "Sidebar" and "Main" for now.

## Notes

- Full spec: @context/features/dashboard-phase-1-spec.md
- References: @context/screenshots/dashboard-ui-main.png, @context/project-overview.md, @src/lib/mock-data.ts
- Phase 1 of 3 — phases 2 and 3 specs already exist at @context/features/dashboard-phase-2-spec.md and @context/features/dashboard-phase-3-spec.md

## History

<!-- Keep this updated. Earliest to latest -->

- **Next.js initial setup** — Scaffolded the project with Create Next App (Next.js 16, React 19, TypeScript, Tailwind CSS v4, ESLint). Base App Router structure in `src/app` (`layout.tsx`, `page.tsx`, `globals.css`), config files (`next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs`), and default `public/` assets.
