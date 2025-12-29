function CasinoCard({ rank, name, bonus, rating }) {
  return (
    <div style={cardStyle}>
      <div style={rankStyle}>#{rank}</div>

      <div style={logoPlaceholder}>
        {name}
      </div>

      <div>
        <strong>Bonus</strong>
        <div>{bonus}</div>
      </div>

      <div>
        <strong>Rating</strong>
        <div>⭐ {rating}</div>
      </div>

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
  gridTemplateColumns: "60px 1fr 1fr 120px 140px",
  alignItems: "center",
  gap: 16,
  padding: 20,
  border: "1px solid #e5e5e5",
  borderRadius: 12,
  background: "#fff",
};

const rankStyle = {
  fontSize: 20,
  fontWeight: 700,
};

const logoPlaceholder = {
  fontWeight: 600,
};

const ctaStyle = {
  padding: "12px 16px",
  background: "#e53935",
  color: "#fff",
  border: "none",
  borderRadius: 8,
  cursor: "pointer",
  fontWeight: 600,
};