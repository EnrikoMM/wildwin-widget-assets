# Provenance: Spin the Wheel promotion page (STEP-82, "D3 · Your Week")

No paid or AI generation was used. Every raster is the owner's art from the Figma
file `L4rATEIEJezl4RAFqSv2Lu`, exported on 5 Nov 2026 at 2× through the Figma MCP
(`download_assets`, png, scale 2) from the same nodes as
`prototypes/step82/img/PROVENANCE.md`, then converted to WebP with Pillow
(method 6). The 2× exports come with the frame's dark fill, so the wheel and the
chests take their alpha channel from the 1× transparent files in
`prototypes/step82/img/` (upscaled with Lanczos).

| File | Figma node | Size | Used for |
|---|---|---|---|
| hero.webp | HeroPic_web_01, 838:1025 | 920×530 (2× of the 460 px web column), q80, 51 KB | hero (above the fold, eager, fetchpriority high) |
| wheel.webp | the Wheel instance, 838:1041 | 601×609 with alpha, q82, 69 KB | "Every spin pays" (shown at up to 320 px) |
| chest-bronze.webp, chest-silver.webp, chest-gold.webp | "Chest and key", 838:1116, 838:1123, 838:1130 | 420×383 with alpha, q82, 25-31 KB | chests (shown at up to 210 px) |
| jackpot.webp | Pic_03, 838:1137 | 2000×663 (2× of the 1000 px web band), q72, 73 KB | Grand Jackpot band |
| game-1.webp … game-6.webp | Games_Row tiles, 838:1150 to 838:1155 (site game art) | 280×331, q80, 5-9 KB | Eligible games: Crash, Skyliner, High Flyer, Lucky Ducky, RedJet, Stormy Witch |

Not raster:

| File | Source | Used for |
|---|---|---|
| roboto-cond-display.woff2 (22 KB) | Roboto variable font (google/fonts, `ofl/roboto/Roboto[wdth,wght].ttf`, SIL OFL 1.1), axes limited with fontTools to wdth 75-85 and wght 500-900, subset to ASCII plus ’ · – — × … | the condensed display type, registered by wheel82.js as "WW82 Display" (the site ships only Roboto 400/700) |
| wheel82.css | written for STEP-82 (REST_CSS of `prototypes/step82/r2/d03.html`, plus the calculator's box, tags and stage) | hosted stylesheet, SRI-pinned in wheel82.js |
