import { useState } from "react";

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);

  const casinos = [
    {
      index: 1,
      name: "Wildz",
      description: "A great casino with tons of games.",
      shortMeta: "Fast payouts, great bonuses",
      logo: "/images/wildz-logo.png",
      rating: 4.8,
      welcomeBonus: "100% up to $500 + 200 free spins",
      details: [
        { icon: "💰", label: "Min deposit", value: "$10" },
        { icon: "🎁", label: "Bonus type", value: "Match bonus" },
        { icon: "⏳", label: "Wagering", value: "35x" },
        { icon: "🏢", label: "Casino type", value: "Online" },
      ],
      seoHook:
        "Wildz Casino is a slot-focused online casino best suited for players who enjoy long slot sessions, offering a 100% welcome bonus up to $500 with standard wagering requirements.",
    },
    {
      index: 2,
      name: "Betmatch",
      description: "Betmatch offers a unique betting experience.",
      shortMeta: "Live betting, crypto accepted",
      logo: "/images/betmatch-logo.png",
      rating: 4.6,
      welcomeBonus: "150% up to $300 + 100 free spins",
      details: [
        { icon: "💰", label: "Min deposit", value: "$20" },
        { icon: "🎁", label: "Bonus type", value: "Free spins" },
        { icon: "⏳", label: "Wagering", value: "40x" },
        { icon: "🏢", label: "Casino type", value: "Hybrid" },
      ],
      seoHook:
        "Betmatch Casino combines online casino games with sportsbook features and is best for players looking for an all-in-one platform with a flexible welcome bonus structure.",
    },
    {
      index: 3,
      name: "Wildz NEW",
      description: "The new version of Wildz with extra features.",
      shortMeta: "Improved UI, more games",
      logo: "/images/wildz-new-logo.png",
      rating: 4.9,
      welcomeBonus: "120% up to $600 + 250 free spins",
      details: [
        { icon: "💰", label: "Min deposit", value: "$15" },
        { icon: "🎁", label: "Bonus type", value: "Match bonus" },
        { icon: "⏳", label: "Wagering", value: "30x" },
        { icon: "🏢", label: "Casino type", value: "Online" },
      ],
      seoHook:
        "Wildz NEW is a simplified slot-first casino designed for casual players who prefer clear bonus rules and a straightforward playing experience.",
    },
    {
      index: 4,
      name: "Kingmaker",
      description: "Kingmaker is a classic casino with a royal touch.",
      shortMeta: "Trusted brand, VIP program",
      logo: "/images/kingmaker-logo.png",
      rating: 4.5,
      welcomeBonus: "200% up to $400 + 150 free spins",
      details: [
        { icon: "💰", label: "Min deposit", value: "$25" },
        { icon: "🎁", label: "Bonus type", value: "Cashback" },
        { icon: "⏳", label: "Wagering", value: "50x" },
        { icon: "🏢", label: "Casino type", value: "Land-based + Online" },
      ],
      seoHook:
        "Kingmaker Casino is a high-volume multi-product casino aimed at experienced players, featuring a large welcome bonus and a strong VIP-oriented reward system.",
    },
  ];

  const cardContainerStyle = {
    borderRadius: 24,
    marginBottom: 0, // no margin bottom on card itself, margin after expanded
    boxShadow: "0 16px 40px rgba(0,0,0,0.12)",
    overflow: "hidden",
    background: "#fff",
  };

  const headerStyle = {
    padding: "32px",
    display: "grid",
    gridTemplateColumns: "80px 1fr auto",
    gap: 24,
    alignItems: "center",
    background:
      "linear-gradient(135deg, #3f4fa3 0%, #5f6fd6 60%, #cfd4ff 100%)",
    color: "#fff",
  };

  const rankStyle = {
    fontSize: 28,
    fontWeight: 800,
    userSelect: "none",
  };

  const arrowStyle = {
    marginLeft: 8,
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: 18,
    userSelect: "none",
  };

  const expandedSectionStyle = {
    background: "#f7f8fd",
    padding: 32,
    borderRadius: "0 0 20px 20px",
    marginBottom: 32,
  };

  return (
    <div>
      {casinos.map((casino) => {
        const isOpen = openIndex === casino.index;

        return (
          <div key={casino.index}>
            <div style={cardContainerStyle}>
              <div style={headerStyle}>
                <div style={{ textAlign: "center" }}>
                  <span style={rankStyle}>#{casino.index}</span>
                  <span
                    style={arrowStyle}
                    onClick={() =>
                      setOpenIndex(isOpen ? null : casino.index)
                    }
                    aria-label={isOpen ? "Collapse details" : "Expand details"}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setOpenIndex(isOpen ? null : casino.index);
                      }
                    }}
                  >
                    {isOpen ? "▲" : "▼"}
                  </span>
                  {casino.logo && (
                    <img
                      src={casino.logo}
                      alt={casino.name}
                      style={{ marginTop: 8, maxWidth: 48, display: "block", marginLeft: "auto", marginRight: "auto" }}
                    />
                  )}
                </div>

                <div>
                  <h2 style={{ margin: 0, fontSize: 28 }}>{casino.name}</h2>
                  <p style={{ margin: "8px 0 0", opacity: 0.9 }}>
                    {casino.description}
                  </p>

                  {casino.shortMeta && (
                    <div style={{ marginTop: 12, opacity: 0.95 }}>
                      {casino.shortMeta}
                    </div>
                  )}
                </div>

                <div style={{ textAlign: "right" }}>
                  <div
                    style={{
                      background: "#fff",
                      color: "#000",
                      borderRadius: 999,
                      padding: "8px 14px",
                      fontWeight: 700,
                      display: "inline-block",
                      marginBottom: 12,
                    }}
                  >
                    ⭐ {casino.rating}
                  </div>

                  <div>
                    <span
                      style={{
                        display: "inline-block",
                        background: "#e74c3c",
                        color: "#fff",
                        padding: "12px 22px",
                        borderRadius: 999,
                        fontWeight: 700,
                      }}
                    >
                      View Casino
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {isOpen && (
              <div style={expandedSectionStyle}>
                <p style={{ marginTop: 0, marginBottom: 24, lineHeight: 1.7 }}>
                  {casino.seoHook}
                </p>

                <a
                  href={`/casinos/${casino.name.toLowerCase().replace(/\s+/g, "-")}`}
                  style={{
                    display: "inline-block",
                    marginBottom: 32,
                    fontWeight: 600,
                    color: "#e53935",
                    textDecoration: "none",
                  }}
                >
                  Read full review →
                </a>

                <div style={{ marginBottom: 24 }}>
                  <h4 style={{ marginBottom: 8 }}>Welcome bonus</h4>
                  <p style={{ marginTop: 0 }}>{casino.welcomeBonus}</p>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: 16,
                    marginBottom: 32,
                  }}
                >
                  {casino.details.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        background: "#fff",
                        padding: "16px",
                        borderRadius: 14,
                        display: "flex",
                        gap: 12,
                        alignItems: "center",
                        boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
                      }}
                    >
                      <span style={{ fontSize: 20 }}>{item.icon}</span>
                      <div>
                        <div style={{ fontSize: 13, color: "#777" }}>
                          {item.label}
                        </div>
                        <div style={{ fontWeight: 600 }}>{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}