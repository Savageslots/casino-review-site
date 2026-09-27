import { locales, localePath, localeFromPath, languageTags } from '../src/i18n/routing.js';
import { chromium } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const baseRoutes = ['/', '/casinos', '/bonuses', ...['slota','leon','ginja','fairpari','dbbet','spinzen'].map(s => `/casinos/${s}`)];
const routes = locales.flatMap(locale => baseRoutes.map(route => localePath(route, locale)));
await mkdir('artifacts', { recursive: true });
const results = [];
try {
for (const width of [1440, 768, 390, 320]) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
  for (const route of routes) {
    await page.goto(`http://127.0.0.1:4173${route}`);
    await page.locator('h1').waitFor();
    await page.evaluate(() => document.fonts.ready);
    await page.evaluate(async () => { await Promise.all([...document.images].map(img => { img.loading = 'eager'; return img.decode().catch(() => {}); })); });
    const info = await page.evaluate(() => ({
      title: document.title,
      language: document.documentElement.lang,
      brokenImages: [...document.images].filter(img => img.complete && img.naturalWidth === 0).map(img => img.src),
      overflow: [...document.querySelectorAll('body *')].filter(el => {const r = el.getBoundingClientRect(); return r.width && (r.right > innerWidth + 1 || r.left < -1);}).map(el => ({tag: el.tagName, class: el.className, text: el.textContent.slice(0,60)})).slice(0,12),
      canonical: document.querySelector('link[rel=canonical]')?.href,
    }));
    if (info.language !== languageTags[localeFromPath(route)]) throw new Error(`Wrong language on ${route}`);
    if (info.canonical !== `https://casinoproscons.com${route}`) throw new Error(`Wrong canonical for ${route}`);
    if (route === '/casinos' || route === '/en/casinos') {
      const toggle = page.getByRole('button', { name: localeFromPath(route) === 'en' ? '#1 Show details for Ginja' : '#1 Ver detalhes de Ginja' });
      await toggle.focus(); await page.keyboard.press('Enter');
      if (await toggle.getAttribute('aria-expanded') !== 'true') throw new Error('Keyboard accordion failed');
      const panel = page.locator(`[id="${await toggle.getAttribute('aria-controls')}"]`);
      if (!(await panel.isVisible())) throw new Error('Accordion panel not visible');
      await page.keyboard.press('Space');
      if (await toggle.getAttribute('aria-expanded') !== 'false') throw new Error('Keyboard accordion close failed');
    }
    results.push({ width, route, ...info });
    if ((width === 1440 || width === 390) && (route === '/' || route === '/casinos/slota')) await page.screenshot({ path: `artifacts/${width}-${route === '/' ? 'home' : 'slota'}.png`, fullPage: true });
  }
  await page.goto('http://127.0.0.1:4173/');
  await page.getByRole('link', { name: 'Bónus', exact: true }).click();
  await page.waitForFunction(() => document.title.includes('Bónus de casino: comparação e condições'));
  if (await page.locator('link[rel=canonical]').count() !== 1) throw new Error('Duplicate canonical after navigation');
  for (const base of baseRoutes) {
    await page.goto(`http://127.0.0.1:4173${base}`);
    await page.getByRole('link', { name: 'EN — English', exact: true }).click();
    await page.waitForURL(`**${localePath(base, 'en')}`);
    await page.waitForFunction(() => document.documentElement.lang === 'en');
    if (await page.locator('link[rel=canonical]').getAttribute('href') !== `https://casinoproscons.com${localePath(base, 'en')}`) throw new Error('Switch canonical');
    if (await page.locator('link[rel=alternate]').count() !== 3) throw new Error('Switch alternates');
    await page.reload();
    await page.waitForFunction(() => document.documentElement.lang === 'en');
    const internalLinks = await page.locator('a[href^="/"]').evaluateAll(links => links.filter(a => !a.closest('.language-switch')).map(a => a.getAttribute('href')));
    if (internalLinks.some(href => !href.startsWith('/en'))) throw new Error(`English links lose locale: ${base}`);
    await page.getByRole('link', { name: 'PT — Português', exact: true }).click();
    await page.waitForFunction(() => document.documentElement.lang === 'pt-PT');
    if (new URL(page.url()).pathname !== base) throw new Error('Return to Portuguese failed');
  }
  await page.goto('http://127.0.0.1:4173/en');
  await page.getByRole('link', { name: 'Bonuses', exact: true }).click();
  await page.waitForURL('**/en/bonuses');
  await page.waitForFunction(() => document.title.includes('Casino bonuses: comparison and terms'));
  await page.screenshot({ path: `artifacts/${width}-en-header.png` });
  if (errors.length) throw new Error(`Browser errors: ${errors.join('\n')}`);
  await page.close();
}
await writeFile('artifacts/browser-results.json', JSON.stringify(results, null, 2));
const failures = results.filter(r => r.brokenImages.length || r.overflow.length);
console.log(JSON.stringify({ checked: results.length, failures }, null, 2));
if (failures.length) process.exitCode = 1;
} finally { await browser.close(); }
