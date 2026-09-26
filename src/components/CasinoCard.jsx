import { formatScore } from "../data/casinosData";
import "../styles/CasinoCard.css";
import { useId, useState } from "react";
import { Link } from "react-router-dom";

function CasinoCard({ casino, rank }) {
  const panelId = useId();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ marginBottom: "32px" }}>
      <div style={{ borderRadius: 20, overflow: "hidden" }}>
        {/* CARD */}
        <div style={cardStyle} className="casino-card">
          <div className="mobile-rating" title={casino.ratingLabel}>
            {casino.rating == null ? "Sem média" : `★ ${formatScore(casino.rating)}/10`}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              cursor: "pointer",
            }}
            role="button"
            tabIndex={0}
            aria-expanded={isOpen}
            aria-controls={panelId}
            aria-label={`#${rank} Ver detalhes de ${casino.name}`}
            onKeyDown={event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setIsOpen(value => !value); } }}
            onClick={() => setIsOpen(value => !value)}
            className="casino-rank"
          >
            <span style={rankStyle}>#{rank}</span>
            <span aria-hidden="true" style={{ fontSize: "14px", color: "#fff" }}>
              {isOpen ? "▲" : "▼"}
            </span>
          </div>

          <img
            width="112"
            height="112"
            loading={rank > 2 ? "lazy" : "eager"}
            decoding="async"
            src={casino.logo}
            alt={casino.name}
            style={casinoLogoStyle}
            className="casino-logo"
          />

          <div style={{ paddingLeft: "38px", color: "#ffffff" }} className="casino-content">
            <h2 style={{ margin: 0, fontSize: "24px" }}>{casino.name}</h2>
            <p style={{ marginBottom: "10px", lineHeight: "1.6" }} className="casino-desc">
              {casino.description}
            </p>
            <div style={{ marginBottom: "8px" }} className="casino-review">
              <Link to={casino.reviewLink} style={{ color: "#ff4d4f", fontWeight: 600, textDecoration: "none" }}>
                Ler análise completa →
              </Link>
            </div>
            <p style={{ fontSize: "15px", color: "#e6e9ff" }} className="casino-bonus">
              🎁 {casino.bonus}
            </p>
            <p className="casino-source-note" style={{ fontSize: 13, lineHeight: 1.5, color: '#fff' }}>{casino.ratingLabel} · Marca não encontrada no registo SRIJ.</p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            className="casino-actions"
          >
            <div style={ratingStyle} className="desktop-rating" title={casino.ratingLabel}>{casino.rating == null ? "Sem média" : `★ ${formatScore(casino.rating)}/10`}</div>
            <a
              href={casino.casinoLink || casino.reviewLink}
              target={casino.casinoLink ? "_blank" : undefined}
              rel={casino.casinoLink ? "sponsored nofollow noopener noreferrer" : undefined}
              className="cta-link"
              style={buttonStyle}
            >
              {casino.casinoLink ? "Visitar casino" : "Ler análise"}
            </a>
          </div>
        </div>

        {/* ACCORDION */}
        {isOpen && (
          <div id={panelId} className="casino-details" style={accordionStyle}>
            <div className="casino-facts" style={factsGrid}>
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
                  ler análise completa
                </Link>
              </p>
            )}
          </div>
        )}
      </div>

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
  border: "1px solid #e6e8f0",
  borderTop: "1px solid #d9ddf2",
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