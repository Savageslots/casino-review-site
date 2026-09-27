import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { casinos } from '../src/data/casinosData.js';
import { localizeCasino } from '../src/i18n/translate.js';
test('Ginja content uses its own analysis without competitor references and preserves approved bonus terms', async () => {
  const ginja = casinos.find(c => c.slug === 'ginja');
  assert.equal(ginja.source, 'https://ginja-casino.com/');
  assert.equal(ginja.casinoLink, 'https://affgo.org/?serial=61369829&creative_id=7260&anid={subid}_{replace_webID}');
  for (const locale of ['pt', 'en']) {
    const review = localizeCasino(ginja, locale);
    assert.ok(!/znaki/i.test(JSON.stringify(review)));
    assert.equal(review.rating, 8);
    assert.equal(review.platformRating, 5);
    assert.equal(review.sources[0].score, 2.5);
    assert.equal(review.sources[0].count, 15);
    assert.ok(review.bonus.includes('125%'));
    assert.ok(!review.bonus.endsWith('*'));
    assert.equal(review.bonusFootnote, '');
    assert.ok(review.details.some(f => /30x/.test(f.value)));
    assert.match(review.minDeposit, /€10|10 €/);
    const html = await readFile(`dist${locale === 'en' ? '/en' : ''}/casinos/ginja.html`, 'utf8');
    assert.ok(!/znaki/i.test(html));
    assert.ok(html.includes('https://pt.trustpilot.com/review/ginja-casino.com'));
    assert.ok(html.includes('1 500') || html.includes('1,500'));
  }
});
