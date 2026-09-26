import { casinos } from './casinosData';

export const homeRanking = ['sg-casino', 'betmatch', 'wildz-new', 'royalsea', 'kingmaker'];
export const casinoRanking = ['sg-casino', 'betmatch', 'wildz-new', 'kingmaker', 'boomerangbet', 'royalsea'];
export const bonusRanking = ['sg-casino', 'royalsea', 'betmatch', 'wildz-new', 'kingmaker'];

export function rankedCasinos(ranking) {
  return ranking.map(slug => {
    const casino = casinos.find(item => item.reviewLink === `/casinos/${slug}`);
    if (!casino) throw new Error(`Unknown casino in ranking: ${slug}`);
    return casino;
  });
}
