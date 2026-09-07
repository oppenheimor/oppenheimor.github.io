# Static QA

Status: PASSED

- Astro production build succeeds.
- One H1 and explicit section H2 labels are present.
- Five tabs expose `role=tab`, `aria-selected`, `aria-controls` and managed `tabindex`.
- Every tab controls one existing tabpanel; exactly one panel is visible after each selection.
- ArrowLeft, ArrowRight, Home and End keyboard behavior is implemented and verified.
- Decorative SVG and backdrop elements are hidden from assistive technology.
- All real destinations use HTTPS and no source-site identity links remain.
- No source images, logos, names, email addresses or article copy are shipped.
- Reduced-motion rules disable transforms and long animation.
- Mobile controls do not rely on hover.
