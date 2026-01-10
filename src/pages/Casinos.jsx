import { useState } from "react";
import CasinoAccordion from "../components/CasinoAccordion";

export default function Casinos() {
  const [openIndex, setOpenIndex] = useState(1);

  const casinos = [
    {
      name: "Wildz Casino",
      bonus: "100% bonus up to €500 + Free Spins",
      rating: 9.8,
      description:
        "Wildz Casino is a modern, slot-focused online casino known for its clean interface, fast payouts after verification, and strong game selection.",
      reviewLink: "/casinos/wildz",
      details: [
        { icon: "⬇️", label: "Min Deposit", value: "€10" },
        { icon: "🎁", label: "Bonus Type", value: "Welcome Bonus" },
        { icon: "💼", label: "Wagering", value: "35x" },
        { icon: "🎰", label: "Casino Type", value: "Slots-focused" },
        { icon: "💳", label: "Min Withdrawal", value: "PLACEHOLDER" },
        { icon: "⏱️", label: "Payout Speed", value: "Fast after KYC" },
      ],
    },
    {
      name: "Betmatch Casino",
      bonus: "Up to €300 (casino & sports)",
      rating: 9.4,
      description:
        "Betmatch Casino combines online casino games with sportsbook features, offering a flexible platform for players who want variety under one account.",
      reviewLink: "/casinos/betmatch",
      details: [
        { icon: "⬇️", label: "Min Deposit", value: "€10" },
        { icon: "🎁", label: "Bonus Type", value: "Casino & Sports" },
        { icon: "💼", label: "Wagering", value: "35x" },
        { icon: "⚽", label: "Platform", value: "Casino + Sportsbook" },
        { icon: "📱", label: "Mobile Experience", value: "Good" },
      ],
    },
    {
      name: "Wildz (NEW)",
      bonus: "Simple bonuses with clear rules",
      rating: 7.6,
      description:
        "Wildz (NEW) is a slot-first casino focused on simplicity, clean design, and smooth navigation. It works best for casual players who prefer clarity over aggressive promotions.",
      reviewLink: "/casinos/wildz-new",
      details: [
        { icon: "🎰", label: "Best for", value: "Slot-focused players" },
        { icon: "🎁", label: "Bonuses", value: "Clear but modest" },
        { icon: "⏱️", label: "Payouts", value: "Usually smooth" },
        { icon: "🚫", label: "Not ideal for", value: "High-rollers" },
      ],
    },
  ];

  return (
    <main style={page}>
      <h1>Best Online Casinos</h1>
      <p style={{ color: "#555", marginBottom: 32, maxWidth: 900 }}>
        Discover the best online casinos ranked by bonuses, payouts, usability,
        and overall player experience. We show both sides - no hype, real pros and
        cons. Click any casino to expand the card or open the full review.
      </p>

      {casinos.map((casino, i) => (
        <CasinoAccordion
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
