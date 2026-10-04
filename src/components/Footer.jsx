import GuideLinks from './GuideLinks';
import '../styles/TopicGuide.css';
import { useLocale } from '../i18n/useLocale';
function Footer() {
  const { t, path, locale, languageTag } = useLocale();
  return (
    <footer
      style={{
        borderTop: "1px solid #e5e5e5",
        padding: "24px 40px",
        background: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          fontSize: 14,
          color: "#666",
        }}
      >
        <GuideLinks />
        <p>{t("Informação atualizada à data da análise (27/09/2026). Os dados e as condições podem mudar com o tempo; consulte sempre a informação atual no site do operador.")}</p>
        <p>{t("Algumas ligações são de afiliados. Podemos receber uma comissão se aderir através delas.")}</p>
        © {new Date().getFullYear()}{" "}{t("CasinoProsCons. Todos os direitos reservados.")}{" "}<p>{t("18+. O jogo envolve risco.")}{" "}<a href="https://www.srij.turismodeportugal.pt/pt/jogo-seguro" target="_blank" rel="noopener noreferrer">{t("Informação sobre jogo responsável — SRIJ")}</a>.</p>
      </div>
    </footer>
  );
}

export default Footer;