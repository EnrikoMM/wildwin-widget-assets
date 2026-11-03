# Provenance: Welcome Pack landing page (STEP-81, option W3 "Claim Path")

No paid generation was used. Every raster and the font here are byte-identical
copies of the W1 files in `pages/welcome81/dist/` (checked by MD5), which are
themselves copies of the STEP-77 files in `pages/welcome/dist/`; see that
folder's PROVENANCE.md for how each was made.

| File | Source | Used for |
|---|---|---|
| wynn-suit.webp (704×725, alpha) | copy of `pages/welcome81/dist/wynn-suit.webp` | hero, where the path starts |
| city-plate.webp (998×362) | copy of `pages/welcome81/dist/city-plate.webp` | faint hero backdrop, masked |
| art-gift.webp (360×360) | copy of `pages/welcome81/dist/art-gift.webp` | step 2 offer card |
| roboto-900-figures.woff2 | copy of `pages/welcome81/dist/roboto-900-figures.woff2` (Roboto 900 subset: 0-9 % × $ ,) | display figures, registered as "WW81C Figures" |
| welcome81-w3.css | written for STEP-81 W3 (simplified port of `prototypes/step81/var-b.html`) | hosted stylesheet, SRI-pinned in welcome81-w3.js |

Not in this folder: the close's coin is `wheel-web-coin-1.webp` from the `v10`
tag of EnrikoMM/wildwin-widget-assets (the same URL as W1 and STEP-77).
Publish this folder as `welcome81-w3/` and replace `PENDING` in ASSET_BASE
with the commit. Nothing has been pushed.
