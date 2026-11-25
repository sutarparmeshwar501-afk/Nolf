# Nolf corporate website

A premium, minimalist corporate website starter for Nolf, built with the Next.js App Router, TypeScript, and Tailwind CSS v4. It has no application backend, authentication, database, forms, or external UI dependencies.

## Requirements

- Node.js 20.9 or later (Node.js 22 LTS recommended)
- pnpm 11.25.0 (pinned through `packageManager`)

## Local development

```bash
pnpm install
pnpm dev
```

The development server listens on `http://localhost:3000`.

## Checks and production output

```bash
pnpm typecheck
pnpm lint
pnpm build
```

The production build is a static export written to `out/`. It can be served by a static host; no Next.js application server or backend is required for the exported pages.

## Project structure

```text
app/                    Next.js App Router pages and global styles
components/             Shared header, footer, page intro, and link treatments
lib/                    Shared navigation and site data
public/                 Favicon and managed route manifest
eslint.config.mjs        ESLint flat configuration
next.config.ts           Static export and route configuration
postcss.config.mjs       Tailwind CSS v4 PostCSS integration
pnpm-workspace.yaml      Workspace and lifecycle-script policy
```

## Pages

- `/` — Home
- `/about` — About Nolf
- `/products` — Products (INDlop links to `https://indlop.com`)
- `/technology` — Technology
- `/newsroom` — Newsroom
- `/careers` — Careers
- `/contact` — Contact
- `/privacy-policy` — Privacy Policy starter
- `/terms-of-service` — Terms of Service starter

Page titles and meta descriptions are defined in each route's `metadata` export. The actual public domain is intentionally not guessed, so canonical URLs and absolute social-preview URLs are not declared. The privacy and terms pages are drafting baselines and should be reviewed and completed for the actual operator and jurisdiction before public use. No DNS configuration is included.
