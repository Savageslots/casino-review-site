// Public access is opt-in. Set these bindings separately for production and preview.
export async function onRequest(context) {
  const { request, env } = context;
  let publicHost = false;
  try {
    publicHost = env.SITE_PUBLIC === 'true' && new URL(request.url).origin === new URL(env.VITE_SITE_URL).origin;
  } catch { /* Missing production origin keeps the deployment private. */ }

  if (!publicHost) {
    const headers = { 'X-Robots-Tag': 'noindex, nofollow', 'Cache-Control': 'no-store' };
    if (!env.STAGING_USER || !env.STAGING_PASSWORD) {
      return new Response('Preview access is not configured.', { status: 503, headers });
    }
    let valid = false;
    try {
      const match = /^Basic\s+(\S+)$/i.exec(request.headers.get('Authorization') || '');
      if (match) {
        const decoded = atob(match[1]);
        const separator = decoded.indexOf(':');
        valid = separator >= 0 && decoded.slice(0, separator) === env.STAGING_USER && decoded.slice(separator + 1) === env.STAGING_PASSWORD;
      }
    } catch { /* Malformed Basic credentials are unauthorized, never a server error. */ }
    if (!valid) return new Response('Unauthorized', { status: 401, headers: { ...headers, 'WWW-Authenticate': 'Basic realm="Preview", charset="UTF-8"' } });
  }

  const original = await context.next();
  const response = new Response(original.body, original);
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('X-Frame-Options', 'DENY');
  if (!publicHost) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
    response.headers.set('Cache-Control', 'private, no-store');
  }
  return response;
}
