import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
import { writeFile } from 'node:fs/promises';
const browser = await chromium.launch({ channel: 'chrome' });
const results = [];
try {
  for (const path of ['/', '/casinos', '/bonuses', '/casinos/sg-casino', '/casinos/royalsea']) {
    const styles = [];
    for (const port of [5175, 4173]) {
      const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
      await page.goto(`http://127.0.0.1:${port}${path}`);
      await page.locator('h1').waitFor();
      styles.push(await page.evaluate(() => {
        const elements = [document.querySelector('body header'), document.querySelector('body header > div'), document.querySelector('h1'), document.querySelector('.casino-card') || document.querySelector('section')];
        return elements.map(el => { const s = getComputedStyle(el); return Object.fromEntries(['display','position','maxWidth','padding','gap','gridTemplateColumns','borderRadius','fontSize','lineHeight'].map(k => [k,k === "gridTemplateColumns" ? el.style.gridTemplateColumns : s[k]])); });
      }));
      await page.close();
    }
    assert.deepEqual(styles[1], styles[0], `Desktop styles changed on ${path}`);
    results.push({ path, desktopStylesMatch: true });
  }
  await writeFile('artifacts/desktop-results.json', JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results, null, 2));
} finally { await browser.close(); }
