# Benstanthub Ventures: Errands Landing Page

Next.js 14 (App Router) + TypeScript. Frontend only, no backend, no database.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Set your WhatsApp number (important)

Edit `lib/config.ts`, or set an env var:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=2348012345678
```

International format, digits only (no `+`, spaces or dashes). Every CTA on the page uses this number
and opens WhatsApp with a prefilled message (edit them in `MESSAGES`).

## Favicon

Next.js uses `app/icon.svg` automatically. Replace it with your exact logomark, or drop in
`app/icon.png` / `app/favicon.ico`.

## Logo

`components/Logo.tsx` contains an inline SVG recreation of the BH mark. To use your real file,
put it in `/public` and swap the SVG for a `next/image` tag.

## Deploy to Vercel

1. Push this folder to GitHub.
2. In Vercel: Add New → Project → import the repo (framework auto-detects as Next.js).
3. Add `NEXT_PUBLIC_WHATSAPP_NUMBER` under Environment Variables, then Deploy.

## Where to edit copy

All page copy (steps, services, FAQs) is at the top of `app/page.tsx`.
