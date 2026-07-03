# Nichols Insulation

Multi-page marketing website for Nichols Insulation — a family-owned insulation contractor in Clarksville, TN — with separate URLs for Home, About, Services, and Contact pages.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/nichols-insulation/src/pages/` — HomePage, AboutPage, ServicesPage, ContactPage (one file per route)
- `artifacts/nichols-insulation/src/components/` — shared Header and Footer used on every page
- `artifacts/nichols-insulation/src/App.tsx` — wouter routing (`/`, `/about`, `/services`, `/contact`)
- `artifacts/nichols-insulation/src/index.css` — brand CSS custom properties (green/orange/cream palette)
- `attached_assets/` — Logo, insulation photos used via `@assets` Vite alias

## Architecture decisions

_Populate as you build — non-obvious choices a reader couldn't infer from the code (3-5 bullets)._

## Product

4-page website (frontend-only, no backend) built with React + Vite + wouter:
- **Home** (`/`) — hero, photo strip, why-us cards, process steps, reviews, CTA
- **About** (`/about`) — company story, milestones card, core values
- **Services** (`/services`) — 4 service cards (blown-in, batt & roll, radiant barriers, commercial)
- **Contact** (`/contact`) — contact info + form with react-hook-form/zod validation

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
