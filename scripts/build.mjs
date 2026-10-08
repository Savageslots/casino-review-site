import { build } from 'vite';
import { createHash } from 'node:crypto';
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { resolve } from 'node:path';

await build();
const serverDir = '.prerender';
try {
  await build({ build: { ssr: 'src/entry-server.jsx', outDir: serverDir }, ssr: { noExternal: ['react-helmet-async'] } });
  const { render, pages, siteUrl, indexable } = await import(`${resolve(serverDir)}/entry-server.js`);
  const origin = new URL(siteUrl);
  if (origin.origin !== siteUrl || origin.username || origin.password) throw new Error('VITE_SITE_URL must be an origin, without a path or credentials.');
  if (indexable && (origin.protocol !== 'https:' || origin.hostname === 'localhost' || origin.hostname.endsWith('.pages.dev'))) throw new Error('Indexable builds require your production HTTPS domain.');
  const template = await readFile('dist/index.html', 'utf8');
  for (const path of [...Object.keys(pages), '/404', '/en/404']) {
    const { html, head, htmlAttributes } = render(path);
    const destination = path === '/' ? 'dist/index.html' : path === '/404' ? 'dist/404.html' : `dist${path}.html`;
    await mkdir(resolve(destination, '..'), { recursive: true });
    await writeFile(destination, template.replace(/<html[^>]*>/, () => `<html ${htmlAttributes}>`).replace('<!--app-head-->', () => head).replace('<!--app-html-->', () => html));
  }
  const pageHashes = {};
  for (const path of Object.keys(pages)) {
    const file = path === '/' ? 'dist/index.html' : `dist${path}.html`;
    pageHashes[path] = createHash('sha256').update(await readFile(file)).digest('hex');
  }
  await writeFile('dist/search-manifest.json', JSON.stringify({origin:siteUrl,indexable,pages:pageHashes}));
  const escapeXml = value => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  const urls = indexable ? Object.keys(pages).map(path => `<url><loc>${escapeXml(siteUrl + path)}</loc></url>`).join('\n') : '';
  await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
  await writeFile('dist/robots.txt', indexable ? `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n` : 'User-agent: *\nDisallow: /\n');
  console.log(`Prerendered ${Object.keys(pages).length} pages and 404. Indexing: ${indexable ? 'enabled' : 'disabled (preview)'}.`);
} finally {
  await rm(serverDir, { recursive: true, force: true });
}
