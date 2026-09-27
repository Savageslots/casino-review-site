import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {casinos} from '../src/data/casinosData.js';
test('review pages carry one freshness notice, dated authorship and qualified affiliate links',async()=>{
 for(const prefix of ['', '/en'])for(const c of casinos){
  const html=await readFile(`dist${prefix}/casinos/${c.slug}.html`,'utf8');
  assert.ok(!/rascunho|\bdraft\b|not yet confirmed|awaiting verification|por confirmar|por verificar|verification.*not yet been completed/i.test(html));
  const notice=prefix?'Information current at the review date':'Informação atualizada à data da análise';
  assert.equal(html.split(notice).length-1,1);
  assert.ok(html.includes('dateTime="2026-09-27"'));
  const graph=JSON.parse(html.match(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/s)[1])['@graph'];
  const article=graph.find(n=>n['@type']==='Article'); assert.equal(article.dateModified,'2026-09-27'); assert.equal(article.author.name,'CasinoProsCons');
  const affiliate=[...html.matchAll(/<a[^>]+href="(https:\/\/affgo.org[^\"]+)"[^>]*>/g)];
  assert.equal(affiliate.length,c.slug==='ginja'?1:0);
  for(const [tag]of affiliate)assert.match(tag,/rel="sponsored nofollow noopener noreferrer"/);
  if(c.slug==='ginja') {assert.ok(html.includes('30 €')||html.includes('€30'));assert.ok(html.includes('5 minutos')||html.includes('5 minutes'));}
 }
});
