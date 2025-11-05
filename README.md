# BySaether.com

BySaether.com is the portfolio and product hub for BySaether — showcasing projects like CodeCore (mobile app) and CodeGrab (browser extension), along with a contact form and subdomain-based routes for product landing pages and policies.

- Live site: https://bysaether.com

## Tech Stack

- Framework: Next.js 15 (App Router)
- Language: TypeScript
- UI: React 19, CSS Modules
- Motion/UX: `motion` (Framer Motion compatible API), `react-icons`
- Analytics: `@vercel/analytics`
- Email: `mailgun.js` via EU endpoint
- Hosting: Vercel (recommended)

## Features

- Project showcase with dynamic routes
  - List: `app/projects/page.tsx`
  - Details: `app/projects/[id]/page.tsx` (data from `data/projects.js`)
- Contact form with Mailgun integration
  - API route: `app/api/contact/route.ts` (POST JSON: `name`, `email`, `message`)
- Theme toggle with persistence
  - `context/ThemeContext.tsx` (localStorage + `data-theme` attribute)
- Subdomain routing via middleware
  - `contact.bysaether.com` → `app/contact/page.tsx`
  - `codecore.bysaether.com` → `app/codecore` (home, privacy policy, manage data)
  - `codegrab.bysaether.com` → `app/codegrab/privacy-policy`
  - Implemented in `middleware.ts` using Next.js Edge middleware
- Image optimization with Next/Image
- Vercel Analytics integration

## Getting Started

- Prerequisites:
  - Node.js 18+ (Node 20 LTS recommended)
  - npm 9+ (or your preferred package manager)

- Install dependencies:
  - `npm install`

- Environment:
  - Create `.env.local`:
    - `MAILGUN_API_KEY=...`
    - `MAILGUN_DOMAIN=...` (e.g. `mg.bysaether.com`)
  - Note: Do not commit `.env.local` (already ignored by `.gitignore`)

- Development:
  - `npm run dev`
  - Open `http://localhost:3000`

- Production build:
  - `npm run build`
  - `npm start`

- Lint:
  - `npm run lint`

## API

- POST `/api/contact`
  - Body (JSON): `{ "name": string, "email": string, "message": string }`
  - Responses:
    - 200: `{ success: true, message: string }`
    - 400: `{ error: 'All fields are required' }`
    - 500: `{ success: false, message: string }`
  - Implemented in `app/api/contact/route.ts` using `mailgun.js` (EU endpoint)

## Project Structure

- `app/` — App Router pages, layouts, styles
  - `layout.tsx` — Global layout, fonts, analytics, header/footer
  - `page.tsx` — Home
  - `about/`, `contact/`, `projects/`, `privacy-policy/`, `cookie-policy/`
  - `codecore/` — Product landing, privacy policy, manage-data
  - `codegrab/` — Privacy policy
- `components/` — Reusable UI (`Header`, `Footer`, `TiltCard`, CSS modules)
- `context/` — `ThemeContext.tsx` for theme state/persistence
- `constants/` — App constants (links, support email)
- `data/` — Static project data (`projects.js`)
- `public/` — Static assets (images, icons)
- `middleware.ts` — Subdomain routing/rewrites
- `next.config.ts` — Next.js config (image qualities)
- `eslint.config.mjs`, `tsconfig.json` — Linting and TypeScript config

## Deployment

- Vercel is recommended:
  - Set `MAILGUN_API_KEY` and `MAILGUN_DOMAIN` in Vercel Project → Settings → Environment Variables
  - Add domains:
    - `bysaether.com` (root)
    - `contact.bysaether.com`
    - `codecore.bysaether.com`
    - `codegrab.bysaether.com`
  - Middleware runs on the Edge runtime and handles subdomain rewrites/redirects
- Alternative platforms should support Next.js App Router and Edge middleware for equivalent behavior

## Security and Secrets

- Never commit secrets; `.env*` files are ignored by default
- Rotate and scope Mailgun keys appropriately; use EU endpoint if your domain is EU-based

## Scripts

- `dev` — `next dev --turbopack`
- `build` — `next build`
- `start` — `next start`
- `lint` — `next lint`

## License

- Copyright © BySaether. All rights reserved.
- No explicit open-source license provided.
