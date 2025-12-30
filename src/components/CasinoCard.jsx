function CasinoCard({ rank, name, bonus, rating }) {
  return (
    <div style={cardStyle}>
      {/* RANK */}
      <div style={rankStyle}>#{rank}</div>

      {/* CASINO INFO */}
      <div style={casinoStyle}>
        <div style={casinoName}>{name}</div>
        <div style={casinoSub}>Trusted Online Casino</div>
      </div>

      {/* BONUS */}
      <div>
        <div style={label}>Bonus</div>
        <div style={value}>{bonus}</div>
      </div>

      {/* RATING */}
      <div style={ratingStyle}>
        ⭐ {rating}
      </div>

      {/* CTA */}
      <button style={ctaStyle}>
        Play Now
      </button>
    </div>
  );
}

export default CasinoCard;

/* ===== styles ===== */

const cardStyle = {
  display: "grid",
  gridTemplateColumns: "60px 2fr 2fr 1fr 160px",
  alignItems: "center",
  gap: 20,
  padding: "20px 24px",
  border: "1px solid #e5e5e5",
  borderRadius: 12,
  background: "#fff",
};

const rankStyle = {
  fontSize: 22,
  fontWeight: 700,
};

const casinoStyle = {
  display: "flex",
  flexDirection: "column",
};

const casinoName = {
  fontWeight: 600,
  fontSize: 16,
};

const casinoSub = {
  fontSize: 13,
  color: "#777",
};

const label = {
  fontSize: 12,
  color: "#777",
  marginBottom: 4,
};

const value = {
  fontWeight: 600,
};

const ratingStyle = {
  fontWeight: 700,
  color: "#f39c12",
};

const ctaStyle = {
  padding: "12px 18px",
  background: "#e53935",
  color: "#fff",
  border: "none",
  borderRadius: 8,
  cursor: "pointer",
  fontWeight: 600,
};