import CasinoCard from "../components/CasinoCard";

export default function Casinos() {
  const casinos = [
    {
      name: "SG Casino",
      bonus: "100% up to €500 + 200 Free Spins",
      rating: 8.6,
      description:
        "SG Casino is a modern Rabidi-group casino with a sportsbook add-on, a very large game library and a polished, mobile-friendly interface.",
      reviewLink: "/casinos/sg-casino",
      logo: "/logos/sg-casino.png",
      details: [
        { icon: "⬇️", label: "Min deposit", value: "€20" },
        { icon: "💳", label: "Withdrawal limit", value: "VIP-based (verify)" },
        { icon: "💼", label: "Wagering", value: "35x bonus / 40x FS wins" },
        { icon: "🎰", label: "Platform type", value: "Casino + Sportsbook" },
      ],
      hook: "SG Casino is a feature-rich hybrid casino and sportsbook designed for experienced players who are comfortable with Curacao-style terms and higher wagering requirements...",
    },
    {
      name: "Betmatch Casino",
      bonus: "Up to €300 (casino & sports)",
      rating: 9.4,
      description:
        "Betmatch Casino combines online casino games with sportsbook features, offering a flexible platform for players who want variety under one account.",
      reviewLink: "/casinos/betmatch",
      logo: "/logos/betmatch.png",
      details: [
        { icon: "⬇️", label: "Min deposit", value: "€10" },
        { icon: "💳", label: "Min withdrawal", value: "€20 (verify)" },
        { icon: "💼", label: "Wagering", value: "35x casino bonus" },
        { icon: "🎰", label: "Platform type", value: "Casino + Sportsbook" },
      ],
      hook: "Betmatch combines casino games with sportsbook features under one account. It is best suited for players who enjoy variety and longer play sessions rather than fast bonus turnover...",
    },
    {
      name: "Wildz (NEW)",
      bonus: "Simple bonuses with clear rules",
      rating: 7.6,
      description:
        "Wildz (NEW) is a slot-first casino focused on simplicity, clean design, and smooth navigation. It works best for casual players who prefer clarity over aggressive promotions.",
      reviewLink: "/casinos/wildz-new",
      logo: "/logos/wildz.png",
      details: [
        { icon: "⬇️", label: "Min deposit", value: "€10" },
        { icon: "💳", label: "Min withdrawal", value: "€20 (verify)" },
        { icon: "💼", label: "Wagering", value: "Varies by bonus (verify)" },
        { icon: "🎰", label: "Platform type", value: "Slots-focused casino" },
      ],
      hook: "Wildz (NEW) is designed for players who want a clean, slot-first experience without complex mechanics. It delivers stability and clarity, but offers limited depth beyond slots...",
    },
    {
      name: "Kingmaker Casino",
      bonus: "100% up to €500 + 25 Free Spins",
      rating: 7.2,
      description:
        "Kingmaker is a high-volume, multi-product casino with a strong VIP focus and aggressive promotional strategy, better suited for experienced players.",
      reviewLink: "/casinos/kingmaker",
      logo: "/logos/kingmaker.png",
      details: [
        { icon: "⬇️", label: "Min deposit", value: "€20" },
        { icon: "💳", label: "Min withdrawal", value: "€50 (verify)" },
        { icon: "💼", label: "Wagering", value: "35x bonus / 40x FS wins" },
        { icon: "🎰", label: "Platform type", value: "Multi-vertical casino" },
      ],
      hook: "Kingmaker is a high-volume, promotion-heavy casino with a strong VIP focus. It offers scale and variety, but comes with clear reputation and licensing trade-offs...",
    },
    {
      name: "Boomerang-Bet",
      bonus: "100% up to €100 + Free Spins",
      rating: 7.4,
      description:
        "Boomerang-Bet is a hybrid sportsbook and casino platform offering thousands of games, regular reload bonuses, cashback, and an active sports betting section.",
      reviewLink: "/casinos/boomerangbet",
      logo: "/logos/boomerangbet.png",
      details: [
        { icon: "⬇️", label: "Min deposit", value: "€20" },
        { icon: "💳", label: "Min withdrawal", value: "Varies (verify)" },
        { icon: "💼", label: "Wagering", value: "35x bonus / 40x FS wins" },
        { icon: "🎰", label: "Platform type", value: "Casino + Sportsbook" },
      ],
      hook: "Boomerang-Bet works best as an all-in-one casino and sportsbook hub with frequent reloads and cashback. It offers strong variety, but players should pay close attention to withdrawal rules and bonus conditions...",
    },
  ];

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
