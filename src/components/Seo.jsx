import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { pages, siteName, siteUrl, indexable } from '../data/site';
import { rankedCasinos, homeRanking, casinoRanking, bonusRanking } from '../data/rankings';

export default function Seo() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/+$/, '') || '/';
  const page = pages[path];
  const title = `${page?.title || 'Página não encontrada'} | ${siteName}`;
  const description = page?.description || 'Página não encontrada. Consulte as nossas análises e comparações de casinos.';
  const url = `${siteUrl}${path === '/' ? '/' : path}`;
  const graph = [{ '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: siteName, url: `${siteUrl}/` },
    { '@type': 'WebSite', '@id': `${siteUrl}/#website`, name: siteName, url: `${siteUrl}/`, publisher: { '@id': `${siteUrl}/#organization` } },
    { '@type': 'WebPage', '@id': `${url}#webpage`, name: title, description, url, isPartOf: { '@id': `${siteUrl}/#website` }, inLanguage: 'pt-PT' }];
  if (page && path !== '/') {
    const items = [{ name: 'Início', item: `${siteUrl}/` }];
    if (page.casino) items.push({ name: 'Casinos', item: `${siteUrl}/casinos` });
    items.push({ name: page.casino?.name || page.title, item: url });
    graph.push({ '@type': 'BreadcrumbList', itemListElement: items.map((item, i) => ({ '@type': 'ListItem', position: i + 1, ...item })) });
  }
  const ranking = { '/': homeRanking, '/casinos': casinoRanking, '/bonuses': bonusRanking }[path];
  if (ranking) graph.push({ '@type': 'ItemList', itemListElement: rankedCasinos(ranking).map((casino, i) => ({ '@type': 'ListItem', position: i + 1, name: casino.name, url: `${siteUrl}${casino.reviewLink}` })) });
  return <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="robots" content={page && indexable ? 'index, follow' : 'noindex, nofollow'} />
    {page && <link rel="canonical" href={url} />}
    <meta property="og:locale" content="pt_PT" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={siteName} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={`${siteUrl}/social-card.png`} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="CasinoProsCons — Análises de casinos, prós e contras" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={`${siteUrl}/social-card.png`} />
    {page && <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c')}</script>}
  </Helmet>;
}
