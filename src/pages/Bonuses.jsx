import GuideLinks from '../components/GuideLinks';
import { Link } from "react-router-dom";
import ComparisonGuide from '../components/ComparisonGuide';
import { useLocale } from '../i18n/useLocale';
import { rankedCasinos, bonusRanking } from "../data/rankings";
import CasinoCard from "../components/CasinoCard";

export default function Bonuses() {
  const { t, path, locale, languageTag } = useLocale();
  const casinos = rankedCasinos(bonusRanking);

  return (
    <>

      <main style={page}>
      <h1>{t("Bónus de casino: comparar ofertas e requisitos de aposta")}</h1>

      <p style={{ color: "#555", marginBottom: 32, maxWidth: 900 }}>{t("Compare bónus de casino pelo depósito necessário, requisitos de aposta, prazo e limites de levantamento. O maior montante anunciado nem sempre corresponde às condições mais simples. A ordem desta página é editorial e independente da avaliação global; consulte a análise de cada oferta antes de decidir.")}</p>

      <p><Link to={path("/calculadora-rollover")}>{locale === "en" ? "Calculate wagering requirements and the effect of RTP" : "Calcular o rollover do bónus e o efeito do RTP"}</Link></p>
      {casinos.map((casino, i) => (
        <CasinoCard key={casino.name} rank={i + 1} casino={casino} />
      ))}
      <GuideLinks />
      <ComparisonGuide page="bonuses" />
    </main>
    </>
  );
}

const page = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "32px 24px",
};