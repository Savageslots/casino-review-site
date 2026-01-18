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

export const prosCons = {
  pros: [
    "Huge slot and live-casino selection",
    "Regular tournaments and promotions",
    "High headline bonus and cashback options",
    "VIP system built for heavy play",
  ],
  cons: [
    "Mixed reputation and payout complaints",
    "No clear Germany-friendly licence",
    "Weak responsible-gambling tools",
    "Demanding wagering requirements",
  ],
};

function KingmakerReview() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 20px" }}>
      {/* HEADER */}
      <section style={{ marginBottom: "48px" }}>
        <h1 style={titleStyle}>Kingmaker Casino Review</h1>
        <p style={subtitleStyle}>
          We show both sides. No hype. Real pros and cons.
        </p>

        <p style={{ fontSize: "17px", lineHeight: "1.7", maxWidth: "900px" }}>
          Kingmaker is a heavily promoted multi-product casino with a big welcome
          package, thousands of games, and a strong VIP angle. In this Kingmaker
          Casino review, we look past the marketing to see where it truly shines —
          and where the risks begin, especially for German players.
        </p>
      </section>

      {/* QUICK FACTS */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Quick facts</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
          }}
        >
          <div>
            <strong>Welcome bonus</strong>
            <div>100% up to €500 + 25 Free Spins</div>
          </div>
          <div>
            <strong>Min deposit</strong>
            <div>€20</div>
          </div>
          <div>
            <strong>Wagering</strong>
            <div>35x bonus / 40x FS wins</div>
          </div>
          <div>
            <strong>Casino type</strong>
            <div>Multi-vertical & VIP-focused</div>
          </div>
        </div>
      </section>

      {/* PROS & CONS */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Pros & Cons</h2>
        <ProsCons pros={prosCons.pros} cons={prosCons.cons} />
      </section>

      {/* WHAT IT DOES WELL */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>What Kingmaker does well</h2>

        <p style={{ lineHeight: "1.7", maxWidth: "900px" }}>
          Kingmaker delivers a big-room casino experience with thousands of games
          and a busy live-dealer lobby. Navigation is straightforward, provider
          filters work well, and the platform feels designed for long sessions
          rather than quick visits.
        </p>

        <p style={{ lineHeight: "1.7", marginTop: "16px", maxWidth: "900px" }}>
          The bonus and cashback structure focuses on volume. While not ideal for
          occasional players, frequent users benefit from ongoing cashback that
          helps smooth variance over time.
        </p>

        <p style={{ lineHeight: "1.7", marginTop: "16px", maxWidth: "900px" }}>
          High-rollers get the most value. The VIP lane offers higher limits,
          faster withdrawals at upper tiers, and more personal communication —
          perks that matter to experienced players.
        </p>
      </section>

      {/* WHERE IT FALLS SHORT */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Where Kingmaker falls short</h2>

        <p style={{ lineHeight: "1.7", maxWidth: "900px" }}>
          Reputation is the main concern. Player feedback frequently mentions
          delayed withdrawals, bonus disputes, and support hiding behind terms.
          Even if not every case is justified, the pattern is hard to ignore.
        </p>

        <p style={{ lineHeight: "1.7", marginTop: "16px", maxWidth: "900px" }}>
          For German players, licensing is another weak spot. Kingmaker behaves
          more like an offshore operator, offering more freedom but far less
          built-in protection than regulation-first German brands.
        </p>
      </section>

      {/* STREET VOICE */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Street voice — reviews with no filter</h2>

        <p style={{ lineHeight: "1.7", maxWidth: "900px", marginBottom: "24px" }}>
          To understand how Kingmaker performs beyond official marketing claims,
          we analyzed recurring user feedback across major casino review platforms
          and gambling communities. The focus is on consistent patterns — not
          isolated complaints or one-off praise.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            marginBottom: "24px",
          }}
        >
          <div>
            <strong>Average user rating</strong>
            <div style={{ fontSize: "32px", fontWeight: "800", margin: "12px 0" }}>
              6.8 out of 10
            </div>
            <div style={{ color: "#666" }}>
              Based on recurring sentiment across player reviews and complaint
              portals.
            </div>
          </div>

          <div>
            <strong>Most commonly praised</strong>
            <ul style={{ marginTop: "12px", paddingLeft: "18px", lineHeight: "1.6" }}>
              <li>Large slot and live-casino selection</li>
              <li>Frequent promotions and cashback offers</li>
              <li>VIP rewards for high-volume players</li>
              <li>Flexible limits for experienced users</li>
            </ul>
          </div>

          <div>
            <strong>Most common complaints</strong>
            <ul style={{ marginTop: "12px", paddingLeft: "18px", lineHeight: "1.6" }}>
              <li>Withdrawal delays reported by multiple users</li>
              <li>Strict and disputed bonus enforcement</li>
              <li>Inconsistent support experience</li>
              <li>Licensing and player-protection concerns</li>
            </ul>
          </div>
        </div>

        <p style={{ fontSize: "14px", color: "#777", maxWidth: "900px" }}>
          Note: This section summarizes recurring themes across multiple platforms
          and does not represent any single review or isolated case.
        </p>
      </section>

      {/* VERDICT */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Our verdict</h2>

        <p style={{ fontSize: "17px", lineHeight: "1.7", maxWidth: "900px" }}>
          Kingmaker is a high-energy, high-variance casino. Big numbers, deep
          content, and a VIP system built for heavy action come with noticeable
          reputation and licensing risks. It works best as a side option for
          experienced players — not as a safe, regulation-first home for the
          average German user.
        </p>

        <p style={{ marginTop: "16px", fontWeight: "600" }}>
          👉 Suitable for experienced, risk-aware players. Not ideal as a primary
          German casino.
        </p>
      </section>
    </div>
  );
}

export default KingmakerReview;