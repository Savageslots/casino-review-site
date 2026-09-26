import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
const paths = ['/', '/casinos', '/bonuses', ...['sg-casino', 'betmatch', 'wildz-new', 'royalsea', 'kingmaker', 'boomerangbet'].map(slug => `/casinos/${slug}`)];
const titles = new Set();
for (const path of paths) test(`prerendered metadata, content and assets: ${path}`, async () => {
  const html = await readFile(path === '/' ? 'dist/index.html' : `dist${path}.html`, 'utf8');
  assert.equal((html.match(/<title[ >]/g) || []).length, 1);
  const title = html.match(/<title[^>]*>(.*?)<\/title>/)[1];
  assert.ok(!titles.has(title)); titles.add(title);
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1);
  assert.ok(html.includes(`href="https://casinoproscons.com${path}"`));
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1);
  assert.ok(html.includes('property="og:image"'));
  assert.ok(html.includes('name="twitter:card"'));
  assert.ok(!html.includes('yourdomain.com'));
  const schema = JSON.parse(html.match(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/s)[1]);
  assert.equal(schema['@context'], 'https://schema.org');
  for (const [, src] of html.matchAll(/<img[^>]+src="([^"]+)"/g)) await access(`dist${src}`);
});
test('unknown routes have a noindex 404 document', async () => {
  const html = await readFile('dist/404.html', 'utf8');
  assert.ok(html.includes('Page not found'));
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
