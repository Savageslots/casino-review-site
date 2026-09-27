import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { casinos } from '../src/data/casinosData.js';
import { localizeCasino } from '../src/i18n/translate.js';
import { localeFromPath, localePath } from '../src/i18n/routing.js';
import { ui } from '../src/i18n/ui.js';
test('locale paths preserve equivalent pages and respect prefix boundaries', () => {
  assert.equal(localePath('/', 'en'), '/en');
  assert.equal(localePath('/en/casinos/slota/', 'pt'), '/casinos/slota');
  assert.equal(localePath('/en/casinos/slota', 'en'), '/en/casinos/slota');
  assert.equal(localeFromPath('/enough'), 'pt');
});
test('English reviews translate every content block and preserve shared evidence', async () => {
  for (const c of casinos) {
    const en = localizeCasino(c, 'en');
    for (const key of ['description','intro','games','bonusNotes','strengths','limitations','pros','cons','praised','complaints','verdict','bonus','hook']) {
      assert.notDeepEqual(en[key], c[key], `${c.slug}: untranslated ${key}`);
      if (Array.isArray(c[key])) assert.equal(en[key].length, c[key].length);
    }
    assert.equal(en.rating, c.rating);
    assert.equal(en.casinoLink, c.casinoLink);
    assert.deepEqual(en.sources.map(({url,score,count,included}) => ({url,score,count,included})), c.sources.map(({url,score,count,included}) => ({url,score,count,included})));
    const html = await readFile(`dist/en${c.reviewLink}.html`, 'utf8');
    for (const label of ['Key facts','Pros','Cons','Games and platform','Bonuses and terms','Street Voice','Our verdict']) assert.ok(html.includes(label));
    for (const [pt,enText] of Object.entries(ui)) if (pt !== enText && pt.length > 30) assert.ok(!html.includes(pt), `${c.slug}: Portuguese UI leaked`);
    assert.ok(!html.includes(c.intro));
    for (const intro of en.intro.split('\n\n')) assert.ok(html.includes(intro.replaceAll('&', '&amp;').replaceAll("'", '&#x27;')) || html.includes(intro));
  }
});
test('English 404 is translated, noncanonical and excluded from alternates', async () => {
  const html = await readFile('dist/en/404.html','utf8');
  assert.ok(html.includes('lang="en"'));
  assert.ok(html.includes('Page not found'));
  assert.ok(html.includes('content="noindex, nofollow"'));
  assert.ok(!html.includes('rel="canonical"'));
  assert.ok(!html.includes('rel="alternate"'));
});
