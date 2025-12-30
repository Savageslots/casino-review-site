import CasinoInfoGrid from "./CasinoInfoGrid";

export default function CasinoExpandableCard({
  index,
  casino,
  isOpen,
  onToggle,
}) {
  return (
    <div style={cardWrapper}>
      {/* MAIN CARD */}
      <div style={cardMain}>
        {/* RANK + ARROW */}
        <div style={rankWrapper} onClick={onToggle}>
          <span style={rankNumber}>#{index}</span>
          <span style={arrow}>{isOpen ? "▲" : "▼"}</span>
        </div>

        {/* INFO */}
        <div style={infoStyle}>
          <h3 style={{ margin: 0 }}>{casino.name}</h3>
          <span style={{ color: "#666", fontSize: 14 }}>
            Trusted Online Casino
          </span>
        </div>

        {/* BONUS */}
        <div style={bonusStyle}>
          <div style={{ fontSize: 13, color: "#777" }}>Bonus</div>
          <strong>{casino.bonus}</strong>
        </div>

        {/* RATING */}
        <div style={ratingStyle}>
          ⭐ <strong>{casino.rating}</strong>
        </div>

        {/* CTA */}
        <button style={ctaStyle}>Play Now</button>
      </div>

      {/* EXPANDED */}
      {isOpen && (
        <div style={expanded}>
          <CasinoInfoGrid
            title="Bonus Offer Details"
            items={casino.details}
          />

          <section style={{ marginTop: 32 }}>
            <h4>About {casino.name}</h4>
            <p>{casino.description}</p>
          </section>

          <section style={{ marginTop: 24 }}>
            <h4>Our Rating</h4>
            <p>
              Overall score: <strong>{casino.rating} / 10</strong>
            </p>
          </section>
        </div>
      )}
    </div>
  );
}

/* ================= STYLES ================= */

const cardWrapper = {
  border: "1px solid #e6e6e6",
  borderRadius: 16,
  marginBottom: 24,
  background: "#fff",
  overflow: "hidden",
};

const cardMain = {
  display: "grid",
  gridTemplateColumns: "120px 1.5fr 1fr 120px 160px",
  alignItems: "center",
  padding: "24px",
  gap: 16,
};

const rankWrapper = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  cursor: "pointer",
  userSelect: "none",
};

const rankNumber = {
  fontSize: 22,
  fontWeight: 700,
};

const arrow = {
  fontSize: 14,
  color: "#888",
};

const infoStyle = {
  display: "flex",
  flexDirection: "column",
};

const bonusStyle = {
  fontSize: 16,
};

const ratingStyle = {
  fontSize: 18,
};

const ctaStyle = {
  padding: "12px 20px",
  background: "#d84b3f",
  color: "#fff",
  border: "none",
  borderRadius: 10,
  fontWeight: 600,
  cursor: "pointer",
};

const expanded = {
  padding: "32px",
  borderTop: "1px solid #eee",
  background: "#fafafa",
};