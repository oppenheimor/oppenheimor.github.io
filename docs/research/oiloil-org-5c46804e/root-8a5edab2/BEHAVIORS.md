# Behaviors

## Source observations

- Hero lines lift from below clipped masks on first load, followed by metadata and scroll hint.
- Source easing: `cubic-bezier(0.19, 1, 0.22, 1)`.
- Tabs are click driven, not scroll driven. The active tab changes color and expands a yellow underline over about 800ms.
- Tab panels replace one another and use an approximately 900ms entrance.
- Desktop cards rise about 5px on hover/focus, deepen their border and gain a soft long shadow.
- Contact rows increase left padding on hover; icon rotates and the directional arrow appears.
- A fixed desktop rail reports scroll progress. It disappears on mobile.
- Mobile cards stack visual and content regions. Tabs become a no-scrollbar horizontal strip.
- Source contains pointer and device-orientation effects. These are intentionally omitted because the personalized version uses a calmer original illustration and avoids permission prompts.

## Oppenheimor implementation

- Mouse, keyboard and touch can all switch tabs.
- ArrowLeft, ArrowRight, Home and End move between tabs and activate the focused panel.
- IntersectionObserver reveals major regions once; without JavaScript they remain visible.
- Scroll progress is clamped to 0–100 and updates with `requestAnimationFrame`.
- Hover effects are restricted to fine pointers. Focus-visible receives an explicit ink outline.
- Under `prefers-reduced-motion: reduce`, all entrance and transform animation is disabled and smooth scrolling is removed.
