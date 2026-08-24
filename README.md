# Code Nova Studio — Website

A React + Vite site built with the same layout and structure as drivenstack.com
(header/nav, hero with stats, services grid, client-region marquee, case
studies, industries served, "why us" section, testimonials, contact form,
footer with newsletter). Branding, copy, testimonials, and case studies are
placeholders for you to replace with real content.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Making the contact form actually send email

The contact form (`src/components/Contact.jsx`) is wired up to
[Web3Forms](https://web3forms.com), a free service that forwards form
submissions straight to your inbox — no backend server needed.

1. Go to [web3forms.com](https://web3forms.com) and enter the email address
   where you want submissions delivered. No account or password required —
   an access key is emailed to you instantly.
2. Copy `.env.example` to a new file named `.env` in the project root.
3. Paste your access key in as `VITE_WEB3FORMS_KEY=...`.
4. Restart `npm run dev` (Vite only reads `.env` on startup).

Until you do this, submitting the form will show a "Form is not connected
yet" message instead of sending anything — nothing is silently lost, it just
won't go anywhere until the key is set.

When you deploy the site (Vercel, Netlify, etc.), add `VITE_WEB3FORMS_KEY` as
an environment variable in your hosting provider's dashboard too — `.env` is
git-ignored and won't be deployed automatically.

## What to edit before launch

- `src/components/Header.jsx` — logo text / nav links
- `src/components/Hero.jsx` — headline, subtext, and the three stat numbers (currently placeholders)
- `src/components/Services.jsx` — the 4 service cards (the original site's 5th slot, a paid consultation booking, was removed per your request)
- `src/components/CaseStudies.jsx` — replace all 4 placeholder case studies with real client results
- `src/components/Testimonials.jsx` — replace all 4 placeholder quotes/names
- `src/components/Contact.jsx` — replace the placeholder email addresses; the form itself already sends via Web3Forms once you set `VITE_WEB3FORMS_KEY` (see above)
- `src/components/Footer.jsx` — replace the placeholder business address, and update social links

Colors and fonts live in `src/index.css` (`:root` CSS variables) if you want
to adjust the theme.
