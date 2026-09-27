import { localizeCasino } from '../i18n/translate.js';
import { casinos } from './casinosData.js';
import { locales, localePath, languageTags } from '../i18n/routing.js';
export const siteName = 'CasinoProsCons';
export const siteUrl = (import.meta.env.VITE_SITE_URL || 'https://casinoproscons.com').replace(/\/$/, '');
export const indexable = import.meta.env.VITE_SITE_INDEXABLE === 'true';
const main = {
  pt: {
    '/': { title: 'Casinos online em Portugal: análises e opiniões', description: 'Compare Slota, Leon, Ginja, Fairpari, DBbet e Spinzen: bónus anunciados, prós, contras, opiniões com fontes e estatuto no SRIJ.' },
    '/casinos': { title: 'Casinos online: análises para Portugal', description: 'Consulte seis análises de casinos com jogos, condições promocionais, opiniões públicas, fontes e limitações para Portugal.' },
    '/bonuses': { title: 'Bónus de casino: comparação e condições', description: 'Compare bónus anunciados, requisitos de aposta e limitações. Identificamos ofertas divergentes e termos ainda por confirmar para Portugal.' }
  },
  en: {
    '/': { title: 'Online casinos in Portugal: reviews and player feedback', description: 'Compare Slota, Leon, Ginja, Fairpari, DBbet and Spinzen: advertised bonuses, pros, cons, sourced player feedback and SRIJ status.' },
    '/casinos': { title: 'Online casinos: reviews for Portugal', description: 'Explore six casino reviews covering games, promotional terms, public feedback, sources and limitations for Portugal.' },
    '/bonuses': { title: 'Casino bonuses: comparison and terms', description: 'Compare advertised bonuses, wagering requirements and limitations. We identify conflicting offers and terms still unconfirmed for Portugal.' }
  }
};
export const pages = Object.fromEntries(locales.flatMap(locale => {
  const entries = { ...main[locale], ...Object.fromEntries(casinos.map(casino => [casino.reviewLink, {
    title: localizeCasino(casino, locale).seoTitle || (locale === 'en' ? `${casino.name}: review, player feedback and bonuses` : `${casino.name}: análise, opiniões e bónus`),
    description: localizeCasino(casino, locale).seoDescription || (locale === 'en' ? `${casino.name} reviewed: games, advertised bonuses, pros, cons, sourced public ratings and status in Portugal’s SRIJ register.` : `${casino.name} em análise: jogos, bónus anunciados, prós, contras, avaliações públicas com fontes e estatuto no registo português SRIJ.`),
    casino
  }])) };
  return Object.entries(entries).map(([base, page]) => [localePath(base, locale), { ...page, base, locale, language: languageTags[locale] }]);
}));
