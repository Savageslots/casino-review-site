import { common, casinoCopy } from './en.js';
import { ui } from './ui.js';
import { localePath } from './routing.js';
export function translate(text, locale) { return locale === 'en' ? (ui[text] ?? common[text] ?? text) : text; }
function translateFields(value) {
  if (typeof value === 'string') return translate(value, 'en');
  if (Array.isArray(value)) return value.map(translateFields);
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, translateFields(item)]));
  return value;
}
export function localizeCasino(casino, locale) {
  if (locale !== 'en') return casino;
  if (!casinoCopy[casino.slug]) throw new Error(`Missing English review: ${casino.slug}`);
  return { ...translateFields({ ...casino, ...casinoCopy[casino.slug] }), reviewLink: localePath(casino.reviewLink, locale) };
}
