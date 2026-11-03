# Provenance: Welcome Pack landing page (STEP-81, "C · Fast Lane")

No paid generation was used. Every raster here is a byte-identical copy of the
STEP-77 file in `pages/welcome/dist/` (checked by MD5); see that folder's
PROVENANCE.md for how each was made.

| File | Source | Used for |
|---|---|---|
| wynn-suit.webp (704×725, alpha) | copy of `pages/welcome/dist/wynn-suit.webp` (Wynn cut-out from the owner's Welcome banner, site media id `6a6b20cdecada01b88a6fb6e`) | hero |
| city-plate.webp (998×362) | copy of `pages/welcome/dist/city-plate.webp` (the same banner, blurred city) | hero background, mirrored in CSS |
| art-gift.webp (360×360) | copy of `pages/welcome/dist/art-gift.webp` (Welcome Pack promo art, site media id `6a759b7c418d6740e1278dcd`) | closing |
| roboto-900-figures.woff2 | copy of `pages/welcome/dist/roboto-900-figures.woff2` (Roboto 900 subset: 0-9 % × $ ,) | display figures, registered as "WW81 Figures" |
| welcome81.css | written for STEP-81 (port of `prototypes/step81/var-c.html`) | hosted stylesheet, SRI-pinned in welcome81.js |

Not in this folder: the FS-tile coin is `wheel-web-coin-1.webp` from the
`v10` tag of EnrikoMM/wildwin-widget-assets (the same URL as the comp and STEP-77).
