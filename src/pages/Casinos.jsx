import ComparisonGuide from '../components/ComparisonGuide';
import { useLocale } from '../i18n/useLocale';
import { rankedCasinos, casinoRanking } from "../data/rankings";
import CasinoCard from "../components/CasinoCard";

export default function Casinos() {
  const { t, path, locale, languageTag } = useLocale();
  const casinos = rankedCasinos(casinoRanking);

  return (
    <main style={page}>
      <h1>{t("Comparar casinos online: jogos, pagamentos e opiniões")}</h1>
      <p style={{ color: "#555", marginBottom: 32, maxWidth: 900 }}>{t("Compare casinos online pelos jogos, métodos de pagamento, limites e opiniões dos jogadores. Expanda cada cartão para consultar os dados principais ou abra a análise para ler os detalhes. Ginja mantém o primeiro lugar editorial e os restantes seguem pela avaliação global. A posição não comprova autorização para operar em Portugal.")}</p>

      {casinos.map((casino, i) => (
        <CasinoCard key={casino.name} rank={i + 1} casino={casino} />
      ))}
      <ComparisonGuide page="casinos" />
    </main>
  );
}

const page = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "32px 24px",
};
