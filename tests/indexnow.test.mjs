import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';

test('IndexNow deployment manifest matches rendered pages and public ownership file', async () => {
 const manifest=JSON.parse(await readFile('dist/search-manifest.json','utf8'));
 const {key}=JSON.parse(await readFile('scripts/indexnow-config.json','utf8'));
 assert.match(key,/^[a-f0-9]{32}$/);
 assert.equal((await readFile(`dist/${key}.txt`,'utf8')).trim(),key);
 for(const [path,hash] of Object.entries(manifest.pages)) {
  const file=path==='/'?'dist/index.html':`dist${path}.html`;
  assert.equal(createHash('sha256').update(await readFile(file)).digest('hex'),hash);
 }
 const dry=spawnSync(process.execPath,['scripts/indexnow.mjs'],{encoding:'utf8'});
 if(manifest.indexable) {
  assert.equal(dry.status,0,dry.stderr);
  const output=JSON.parse(dry.stdout);
  assert.equal(output.count,Object.keys(manifest.pages).length);
  assert.ok(output.urlList.every(url=>url.startsWith('https://casinoproscons.com/')));
  assert.ok(!output.urlList.some(url=>url.includes('404') || url.includes('search-manifest') || url.endsWith('.txt')));
 } else {
  assert.notEqual(dry.status,0);
  assert.match(dry.stderr,/Only a public production build/);
 }
});
