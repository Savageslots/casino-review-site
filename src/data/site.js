import { casinos } from './casinosData';

export const siteName = 'CasinoProsCons';
export const siteUrl = (import.meta.env.VITE_SITE_URL || 'https://casinoproscons.com').replace(/\/$/, '');
export const indexable = import.meta.env.VITE_SITE_INDEXABLE === 'true';
export const pages = {
  '/': { title: 'Casinos online em Portugal: análises e opiniões', description: 'Compare Slota, Leon, Ginja, Fairpari, DBbet e Spinzen: bónus anunciados, prós, contras, opiniões com fontes e estatuto no SRIJ.' },
  '/casinos': { title: 'Casinos online: análises para Portugal', description: 'Consulte seis análises de casinos com jogos, condições promocionais, opiniões públicas, fontes e limitações para Portugal.' },
  '/bonuses': { title: 'Bónus de casino: comparação e condições', description: 'Compare bónus anunciados, requisitos de aposta e limitações. Identificamos ofertas divergentes e termos ainda por confirmar para Portugal.' },
  ...Object.fromEntries(casinos.map(casino => [casino.reviewLink, {
    title: `${casino.name}: análise, opiniões e bónus`,
    description: `${casino.name} em análise: jogos, bónus anunciados, prós, contras, avaliações públicas com fontes e estatuto no registo português SRIJ.`,
    casino,
  }])),
};
