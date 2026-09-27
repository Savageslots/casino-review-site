export const locales = ['pt', 'en'];
export const languageTags = { pt: 'pt-PT', en: 'en' };
export function localeFromPath(pathname) { return /^\/en(?:\/|$)/.test(pathname) ? 'en' : 'pt'; }
export function basePath(pathname) {
  const path = pathname.replace(/^\/en(?=\/|$)/, '').replace(/\/+$/, '');
  return path || '/';
}
export function localePath(pathname, locale) {
  const path = basePath(pathname);
  return locale === 'en' ? `/en${path === '/' ? '' : path}` : path;
}
