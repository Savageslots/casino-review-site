

import { Helmet } from "react-helmet-async";
import ProsCons from "../../components/ProsCons";

const sectionStyle = {
  background: "#ffffff",
  borderRadius: "16px",
  padding: "32px",
  marginBottom: "32px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
};

const titleStyle = {
  fontSize: "36px",
  fontWeight: "800",
  marginBottom: "8px",
};

const subtitleStyle = {
  fontSize: "18px",
  color: "#666",
  marginBottom: "32px",
};

const h2Style = {
  fontSize: "24px",
  fontWeight: "700",
  marginBottom: "16px",
};

const prosConsData = {
  pros: [
    "Casino and sportsbook under one account",
    "Competitive welcome bonus structure",
    "Wide range of slot providers",
    "Good mobile performance",
  ],
  cons: [
    "High wagering requirements",
    "Interface can feel busy",
    "Bonuses not ideal for fast cash-outs",
    "Support response times may vary",
  ],
};

function RoyalSeaReview() {
  return (
    <div className="review-page" style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 20px" }}>
      <Helmet>
        <title>RoyalSea Casino Review 2025 – Pros, Cons & Bonus Analysis</title>
        <meta
          name="description"
          content="RoyalSea Casino review 2025. We analyze bonuses, wagering requirements, withdrawals, platform usability and real player feedback. Honest pros & cons."
        />
      </Helmet>

      {/* HEADER */}
      <section style={{ marginBottom: "48px" }}>
        <h1 style={titleStyle}>RoyalSea Casino Review</h1>
        <p style={subtitleStyle}>
          We show both sides. No hype. Real pros and cons.
        </p>

        <p style={{ fontSize: "17px", lineHeight: "1.7", maxWidth: "850px" }}>
          RoyalSea Casino positions itself as a hybrid platform that combines online casino games with sportsbook-style features. In this review, we focus on real-world performance — not just promotional claims.
        </p>

        <p style={{ fontSize: "17px", lineHeight: "1.7", maxWidth: "850px" }}>
          The platform is designed for players who value variety: slots, sports betting, and recurring promotions within one account. But does RoyalSea deliver long-term value, or does the hybrid model dilute the experience? Let’s break it down.
        </p>
      </section>

      {/* QUICK FACTS */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Quick facts</h2>

        <div className="quick-facts-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
          <div>
            <strong>Welcome bonus</strong>
            <div>Up to €300 (casino & sports)</div>
          </div>
          <div>
            <strong>Min deposit</strong>
            <div>€10</div>
          </div>
          <div>
            <strong>Wagering</strong>
            <div>35x (casino bonus)</div>
          </div>
          <div>
            <strong>Platform type</strong>
            <div>Casino + Sportsbook</div>
          </div>
        </div>
      </section>

      <ProsCons pros={prosConsData.pros} cons={prosConsData.cons} />

      {/* GAMES & PLATFORM */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Games & platform experience</h2>

        <p style={{ maxWidth: "800px", lineHeight: "1.7" }}>
          RoyalSea offers a broad selection of modern video slots, classic-style games, and a sportsbook integrated into the same environment. This setup works well for players who alternate between casino sessions and sports betting.
        </p>

        <p style={{ maxWidth: "800px", lineHeight: "1.7" }}>
          The interface prioritizes functionality over minimalism. While experienced users adapt quickly, casino-only players may initially find the layout slightly crowded compared to pure slot-focused platforms.
        </p>
      </section>

      {/* BONUS OVERVIEW */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Bonus overview</h2>

        <p style={{ maxWidth: "800px", lineHeight: "1.7" }}>
          RoyalSea bonuses are structured for extended play rather than quick turnover. The casino welcome bonus follows standard industry wagering requirements, while sports bonuses operate under separate betting rules.
        </p>

        <p style={{ maxWidth: "800px", lineHeight: "1.7" }}>
          This structure makes the platform more suitable for players who understand bonus mechanics and are comfortable meeting wagering targets before withdrawing winnings.
        </p>
      </section>

      {/* STREET VOICE */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Street Voice – reviews with no filter</h2>

        <div className="street-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr 1fr", gap: "14px", marginTop: "16px" }}>
          <div style={{ borderRadius: "16px", border: "1px solid rgba(0,0,0,0.08)", padding: "16px", background: "#fff" }}>
            <div style={{ fontWeight: 900, marginBottom: "10px", fontSize: "16px" }}>
              Average user sentiment
            </div>
            <div style={{ fontSize: "28px", fontWeight: 900, marginBottom: "6px" }}>
              7.1 / 10
            </div>
            <div style={{ color: "#666", lineHeight: "1.6", fontSize: "14px" }}>
              Based on recurring feedback patterns across casino and sportsbook review platforms.
            </div>
          </div>

          <div style={{ borderRadius: "16px", border: "1px solid rgba(0,0,0,0.08)", padding: "16px", background: "#fff" }}>
            <div style={{ fontWeight: 900, marginBottom: "10px", fontSize: "16px" }}>
              Most commonly praised
            </div>
            <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: "1.7" }}>
              <li>Casino & sportsbook in one account</li>
              <li>Wide game and betting variety</li>
              <li>Strong mobile usability</li>
              <li>Competitive long-session promotions</li>
            </ul>
          </div>

          <div style={{ borderRadius: "16px", border: "1px solid rgba(0,0,0,0.08)", padding: "16px", background: "#fff" }}>
            <div style={{ fontWeight: 900, marginBottom: "10px", fontSize: "16px" }}>
              Most common complaints
            </div>
            <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: "1.7" }}>
              <li>High wagering requirements</li>
              <li>Interface feels busy</li>
              <li>Slower withdrawals during peak periods</li>
              <li>Bonus terms require careful reading</li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: "12px", fontSize: "13px", color: "#666", lineHeight: "1.6" }}>
          Note: This section summarizes recurring themes across multiple sources and does not represent individual cases.
        </div>
      </section>

      {/* VERDICT */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Our verdict</h2>

        <p style={{ fontSize: "17px", lineHeight: "1.7", maxWidth: "850px" }}>
          RoyalSea Casino is best suited for players who enjoy combining casino sessions with sports betting under a single account. It delivers variety and functional mobile performance, but it is not built for fast bonus cash-outs.
        </p>

        <p style={{ marginTop: "16px", fontWeight: "600" }}>
          👉 A flexible platform for mixed casino & sports players. Less ideal for quick bonus hunters.
        </p>
      </section>

      {/* MOBILE ADAPTATION */}
      <style>{`
        @media (max-width: 768px) {
          .review-page {
            padding: 32px 16px !important;
          }

          .quick-facts-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }

          .street-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default RoyalSeaReview;