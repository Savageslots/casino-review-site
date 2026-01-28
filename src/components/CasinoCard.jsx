import { useState } from "react";
import { Link } from "react-router-dom";

function CasinoCard({ casino, rank }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ marginBottom: "32px" }}>
      <div style={{ borderRadius: 20, overflow: "hidden" }}>
        {/* CARD */}
        <div style={cardStyle} className="casino-card">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            cursor: "pointer",
          }}
          onClick={() => setIsOpen(!isOpen)}
          className="casino-rank"
        >
          <span style={rankStyle}>#{rank}</span>
          <span style={{ fontSize: "14px", color: "#fff" }}>
            {isOpen ? "▲" : "▼"}
          </span>
        </div>

        <img
          src={casino.logo}
          alt={`${casino.name} logo`}
          style={casinoLogoStyle}
          className="casino-logo"
        />

        <div style={{ paddingLeft: "38px", color: "#ffffff" }} className="casino-content">
          <h2 style={{ margin: 0, fontSize: "24px" }}>{casino.name}</h2>
          <p style={{ marginBottom: "10px", lineHeight: "1.6" }} className="casino-desc">
            {casino.description}
          </p>
          <p style={{ fontSize: "15px", color: "#e6e9ff" }}>
            🎁 Bonus: {casino.bonus}
          </p>
          <Link
            to={casino.reviewLink}
            style={{
              display: "inline-block",
              marginTop: "14px",
              color: "#ff4d4f",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Read full review →
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          className="casino-actions"
        >
          <div style={ratingStyle}>⭐ {casino.rating}</div>
          <a
            href={casino.casinoLink || casino.reviewLink}
            target="_blank"
            rel="nofollow noopener"
            style={buttonStyle}
          >
            View Casino
          </a>
        </div>
      </div>

      {/* ACCORDION */}
      {isOpen && (
        <div style={accordionStyle}>
          <div style={factsGrid}>
            {casino.details.map((item) => (
              <div key={item.label} style={factCard}>
                <div style={factLabel}>{item.label}</div>
                <div style={factValue}>{item.value}</div>
              </div>
            ))}
          </div>

          {casino.hook && (
            <p style={hookStyle}>
              {casino.hook}{" "}
              <Link to={casino.reviewLink} style={hookLink}>
                read full review
              </Link>
            </p>
          )}
        </div>
      )}
      </div>
      <style>{`
        @media (max-width: 768px) {
          .casino-card {
            display: grid !important;
            grid-template-columns: 1fr !important;
            gap: 16px !important;
            padding: 20px !important;
          }

          .casino-rank {
            width: 100%;
            justify-content: space-between;
          }

          .casino-logo {
            width: 72px !important;
            height: 72px !important;
            margin: 0 auto !important;
          }

          .casino-content {
            padding-left: 0 !important;
            text-align: center;
          }

          .casino-desc {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .casino-actions {
            flex-direction: column !important;
            gap: 12px;
          }
        }
      `}</style>
    </div>
  );
}

export default CasinoCard;

/* ===== styles ===== */

const cardStyle = {
  background:
    "linear-gradient(135deg, #2c3a7a 0%, #5569d6 55%, #ffffff 100%)",
  borderRadius: "20px 20px 0 0",
  padding: "32px",
  boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
  display: "grid",
  gridTemplateColumns: "56px 96px 1fr auto",
  gap: "16px",
  alignItems: "center",
};

const rankStyle = {
  fontSize: "34px",
  fontWeight: "800",
  color: "#ffffff",
};

const casinoLogoStyle = {
  width: "112px",
  height: "112px",
  objectFit: "contain",
  flexShrink: 0,
};

const buttonStyle = {
  background: "#E53935",
  color: "#fff",
  padding: "14px 26px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "700",
  whiteSpace: "nowrap",
  boxShadow: "0 6px 18px rgba(229,57,53,0.45)",
};

const ratingStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "6px",
  marginBottom: "12px",
  fontSize: "18px",
  fontWeight: "700",
  color: "#111111",
  background: "#ffffff",
  borderRadius: "12px",
  padding: "6px 12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
};

const accordionStyle = {
  background: "#ffffff",
  borderRadius: "0 0 20px 20px",
  padding: "28px 32px",
  boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
};

const factsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  gap: "16px",
  marginBottom: "16px",
};

const hookStyle = {
  fontSize: "15px",
  lineHeight: "1.6",
  color: "#333",
  margin: 0,
};

const hookLink = {
  color: "#E53935",
  fontWeight: 600,
  textDecoration: "none",
};
const factCard = {
  background: "#ffffff",
  padding: "18px",
  borderRadius: "14px",
  boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
};

const factLabel = {
  fontSize: "13px",
  color: "#777",
  marginBottom: "4px",
};

const factValue = {
  fontWeight: 600,
  fontSize: "16px",
  color: "#111",
};