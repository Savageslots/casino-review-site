import { useState } from "react";
import { Link } from "react-router-dom";

function CasinoCard({ casino, rank }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ marginBottom: "32px" }}>
      <div style={{ borderRadius: 20, overflow: "hidden" }}>
        {/* CARD */}
        <div style={cardStyle} className="casino-card">
          <div className="mobile-rating">
            ⭐ {casino.rating}
          </div>
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
            <div style={{ marginBottom: "8px" }} className="casino-review">
              <Link to={casino.reviewLink} style={{ color: "#ff4d4f", fontWeight: 600, textDecoration: "none" }}>
                Read full review →
              </Link>
            </div>
            <p style={{ fontSize: "15px", color: "#e6e9ff" }} className="casino-bonus">
              🎁 Bonus: {casino.bonus}
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            className="casino-actions"
          >
            <div style={ratingStyle} className="desktop-rating">⭐ {casino.rating}</div>
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
        .mobile-title,
        .mobile-rating {
          display: none;
        }
        @media (max-width: 768px) {
          .casino-card {
            display: flex !important;
            flex-direction: column !important;
            padding: 20px !important;
            gap: 14px !important;
            background: linear-gradient(
              135deg,
              #2c3a7a 0%,
              #5569d6 70%,
              #cfd6ff 100%
            ) !important;
            position: relative;
          }

          .casino-card > div:not(.mobile-rating) {
            width: 100%;
          }

          .mobile-rating {
            width: auto !important;
            max-width: calc(100% - 36px);
            white-space: nowrap;
          }

          .casino-logo {
            width: 72px !important;
            height: 72px !important;
            margin: 0 auto !important;
          }

          .casino-content {
            padding-left: 0 !important;
            text-align: center !important;
            display: flex !important;
            flex-direction: column !important;
          }

          /* Add a subtle translucent panel behind text for better contrast on the light gradient */
          .casino-content > * {
            max-width: 520px;
            margin-left: auto;
            margin-right: auto;
          }

          .casino-content h2 {
            display: block !important;
            text-align: center;
            margin-top: 12px;
          }

          .casino-desc {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            color: rgba(255, 255, 255, 0.95) !important;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.38);
            margin-bottom: 10px !important;
            order: 1;
          }

          .casino-bonus {
            color: rgba(240, 244, 255, 0.95) !important;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
            margin-top: 0 !important;
            order: 3;
          }

          .casino-review {
            order: 2;
          }

          .mobile-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            font-weight: 700;
            color: #fff;
          }

          .mobile-rating {
            position: absolute;
            top: 20px;
            right: 18px;
            margin: 0;
            background: #ffffff;
            color: #111111;
            border-radius: 12px;
            padding: 6px 12px;
            font-weight: 700;
            font-size: 16px;
            display: flex;
            align-items: center;
            gap: 6px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          }

          .mobile-actions {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 12px;
            margin-top: 12px;
          }

          .casino-rank-toggle {
            display: flex;
            align-items: center;
          }

          .mobile-toggle {
            margin-left: 6px;
            font-size: 16px;
            cursor: pointer;
            color: #ffffff !important;
            font-weight: 800;
            line-height: 1;
          }

          /* Accordion mobile */
          div[style*="grid-template-columns: repeat(4"] {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }

          @media (max-width: 768px) {
            div[style*="grid-template-columns: repeat(4"] > div {
              padding: 10px 12px !important;
              border-radius: 10px !important;
              background: #ffffff;
              box-shadow: 0 2px 6px rgba(0,0,0,0.06) !important;
            }
            div[style*="border-radius: 0 0 20px 20px"] {
              padding: 16px !important;
              background: linear-gradient(
                180deg,
                #eef1ff 0%,
                #f6f7ff 40%,
                #ffffff 100%
              ) !important;
              border-top: 1px solid rgba(255,255,255,0.6);
              border-left: 1px solid #e2e5f2;
              border-right: 1px solid #e2e5f2;
              border-bottom: 1px solid #d8dbea;
              box-shadow:
                inset 0 8px 16px rgba(0,0,0,0.05),
                0 10px 26px rgba(0,0,0,0.12);
            }
          }
          @media (max-width: 768px) {
            p[style*="line-height: 1.6"] {
              margin-top: 8px !important;
            }
          }

          .desktop-rating {
            display: none !important;
          }

          .casino-rank-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
          }

          .mobile-title {
            display: block;
            font-weight: 700;
            color: #fff;
            font-size: 18px;
            flex: 1;
            text-align: left;
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