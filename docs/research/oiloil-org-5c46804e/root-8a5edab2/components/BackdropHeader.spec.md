# BackdropHeader Specification

## Overview
- Target: `src/components/home/SiteBackdrop.astro` and `src/components/home/SiteHeader.astro`
- Screenshots: original desktop, tablet and mobile references
- Interaction model: scroll-driven progress; otherwise static

## DOM Structure
Fixed grid and glow layers sit behind the centered page column. A desktop-only progress rail sits at viewport left. Header contains identity and GitHub link.

## Computed Styles
- Main column: max-width 820px; padding 0 32px desktop, 0 20px mobile.
- Grid: fixed inset 0; two 1px lines; background size 32px.
- Header: flex, justify-between, baseline aligned; 34px top padding, 14px text, .12em tracking.
- Mobile header: 22px top padding, 12px text, .08em tracking.
- Progress: fixed left 28px, top 50%, 2px × 120px, rounded; hidden mobile.

## States & Behaviors
Progress fill height and two-digit label update from document scroll percentage. Header GitHub link changes muted text to ink on hover.

## Responsive Behavior
Progress is hidden below 700px. Header retains one-line layout at 390px.
