import test from 'node:test';
import assert from 'node:assert/strict';
import { casinos, platformMean } from '../src/data/casinosData.js';
import { readFile, access } from 'node:fs/promises';
test('Portugal catalog keeps approved selection, empty affiliate fields and attributable scores', () => {
  assert.deepEqual(casinos.map(c => c.slug), ['slota', 'leon', 'ginja', 'fairpari', 'dbbet', 'spinzen']);
  for (const c of casinos) {
    assert.equal(c.casinoLink, '');
    assert.ok(c.sources.length);
    for (const s of c.sources) {
      assert.equal(new URL(s.url).protocol, 'https:');
      assert.ok(Number.isInteger(s.count) && s.count > 0);
      if (s.included) assert.ok(s.score >= 0 && s.score <= s.scale);
    }
  }
});
test('normalization gives equal platform weight and excludes unconfirmed or editorial scores', () => {
  assert.equal(platformMean([{ score: 2, scale: 5, count: 1000, included: true }, { score: 8, scale: 10, count: 2, included: true }, { score: 10, scale: 10, included: false }]), 6);
  assert.equal(platformMean([]), null);
  assert.equal(casinos.find(c => c.slug === 'slota').rating, 6.6);
  assert.equal(casinos.find(c => c.slug === 'dbbet').rating, null);
});
test('all review blocks, language and source links survive prerendering', async () => {
  for (const c of casinos) {
    const html = await readFile(`dist${c.reviewLink}.html`, 'utf8');
    assert.ok(html.includes('lang="pt-PT"'));
    for (const block of ['Informações essenciais','Prós','Contras','Jogos e plataforma','Bónus e condições','Street Voice','O nosso veredicto']) assert.ok(html.includes(block), `${c.slug}: ${block}`);
    for (const s of c.sources) assert.ok(html.includes(s.url));
    assert.ok(!html.includes('AggregateRating'));
    assert.ok(!html.includes('Read Review'));
  }
  for (const slug of ['sg-casino','betmatch','wildz-new','royalsea','kingmaker','boomerangbet']) await assert.rejects(access(`dist/casinos/${slug}.html`));
});
