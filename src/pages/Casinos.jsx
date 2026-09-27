import { useLocale } from '../i18n/useLocale';
import { rankedCasinos, casinoRanking } from "../data/rankings";
import CasinoCard from "../components/CasinoCard";

export default function Casinos() {
  const { t, path, locale, languageTag } = useLocale();
  const casinos = rankedCasinos(casinoRanking);

  return (
    <main style={page}>
      <h1>{t("Casinos online: análises para Portugal")}</h1>
      <p style={{ color: "#555", marginBottom: 32, maxWidth: 900 }}>{t("Ginja ocupa o primeiro lugar por escolha editorial. Os restantes casinos estão ordenados pela nota publicada, por ordem decrescente; a DBbet, sem média confirmada, fica no fim. A posição não comprova autorização em Portugal. Expanda os cartões para consultar as condições e as fontes.")}</p>

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
