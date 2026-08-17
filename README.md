# Bnbflight — marketing site, blog & docs

The public site for Bnbflight: a landing page/sales funnel, a markdown blog, and non-technical
documentation for the desktop app. Built with Next.js (App Router) + TypeScript + Tailwind CSS,
deployed on Vercel.

## Structure

- `src/app` — routes: `/` (home), `/contact`, `/blog`, `/blog/[slug]`, `/docs`, `/docs/[slug]`
- `src/components` — shared UI (nav, footer, 3D hero, screenshot frames, scroll-reveal wrappers)
- `src/lib/content.ts` — loads and parses the markdown content below
- `content/blog/*.md` — blog posts (frontmatter: `title`, `description`, `date`, `tags`)
- `content/docs/*.md` — documentation pages (frontmatter: `title`, `description`, `order`, `slug`)
- `public/images/app/*` — real screenshots captured from the running desktop app

Documentation content is intentionally plain prose — no code blocks — since it's written for
non-technical hosts, not developers.

## Development

Install dependencies, then run the dev server:

  npm install
  npm run dev

Build for production:

  npm run build
  npm run start

## Deploying

This is a standard Next.js App Router project — deploying to Vercel needs no extra configuration.
Push to the connected GitHub repository and import the project in Vercel, or run the Vercel CLI
from this directory.

## Content

To add a blog post, add a new markdown file to `content/blog/` with the required frontmatter — it
appears automatically on `/blog` and gets its own page, sitemap entry, and OpenGraph metadata.
Documentation pages work the same way in `content/docs/`, ordered by the `order` field and listed
in the sidebar automatically.
