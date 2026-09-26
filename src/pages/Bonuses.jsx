import { rankedCasinos, bonusRanking } from "../data/rankings";
import CasinoCard from "../components/CasinoCard";

export default function Bonuses() {
  const casinos = rankedCasinos(bonusRanking);

  return (
    <>

      <main style={page}>
      <h1>Best Casino Bonuses Ranked</h1>

      <p style={{ color: "#555", marginBottom: 32, maxWidth: 900 }}>
        On this page we rank casino welcome bonuses based on real practical value — not just headline percentages. Our ranking focuses on bonus size, wagering requirements, maximum win limits, excluded payment methods, hidden clauses, and withdrawal conditions.
      </p>

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