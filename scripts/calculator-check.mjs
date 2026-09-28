import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
const browser = await chromium.launch({ channel: 'chrome', headless: true });
try {
 const page = await browser.newPage();
 await page.goto('http://127.0.0.1:4173/calculadora-rollover');
 const amount = async id => Number((await page.getByTestId(id).textContent()).replace(/[^\d,-]/g,'').replace(',','.'));
 assert.equal(await amount('turnover'),3500);
 assert.equal(await amount('loss'),140);
 assert.equal(await amount('balance'),60);
 await page.locator('input[value=lucky]').check();
 assert.equal(await amount('turnover'),3500);
 assert.equal(await amount('balance'),270);
 assert.equal(await amount('loss'),70);
 await page.locator('input[value=unlucky]').check();
 assert.equal(await amount('balance'),-150);
 await page.locator('input[value=average]').check();
 assert.equal(await amount('balance'),60);
 await page.locator('#deposit').fill('12,50');
 assert.equal(await amount('turnover'),437.5);
 await page.locator('#basis').selectOption('both');
 assert.equal(await amount('turnover'),875);
 await page.locator('#contribution').fill('20');
 assert.equal(await amount('turnover'),4375);
 await page.locator('#contribution').fill('0');
 assert.match(await page.getByRole('alert').textContent(), /0%/);
 assert.equal(await page.getByTestId('turnover').count(),0);
 await page.locator('#contribution').fill('100');
 await page.locator('#rtp').fill('101');
 assert.equal(await page.getByRole('alert').count(),1);
 await page.locator('#rtp').fill('96');
 await page.locator('#deposit').fill('100');
 await page.locator('#basis').selectOption('bonus');
 for(const width of [1440,390]){
  await page.setViewportSize({width,height:1000});
  await page.screenshot({path:`artifacts/calculator-${width}.png`,fullPage:false});
 }
 await page.getByRole('link',{name:'EN — English',exact:true}).click();
 await page.waitForURL('**/en/calculadora-rollover');
 assert.match(await page.locator('h1').textContent(),/Wagering calculator/);
 console.log('Calculator interactions passed: decimal comma, bases, contribution, invalid RTP, locale switch.');
} finally {await browser.close();}
