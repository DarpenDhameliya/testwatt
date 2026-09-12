/**
 * Prepares the Test Watt logo assets used by the site.
 *
 * The artwork is used exactly as supplied — full stacked lockup, original
 * navy/red, nothing recoloured. The only operation is trimming the surrounding
 * whitespace so the lockup fills the space it is given (the source has wide
 * margins, which would otherwise render it ~40% smaller than its box).
 *
 * Outputs:
 *   public/images/testwatt-logo-trimmed.png  -> header / footer plate
 *   app/icon.png                             -> <link rel="icon">
 *   app/apple-icon.png                       -> <link rel="apple-touch-icon">
 */
const sharp = require("sharp");

const SRC = "public/images/testwatt-logo.png";
const TRIMMED = "public/images/testwatt-logo-trimmed.png";
const WHITE = { r: 255, g: 255, b: 255, alpha: 1 };

// Fraction of the icon square the lockup spans.
const ICON_FILL = 0.94;

async function buildTrimmed() {
  const info = await sharp(SRC)
    .trim()
    .png({ compressionLevel: 9 })
    .toFile(TRIMMED);
  console.log(`wrote ${TRIMMED} (${info.width}x${info.height})`);
}

async function buildIcon(size, out) {
  const mark = await sharp(SRC)
    .trim()
    .resize({
      width: Math.round(size * ICON_FILL),
      height: Math.round(size * ICON_FILL),
      fit: "inside",
    })
    .toBuffer();

  await sharp({
    create: { width: size, height: size, channels: 4, background: WHITE },
  })
    .composite([{ input: mark, gravity: "centre" }])
    .png({ compressionLevel: 9 })
    .toFile(out);

  console.log(`wrote ${out} (${size}x${size})`);
}

Promise.all([
  buildTrimmed(),
  buildIcon(512, "app/icon.png"),
  buildIcon(180, "app/apple-icon.png"),
]).catch((e) => {
  console.error(e);
  process.exit(1);
});
