import lighthouse from 'lighthouse';
import { launch } from 'chrome-launcher';
import { mkdir, writeFile } from 'node:fs/promises';
const chrome = await launch({ chromeFlags: ['--headless', '--no-sandbox'] });
await mkdir('artifacts', { recursive: true });
try {
  const results = [];
  for (const path of ['/', '/casinos/ginja', '/en/casinos/dbbet']) {
    const result = await lighthouse(`http://127.0.0.1:4173${path}`, { port: chrome.port, output: ['json', 'html'], onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'] });
    const label = path === '/' ? 'home' : path.slice(1).replaceAll('/', '-');
    await writeFile(`artifacts/lighthouse-${label}.json`, result.report[0]);
    await writeFile(`artifacts/lighthouse-${label}.html`, result.report[1]);
    results.push({ path, metrics: Object.fromEntries(['first-contentful-paint','largest-contentful-paint','total-blocking-time','cumulative-layout-shift','speed-index'].map(id => [id, result.lhr.audits[id].numericValue])), scores: Object.fromEntries(Object.entries(result.lhr.categories).map(([k,v]) => [k, Math.round(v.score * 100)])), failures: Object.values(result.lhr.audits).filter(a => a.score !== null && a.score < 1 && a.scoreDisplayMode !== 'informative').map(a => ({ id: a.id, title: a.title, value: a.displayValue })) });
  }
  await writeFile('artifacts/lighthouse-summary.json', JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results, null, 2));
} finally { await chrome.kill(); }
