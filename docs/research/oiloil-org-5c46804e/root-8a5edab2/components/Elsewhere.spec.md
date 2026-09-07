# Elsewhere Specification

## Overview
- Target: `src/components/home/Elsewhere.astro`
- Interaction model: links with hover and focus states

## DOM Structure
Outlined background wordmark, section number, uppercase label, ruled list with GitHub and website links, then page footer.

## Computed Styles
- Section: position relative; 12vh vertical padding, 10vh top adjustment; 8vh mobile.
- Label: uppercase, .4em tracking, 14px, 48px bottom margin, 28px leading rule.
- Social list: 1px top border.
- Desktop row: grid `36px 28px minmax(120px,.45fr) minmax(0,1fr) 20px`; 16px gap; 26px 4px padding.
- Name: clamp(22px, 3.2vw, 28px), 800.
- Value: 13px mono, muted, ellipsis.
- Mobile row: `32px minmax(max-content,.45fr) minmax(0,1fr) 18px`; 10px gap; 18px 0; hide numeric index.
- Wordmark: outlined, bottom-right, clamp(170px,32vw,320px), low contrast.

## States & Behaviors
Desktop hover adds left padding, turns icon highlight yellow with -6deg rotation, reveals arrow and grows a yellow mark behind the name. Keyboard focus produces equivalent emphasis without relying on hover.

## Text
GitHub points to `https://github.com/oppenheimor`. Website points to the current root. No email or social identity is invented.
