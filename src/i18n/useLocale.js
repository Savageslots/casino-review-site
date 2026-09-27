import { useLocation } from 'react-router-dom';
import { localeFromPath, localePath, basePath, languageTags } from './routing.js';
import { translate } from './translate.js';
export function useLocale() {
  const { pathname } = useLocation();
  const locale = localeFromPath(pathname);
  return { locale, languageTag: languageTags[locale], base: basePath(pathname), t: text => translate(text, locale), path: value => localePath(value, locale) };
}
