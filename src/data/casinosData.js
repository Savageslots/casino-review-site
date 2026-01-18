// src/data/casinosData.js

export const casinos = [
  {
    name: "SG Casino",
    bonus: "100% up to €500 + 200 Free Spins",
    rating: 8.6,
    description:
      "SG Casino is a modern Rabidi-group casino with a sportsbook add-on, a very large game library and a polished, mobile-friendly interface.",
    reviewLink: "/casinos/sg-casino",
    logo: "/logos/sg.png",
    details: [
      { icon: "⬇️", label: "Min deposit", value: "€20" },
      { icon: "💳", label: "Withdrawal limit", value: "VIP-based (verify)" },
      { icon: "💼", label: "Wagering", value: "35x bonus / 40x FS wins" },
      { icon: "🎰", label: "Platform type", value: "Casino + Sportsbook" },
    ],
    hook:
      "SG Casino is a feature-rich hybrid casino and sportsbook designed for experienced players who are comfortable with Curacao-style terms and higher wagering requirements.",
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
    hook:
      "Betmatch combines casino games with sportsbook features under one account and works best for players who enjoy variety and longer play sessions.",
  },

  {
    name: "Wildz (NEW)",
    bonus: "Simple bonuses with clear rules",
    rating: 7.6,
    description:
      "Wildz (NEW) is a slot-first casino focused on simplicity, clean design, and smooth navigation. It is built for casual players who prefer clarity over aggressive promotions.",
    reviewLink: "/casinos/wildz-new",
    logo: "/logos/wildz.png",
    details: [
      { icon: "⬇️", label: "Min deposit", value: "€10" },
      { icon: "💳", label: "Min withdrawal", value: "€20 (verify)" },
      { icon: "💼", label: "Wagering", value: "Varies by bonus (verify)" },
      { icon: "🎰", label: "Platform type", value: "Slots-focused casino" },
    ],
    hook:
      "Wildz (NEW) is designed for players who want a clean, slot-first experience without complex mechanics or heavy promotional pressure.",
  },

  {
    name: "Kingmaker Casino",
    bonus: "100% up to €500 + 25 Free Spins",
    rating: 7.2,
    description:
      "Kingmaker Casino is a high-volume, multi-vertical platform with a strong VIP focus and aggressive promotional strategy, aimed at experienced players.",
    reviewLink: "/casinos/kingmaker",
    logo: "/logos/kingmaker.png",
    details: [
      { icon: "⬇️", label: "Min deposit", value: "€20" },
      { icon: "💳", label: "Min withdrawal", value: "€50 (verify)" },
      { icon: "💼", label: "Wagering", value: "35x bonus / 40x FS wins" },
      { icon: "🎰", label: "Platform type", value: "Multi-vertical casino" },
    ],
    hook:
      "Kingmaker targets high-volume players with frequent promotions and a tiered VIP system, but comes with higher wagering and reputation trade-offs.",
  },

  {
    name: "Boomerang-Bet",
    bonus: "100% up to €100 + Free Spins",
    rating: 7.4,
    description:
      "Boomerang-Bet is a hybrid casino and sportsbook offering a wide game selection, regular reload bonuses, cashback deals, and sports betting under one account.",
    reviewLink: "/casinos/boomerangbet",
    logo: "/logos/boomerangbet.png",
    details: [
      { icon: "⬇️", label: "Min deposit", value: "€20" },
      { icon: "💳", label: "Min withdrawal", value: "Varies (verify)" },
      { icon: "💼", label: "Wagering", value: "35x bonus / 40x FS wins" },
      { icon: "🎰", label: "Platform type", value: "Casino + Sportsbook" },
    ],
    hook:
      "Boomerang-Bet works best as an all-in-one casino and sportsbook hub with frequent reloads and cashback, but players should watch withdrawal conditions closely.",
  }
];