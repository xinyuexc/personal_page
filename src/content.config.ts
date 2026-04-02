import { defineCollection, z } from 'astro:content';

const projectLinkSchema = z.object({
  label: z.string(),
  href: z.string(),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    businessQuestion: z.string(),
    methods: z.array(z.string()),
    tools: z.array(z.string()),
    dataSource: z.string(),
    outcomes: z.array(z.string()),
    featured: z.boolean().default(false),
    featuredRank: z.number().int().optional(),
    links: z.array(projectLinkSchema).default([]),
  }),
});

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishedAt: z.coerce.date(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    featuredRank: z.number().int().optional(),
    draft: z.boolean().default(false),
    linkedProject: z.string().optional(),
    cover: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
  }),
});

export const collections = { projects, posts };
