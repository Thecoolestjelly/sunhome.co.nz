# Sunhome Group Ltd — Website PRD

## Original Problem Statement
Build a professional, minimalist 5-page website (Home, Colour Samples, Gallery, Sinks & Edges, Contact) similar to sunhome.co.nz but modernised. Includes advanced image carousel, photo gallery, updated colours, and user-provided photos. Deployed statically (no backend) — user pushes a ZIP to GitHub → Netlify.

## Architecture
- **Frontend only**: React + Tailwind + Radix UI (shadcn). No backend, no DB.
- All content centralised in `/app/frontend/src/mock.js` (`TEXT` + data objects).
- All images bundled locally under `/app/frontend/public/assets/...`.
- Enquire buttons use a "smart dialog" that handles mailto fallback.

## Pages
1. Home — hero, brand strip, services, gallery teaser, testimonials.
2. Colour Samples — filterable grid by brand / colour family.
3. Gallery — installed projects.
4. Sinks & Edges — sink products + edge profiles.
5. Contact — info, phone/email CTAs, hero benchtop photo + map. (No quote form — user requested removal.)

## Implemented (latest)
- 2026-02-28: Removed broken "Request a Quote" form on Contact page; replaced with Calacatta benchtop hero image and "Get a Free Estimate" email button. Regenerated `sunhome-website.zip` (~19 MB) at `/app/frontend/public/sunhome-website.zip`.
- Earlier: Localised 108+ images, fixed EXIF orientations, smart-dialog email handler, centralised TEXT object, netlify.toml + README + CONTENT_GUIDE.

## Deployment
User deploys MANUALLY:
1. Download `sunhome-website.zip` from `https://sunhome-pro-1.preview.emergentagent.com/sunhome-website.zip`.
2. Unzip locally.
3. Upload contents to their GitHub repo via web UI (drag-drop).
4. Netlify auto-builds from GitHub. Build command: `cd frontend && yarn install && yarn build`. Publish dir: `frontend/build`.

DO NOT suggest terminal/git CLI to the user.

## Backlog / Future
- None confirmed. Awaiting user feature requests (e.g. blog, CMS, contact form via Netlify Forms).

## Key Files
- `/app/frontend/src/mock.js` — all editable content.
- `/app/frontend/src/pages/Contact.jsx` — updated to remove form.
- `/app/frontend/src/components/EnquireButton.jsx` — smart-dialog email handler.
- `/app/netlify.toml`, `/app/README.md`, `/app/CONTENT_GUIDE.md` — deployment + content edit guide.
