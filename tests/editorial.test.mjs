import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { casinos } from '../src/data/casinosData.js';
import { localizeCasino } from '../src/i18n/translate.js';
import { casinoRanking, homeRanking, bonusRanking, rankedCasinos } from '../src/data/rankings.js';
const overall=['ginja','slota','fairpari','leon','dbbet','spinzen'];
const bonuses=['leon','fairpari','ginja','dbbet','spinzen','slota'];
test('general and bonus rankings have separate approved orders without changing source scores',()=>{
 assert.deepEqual(casinoRanking,overall); assert.deepEqual(homeRanking,overall); assert.deepEqual(bonusRanking,bonuses);
 assert.deepEqual(rankedCasinos(overall).map(c=>c.rating),[8,7.6,7.4,7,6.8,5.5]);
 assert.deepEqual(rankedCasinos(overall).map(c=>c.platformRating),[5,6.6,6.4,6,null,4.5]);
 for(const ranking of [overall,bonuses])assert.equal(new Set(ranking).size,casinos.length);
});
test('rendered rankings and JSON-LD agree in both languages',async()=>{
 for(const locale of ['','/en'])for(const [path,order]of [['',overall],['/casinos',overall],['/bonuses',bonuses]]){
  const html=await readFile(`dist${(locale + path) || '/index'}.html`,'utf8');
  const data=JSON.parse(html.match(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/s)[1]);
  const list=data['@graph'].find(x=>x['@type']==='ItemList');
  assert.deepEqual(list.itemListElement.map(x=>x.url.split('/').pop()),order);
  const headings=[...html.matchAll(/<h2[^>]*>(Slota|Leon|Ginja|FairPari|DBbet|Spinzen)<\/h2>/g)].map(m=>m[1]);
  assert.deepEqual(headings,rankedCasinos(order).map(c=>c.name));
  assert.ok(!/znaki/i.test(html));
 }
});
test('five edited reviews retain supplied terms, source-based feedback and complete translations',async()=>{
 const terms={slota:['575%','5 750','30x','45x'],leon:['3 000','100','35x','30x','40x'],fairpari:['1 500','150','35x'],dbbet:['200%','1 500','35x','30x'],spinzen:['4 250','400–550','45x']};
 for(const [slug,values]of Object.entries(terms)){
  const c=casinos.find(c=>c.slug===slug);const ptFields=c.bonus+JSON.stringify(c.details);
  for(const value of values)assert.ok(ptFields.includes(value),`${slug}: ${value}`);
  assert.equal(c.casinoLink,'');
  for(const lang of ['pt','en']){
   const r=localizeCasino(c,lang);assert.ok(!/znaki/i.test(JSON.stringify(r)));
   assert.equal(r.bonusFootnote, '');
   for(const field of ['intro','strengths','games','bonusNotes','limitations','verdict'])assert.ok(r[field].length>150,`${slug} ${field}`);
   const html=await readFile(`dist${lang==='en'?'/en':''}/casinos/${slug}.html`,'utf8');
   assert.ok(!/znaki/i.test(html));assert.ok(!html.includes('AggregateRating'));
   if(lang==='en')for(const phrase of ['rascunho','apostas desportivas','rodadas grátis','Condições do'])assert.ok(!html.includes(phrase),`${slug}: Portuguese leak`);
  }
 }
});
