# My Portfolio (Astro + Tailwind)

## Run locally
    npm install
    npm run dev        # http://localhost:4321

## Edit your content
The navigation is **Home → Projects → Explore → Achievements → Connect**.
Explore is the interests section.

Change the content in `src/data/site.ts`:
- `site`: your name, role, bio, and contact details. The full name appears on one line below the introduction.
- `projects`: project descriptions, tags, category, artwork, and optional live/demo links.
- `interests`: the interests shown in Explore.
- `achievements`: your milestones, dates, and categories. Set `placeholder: false` for real entries.
- `navigation`: the navigation labels and section links.

The portfolio itself is the first project. The other two entries are clearly marked sample concepts; replace them with your own work. Achievement entries are placeholders, not claims of awards.

Add your real `email`, `github`, and `linkedin` values to enable contact links. Empty links are hidden; the email copy button appears when clipboard access is available. No contact form or server is required.

Colors, fonts, spacing, and responsive layouts live in `src/styles/global.css`. Fonts are self-hosted using the existing Fontsource packages. Page layout and section copy live in `src/pages/index.astro`. Project illustrations are editable HTML/CSS in `src/components/ProjectArtwork.astro`.

Project filters, accessible project dialogs, active navigation, and mobile menu behavior live in `src/scripts/portfolio.ts`.

## Build
    npm run build      # outputs to dist/

## Deploy (free)
Push to GitHub, then:
- Vercel: Add New > Project > import repo > Deploy
- Cloudflare Pages: build command `npm run build`, output directory `dist`
