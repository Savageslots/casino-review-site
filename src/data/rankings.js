import { casinos } from './casinosData.js';

// Ginja is the editorial lead. Remaining entries use the published evidence score;
// missing scores follow rated entries and are never treated as zero.
export const casinoRanking = ['ginja', ...casinos
  .filter(casino => casino.slug !== 'ginja')
  .sort((a, b) => (b.rating ?? -Infinity) - (a.rating ?? -Infinity) || a.slug.localeCompare(b.slug))
  .map(casino => casino.slug)];
export const homeRanking = casinoRanking;
export const bonusRanking = ['leon', 'fairpari', 'ginja', 'dbbet', 'spinzen', 'slota'];

export function rankedCasinos(ranking) {
  return ranking.map(slug => {
    const casino = casinos.find(item => item.slug === slug);
    if (!casino) throw new Error(`Unknown casino in ranking: ${slug}`);
    return casino;
  });
}
