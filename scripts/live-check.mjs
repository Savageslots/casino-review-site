import { casinos } from '../src/data/casinosData.js';
import { localizeCasino } from '../src/i18n/translate.js';
import { homeRanking, casinoRanking, bonusRanking } from '../src/data/rankings.js';
import { locales, localePath, localeFromPath, languageTags } from '../src/i18n/routing.js';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { request } from 'node:https';
import { Resolver } from 'node:dns/promises';
const resolver = new Resolver();
resolver.setServers(['1.1.1.1']);
// Use public DNS to avoid a stale local negative cache after first domain setup.
function fetch(url, { headers = {} } = {}) {
  return new Promise((resolve, reject) => {
    const req = request(url, { headers, lookup(host, options, callback) {
      resolver.resolve4(host).then(addresses => options.all
        ? callback(null, addresses.map(address => ({ address, family: 4 })))
        : callback(null, addresses[0], 4)).catch(callback);
    } }, response => {
      const chunks = [];
      response.on('data', chunk => chunks.push(chunk));
      response.on('end', () => resolve(new Response(Buffer.concat(chunks), { status: response.statusCode, headers: response.headers })));
      response.on('error', reject);
    });
    req.on('error', reject);
    req.setTimeout(20000, () => req.destroy(new Error('Request timed out')));
    req.end();
  });
}
const origin = process.argv[2];
if (!origin) throw new Error('Usage: node scripts/live-check.mjs https://deployment-host [--preview]');
const preview = process.argv.includes('--preview');
const headers = {};
if (preview) {
  const secrets = Object.fromEntries((await readFile('.dev.vars', 'utf8')).trim().split('\n').map(line => { const i=line.indexOf('='); return [line.slice(0,i),line.slice(i+1)]; }));
  const unauthorized = await fetch(origin);
  if (unauthorized.status === 302 && unauthorized.headers.get('location')?.includes('.cloudflareaccess.com/')) {
    console.log('Cloudflare Access protects this preview; an authorized Access session is required for live checks.');
    process.exit(2);
  }
  assert.equal(unauthorized.status, 401);
  headers.Authorization = `Basic ${Buffer.from(`${secrets.STAGING_USER}:${secrets.STAGING_PASSWORD}`).toString('base64')}`;
}
const baseRoutes = ['/', '/casinos', '/bonuses', ...['slota','leon','ginja','fairpari','dbbet','spinzen'].map(s=>`/casinos/${s}`)];
const routes = locales.flatMap(locale => baseRoutes.map(route => localePath(route, locale)));
for (const route of routes) {
  const response = await fetch(origin + route, { headers });
  assert.equal(response.status, 200, route);
  const html = await response.text();
  assert.ok(html.includes(`href="https://casinoproscons.com${route}"`), `Canonical: ${route}`);
  assert.ok(html.includes('content="noindex, nofollow"'), `Preview indexing: ${route}`);
  assert.ok(html.includes(`lang="${languageTags[localeFromPath(route)]}"`), `Language: ${route}`);
  assert.ok(html.includes('hrefLang="en"'), `Alternates: ${route}`);
  assert.ok(html.includes('<h1'), `Content: ${route}`);
  assert.ok(!/znaki/i.test(html), `Retired competitor reference: ${route}`);
  const base = route.replace(/^\/en(?=\/|$)/, '') || '/';
  const expectedOrder = { '/': homeRanking, '/casinos': casinoRanking, '/bonuses': bonusRanking }[base];
  if (expectedOrder) {
    const graph = JSON.parse(html.match(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/s)[1]);
    const list = graph['@graph'].find(item => item['@type'] === 'ItemList');
    assert.deepEqual(list.itemListElement.map(item => item.url.split('/').pop()), expectedOrder, `Live ranking: ${route}`);
    const headings = [...html.matchAll(/<h2[^>]*>(Slota|Leon|Ginja|FairPari|DBbet|Spinzen)<\/h2>/g)].map(match => match[1]);
    assert.deepEqual(headings, expectedOrder.map(slug => casinos.find(c => c.slug === slug).name), `Live cards: ${route}`);
  } else {
    const record = casinos.find(c => c.reviewLink === base);
    if (record) {
      const copy = localizeCasino(record, localeFromPath(route));
      const escape = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#x27;');
      assert.ok(html.includes(escape(copy.intro.split('\n\n')[0])), `Live revised intro: ${route}`);
      assert.ok(html.includes(escape(copy.bonus)), `Live draft bonus: ${route}`);
    }
  }

  if (preview) assert.equal(response.headers.get('X-Robots-Tag'), 'noindex, nofollow');
}
const missing = await fetch(origin + '/this-page-does-not-exist', { headers });
assert.equal(missing.status, 404);
assert.ok((await missing.text()).includes('Página não encontrada'));
const missingEn = await fetch(origin + '/en/this-page-does-not-exist', { headers });
assert.equal(missingEn.status, 404);
assert.ok((await missingEn.text()).includes('Page not found'));
if (preview) assert.equal((await fetch(origin + '/en')).status, 401);
const robots = await fetch(origin + '/robots.txt', { headers });
assert.equal(robots.status, 200); assert.ok((await robots.text()).includes('Disallow: /'));
const sitemap = await fetch(origin + '/sitemap.xml', { headers });
assert.equal(sitemap.status, 200); assert.ok((await sitemap.text()).includes('<urlset'));
for (const asset of ['/favicon.png','/social-card.png','/social-card-en.png','/logo-icon.webp']) assert.equal((await fetch(origin+asset,{headers})).status,200,asset);
console.log(JSON.stringify({origin,preview,routes:routes.length,status:'passed',checks:['rendered content','canonical','noindex','404','robots','sitemap','images',...(preview?['preview authentication']:[])]},null,2));
