import { useLocale } from '../i18n/useLocale';
import { Link } from 'react-router-dom';
export default function NotFound() {
  const { t, path, locale, languageTag } = useLocale();
  return <main style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 20px' }}><h1>{t("Página não encontrada")}</h1><p>{t("A página pode ter sido removida ou o endereço estar incorreto.")}</p><Link to={path("/casinos")}>{t("Consultar análises de casinos")}</Link></main>;
}
