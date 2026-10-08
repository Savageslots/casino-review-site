import { readFile } from 'node:fs/promises';
import { setTimeout as delay } from 'node:timers/promises';

const origin = 'https://casinoproscons.com';
const manifest = JSON.parse(await readFile('dist/search-manifest.json', 'utf8'));
const { key } = JSON.parse(await readFile('scripts/indexnow-config.json', 'utf8'));
if (manifest.origin !== origin || !manifest.indexable || !/^[a-f0-9]{32}$/.test(key)) throw new Error('Only a public production build can be submitted.');
const urlList = Object.keys(manifest.pages).map(path => {
  const url = new URL(path, origin);
  if (url.origin !== origin || url.search || url.hash) throw new Error('Invalid canonical URL');
  return url.href;
});
if (!urlList.length || urlList.length > 10000) throw new Error('Invalid URL count');
if (!process.argv.includes('--submit')) {
  console.log(JSON.stringify({mode:'dry-run', count:urlList.length, urlList}, null, 2));
  process.exit(0);
}
const waitSeconds = Number(process.env.INDEXNOW_WAIT_SECONDS || 0);
if (!Number.isFinite(waitSeconds) || waitSeconds < 0 || waitSeconds > 900) throw new Error('Invalid deployment wait');
const deadline = Date.now() + waitSeconds * 1000;
const keyLocation = `${origin}/${key}.txt`;
async function get(url) {
  const response = await fetch(url, {signal:AbortSignal.timeout(15000), redirect:'error', cache:'no-store'});
  if (response.status !== 200) throw new Error(`Public deployment returned HTTP ${response.status}`);
  return response;
}
for (;;) {
  try {
    const live = await (await get(`${origin}/search-manifest.json`)).json();
    if (JSON.stringify(live) !== JSON.stringify(manifest)) throw new Error('Waiting for matching production build');
    if ((await (await get(keyLocation)).text()).trim() !== key) throw new Error('Verification file not yet published');
    const home = await get(origin + '/');
    if (/noindex/i.test(home.headers.get('x-robots-tag') || '') || !/content="index, follow"/.test(await home.text())) throw new Error('Production indexing not enabled');
    break;
  } catch (error) {
    if (Date.now() >= deadline) throw error;
    console.log('Production not ready; checking again in 15 seconds.');
    await delay(15000);
  }
}
const response = await fetch('https://api.indexnow.org/indexnow', {
  method:'POST', headers:{'Content-Type':'application/json; charset=utf-8'},
  body:JSON.stringify({host:new URL(origin).hostname,key,keyLocation,urlList}),
  signal:AbortSignal.timeout(30000), redirect:'error'
});
if (![200,202].includes(response.status)) throw new Error(`IndexNow rejected submission: HTTP ${response.status}`);
console.log(JSON.stringify({status:response.status,submitted:urlList.length,message:response.status===200?'URLs received; indexing is not guaranteed.':'URLs received; key validation pending.'}));
