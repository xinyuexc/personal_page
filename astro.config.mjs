// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

const repositorySlug = process.env.GITHUB_REPOSITORY;
const [owner = 'your-github-username', repository = 'cxy_page'] = repositorySlug?.split('/') ?? [];
const isUserSite =
  Boolean(repositorySlug) && repository.toLowerCase() === `${owner.toLowerCase()}.github.io`;

const site = process.env.SITE ?? `https://${owner}.github.io`;
const base =
  process.env.BASE_PATH ?? (repositorySlug ? (isUserSite ? '/' : `/${repository}`) : '/');

export default defineConfig({
  site,
  base,
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
});
