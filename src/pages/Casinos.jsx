import { useState } from "react";
import CasinoExpandableCard from "../components/CasinoExpandableCard";

export default function Casinos() {
  const [openIndex, setOpenIndex] = useState(1);

  const casinos = [
    {
      name: "Wildz Casino",
      bonus: "100% bonus up to €500",
      rating: 9.8,
      description:
        "Wildz Casino is known for its modern design, fast payouts and a strong selection of slots.",
      details: [
        { icon: "⬇️", label: "Min Deposit", value: "€10" },
        { icon: "🎁", label: "Bonus Type", value: "Welcome Bonus" },
        { icon: "💼", label: "Wagering", value: "35x" },
        { icon: "🎲", label: "Min Bet", value: "PLACEHOLDER" },
        { icon: "💳", label: "Min Withdrawal", value: "PLACEHOLDER" },
        { icon: "⏱️", label: "Payout Speed", value: "PLACEHOLDER" },
      ],
    },
    {
      name: "Casino 2",
      bonus: "PLACEHOLDER",
      rating: "—",
      description: "Description of Casino 2.",
      details: [{ icon: "🎁", label: "Bonus", value: "PLACEHOLDER" }],
    },
    {
      name: "Casino 3",
      bonus: "PLACEHOLDER",
      rating: "—",
      description: "Description of Casino 3.",
      details: [{ icon: "🎁", label: "Bonus", value: "PLACEHOLDER" }],
    },
  ];

  return (
    <main style={page}>
      <h1>Best Online Casinos</h1>
      <p style={{ color: "#555", marginBottom: 32 }}>
        Discover the best online casinos ranked by bonuses, payments and player
        experience.
      </p>

      {casinos.map((casino, i) => (
        <CasinoExpandableCard
          key={i}
          index={i + 1}
          casino={casino}
          isOpen={openIndex === i + 1}
          onToggle={() =>
            setOpenIndex(openIndex === i + 1 ? null : i + 1)
          }
        />
      ))}
    </main>
  );
}

const page = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "32px 24px",
};