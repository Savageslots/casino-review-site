import { casinos } from './casinosData';

// Selection order follows the first six entries in the reference table, not the scores.
export const casinoRanking = ['slota', 'leon', 'ginja', 'fairpari', 'dbbet', 'spinzen'];
export const homeRanking = casinoRanking;
export const bonusRanking = casinoRanking;

export function rankedCasinos(ranking) {
  return ranking.map(slug => {
    const casino = casinos.find(item => item.reviewLink === `/casinos/${slug}`);
    if (!casino) throw new Error(`Unknown casino in ranking: ${slug}`);
    return casino;
  });
}
