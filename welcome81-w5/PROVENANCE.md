# Provenance: Welcome Pack landing page (STEP-81 option W5, "Side by Side")

No paid generation was used. Every raster and the font here are byte-identical
copies of W1's files in `pages/welcome81/dist/` (themselves copies of the
STEP-77 files in `pages/welcome/dist/`; see that folder's PROVENANCE.md).

| File | Source | Used for |
|---|---|---|
| wynn-suit.webp (704×725, alpha) | copy of `pages/welcome81/dist/wynn-suit.webp` (Wynn cut-out from the owner's Welcome banner) | hero |
| city-plate.webp (998×362) | copy of `pages/welcome81/dist/city-plate.webp` (the same banner, blurred city) | hero background |
| roboto-900-figures.woff2 | copy of `pages/welcome81/dist/roboto-900-figures.woff2` (Roboto 900 subset: 0-9 % × $ ,) | display and table figures, registered as "WW81E Figures" |
| welcome81-w5.css | written for STEP-81 W5 | hosted stylesheet, SRI-pinned in welcome81-w5.js |

Publish this folder as `welcome81-w5/` in EnrikoMM/wildwin-widget-assets, then
replace `@PENDING` in ASSET_BASE with the commit. Not pushed yet.
