import { locales, localePath, localeFromPath, languageTags } from '../src/i18n/routing.js';
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
const baseRoutes = ['/', '/casinos', '/bonuses', '/calculadora-rollover', '/metodos-de-pagamento', '/levantamentos-rapidos', '/rodadas-gratis', ...['slota', 'leon', 'ginja', 'fairpari', 'dbbet', 'spinzen'].map(slug => `/casinos/${slug}`)];
const paths = locales.flatMap(locale => baseRoutes.map(route => localePath(route, locale)));
const titles = new Set();
for (const path of paths) test(`prerendered metadata, content and assets: ${path}`, async () => {
  const html = await readFile(path === '/' ? 'dist/index.html' : `dist${path}.html`, 'utf8');
  assert.equal((html.match(/<title[ >]/g) || []).length, 1);
  const title = html.match(/<title[^>]*>(.*?)<\/title>/)[1];
  assert.ok(!titles.has(title)); titles.add(title);
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1);
  assert.ok(html.includes(`href="https://casinoproscons.com${path}"`));
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1);
  const locale = localeFromPath(path);
  assert.ok(html.includes(`lang="${languageTags[locale]}"`));
  for (const [language, target] of [['pt-PT', 'pt'], ['en', 'en'], ['x-default', 'pt']]) {
    assert.ok(html.includes(`hrefLang="${language}" href="https://casinoproscons.com${localePath(path, target)}"`));
  }
  assert.ok(html.includes('property="og:image"'));
  assert.ok(html.includes('name="twitter:card"'));
  assert.ok(!html.includes('yourdomain.com'));
  const schema = JSON.parse(html.match(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/s)[1]);
  assert.equal(schema['@context'], 'https://schema.org');
  for (const [, src] of html.matchAll(/<img[^>]+src="([^"]+)"/g)) await access(`dist${src}`);
});
test('unknown routes have a noindex 404 document', async () => {
  const html = await readFile('dist/404.html', 'utf8');
  assert.ok(html.includes('Página não encontrada'));
  assert.ok(html.includes('content="noindex, nofollow"'));
  assert.ok(!html.includes('rel="canonical"'));
});
test('robots and sitemap match indexing mode', async () => {
  const home = await readFile('dist/index.html', 'utf8');
  const robots = await readFile('dist/robots.txt', 'utf8');
  const sitemap = await readFile('dist/sitemap.xml', 'utf8');
  if (home.includes('content="index, follow"')) {
    assert.ok(robots.includes('Allow: /'));
    assert.equal((sitemap.match(/<loc>/g) || []).length, paths.length);
  } else {
    assert.ok(robots.includes('Disallow: /'));
    assert.ok(!sitemap.includes('<loc>'));
  }
});
