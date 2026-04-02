# CXY Portfolio Site

Minimalist Astro portfolio and writing site for a marketing researcher moving into data science-facing insights roles.

## What is included

- Home, projects, writing, and about pages
- Content collections for portfolio projects and articles
- MDX-powered posts with figures, tables, code blocks, and reusable callout components
- GitHub Pages deployment workflow
- Sitemap, RSS feed, social preview image, and custom `404`

## Personalize before publishing

Update the placeholders in [`src/site.ts`](./src/site.ts):

- `name`
- `email`
- `linkedin`
- `github`
- any copy you want to tune for specific job applications

Project and article content lives in:

- [`src/content/projects`](./src/content/projects)
- [`src/content/posts`](./src/content/posts)

Static figures and social assets live in:

- [`public/figures`](./public/figures)
- [`public/og-default.svg`](./public/og-default.svg)

## Commands

| Command | Action |
| :------ | :----- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the local dev server |
| `npm run build` | Build the static site |
| `npm run preview` | Preview the built site locally |

## GitHub Pages

The site uses the included workflow in [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml).

On GitHub:

1. Push this repository to GitHub.
2. In the repository settings, enable GitHub Pages and set the source to `GitHub Actions`.
3. Push to `main` to trigger deployment.

The Astro config automatically detects whether the repository is a project site like `username.github.io/repo-name` or a user site like `username.github.io`.
