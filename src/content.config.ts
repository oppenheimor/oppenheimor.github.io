import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const tools = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tools' }),
  schema: z.object({
    name: z.string().min(1),
    url: z.string().url(),
    tags: z.array(z.string().min(1)).default([]),
    starred: z.boolean().default(false),
    retired: z.boolean().default(false),
    published: z.boolean().default(false),
    addedAt: z.coerce.date(),
    cover: z.string().min(1).nullish(),
    coverFull: z.string().min(1).nullish(),
    traces: z.array(z.string().url()).default([]),
  }),
});

const weekly = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/weekly' }),
  schema: z.object({
    vol: z.number().int().positive(),
    title: z.string().min(1),
    date: z.coerce.date(),
    cover: z.string().min(1),
    coverFull: z.string().min(1).nullish(),
    summary: z.string().min(1),
    tags: z.array(z.string().min(1)).default([]),
    published: z.boolean().default(false),
  }),
});

export const collections = { tools, weekly };
