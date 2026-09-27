import { pages } from '../data/site';
import { localePath } from '../i18n/routing';
import { useLocale } from '../i18n/useLocale';
import { useLocation, Link, NavLink } from "react-router-dom";

function Header() {
  const { t, path, locale, languageTag } = useLocale();
  const { pathname, search, hash } = useLocation();
  const switchPath = pages[pathname.replace(/\/+$/, '') || '/'] ? pathname : '/';
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <div className="site-header-inner"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "16px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LOGO */}
        <NavLink
          to={path("/")}
          style={{
            fontSize: 22,
            fontWeight: 700,
            textDecoration: "none",
            color: "#000000",
            cursor: "pointer",
          }}
        >{" "}{t("CasinoProsCons")}{" "}</NavLink>

        {/* NAV */}
        <nav aria-label={t("Navegação principal")} style={{ display: "flex", gap: "24px" }}>
          <NavLink to={path("/casinos")} style={navStyle}>{" "}{t("Casinos")}{" "}</NavLink>
          <NavLink to={path("/bonuses")} style={navStyle}>{" "}{t("Bónus")}{" "}</NavLink>
        </nav>
        <nav className="language-switch" aria-label={t("Idioma")}>
          {['pt', 'en'].map(language => <Link key={language}
            to={`${localePath(switchPath, language)}${search}${hash}`}
            lang={language === 'pt' ? 'pt-PT' : 'en'}
            hrefLang={language === 'pt' ? 'pt-PT' : 'en'}
            aria-current={locale === language ? 'true' : undefined}
            aria-label={language === 'pt' ? 'Português' : 'English'}
            className={locale === language ? 'selected' : ''}
          >{language.toUpperCase()}</Link>)}
        </nav>
      </div>
    </header>
  );
}

const navStyle = ({ isActive }) => ({
  textDecoration: "none",
  fontWeight: 600,
  color: isActive ? "#e53935" : "#000000",
  borderBottom: isActive ? "2px solid #e53935" : "none",
  paddingBottom: 4,
});

export default Header;