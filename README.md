# Oppenheimor

Oppenheimor’s personal digital garden, built with Astro and deployed to GitHub Pages.

The homepage currently includes:

- A responsive personal introduction
- Project, toolbox, note, writing, about and life panels
- A static, searchable personal toolbox at `/tools`
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
```

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml` and publishes the static build to [oppenheimor.github.io](https://oppenheimor.github.io).
