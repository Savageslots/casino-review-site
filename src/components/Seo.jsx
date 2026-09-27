import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { pages, siteName, siteUrl, indexable } from '../data/site';
import { rankedCasinos, homeRanking, casinoRanking, bonusRanking } from '../data/rankings';
import { useLocale } from '../i18n/useLocale';
import { localePath } from '../i18n/routing';
export default function Seo() {
  const { pathname } = useLocation();
  const { locale, languageTag, base, path, t } = useLocale();
  const route = pathname.replace(/\/+$/, '') || '/';
  const page = pages[route];
  const title = `${page?.title || t('Página não encontrada')} | ${siteName}`;
  const description = page?.description || t('A página pode ter sido removida ou o endereço estar incorreto.');
  const url = `${siteUrl}${route}`;
  const home = `${siteUrl}${path('/')}`;
  const image = `${siteUrl}/social-card${locale === 'en' ? '-en' : ''}.png`;
  const graph = [
    { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: siteName, url: `${siteUrl}/` },
    { '@type': 'WebSite', '@id': `${siteUrl}/#website`, name: siteName, url: `${siteUrl}/`, inLanguage: ['pt-PT', 'en'], publisher: { '@id': `${siteUrl}/#organization` } },
    { '@type': 'WebPage', '@id': `${url}#webpage`, name: title, description, url, isPartOf: { '@id': `${siteUrl}/#website` }, inLanguage: languageTag }
  ];
  if (page && base !== '/') {
    const items = [{ name: locale === 'en' ? 'Home' : 'Início', item: home }];
    if (page.casino) items.push({ name: 'Casinos', item: `${siteUrl}${path('/casinos')}` });
    items.push({ name: page.casino?.name || page.title, item: url });
    graph.push({ '@type': 'BreadcrumbList', itemListElement: items.map((item, i) => ({ '@type': 'ListItem', position: i + 1, ...item })) });
  }
  const ranking = { '/': homeRanking, '/casinos': casinoRanking, '/bonuses': bonusRanking }[base];
  if (page && ranking) graph.push({ '@type': 'ItemList', itemListElement: rankedCasinos(ranking).map((casino, i) => ({ '@type': 'ListItem', position: i + 1, name: casino.name, url: `${siteUrl}${path(casino.reviewLink)}` })) });
  return <Helmet>
    <html lang={languageTag} />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="robots" content={page && indexable ? 'index, follow' : 'noindex, nofollow'} />
    {page && <link rel="canonical" href={url} />}
    {page && <link rel="alternate" hrefLang="pt-PT" href={`${siteUrl}${localePath(base, 'pt')}`} />}
    {page && <link rel="alternate" hrefLang="en" href={`${siteUrl}${localePath(base, 'en')}`} />}
    {page && <link rel="alternate" hrefLang="x-default" href={`${siteUrl}${localePath(base, 'pt')}`} />}
    <meta property="og:locale" content={locale === 'en' ? 'en_GB' : 'pt_PT'} />
    <meta property="og:locale:alternate" content={locale === 'en' ? 'pt_PT' : 'en_GB'} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={siteName} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={image} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content={locale === 'en' ? 'CasinoProsCons — Casino reviews, pros and cons' : 'CasinoProsCons — Análises de casinos, prós e contras'} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    {page && <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c')}</script>}
  </Helmet>;
}
