import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "images");
mkdirSync(outDir, { recursive: true });

const CREAM = "#F8F5EF";
const SAND = "#EFE9DF";
const INK = "#171411";
const GOLD = "#B89B62";
const CHAMPAGNE = "#D8C39B";

const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "Helvetica, Arial, sans-serif";

function svg({
  w,
  h,
  label,
  file,
  tone = CREAM,
  ink = INK,
  accent = GOLD,
  ratioLabel = "",
}) {
  const cx = w / 2;
  const cy = h / 2;
  const barW = Math.min(w * 0.34, 210);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${tone}" />
      <stop offset="100%" stop-color="${SAND}" />
    </linearGradient>
    <linearGradient id="veil" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#000" stop-opacity="0" />
      <stop offset="100%" stop-color="#000" stop-opacity="0.12" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)" />
  <rect width="${w}" height="${h}" fill="url(#veil)" />
  <circle cx="${cx}" cy="${cy - Math.min(h * 0.06, 30)}" r="${Math.min(w, h) * 0.2}" fill="none" stroke="${accent}" stroke-opacity="0.35" stroke-width="1" />
  <circle cx="${cx}" cy="${cy - Math.min(h * 0.06, 30)}" r="${Math.min(w, h) * 0.14}" fill="none" stroke="${accent}" stroke-opacity="0.25" stroke-width="1" />
  <rect x="${cx - barW / 2}" y="${cy + Math.min(h * 0.12, 40)}" width="${barW}" height="1" fill="${accent}" fill-opacity="0.5" />
  <text x="${cx}" y="${cy + Math.min(h * 0.12, 40) + 6}" font-family="${SANS}" font-size="${Math.max(11, Math.round(Math.min(w, h) * 0.045))}" letter-spacing="4" fill="${ink}" fill-opacity="0.55" text-anchor="middle">${label}</text>
  <text x="${cx}" y="${cy + Math.min(h * 0.12, 40) + 32}" font-family="${SERIF}" font-size="${Math.max(12, Math.round(Math.min(w, h) * 0.05))}" fill="${ink}" fill-opacity="0.35" text-anchor="middle">${file}</text>
  ${ratioLabel ? `<text x="${cx}" y="${cy - Math.min(h * 0.06, 30) + Math.min(w, h) * 0.22}" font-family="${SANS}" font-size="${Math.max(9, Math.round(Math.min(w, h) * 0.035))}" letter-spacing="3" fill="${accent}" fill-opacity="0.8" text-anchor="middle">${ratioLabel}</text>` : ""}
  <text x="${w - 16}" y="${h - 16}" font-family="${SANS}" font-size="10" letter-spacing="2" fill="${ink}" fill-opacity="0.3" text-anchor="end">PLACEHOLDER</text>
</svg>`;
}

const dark = { tone: "#221D18", ink: CHAMPAGNE, accent: CHAMPAGNE };

const items = [
  { file: "fer-hero.jpg", w: 1100, h: 1400, label: "FOTO PRINCIPAL", ...dark, ratioLabel: "HERO 4:5" },
  { file: "fer-profile.jpg", w: 1100, h: 1300, label: "RETRATO DA FER", ...dark, ratioLabel: "SOBRE" },
  { file: "result-01.jpg", w: 1200, h: 1000, label: "RESULTADO REAL", ratioLabel: "ANTES / DEPOIS" },
  { file: "result-02.jpg", w: 900, h: 1100, label: "RESULTADO REAL", ratioLabel: "TÉCNICA APLICADA" },
  { file: "result-03.jpg", w: 900, h: 1100, label: "RESULTADO REAL", ...dark, ratioLabel: "ACABAMENTO" },
  { file: "result-04.jpg", w: 1500, h: 900, label: "RESULTADO REAL", ratioLabel: "HORIZONTAL" },
  { file: "student-result-01.jpg", w: 900, h: 1100, label: "RESULTADO DE ALUNA", ...dark, ratioLabel: "ALUNA 01" },
  { file: "student-result-02.jpg", w: 900, h: 1100, label: "RESULTADO DE ALUNA", ratioLabel: "ALUNA 02" },
  { file: "student-result-03.jpg", w: 900, h: 1100, label: "RESULTADO DE ALUNA", ...dark, ratioLabel: "ALUNA 03" },
  { file: "testimonial-01.jpg", w: 800, h: 800, label: "RETRATO DA ALUNA", ...dark, ratioLabel: "DEPOIMENTO 01" },
  { file: "testimonial-02.jpg", w: 800, h: 800, label: "RETRATO DA ALUNA", ratioLabel: "DEPOIMENTO 02" },
  { file: "testimonial-03.jpg", w: 800, h: 800, label: "RETRATO DA ALUNA", ...dark, ratioLabel: "DEPOIMENTO 03" },
  { file: "background-blonde.jpg", w: 1600, h: 1000, label: "FUNDO — CABELO LOIRO", ...dark, ratioLabel: "SEÇÃO ESCURA" },
  { file: "technique-01.jpg", w: 900, h: 1100, label: "FOTO TÉCNICA", ratioLabel: "MÓDULO 01" },
  { file: "technique-02.jpg", w: 900, h: 1100, label: "FOTO TÉCNICA", ...dark, ratioLabel: "MÓDULO 02" },
];

for (const it of items) {
  const buffer = Buffer.from(svg(it));
  await sharp(buffer)
    .jpeg({ quality: 82, progressive: true })
    .toFile(join(outDir, it.file));
  process.stdout.write(`ok ${it.file}\n`);
}