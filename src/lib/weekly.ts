import type { CollectionEntry } from 'astro:content';

export type WeeklyEntry = CollectionEntry<'weekly'>;

/** Newest issue first. */
export const sortWeekly = (issues: WeeklyEntry[]) => [...issues].sort((a, b) => b.data.vol - a.data.vol);

export const weeklyPath = (issue: WeeklyEntry) => `/weekly/${issue.id}`;

/** `1` becomes `01`. */
export const issueNumber = (vol: number) => String(vol).padStart(2, '0');

export const issueLabel = (vol: number) => `第 ${issueNumber(vol)} 期`;

/** Dates stay in UTC so a frontmatter date never shifts by timezone. */
export const issueDate = (date: Date) => date.toISOString().slice(0, 10).replaceAll('-', '.');

export const issueYear = (date: Date) => date.getUTCFullYear();

export const issueNeighbors = (issues: WeeklyEntry[], current: WeeklyEntry) => {
  const sorted = sortWeekly(issues);
  const index = sorted.findIndex((issue) => issue.id === current.id);
  return {
    newer: index > 0 ? sorted[index - 1] : null,
    older: index >= 0 && index < sorted.length - 1 ? sorted[index + 1] : null,
  };
};

/** Issues grouped by year, newest year first, for the archive ledger. */
export const groupWeeklyByYear = (issues: WeeklyEntry[]) => {
  const groups = new Map<number, WeeklyEntry[]>();
  sortWeekly(issues).forEach((issue) => {
    const year = issueYear(issue.data.date);
    const bucket = groups.get(year);
    if (bucket) bucket.push(issue);
    else groups.set(year, [issue]);
  });
  return [...groups].map(([year, items]) => ({ year, items }));
};

export type WeeklySection = { title: string; items: string[] };

const plainTitle = (text: string) =>
  text
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_`]/g, '')
    .trim();

/**
 * Reads the issue body as a table of contents: `##` opens a section, `###` opens an
 * item inside the section above it.
 */
export const issueContents = (body: string | null | undefined): WeeklySection[] => {
  const sections: WeeklySection[] = [];

  for (const line of (body ?? '').split('\n')) {
    const item = /^###(?!#)\s+(.+?)\s*$/.exec(line);
    if (item) {
      if (sections.length === 0) sections.push({ title: '目录', items: [] });
      sections[sections.length - 1].items.push(plainTitle(item[1]));
      continue;
    }

    const section = /^##(?!#)\s+(.+?)\s*$/.exec(line);
    if (section) sections.push({ title: plainTitle(section[1]), items: [] });
  }

  return sections;
};
