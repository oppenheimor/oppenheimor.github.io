# Oppenheimor

Oppenheimor’s personal digital garden, built with Astro and deployed to GitHub Pages.

The homepage currently includes:

- A responsive personal introduction
- Project, writing, weekly, toolbox and about panels
- A weekly tab listing the latest three issues, with 查看全部周刊 linking to the archive
- A static, searchable personal toolbox at `/tools`
- An issue archive at `/weekly` and a markdown issue reader at `/weekly/<id>`
- Keyboard-accessible tab navigation
- GitHub, X, email, Bilibili, Xiaohongshu and Douyin destinations
- Reduced-motion support

## Development

```sh
npm install
npm run dev
```

## Add a tool

Create a Markdown file in `src/content/tools/`. Only `name`, `url`, and `addedAt` are required; new entries stay private until `published` is set to `true`.

```md
---
name: Herdr
url: https://herdr.dev/
tags: [Agent]
starred: true
retired: false
published: false
addedAt: 2026-09-07
cover:
traces:
  - https://x.com/example/status/123
---

An optional Markdown introduction lives here.
```

Store optional local images under `public/tools/<slug>/` and reference them with an absolute path such as `/tools/herdr/cover.webp`.

## Write a weekly issue

Create a Markdown file in `src/content/weekly/` named after the issue, for example `vol-01.md`. Everything in the body is free-form Markdown; new issues stay private until `published` is set to `true`. Notes, everyday fragments and tool finds all live inside an issue rather than in separate homepage panels.

```md
---
vol: 1
title: 把工具用旧
date: 2026-09-07
cover: /weekly/vol-01/cover.jpg
summary: One sentence shown on the homepage feature and in the archive ledger.
tags: [工具, 工程]
published: false
---

Lead paragraph. It renders slightly larger than the rest of the body.

## 工具

### TokenRemain：把 AI Coding 的额度摆在明面上
<https://www.tokenremain.com/>

One or two sentences. Keep the link on the line right after the item heading.
```

The reader styles depend on that shape: `##` opens a section, `###` opens an item, and the paragraph directly under it is treated as the source link. Put issue images under `public/weekly/<slug>/` and reference them with an absolute path. Covers render at 3:2 — the archive ledger, the homepage feature and the sticky reader column all use that ratio.

Archive navigation, previous/next issues and the issue dialog are all derived from frontmatter, so a new file is the only change needed.

## Normalize toolbox covers

Project skill: `.agents/skills/toolbox-cover/SKILL.md`.

It exports 1200×675 thumbnails using source-aware layouts, plus native-size lossless originals for previews. Background generation is optional, not a mandatory frame:

```sh
node .agents/skills/toolbox-cover/scripts/compose.mjs \
  --source path/to/original.png --output path/to/new-candidate \
  --mode banner
node --test .agents/skills/toolbox-cover/scripts/compose.test.mjs
```

Review candidates before applying `cover` (thumbnail) and `coverFull` (original, not the decorated thumbnail). Modes include banner, screenshot, icon and poster. Transparent padding can be removed automatically; cropping visible content requires approval. Low-resolution sources are not enlarged or regenerated.

## Quality check

```sh
npm run check
node --test "tests/*.test.mjs"
```

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml` and publishes the static build to [oppenheimor.github.io](https://oppenheimor.github.io).
