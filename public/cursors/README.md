# Cursor assets

Derived from [Phosphor Icons Core](https://github.com/phosphor-icons/core), Duotone style, MIT license. See `LICENSE.phosphor.txt`.

Official sources:
- `arrow.svg`: `assets/duotone/cursor-duotone.svg`
- `hand.svg`: `assets/duotone/hand-pointing-duotone.svg`
- `zoom.svg`: `assets/duotone/magnifying-glass-plus-duotone.svg`

Source paths are unchanged. Adaptations: explicit 32×32 dimensions, pale foreground (`#dce8f4`), opaque blue secondary fill (`#517ff0`), and a thin dark keyline (`#0b1427`) around the foreground for visibility over light images. The original 0.2 fill opacity is intentionally removed. `hand-pressed.svg` scales the same hand geometry to 94% around its fingertip; reduced-motion mode skips this state.

CSS hotspots (in output pixels): arrow 4,4; hand 15,2; zoom 14,14. Cursor assets are served locally; no runtime library or CDN dependency.
