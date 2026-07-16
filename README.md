# Saguaro Digital Ventures

The corporate website for Saguaro Digital Ventures, an Arizona-based software
company building practical SaaS products and digital tools — including
[Monte Estate](https://saguarodigitalventures.com/products/monte-estate).

## Tech Stack

- [Next.js](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS v4
- Geist + Inter (via `next/font`)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

- `src/app` — routes: home, `/products/monte-estate`, `/privacy`, `/terms`
- `src/components` — Navbar, Hero, Products, About, Technology, Contact, Footer
- `src/app/globals.css` — design tokens (color palette, typography, dark mode)
- `public/images` — hero photography

## Scripts

- `npm run dev` — start the local dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint
