import sharp from "sharp";
import { existsSync, rmSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "images");

const jobs = [
  {
    from: "banner hero desktop.png",
    to: "banner-hero-desktop.jpg",
    run: (input, out) =>
      sharp(input)
        .resize({ width: 2000, withoutEnlargement: true })
        .jpeg({ quality: 84, mozjpeg: true, progressive: true })
        .toFile(out),
  },
  {
    from: "banner hero mobile.png",
    to: "banner-hero-mobile.jpg",
    run: (input, out) =>
      sharp(input)
        .resize({ width: 1200, withoutEnlargement: true })
        .jpeg({ quality: 84, mozjpeg: true, progressive: true })
        .toFile(out),
  },
  {
    from: "logo produto.png",
    to: "logo-product.png",
    run: (input, out) =>
      sharp(input)
        .trim({ threshold: 2 })
        .png({ palette: true, colors: 200, compressionLevel: 9, effort: 10 })
        .toFile(out),
  },
];

const kb = (bytes) => (bytes / 1024).toFixed(0);

for (const job of jobs) {
  const input = join(root, job.from);
  const out = join(outDir, job.to);

  if (!existsSync(input)) {
    process.stdout.write(`skip ${job.from} (nao encontrado)\n`);
    continue;
  }

  const before = statSync(input).size;
  await job.run(input, out);
  const meta = await sharp(out).metadata();
  const after = statSync(out).size;

  process.stdout.write(
    `ok ${job.to} ${meta.width}x${meta.height} ${kb(after)}KB (de ${kb(before)}KB)\n`,
  );
}

for (const job of jobs) {
  const input = join(root, job.from);
  if (existsSync(input)) rmSync(input);
}