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

const listGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "12px 24px",
};

const prosItem = {
  background: "#f1fdf6",
  border: "1px solid #cceede",
  padding: "14px 16px",
  borderRadius: "10px",
};

const consItem = {
  background: "#fff5f5",
  border: "1px solid #f3cccc",
  padding: "14px 16px",
  borderRadius: "10px",
};

function BetmatchReview() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 20px" }}>
      {/* HEADER */}
      <section style={{ marginBottom: "48px" }}>
        <h1 style={titleStyle}>Betmatch Casino Review</h1>
        <p style={subtitleStyle}>
          We show both sides. No hype. Real pros and cons.
        </p>

        <p style={{ fontSize: "17px", lineHeight: "1.7", maxWidth: "900px" }}>
          Betmatch Casino positions itself as a hybrid platform combining online
          casino games with sportsbook-style elements. In this Betmatch Casino
          review, we take a detailed look at how the platform performs in real
          usage — not just how it looks on the surface.
        </p>

        <p style={{ fontSize: "17px", lineHeight: "1.7", maxWidth: "900px" }}>
          The casino targets players who enjoy variety: slots, sports betting,
          and promotional offers under one account. But does Betmatch actually
          deliver value, or is it stretched too thin? Let’s break it down.
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

      {/* PROS & CONS */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Pros & Cons</h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
          {/* PROS */}
          <div>
            <h3 style={{ marginBottom: "12px", color: "#1f8f5f" }}>Pros</h3>
            <div style={listGrid}>
              <div style={prosItem}>Casino and sportsbook in one account</div>
              <div style={prosItem}>Solid welcome bonus structure</div>
              <div style={prosItem}>Good range of slot providers</div>
              <div style={prosItem}>Decent mobile performance</div>
            </div>
          </div>

          {/* CONS */}
          <div>
            <h3 style={{ marginBottom: "12px", color: "#c0392b" }}>Cons</h3>
            <div style={listGrid}>
              <div style={consItem}>High wagering requirements</div>
              <div style={consItem}>Interface feels busy for new users</div>
              <div style={consItem}>Casino bonuses not ideal for quick wins</div>
              <div style={consItem}>Support response times can vary</div>
            </div>
          </div>
        </div>
      </section>

      {/* GAME & PLATFORM REVIEW */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Games & platform experience</h2>

        <p style={{ lineHeight: "1.7", maxWidth: "900px" }}>
          Betmatch Casino offers a wide selection of online slots, including
          modern video slots and classic-style games. The platform also integrates
          sports betting, which can be a plus for players who prefer having both
          options under one roof.
        </p>

        <p style={{ lineHeight: "1.7", maxWidth: "900px" }}>
          That said, the interface may feel slightly crowded for casino-only
          players. Navigation improves with use, but it’s not the most minimal
          casino layout on the market.
        </p>
      </section>

      {/* BONUS SECTION */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Bonus overview</h2>

        <p style={{ lineHeight: "1.7", maxWidth: "900px" }}>
          Betmatch bonuses are designed for longer play sessions rather than fast
          turnover. Casino bonuses typically come with standard wagering
          requirements, while sports bonuses have their own betting conditions.
        </p>

        <p style={{ lineHeight: "1.7", maxWidth: "900px" }}>
          This makes Betmatch more suitable for experienced players who understand
          bonus mechanics and are comfortable meeting wagering targets.
        </p>
      </section>

      {/* VERDICT */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Our verdict</h2>

        <p style={{ fontSize: "17px", lineHeight: "1.7", maxWidth: "900px" }}>
          Betmatch Casino is best suited for players who enjoy combining online
          casino games with sports betting. While it may not be the simplest
          platform for beginners, it offers solid value for users who want variety
          and are willing to play through bonus requirements.
        </p>

        <p style={{ marginTop: "16px", fontWeight: "600" }}>
          👉 A flexible platform for mixed casino & sports players. Less ideal for
          quick bonus cash-outs.
        </p>
      </section>
    </div>
  );
}

export default BetmatchReview;