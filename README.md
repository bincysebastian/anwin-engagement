# Anwin & Bia — Engagement Website

Editorial engagement invitation built with Next.js, Tailwind CSS, and Framer Motion. Desktop layout follows Figma frame `29:3` (Final — Engagement); mobile spacing adapts from the wedding mobile frame `1:2`. Motion references the [Wedfully Framer template](https://wonderful-simplicity-839879.framer.app/).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## RSVP → Google Forms

Guest RSVPs POST to `/api/rsvp`, which forwards to a **separate** Google Form (not the wedding site form). Copy `.env.example` to `.env.local` and set `GOOGLE_FORM_ID` plus `GF_ENTRY_*` from your form’s pre-filled link.

Answer labels must match:

- Attending: `Yes` / `No`
- Total headcount (`GF_ENTRY_HEADCOUNT`): a number — total family members attending including the guest (1–20), `0` when declined
- Additional guest (optional, legacy `GF_ENTRY_PLUS_ONE`): `Yes` when headcount is above 1, otherwise `No`
- Side: `Bia's Side` / `Anwin's Side` / `Both Sides`

Until env vars are set, the API returns `503` with a clear configuration message.

## Images

Photos and icons live under `public/images/`. Copy and paths are in `lib/content.ts`.

## Deploy

```bash
npm run build
npm start
```

Add the same environment variables on your host (e.g. Vercel).
