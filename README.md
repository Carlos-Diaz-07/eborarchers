# Ebor Archers of York — Club Website

Static club website built with [Astro 6](https://astro.build/), deployed to GitHub Pages via GitHub Actions. Content is managed through markdown files with YAML frontmatter.

## Quick Start

**Prerequisites:** Node.js 22+

```bash
npm install
npm run dev        # http://localhost:4321
```

| Command           | Description                              |
|-------------------|------------------------------------------|
| `npm run dev`     | Start local dev server                   |
| `npm run build`   | Build production site to `./dist/`       |
| `npm run preview` | Preview the production build locally     |

## Content Collections

All content lives in `src/content/` as markdown files. Schemas are defined in `src/content.config.ts`.

| Collection | Path                   | Description                                      |
|------------|------------------------|--------------------------------------------------|
| `news`     | `src/content/news/`    | Club news articles with categories and dates      |
| `events`   | `src/content/events/`  | Upcoming events (shoots, socials, courses, AGMs)  |
| `venues`   | `src/content/venues/`  | Indoor and outdoor venue details                  |
| `gallery`  | `src/content/gallery/` | Photo entries with alt text and categories        |
| `pages`    | `src/content/pages/`   | Singleton pages (Home, Shooting Times, Join Us)   |

## Adding and Editing Content

Each markdown file has YAML frontmatter at the top (the fields between `---` lines) followed by the body content. The required fields for each collection are defined in `src/content.config.ts`.

### Example: Adding a news article

Create a new file at `src/content/news/2026-03-23-spring-shoot-results.md`:

```markdown
---
title: "Spring Shoot Results"
date: 2026-03-23
category: "tournament-results"
excerpt: "Results from the club's spring outdoor shoot."
draft: false
---

Full results from Saturday's spring shoot at Heslington Fields.

## Recurve
| Archer       | Score |
|--------------|-------|
| Jane Smith   | 648   |
| John Doe     | 612   |
```

Valid news categories: `tournament-results`, `club-news`, `club-events`, `league-updates`, `league-results`, `member-achievements`, `season-update`, `beginners`, `external-competitions`, `social`.

### Images

Place images in `public/images/` and reference them as `/images/your-image.jpg` in frontmatter fields.

## CMS (Decap)

A [Decap CMS](https://decapcms.org/) admin panel is configured at `/admin/`. The config is at `public/admin/config.yml`.

To make it functional, you need to set up a GitHub OAuth application and an authentication backend (e.g., Netlify Identity, or a standalone OAuth server). Without that, the CMS panel will not authenticate. See the [Decap docs on authentication](https://decapcms.org/docs/authentication-backends/) for options.

## Deployment

The site auto-deploys to GitHub Pages on every push to `main`. The workflow is at `.github/workflows/deploy.yml`.

GitHub Pages must be enabled in the repo settings with the source set to **GitHub Actions** (not "Deploy from a branch").

## Domain Setup

The site is currently configured for a GitHub Pages project site at `carlos-diaz-07.github.io/eborarchers`. When you move it to a custom domain or your own GitHub account:

1. Update `site` in `astro.config.mjs` to the new URL (e.g., `https://eborarchers.co.uk`)
2. Remove the `base: '/eborarchers'` line from `astro.config.mjs`
3. Add a `CNAME` file to `public/` containing the bare domain (e.g., `eborarchers.co.uk`)
4. Configure DNS records as per [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
5. Update `backend.repo` in `public/admin/config.yml` to point to the new GitHub repo

## Project Structure

```
src/
  content/          # Markdown content (news, events, venues, gallery, pages)
  content.config.ts # Collection schemas (Zod)
  pages/            # Astro page routes
  components/       # Astro components
  layouts/          # Page layouts
public/
  admin/            # Decap CMS config
  images/           # Static images
```

## License

Private. Ebor Archers of York.
