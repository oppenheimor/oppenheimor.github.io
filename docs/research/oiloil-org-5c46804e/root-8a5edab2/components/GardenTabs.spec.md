# GardenTabs Specification

## Overview
- Target: `src/components/home/GardenTabs.astro`
- Interaction model: click and keyboard driven

## DOM Structure
Section number, tablist with five tabs, and five associated tabpanels. Projects contains one feature card. Notes, Writing, About and Life use sparse but honest content.

## Computed Styles
- Section: 12vh vertical padding desktop; 8vh mobile.
- Desktop tablist: flex, 42px gap, 48px bottom margin, 16px bottom padding.
- Active tab: ink, opacity 1, yellow underline 32% of em height.
- Inactive: muted gray, opacity .76; hover rises 2px.
- Mobile tablist: 20px gap, negative 20px side margins, 20px side padding, horizontal overflow.
- Card desktop: grid columns 1.15fr 1fr; 36px gap; 22px 26px padding; 20px radius; 1px border; min-height 300px.
- Card mobile: one column; 18px gap; 18px 16px 24px padding; visual 190–260px.

## States & Behaviors
Selecting a tab updates `aria-selected`, `tabindex`, hidden panel state and section number. ArrowLeft/Right, Home and End move and activate focus. Panel enters with 900ms opacity/translate motion. Card rises 5px and gains shadow on fine-pointer hover or focus-within.

## Per-state content
- Projects: current website repository.
- Notes: short-form garden status, no fabricated archive.
- Writing: Hello World as first entry.
- About: Oppenheimor identity and current scope, without a fabricated real name.
- Life: future home for ordinary observations.
