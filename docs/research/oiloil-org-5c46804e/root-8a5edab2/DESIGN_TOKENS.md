# Design Tokens

Extracted at 1440px, 768px and 390px viewports.

## Source values

- Background: `#fff`
- Ink: `#1a1a1a`
- Secondary: `#555`
- Muted: `#999`
- Hairline: `#e8e8e8`
- Highlight: `#ffe28a`
- Soft highlight: `#f9f0d8`
- Ease: `cubic-bezier(.19, 1, .22, 1)`
- Body stack: `Helvetica Neue, -apple-system, PingFang SC, Noto Sans SC, sans-serif`
- Main column: 820px maximum, 32px desktop / 20px mobile gutters
- Desktop hero title: 140px / 131.6px, 700, -6.3px tracking
- Mobile hero title: 76.05px / 71.487px, 700, -3.422px tracking
- Desktop tab: 48px / 46.08px, 700
- Mobile tab: 29.25px / 28.08px, 700
- Project card: 20px radius, 1px hairline, 300px minimum desktop
- Desktop section spacing: 12vh; mobile: 8vh

## Implementation mapping

The implementation converts neutrals and highlights to close OKLCH equivalents defined in `DESIGN.md`. Geometry, scale and easing retain the extracted source values. Pure white and pure black are avoided while remaining visually equivalent.
