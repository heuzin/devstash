# Current Feature

## Status

## Goals

## Notes

## History

<!-- Keep this updated. Earliest to latest -->

- **Next.js initial setup** — Scaffolded the project with Create Next App (Next.js 16, React 19, TypeScript, Tailwind CSS v4, ESLint). Base App Router structure in `src/app` (`layout.tsx`, `page.tsx`, `globals.css`), config files (`next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs`), and default `public/` assets.
- **Dashboard UI — Phase 1 (Completed)** — Initialized shadcn/ui (button, input) and added the `/dashboard` route: top bar with search input and a display-only "New Item" button, dark mode by default, and placeholder `Sidebar`/`Main` sections. Added `context/features/dashboard-phase-{1,2,3}-spec.md`. Branch `feature/dashboard-phase-1`.
- **Dashboard UI — Phase 2 (Completed)** — Built the real sidebar: collapsible Types and Collections groups (Favorites / All Collections) with item counts from mock data, item type links to `/items/[slug]`, collection links to `/collections/[id]`, and a user avatar footer linking to `/settings`. Added a `SidebarProvider` context + toggle button in the top bar; the sidebar collapses to width 0 on desktop and renders as an off-canvas drawer with a click-to-close backdrop on mobile. New files: `SidebarProvider.tsx`, `SidebarToggleButton.tsx`, `Sidebar.tsx`, `lib/icon-map.ts`. Verified with `npm run build`/`lint` and headless-browser screenshots at desktop and mobile widths. Branch `feature/dashboard-phase-2`.
- **Dashboard UI — Phase 3 (Completed)** — Built the main dashboard area: a stats row (items, collections, favorite items, favorite collections), a Collections grid (item count, description, per-type icon breakdown), a Pinned items list, and a Recent Items list (10 most recent, excluding anything already pinned to avoid duplicates). New files: `DashboardMain.tsx`, `StatsCard.tsx`, `CollectionCard.tsx`, `ItemListCard.tsx`, `lib/date.ts`. Verified with `npm run build`/`lint` and headless-browser screenshots at desktop and mobile widths. Branch `feature/dashboard-phase-3`.
