import { rankedCasinos, casinoRanking } from "../data/rankings";
import CasinoCard from "../components/CasinoCard";

export default function Casinos() {
  const casinos = rankedCasinos(casinoRanking);

  return (
    <main style={page}>
      <h1>Best Online Casinos</h1>
      <p style={{ color: "#555", marginBottom: 32, maxWidth: 900 }}>
        Discover the best online casinos ranked by bonuses, payouts, usability,
        and overall player experience. We focus on real player experience, bonus
        conditions, and platform structure. Expand any casino to see key facts or
        open the full review.
      </p>

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
