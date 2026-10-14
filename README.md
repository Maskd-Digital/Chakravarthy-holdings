# Chakravarthy Holdings

Next.js 15 (App Router) rebuild of chakravarthyholdings.com. Static, no external services.

## Run locally

    npm install
    npm run dev        # http://localhost:3000

## Deploy to Vercel

Push this folder to a GitHub repo, then import it at vercel.com/new.
Vercel detects Next.js automatically; no settings or environment variables are needed.

## Where to edit

- `lib/site.ts`: button links. **Set `bookCallUrl`** (currently `#`) to your Calendly, Cal.com or mailto link.
- `app/page.tsx`: headline text, service names, and diagram positions.
- `app/globals.css`: colours (top of file) and animation timings (Motion section).
- `public/logo.svg`: the vectorised signature logo. `app/icon.svg` is the favicon.

## Animations

- On load, the headline rises in line by line, the logo seal settles, and the signature is "written" left to right.
- Each service diagram draws its lines outward from the name when scrolled into view, then the dots and labels appear.
- Hover brightens a diagram's lines; buttons invert and nudge their arrow.
- Everything is disabled for visitors with "reduce motion" turned on, and content still shows without JavaScript.

Font: Manrope (SIL Open Font License), self-hosted in `app/fonts`.
