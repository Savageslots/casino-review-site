import sharp from 'sharp';
import { writeFile, access } from 'node:fs/promises';

await sharp('public/logo-icon.png').resize({ width: 360, withoutEnlargement: true }).webp({ quality: 85 }).toFile('public/logo-icon.webp');
await sharp('public/logo-icon.png').resize(48, 48, { fit: 'contain', background: '#ffffff' }).png().toFile('public/favicon.png');
// Plain text fallbacks identify brands without inventing official logo artwork.
for (const [slug, label] of [['slota', 'Slota'], ['leon', 'Leon'], ['ginja', 'Ginja'], ['fairpari', 'Fairpari'], ['dbbet', 'DBbet'], ['spinzen', 'Spinzen']]) {
  // Preserve existing artwork, including official brand assets.
  if (await access(`public/logos/${slug}.svg`).then(() => true, () => false)) continue;
  await writeFile(`public/logos/${slug}.svg`, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" rx="32" fill="#fff"/><text x="128" y="138" text-anchor="middle" font-family="Arial,sans-serif" font-size="36" font-weight="700" fill="#2c3a7a">${label}</text></svg>\n`);
}
const social = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><rect width="1200" height="630" fill="#2c3a7a"/><rect x="60" y="60" width="1080" height="510" rx="32" fill="#fff"/><text x="110" y="265" font-family="Arial,sans-serif" font-size="76" font-weight="700" fill="#2c3a7a">CasinoProsCons</text><text x="110" y="355" font-family="Arial,sans-serif" font-size="38" fill="#333">Casinos em Portugal: prós e contras</text><text x="110" y="460" font-family="Arial,sans-serif" font-size="26" fill="#555">Bónus · Opiniões · Fontes identificadas</text></svg>`;
await sharp(Buffer.from(social)).png().toFile('public/social-card.png');

await sharp(Buffer.from(social.replace('Casinos em Portugal: prós e contras', 'Casinos in Portugal: pros and cons').replace('Bónus · Opiniões · Fontes identificadas', 'Bonuses · Player feedback · Sources'))).png().toFile('public/social-card-en.png');
