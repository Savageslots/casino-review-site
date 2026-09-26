import test from 'node:test';
import assert from 'node:assert/strict';
import { onRequest } from '../functions/_middleware.js';
const env = { VITE_SITE_URL: 'https://casinoproscons.com', STAGING_USER: 'reviewer', STAGING_PASSWORD: 'test:password' };
const request = (overrides = {}, authorization) => onRequest({ env: { ...env, ...overrides }, request: new Request('https://casinoproscons.com/casinos', { headers: authorization ? { Authorization: authorization } : {} }), next: () => new Response('content') });
test('preview rejects absent, malformed and wrong credentials', async () => {
  for (const value of [undefined, 'Basic %%%', 'Bearer abc', `Basic ${btoa('reviewer:wrong')}`]) {
    const response = await request({}, value);
    assert.equal(response.status, 401);
    assert.equal(response.headers.get('Cache-Control'), 'no-store');
  }
});
test('preview permits configured credentials with colon in password but stays noindex', async () => {
  const response = await request({}, `Basic ${btoa('reviewer:test:password')}`);
  assert.equal(response.status, 200);
  assert.equal(await response.text(), 'content');
  assert.equal(response.headers.get('X-Robots-Tag'), 'noindex, nofollow');
  assert.equal(response.headers.get('Cache-Control'), 'private, no-store');
});
test('missing preview secret fails closed', async () => {
  assert.equal((await request({ STAGING_PASSWORD: '' })).status, 503);
});
test('public production requires explicit flag and matching origin', async () => {
  const response = await request({ SITE_PUBLIC: 'true' });
  assert.equal(response.status, 200);
  assert.equal(await response.text(), 'content');
  assert.equal(response.headers.get('X-Robots-Tag'), null);
  assert.equal((await request({ SITE_PUBLIC: 'true', VITE_SITE_URL: 'https://other.example' })).status, 401);
  assert.equal((await request({ SITE_PUBLIC: 'true', VITE_SITE_URL: '' })).status, 401);
});

test('middleware preserves downstream 404 status, body and headers', async () => {
  const response = await onRequest({ env: { ...env, SITE_PUBLIC: 'true' }, request: new Request(env.VITE_SITE_URL + '/missing'), next: () => new Response('not found', { status: 404, headers: { 'Content-Type': 'text/html', ETag: 'test' } }) });
  assert.equal(response.status, 404);
  assert.equal(await response.text(), 'not found');
  assert.equal(response.headers.get('Content-Type'), 'text/html');
  assert.equal(response.headers.get('ETag'), 'test');
});
