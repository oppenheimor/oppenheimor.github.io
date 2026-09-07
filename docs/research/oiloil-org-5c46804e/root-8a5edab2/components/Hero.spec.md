# Hero Specification

## Overview
- Target: `src/components/home/Hero.astro`
- Interaction model: first-load entrance

## DOM Structure
Three clipped heading lines, an original decorative seed-orbit SVG overlapping the final line, a Chinese identity label, English role metadata and a scroll hint.

## Computed Styles
- Desktop: min-height 86vh; flex column centered.
- Heading: clamp(72px, 12vw, 140px); 700; line-height .94; tracking -.045em.
- Metadata: flex wrap, baseline, 20px gap, 40px top margin.
- Chinese label: 20px / 500 / .3em tracking.
- English metadata: 14px / .14em tracking / muted.
- Scroll hint: absolute left 0 bottom 5vh; 14px / .3em tracking.
- Mobile: min-height 74svh; title clamp(58px, 19.5vw, 82px); metadata gap 12px and margin 28px; scroll hint bottom 3vh.

## States & Behaviors
Each line lifts from translateY(112%) with staggered delays. Illustration fades and rises. Metadata and hint follow. All motion is disabled for reduced-motion users.

## Assets
No source asset. Inline SVG uses a yellow seed, black orbit and two leaves.

## Text
- `ideas`
- `take`
- `root.`
- `个人数字花园`
- `ENGINEERING / PRODUCT / LIFE`
- `↓ 往下滑`
