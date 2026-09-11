# Design System

## Overview

Oppenheimor 的首页采用窄幅居中画布、巨型无衬线标题、夜间工程蓝网格、钴蓝标记和冷色细线框。结构与交互节奏参考 oiloil.org，但所有身份、文案与插画均重新创作。

## Theme

蓝黑夜间工作台：同行在安静、低照度的屏幕环境中浏览一位创作者持续生长的数字花园。午夜墨蓝承担整页底色，灰紫蓝建立表面层级，群青标记活跃与偏爱；冰川青只出现在状态点、焦点环和轨道卫星等微小信号中。所有中性色都轻微偏蓝，避免纯黑纯白与常见霓虹科技感。

## Color Palette

- Canvas: `oklch(0.125 0.032 264)`
- Surface: `oklch(0.17 0.038 267)`
- Surface raised: `oklch(0.215 0.047 264)`
- Ink: `oklch(0.93 0.018 245)`
- Secondary text: `oklch(0.72 0.034 247)`
- Muted text: `oklch(0.56 0.032 250)`
- Hairline: `oklch(0.3 0.044 262)`
- Highlight: `oklch(0.64 0.17 263)`
- Highlight soft: `oklch(0.23 0.075 268)`
- Signal: `oklch(0.79 0.105 205)`
- Signal soft: `oklch(0.24 0.045 210)`

## Typography

Use the native Helvetica Neue and system Chinese sans stack. Display text is heavy, tightly tracked and fluid. Metadata uses the native monospace stack. Body copy remains compact but readable, with a maximum line length near 68 characters.

## Layout

- Main column: `820px` maximum with `32px` desktop gutters.
- Toolbox routes expand to `1100px`; weekly routes use `1040px` for the archive and `1080px` for the reader, where a sticky `336px` cover column sits beside a `70ch` reading column.
- Mobile gutters: `20px`.
- Hero: about `86vh` desktop and `74svh` mobile.
- Content sections: `12vh` vertical padding desktop, `8vh` mobile.
- Content cards: thin border, `20px` radius, alternating visual/text columns on desktop and one column on mobile.

## Components

- Header: compact identity and GitHub destination.
- Hero: three-line statement with an original seed-orbit illustration.
- Progress rail: fixed desktop-only vertical reading indicator.
- Garden tabs: horizontally scrollable categories (项目, 文章, 周刊, 工具箱, 关于我) with a cobalt active underline. The rail becomes sticky within the garden section, keeps breathing room above the labels, and uses a full-viewport blue-black scrim that fully masks content at the top before fading softly below the rail.
- Content panels: honest Oppenheimor content, panel transition, cards and text lists.
- Elsewhere: ruled contact rows with icon, label, value and directional arrow.
- Toolbox directory: name-first deep-blue index cards, optional covers, cobalt starred corners, and visibly struck retired tools.
- Tool file: two overlapping paper sheets for “使用痕迹” and “工具介绍”; the traces sheet always opens first.
- Weekly tab: the third garden panel. A masthead carries the publication name, the weekly cadence and the issue count; underneath, the newest issue opens with its 第 01 期 label, publication date, a 3:2 cover, the issue title and its lead paragraph, then ruled rows for the previous issues and a 查看全部周刊 link to the archive.
- Weekly archive: a year-grouped ledger of ruled rows — outlined issue number, persistent cover, date, tags, title and a two-line summary.
- Weekly reader: a wide issue header, a sticky cover column with a 切换期数 trigger and neighbouring issues, and a `70ch` Markdown column. The issue dialog is a centred panel on desktop and a bottom sheet on mobile, opened from the header trigger or the mobile floating button.

## Cursor

Use Phosphor Icons Duotone native SVG cursors across the site: cursor arrow for ordinary areas, hand-pointing for interactive controls, and magnifying-glass-plus for cover previews. All use the original icon paths, pale foreground, opaque blue secondary fill and a thin dark contrast outline at 32px; local assets include the MIT license in `public/cursors/`. Pressing slightly compresses the hand without moving its fingertip hotspot. Preserve native text/editing and drag behavior; disable custom cursors for touch and forced-colors mode. Reduced-motion mode keeps a static cursor. No tracking overlay, trailing effects, or cursor labels.

## Motion

Use `cubic-bezier(0.19, 1, 0.22, 1)` for entrance and hover transitions. Animate opacity and transforms only. The garden tab scrim fades in only after the rail becomes sticky. Disable entrance and scrolling motion under `prefers-reduced-motion: reduce`.

## Responsive Behavior

Desktop keeps a centered narrow column and two-column project card. Toolbox routes may expand to 1100px for the index-card workspace. Tablet follows the same content width with smaller display type. Mobile uses 20px gutters, approximately 19.5vw display type, horizontal tab scrolling, stacked tool cards, equal-width folder tabs and no fixed progress rail.
