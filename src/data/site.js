import { casinos } from './casinosData';

export const siteName = 'CasinoProsCons';
export const siteUrl = (import.meta.env.VITE_SITE_URL || 'https://casinoproscons.com').replace(/\/$/, '');
export const indexable = import.meta.env.VITE_SITE_INDEXABLE === 'true';
export const pages = {
  '/': { title: 'Online Casino Reviews & Rankings', description: 'Compare online casino reviews, bonus terms, payment considerations and platform pros and cons with CasinoProsCons.' },
  '/casinos': { title: 'Online Casino Rankings', description: 'Explore casino reviews and compare game selection, bonus requirements, payment considerations and platform usability.' },
  '/bonuses': { title: 'Casino Bonuses & Wagering Compared', description: 'Compare casino welcome offers and understand wagering requirements, payment exclusions and withdrawal restrictions before choosing a bonus.' },
  ...Object.fromEntries(casinos.map(casino => [casino.reviewLink, {
    title: `${casino.name} Review – Pros, Cons & Bonus Terms`,
    description: `Read our ${casino.name} overview covering games, bonus conditions, payment considerations, strengths and limitations.`,
    casino,
  }])),
};
