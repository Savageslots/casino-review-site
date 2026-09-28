import { localizeCasino } from '../i18n/translate.js';
import { casinos } from './casinosData.js';
import { locales, localePath, languageTags } from '../i18n/routing.js';
export const siteName = 'CasinoProsCons';
export const siteUrl = (import.meta.env.VITE_SITE_URL || 'https://casinoproscons.com').replace(/\/$/, '');
export const indexable = import.meta.env.VITE_SITE_INDEXABLE === 'true';
const main = {
  pt: {
    '/calculadora-rollover': { title: 'Calculadora de rollover: requisitos de aposta e RTP', description: 'Calcule o rollover do bónus, o volume de apostas e a perda esperada com RTP ajustável. Compare depósito + bónus, limites e contribuição dos jogos.', article: true },
    '/': { title: 'Melhores casinos online para jogadores portugueses', description: 'Compare casinos online com análises, prós e contras e opiniões dos jogadores. Veja critérios de escolha, condições dos bónus e informação sobre licenciamento.' },
    '/casinos': { title: 'Comparar casinos online: jogos, pagamentos e opiniões', description: 'Compare jogos, métodos de pagamento, limites de levantamento e apoio ao cliente. Consulte análises de casinos com opiniões, fontes e condições explicadas.' },
    '/bonuses': { title: 'Bónus de casino: comparar ofertas e requisitos de aposta', description: 'Compare bónus de casino, depósitos e rodadas grátis. Saiba calcular requisitos de aposta e confira prazos, jogos elegíveis e limites de levantamento.' }
  },
  en: {
    '/calculadora-rollover': { title: 'Wagering Calculator: Bonus Requirements and RTP', description: 'Calculate bonus wagering, actual betting volume and expected losses with adjustable RTP. Compare bonus caps, wagering bases and game contributions.', article: true },
    '/': { title: 'Best Online Casinos for Portuguese Players', description: 'Compare online casinos through reviews, pros and cons and player feedback. Explore selection criteria, bonus terms and licensing information.' },
    '/casinos': { title: 'Compare Online Casinos: Games, Payments and Reviews', description: 'Compare games, payment methods, withdrawal limits and customer support. Read casino reviews with player feedback, sources and explained conditions.' },
    '/bonuses': { title: 'Casino Bonuses: Compare Offers and Wagering Requirements', description: 'Compare casino bonuses, deposits and free spins. Understand wagering calculations, deadlines, eligible games and cashout limits.' }
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
