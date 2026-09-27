import { ginjaReview } from './ginjaReview.js';
import { editorialReviews } from './editorialReviews.js';
// Dated evidence snapshots; do not replace with unsupported draft scores.
export const checkedOn = '26/09/2026';
export const regulatorSource = 'https://www.srij.turismodeportugal.pt/pt/jogos-e-apostas-online/entidades-licenciadas';
export function platformMean(sources) {
  const included = sources.filter(source => source.included && Number.isFinite(source.score));
  return included.length ? Math.round(included.reduce((sum, source) => sum + source.score / source.scale * 10, 0) / included.length * 10) / 10 : null;
}
export const formatScore = (value, locale = 'pt') => value == null ? (locale === 'en' ? 'No average' : 'Sem média') : value.toLocaleString(locale === 'en' ? 'en' : 'pt-PT', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
const records = [
{ ...{
  "slug": "slota",
  "name": "Slota",
  "source": "https://uk.trustpilot.com/review/slota.casino",
  "sources": [
    {
      "name": "Trustpilot",
      "url": "https://uk.trustpilot.com/review/slota.casino",
      "domain": "slota.casino",
      "score": 2.4,
      "scale": 5,
      "count": 12,
      "kind": "TrustScore",
      "included": true
    },
    {
      "name": "AskGamblers",
      "url": "https://www.askgamblers.com/online-casinos/reviews/slota-casino",
      "score": 8.4,
      "scale": 10,
      "count": 14,
      "kind": "Média dos jogadores",
      "included": true
    }
  ],
  "praised": [
    "Variedade de jogos e de opções de depósito (AskGamblers).",
    "Alguns utilizadores descrevem navegação simples e apoio rápido (AskGamblers)."
  ],
  "complaints": [
    "Dificuldades na verificação documental e atrasos nos levantamentos (AskGamblers).",
    "Relatos de pagamentos não recebidos e de bónus recusados (Trustpilot)."
  ]
}, ...editorialReviews.slota },
{ ...{
  "slug": "leon",
  "name": "Leon",
  "source": "https://pt.trustpilot.com/review/leon.bet",
  "sources": [
    {
      "name": "Trustpilot",
      "url": "https://pt.trustpilot.com/review/leon.bet",
      "domain": "leon.bet",
      "score": 3,
      "scale": 5,
      "count": 1485,
      "kind": "TrustScore",
      "included": true
    },
    {
      "name": "REVIEWS.io",
      "url": "https://www.reviews.io/company-reviews/store/leon-bet",
      "score": 4.2,
      "scale": 5,
      "count": 10,
      "kind": "Média publicada",
      "included": false,
      "note": "Excluída do indicador: amostra pequena com conteúdo alheio ao operador e textos repetidos."
    }
  ],
  "praised": [
    "Há comentários positivos sobre a experiência na plataforma (Trustpilot).",
    "Alguns relatos referem facilidade de utilização e levantamentos concluídos (REVIEWS.io)."
  ],
  "complaints": [
    "Utilizadores relatam demora em levantamentos e na liquidação de apostas (Trustpilot).",
    "Existem queixas sobre a interpretação das regras de apostas (Trustpilot)."
  ]
}, ...editorialReviews.leon },
ginjaReview,
{ ...{
  "slug": "fairpari",
  "name": "FairPari",
  "source": "https://es.trustpilot.com/review/fairpari.com",
  "officialSource": "https://fairpari.com/en",
  "sources": [
    {
      "name": "Trustpilot",
      "url": "https://es.trustpilot.com/review/fairpari.com",
      "domain": "fairpari.com",
      "score": 3.2,
      "scale": 5,
      "count": 3,
      "kind": "TrustScore",
      "included": true
    },
    {
      "name": "Casino Guru",
      "url": "https://casino.guru/fairpari-casino-review",
      "score": null,
      "count": 2,
      "included": false,
      "note": "Sem nota de utilizadores por falta de dados. O Safety Index é editorial e não entra na média."
    }
  ],
  "praised": [
    "Não identificámos uma base suficiente de elogios nos comentários consultados."
  ],
  "complaints": [
    "Um relato refere ausência de resposta por e-mail (Trustpilot).",
    "A amostra é insuficiente para estabelecer uma frequência de problemas."
  ]
}, ...editorialReviews.fairpari },
{ ...{
  "slug": "dbbet",
  "name": "DBbet",
  "source": "https://www.trustpilot.com/review/dbbet.bet",
  "sources": [
    {
      "name": "Trustpilot",
      "url": "https://www.trustpilot.com/review/dbbet.bet",
      "domain": "dbbet.bet",
      "score": 2.5,
      "scale": 5,
      "count": 16,
      "kind": "TrustScore",
      "included": false,
      "note": "Perfil deste domínio; associação ao endereço da oferta portuguesa não confirmada."
    },
    {
      "name": "Trustpilot",
      "url": "https://www.trustpilot.com/review/db-bet.com",
      "domain": "db-bet.com",
      "score": 1.9,
      "scale": 5,
      "count": 24,
      "kind": "TrustScore",
      "included": false,
      "note": "Outro domínio. Não agregado ao anterior para evitar misturar entidades ou amostras."
    }
  ],
  "praised": [
    "Não identificámos elogios suficientemente documentados para sintetizar nesta análise."
  ],
  "complaints": [
    "Um relato em dbbet.bet refere um depósito não creditado após contacto com o apoio.",
    "No perfil db-bet.com há relatos de bloqueio de conta após envio de documentos."
  ]
}, ...editorialReviews.dbbet },
{ ...{
  "slug": "spinzen",
  "name": "Spinzen",
  "source": "https://www.askgamblers.com/online-casinos/reviews/spinzen-casino",
  "sources": [
    {
      "name": "AskGamblers",
      "url": "https://www.askgamblers.com/online-casinos/reviews/spinzen-casino",
      "score": 4.5,
      "scale": 10,
      "count": 2,
      "kind": "Média dos jogadores",
      "included": true
    },
    {
      "name": "Casino Guru",
      "url": "https://casino.guru/spinzen-casino-review",
      "score": null,
      "count": 1,
      "included": false,
      "note": "Sem nota de utilizadores por falta de dados. Safety Index excluído do cálculo."
    }
  ],
  "praised": [
    "A amostra consultada não permite identificar elogios recorrentes."
  ],
  "complaints": [
    "Um jogador refere espera prolongada por verificação e levantamento (AskGamblers).",
    "Outro considera elevado o depósito e pouco interessantes os bónus (AskGamblers)."
  ]
}, ...editorialReviews.spinzen }
];
// Overall scores supplied by the publisher from their selected sources (27 September 2026).
// Keep the independently recorded platform snapshots unchanged.
const publisherRatings = { ginja: 8, slota: 7.6, fairpari: 7.4, leon: 7, spinzen: 5.5 };
export const casinos = records.map(record => ({
  ...record, casinoLink: '', reviewLink: `/casinos/${record.slug}`, logo: `/logos/${record.slug}.svg`,
  platformRating: platformMean(record.sources),
  publisherRating: publisherRatings[record.slug] ?? null,
  rating: publisherRatings[record.slug] ?? platformMean(record.sources),
  ratingLabel: publisherRatings[record.slug] != null ? 'Avaliação global CasinoProsCons' : record.sources.filter(source => source.included).length > 1 ? 'Média de plataformas' : record.sources.find(source => source.included)?.name || 'Sem média',
  details: record.details || [{ label: 'Depósito mínimo', value: record.minDeposit }, { label: 'Requisitos de aposta', value: 'Condições por confirmar' }, { label: 'Formato', value: record.type }, { label: 'Registo SRIJ', value: 'Marca não encontrada' }],
  hook: record.hook || 'Os dados promocionais são atribuídos às fontes consultadas; não confirmam disponibilidade em Portugal. Consulte as limitações e as opiniões na análise.'
}));
