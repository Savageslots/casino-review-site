import { useLocale } from '../i18n/useLocale';
import { Link } from "react-router-dom";
import CasinoCard from "../components/CasinoCard";
import { rankedCasinos, homeRanking } from "../data/rankings";

const heroTitleWrap = {
  display: "flex",
  alignItems: "center",
  gap: "24px",
  marginBottom: "20px",
};

const heroIconStyle = {
  height: "120px",
  width: "auto",
  maxWidth: "180px",
  flexShrink: 0,
};

const heroIconMobile = {
  height: "64px",
  width: "auto",
};

const pageStyle = {
  background: "#ffffff",
  minHeight: "100vh",
  padding: "64px 20px",
};

const containerStyle = {
  maxWidth: "1120px",
  margin: "0 auto",
};

const cardStyle = {
  background:
    "linear-gradient(135deg, #2c3a7a 0%, #5569d6 55%, #ffffff 100%)",
  borderRadius: "20px",
  padding: "32px",
  marginBottom: "32px",
  boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
  display: "grid",
  gridTemplateColumns: "56px 96px 1fr auto",
  gap: "16px",
  alignItems: "center",
};

const rankStyle = {
  fontSize: "34px",
  fontWeight: "800",
  color: "#ffffff",
};

const casinoLogoStyle = {
  width: "112px",
  height: "112px",
  objectFit: "contain",
  flexShrink: 0,
  marginRight: "12px",
};

const buttonStyle = {
  background: "#E53935",
  color: "#fff",
  padding: "14px 26px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "700",
  whiteSpace: "nowrap",
  boxShadow: "0 6px 18px rgba(229,57,53,0.45)",
};

const linkStyle = {
  display: "inline-block",
  marginTop: "14px",
  color: "#ff4d4f",
  fontWeight: "600",
};

const ratingStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "6px",
  marginBottom: "12px",
  fontSize: "18px",
  fontWeight: "700",
  color: "#111111",
  background: "#ffffff",
  borderRadius: "12px",
  padding: "6px 12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
};

function Home() {
  const { t, path, locale, languageTag } = useLocale();
  return (
    <div role="main" style={pageStyle}>
      <div style={containerStyle}>
        <div style={heroTitleWrap} className="home-hero-heading">
          <img
            src="/logo-icon.webp"
            width="180"
            height="120"
            fetchpriority="high"
            alt={t("Ícone CasinoProsCons")}
            style={heroIconStyle}
            className="hero-icon"
          />
          <h1
            style={{
              fontSize: "42px",
              lineHeight: "1.2",
              color: "#111111",
              margin: 0,
            }}
          >{" "}{t("Casinos online: Portugal")}{" "}</h1>
        </div>

        <p
          style={{
            color: "#444444",
            marginBottom: "56px",
            maxWidth: "860px",
            lineHeight: "1.7",
            fontSize: "17px",
          }}
        >{" "}{t("Compare Slota, Leon, Ginja, Fairpari, DBbet e Spinzen: jogos, bónus anunciados, prós, contras e opiniões com fontes. A seleção segue a tabela de referência da Znaki; a ordem não corresponde às notas. Estas marcas não foram encontradas no registo SRIJ consultado.")}{" "}</p>

        {rankedCasinos(homeRanking).map((casino, i) => (
          <CasinoCard key={casino.name} rank={i + 1} casino={casino} />
        ))}

        <div style={{ textAlign: "center", margin: "48px 0" }}>
          <Link to={path("/casinos")} className="cta-link" style={buttonStyle}>{" "}{t("Ver todos os casinos")}{" "}</Link>
        </div>

        <div style={{ marginTop: "80px", marginBottom: "80px" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "16px" }}>{" "}{t("Bónus de casino: o que comparar")}{" "}</h2>
          <p style={{ color: "#555", maxWidth: "760px", lineHeight: "1.7" }}>{" "}{t("Compare os valores anunciados e as limitações conhecidas de cada promoção. O montante máximo não revela, por si só, o valor de um bónus: também contam os requisitos de aposta, o prazo, os jogos elegíveis e os limites de levantamento. Indicamos quando faltam termos oficiais ou existem diferenças entre fontes.")}{" "}</p>

          <div style={{ marginTop: "24px" }}>
            <Link to={path("/bonuses")} className="cta-link" style={buttonStyle}>{" "}{t("Comparar bónus")}{" "}</Link>
          </div>
        </div>

        <div
          style={{
            marginTop: "80px",
            padding: "56px 48px",
            borderRadius: "22px",
            background: "#f3f5fb",
            maxWidth: "1120px",
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              marginBottom: "18px",
              color: "#111111",
            }}
          >{" "}{t("Como fazemos as nossas análises")}{" "}</h2>

          <p style={{ color: "#444444", lineHeight: "1.75", marginBottom: "14px" }}>{" "}{t("Esta edição resulta de pesquisa documental, consultada em 26 de setembro de 2026. A seleção de seis marcas segue o topo da tabela da Znaki. Não realizámos depósitos, levantamentos ou testes de jogo; distinguimos a informação anunciada das condições confirmadas.")}{" "}</p>

          <p style={{ color: "#444444", lineHeight: "1.75", marginBottom: "14px" }}>{" "}{t("Cada análise mantém os mesmos blocos: informações essenciais, prós e contras, jogos e plataforma, bónus, limitações, opiniões e veredicto. As ofertas atribuídas a terceiros podem variar por país, método de pagamento e conta.")}{" "}</p>

          <p style={{ color: "#444444", lineHeight: "1.75", marginBottom: "14px" }}>{" "}{t("Nas opiniões, mostramos fonte, escala original e número de comentários. Quando combinamos plataformas, calculamos a média simples das notas normalizadas para 10, sem ponderar pelo número de opiniões. O TrustScore tem metodologia própria; não somamos as amostras nem incluímos notas editoriais.")}{" "}</p>

          <p style={{ color: "#444444", lineHeight: "1.75" }}>{" "}{t("As seis marcas não foram encontradas no registo de entidades licenciadas do SRIJ consultado nesta data. Esta seleção não comprova autorização para operar em Portugal. Não existem ligações de adesão ativas: os botões abrem as nossas análises.")}{" "}</p>
          <p style={{ lineHeight: 1.7 }}><a href="https://znaki.fm/pt/jogos-de-azar/casinos/" target="_blank" rel="noopener noreferrer">{t("Seleção de referência")}</a> · <a href="https://www.srij.turismodeportugal.pt/pt/jogos-e-apostas-online/entidades-licenciadas" target="_blank" rel="noopener noreferrer">{t("Registo oficial SRIJ")}</a></p>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .hero-icon {
            height: 64px !important;
            max-width: 96px !important;
          }
          h1 {
            font-size: 32px !important;
          }
        }
      ` }} />
    </div>
  );
}

export default Home;
