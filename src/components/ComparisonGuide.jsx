import { Link } from 'react-router-dom';
import { useLocale } from '../i18n/useLocale';
import { comparisonGuides } from '../data/comparisonGuides';
export default function ComparisonGuide({ page }) {
  const { locale, path } = useLocale();
  const guide = comparisonGuides[page][locale];
  return <section className="comparison-guide" aria-labelledby={page + '-guide'} style={{ margin: '56px 0', maxWidth: 900, lineHeight: 1.75 }}>
    <h2 id={page + '-guide'}>{guide.title}</h2>
    {guide.sections.map(section => <section key={section.id} id={section.id} style={{ marginTop: 28 }}><h3>{section.title}</h3><p>{section.text}</p></section>)}
    <ul>{guide.links.map(([url, label]) => <li key={url}><Link to={path(url)}>{label}</Link></li>)}</ul>
  </section>;
}
