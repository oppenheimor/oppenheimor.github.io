import type { CollectionEntry } from 'astro:content';

export type ToolEntry = CollectionEntry<'tools'>;

export const sortTools = (tools: ToolEntry[]) =>
  [...tools].sort((a, b) => {
    if (a.data.retired !== b.data.retired) return Number(a.data.retired) - Number(b.data.retired);
    if (a.data.starred !== b.data.starred) return Number(b.data.starred) - Number(a.data.starred);
    return b.data.addedAt.getTime() - a.data.addedAt.getTime() || a.data.name.localeCompare(b.data.name);
  });

export const toolPath = (tool: ToolEntry) => `/tools/${tool.id}`;

export const tracePlatform = (url: string) => {
  try {
    const hostname = new URL(url).hostname.replace(/^www\./, '');
    if (hostname === 'x.com' || hostname === 'twitter.com') return 'X';
    return hostname;
  } catch {
    return 'LINK';
  }
};
