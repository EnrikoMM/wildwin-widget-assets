# Provenance: Welcome Pack landing page (STEP-81, "W2 · One-screen Pack")

No paid generation was used. Every raster here is a byte-identical copy of the
W1 file in `pages/welcome81/dist/` (itself a copy of STEP-77 `pages/welcome/dist/`);
see those folders' PROVENANCE.md for how each was made.

| File | Source | Used for |
|---|---|---|
| wynn-suit.webp (704×725, alpha) | copy of `pages/welcome81/dist/wynn-suit.webp` (Wynn cut-out from the owner's Welcome banner) | stage (top right on phone/tablet, bottom of the side column on web) |
| city-plate.webp (998×362) | copy of `pages/welcome81/dist/city-plate.webp` (the same banner, blurred city) | stage background |
| art-gift.webp (360×360) | copy of `pages/welcome81/dist/art-gift.webp` (Welcome Pack promo art) | web side column only |
| roboto-900-figures.woff2 | copy of `pages/welcome81/dist/roboto-900-figures.woff2` (Roboto 900 subset: 0-9 % × $ ,) | the "200%" figure, registered as "WW81B Figures" |
| welcome81-w2.css | written for W2 (simplified port of `prototypes/step81/var-a.html`) | hosted stylesheet, SRI-pinned in welcome81-w2.js |

Publish this folder as `welcome81-w2/` in EnrikoMM/wildwin-widget-assets, then
replace `@PENDING` in ASSET_BASE with the commit. Nothing has been pushed.
