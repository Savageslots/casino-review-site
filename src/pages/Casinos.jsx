import { useLocale } from '../i18n/useLocale';
import { rankedCasinos, casinoRanking } from "../data/rankings";
import CasinoCard from "../components/CasinoCard";

export default function Casinos() {
  const { t, path, locale, languageTag } = useLocale();
  const casinos = rankedCasinos(casinoRanking);

  return (
    <main style={page}>
      <h1>{t("Casinos online: análises para Portugal")}</h1>
      <p style={{ color: "#555", marginBottom: 32, maxWidth: 900 }}>{t("Slota, Leon, Ginja, Fairpari, DBbet e Spinzen, na ordem da seleção de referência. As posições não são uma classificação por qualidade ou autorização legal. Expanda cada cartão para ver os dados ou consulte a análise completa, incluindo o estatuto no SRIJ.")}</p>

      {casinos.map((casino, i) => (
        <CasinoCard key={casino.name} rank={i + 1} casino={casino} />
      ))}
    </main>
  );
}

const page = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "32px 24px",
};
