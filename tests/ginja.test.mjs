import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { casinos } from '../src/data/casinosData.js';
import { localizeCasino } from '../src/i18n/translate.js';
test('Ginja content uses its own analysis without competitor references and labels draft bonus terms', async () => {
  const ginja = casinos.find(c => c.slug === 'ginja');
  assert.equal(ginja.source, 'https://ginja-casino.com/');
  assert.equal(ginja.casinoLink, '');
  for (const locale of ['pt', 'en']) {
    const review = localizeCasino(ginja, locale);
    assert.ok(!/znaki/i.test(JSON.stringify(review)));
    assert.equal(review.rating, 5);
    assert.equal(review.sources[0].score, 2.5);
    assert.equal(review.sources[0].count, 15);
    assert.ok(review.bonus.includes('125%'));
    assert.ok(review.bonus.endsWith('*'));
    assert.match(review.bonusFootnote, /ainda não confirmadas|not yet confirmed/);
    assert.ok(review.details.some(f => /30x/.test(f.value)));
    assert.match(review.minDeposit, /€10|10 €/);
    const html = await readFile(`dist${locale === 'en' ? '/en' : ''}/casinos/ginja.html`, 'utf8');
    assert.ok(!/znaki/i.test(html));
    assert.ok(html.includes('https://pt.trustpilot.com/review/ginja-casino.com'));
    assert.ok(html.includes('1 500') || html.includes('1,500'));
  }
});
test('all other casino records and English editorial copy remain unchanged', async () => {
  const previousData = execFileSync('git', ['show', '9c46d63:src/data/casinosData.js'], {encoding:'utf8'});
  const previousEn = execFileSync('git', ['show', '9c46d63:src/i18n/en.js'], {encoding:'utf8'});
  const {casinos: before} = await import(`data:text/javascript;base64,${Buffer.from(previousData).toString('base64')}`);
  const {casinoCopy} = await import(`data:text/javascript;base64,${Buffer.from(previousEn).toString('base64')}`);
  for(const c of casinos.filter(c=>c.slug !== 'ginja')) {
    assert.deepEqual(c, before.find(b=>b.slug===c.slug));
    const translated=localizeCasino(c,'en');
    for(const [key,value] of Object.entries(casinoCopy[c.slug])) assert.deepEqual(translated[key],value);
  }
});
