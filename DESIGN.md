# Design System

## Overview

Oppenheimor 的首页采用窄幅居中画布、巨型无衬线标题、纸面网格、淡黄色标记和细线框。结构与交互节奏参考 oiloil.org，但所有身份、文案与插画均重新创作。

## Theme

明亮纸面场景：同行在白天浏览一位创作者的工作台，页面像一张不断向下延展的方格纸。使用克制的暖黄色聚焦，避免纯黑纯白。

## Color Palette

- Canvas: `oklch(0.992 0.003 88)`
- Ink: `oklch(0.205 0.006 75)`
- Secondary text: `oklch(0.45 0.008 75)`
- Muted text: `oklch(0.66 0.006 75)`
- Hairline: `oklch(0.92 0.004 75)`
- Highlight: `oklch(0.89 0.12 88)`
- Highlight soft: `oklch(0.96 0.04 88)`

## Typography

Use the native Helvetica Neue and system Chinese sans stack. Display text is heavy, tightly tracked and fluid. Metadata uses the native monospace stack. Body copy remains compact but readable, with a maximum line length near 68 characters.

## Layout

- Main column: `820px` maximum with `32px` desktop gutters.
- Mobile gutters: `20px`.
- Hero: about `86vh` desktop and `74svh` mobile.
- Content sections: `12vh` vertical padding desktop, `8vh` mobile.
- Content cards: thin border, `20px` radius, alternating visual/text columns on desktop and one column on mobile.

## Components

- Header: compact identity and GitHub destination.
- Hero: three-line statement with an original seed-orbit illustration.
- Progress rail: fixed desktop-only vertical reading indicator.
- Garden tabs: five horizontally scrollable categories with yellow active underline.
- Content panels: honest Oppenheimor content, panel transition, cards and text lists.
- Elsewhere: ruled contact rows with icon, label, value and directional arrow.

## Motion

Use `cubic-bezier(0.19, 1, 0.22, 1)` for entrance and hover transitions. Animate opacity and transforms only. Disable entrance and scrolling motion under `prefers-reduced-motion: reduce`.

## Responsive Behavior

Desktop keeps a centered narrow column and two-column project card. Tablet follows the same content width with smaller display type. Mobile uses 20px gutters, approximately 19.5vw display type, horizontal tab scrolling, stacked cards and no fixed progress rail.
