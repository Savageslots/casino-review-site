import ProsCons from "../../components/ProsCons";

/* ====== DATA ====== */

export const prosCons = {
  pros: [
    "4000+ casino games and full sportsbook",
    "Crypto-friendly with many payment options",
    "24/7 live chat and active VIP managers",
    "Regular reloads, free spins and cashback offers",
  ],
  cons: [
    "Mixed reputation around withdrawals",
    "Offshore-style licence with limited transparency",
    "High wagering and time-limited bonuses",
    "Withdrawal limits and payout restrictions",
  ],
};

/* ====== STYLES ====== */

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

/* ====== PAGE ====== */

function BoomerangBetReview() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 20px" }}>
      {/* HEADER */}
      <section style={{ marginBottom: "48px" }}>
        <h1 style={titleStyle}>Boomerang-Bet Casino Review</h1>
        <p style={subtitleStyle}>
          Honest look at the pros, cons, bonuses and real player feedback.
        </p>

        <p style={{ fontSize: "17px", lineHeight: "1.7", maxWidth: "900px" }}>
          Boomerang-Bet is positioned as an all-in-one platform combining online
          casino games with a full sportsbook. With thousands of slots, live-dealer
          tables, crash games and regular promotions, it targets players who want
          constant action under one account.
        </p>

        <p style={{ fontSize: "17px", lineHeight: "1.7", maxWidth: "900px" }}>
          At the same time, feedback around withdrawals, licence transparency and
          bonus conditions is mixed. This review focuses on how Boomerang-Bet
          actually performs in practice — not just on paper.
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
            <div>100% up to €100–€500 + Free Spins</div>
          </div>
          <div>
            <strong>Min deposit</strong>
            <div>€20</div>
          </div>
          <div>
            <strong>Wagering</strong>
            <div>35x bonus / 40x FS winnings</div>
          </div>
          <div>
            <strong>Platform type</strong>
            <div>Casino + Sportsbook</div>
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
        <h2 style={h2Style}>What Boomerang-Bet does well</h2>

        <p style={{ lineHeight: "1.7", maxWidth: "900px" }}>
          Boomerang-Bet shines as a high-volume, multi-vertical platform. The
          casino catalogue exceeds 4000 games, covering popular slots, live-dealer
          tables, game shows and instant titles, all accessible from a single lobby.
        </p>

        <p style={{ lineHeight: "1.7", marginTop: "16px", maxWidth: "900px" }}>
          The integrated sportsbook is another strong point. Pre-match and live
          betting, cash-out features and coverage of both mainstream and niche
          sports make it easy to switch between casino and sports without leaving
          the platform.
        </p>

        <p style={{ lineHeight: "1.7", marginTop: "16px", maxWidth: "900px" }}>
          Regular reload bonuses, free spins and cashback offers keep the promo
          calendar active, while VIP players benefit from personalised deals and
          direct contact with managers.
        </p>
      </section>

      {/* WHERE IT FALLS SHORT */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Where Boomerang-Bet falls short</h2>

        <p style={{ lineHeight: "1.7", maxWidth: "900px" }}>
          The biggest concern across user reviews is consistency around
          withdrawals. While many players report smooth payouts, a noticeable
          number mention delays, additional verification loops or blocked accounts.
        </p>

        <p style={{ lineHeight: "1.7", marginTop: "16px", maxWidth: "900px" }}>
          From a regulatory perspective, Boomerang-Bet operates under an offshore-style
          licence. This setup offers flexibility but provides less reassurance for
          players who prefer strict local regulation and clear corporate disclosure.
        </p>

        <p style={{ lineHeight: "1.7", marginTop: "16px", maxWidth: "900px" }}>
          Bonus conditions are demanding. Wagering requirements of 35x–40x with
          limited time windows and max-win caps can make promotions feel restrictive,
          especially for smaller bankrolls.
        </p>
      </section>

      {/* STREET VOICE */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Street Voice – reviews with no filter</h2>

        <p style={{ lineHeight: "1.7", maxWidth: "900px", marginBottom: "24px" }}>
          To understand how Boomerang-Bet performs beyond official descriptions,
          we analysed recurring user feedback across major review platforms and
          gambling communities, focusing on patterns rather than isolated cases.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          <div
            style={{
              border: "1px solid #eee",
              borderRadius: "14px",
              padding: "24px",
            }}
          >
            <h3 style={{ marginBottom: "12px" }}>Average user rating</h3>
            <div style={{ fontSize: "36px", fontWeight: "800", marginBottom: "8px" }}>
              7.2 out of 10
            </div>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              Based on aggregated ratings and recurring sentiment across multiple
              independent review platforms, normalised to a 10-point scale.
            </p>
          </div>

          <div
            style={{
              border: "1px solid #eee",
              borderRadius: "14px",
              padding: "24px",
            }}
          >
            <h3 style={{ marginBottom: "12px" }}>Most commonly praised</h3>
            <ul style={{ paddingLeft: "18px", lineHeight: "1.7" }}>
              <li>Huge casino catalogue and sportsbook in one account</li>
              <li>Crypto-friendly payments and flexible deposit options</li>
              <li>Active promotions, reloads and cashback offers</li>
              <li>Helpful live chat and VIP managers for regular players</li>
            </ul>
          </div>

          <div
            style={{
              border: "1px solid #eee",
              borderRadius: "14px",
              padding: "24px",
            }}
          >
            <h3 style={{ marginBottom: "12px" }}>Most common complaints</h3>
            <ul style={{ paddingLeft: "18px", lineHeight: "1.7" }}>
              <li>Withdrawal delays and additional verification checks</li>
              <li>Account limitations or blocked funds in dispute cases</li>
              <li>Offshore licence and limited corporate transparency</li>
              <li>High wagering requirements and bonus restrictions</li>
            </ul>
          </div>
        </div>

        <p style={{ marginTop: "20px", color: "#777", fontSize: "14px" }}>
          Note: This section reflects recurring themes across many reviews and does
          not represent any single user experience or platform.
        </p>
      </section>

      {/* VERDICT */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Final verdict</h2>

        <p style={{ fontSize: "17px", lineHeight: "1.7", maxWidth: "900px" }}>
          Boomerang-Bet works best for players who want casino and sportsbook action
          in one place, enjoy frequent reloads and cashback, and are comfortable
          navigating offshore-style terms. It is less suitable for those who value
          strict regulation and predictable withdrawals above all else.
        </p>

        <p style={{ marginTop: "16px", fontWeight: "600" }}>
          👉 Best for mixed casino & sports players who understand bonus mechanics
          and accept higher risk in exchange for variety.
        </p>
      </section>
    </div>
  );
}

export default BoomerangBetReview;