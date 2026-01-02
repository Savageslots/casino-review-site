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

const listStyle = {
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

function WildzReview() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 20px" }}>
      {/* HEADER */}
      <section style={{ marginBottom: "48px" }}>
        <h1 style={titleStyle}>Wildz Casino Review</h1>
        <p style={subtitleStyle}>
          We show both sides. No hype. Real pros and cons.
        </p>

        <p style={{ fontSize: "17px", lineHeight: "1.7", maxWidth: "850px" }}>
          Wildz Casino is a modern online casino focused primarily on slot games,
          clean design, and relatively fast payouts. In this Wildz Casino review,
          we take a straight-talk look at what actually works — and what doesn’t,
          depending on how you play.
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
            <div>100% up to €500 + Free Spins</div>
          </div>
          <div>
            <strong>Min deposit</strong>
            <div>€10</div>
          </div>
          <div>
            <strong>Wagering</strong>
            <div>35x</div>
          </div>
          <div>
            <strong>Casino type</strong>
            <div>Slots-focused</div>
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
            <div style={listStyle}>
              <div style={prosItem}>Fast withdrawals after verification</div>
              <div style={prosItem}>Clean, modern interface</div>
              <div style={prosItem}>Strong selection of slot games</div>
              <div style={prosItem}>Licensed and regulated casino</div>
            </div>
          </div>

          {/* CONS */}
          <div>
            <h3 style={{ marginBottom: "12px", color: "#c0392b" }}>Cons</h3>
            <div style={listStyle}>
              <div style={consItem}>High wagering requirements</div>
              <div style={consItem}>Limited table & live games</div>
              <div style={consItem}>Not ideal for quick cash-outs</div>
              <div style={consItem}>Bonuses favor long sessions</div>
            </div>
          </div>
        </div>
      </section>

      {/* BONUS SECTION */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Bonus overview</h2>

        <p style={{ maxWidth: "800px", lineHeight: "1.7" }}>
          The Wildz welcome bonus looks attractive on the surface, but the real
          value depends on how comfortable you are with wagering requirements.
          This is not a “grab and cash-out” bonus — it’s designed for extended
          slot play.
        </p>
      </section>

      {/* VERDICT */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Our verdict</h2>

        <p style={{ fontSize: "17px", lineHeight: "1.7", maxWidth: "850px" }}>
          Wildz Casino does a lot of things right: modern UX, solid slot library,
          and reliable payouts once verified. However, bonus terms mean it’s best
          suited for players who enjoy longer sessions rather than bonus hunting.
        </p>

        <p style={{ marginTop: "16px", fontWeight: "600" }}>
          👉 A good pick for slot players. Less ideal for fast-withdrawal hunters.
        </p>
      </section>
    </div>
  );
}

export default WildzReview;