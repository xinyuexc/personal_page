import { getCollection } from 'astro:content';

import { siteConfig } from '../site';
import { sortByDateDesc } from '../utils/content';
import { withBase } from '../utils/paths';

const hasPostFiles = Object.keys(import.meta.glob('/src/content/posts/**/*.{md,mdx}')).length > 0;

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export async function GET(context) {
  const posts = hasPostFiles
    ? sortByDateDesc((await getCollection('posts')).filter((post) => !post.data.draft))
    : [];
  const site = context.site ?? new URL('https://your-github-username.github.io');
  const channelLink = new URL(withBase(), site).toString();

  const items = posts
    .map((post) => {
      const link = new URL(withBase(`writing/${post.slug}/`), site).toString();

      return `
        <item>
          <title>${escapeXml(post.data.title)}</title>
          <link>${link}</link>
          <guid>${link}</guid>
          <pubDate>${post.data.publishedAt.toUTCString()}</pubDate>
          <description>${escapeXml(post.data.summary)}</description>
        </item>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(siteConfig.name)} Writing</title>
    <link>${channelLink}</link>
    <description>${escapeXml(siteConfig.description)}</description>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
