import { useLocale } from '../i18n/useLocale';
import { rankedCasinos, bonusRanking } from "../data/rankings";
import CasinoCard from "../components/CasinoCard";

export default function Bonuses() {
  const { t, path, locale, languageTag } = useLocale();
  const casinos = rankedCasinos(bonusRanking);

  return (
    <>

      <main style={page}>
      <h1>{t("Bónus de casino: comparação e condições")}</h1>

      <p style={{ color: "#555", marginBottom: 32, maxWidth: 900 }}>{t("Compare as ofertas anunciadas para os seis casinos. A ordem segue a seleção de referência, não o valor dos bónus. Os montantes atribuídos a terceiros não garantem disponibilidade em Portugal; as análises assinalam termos por confirmar, diferenças entre fontes e limitações de licenciamento.")}</p>

      {casinos.map((casino, i) => (
        <CasinoCard key={casino.name} rank={i + 1} casino={casino} />
      ))}
    </main>
    </>
  );
}

const page = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "32px 24px",
};