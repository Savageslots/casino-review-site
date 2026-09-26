import { Link } from "react-router-dom";
import CasinoCard from "../components/CasinoCard";
import { rankedCasinos, homeRanking } from "../data/rankings";

const heroTitleWrap = {
  display: "flex",
  alignItems: "center",
  gap: "24px",
  marginBottom: "20px",
};

const heroIconStyle = {
  height: "120px",
  width: "auto",
  maxWidth: "180px",
  flexShrink: 0,
};

const heroIconMobile = {
  height: "64px",
  width: "auto",
};

const pageStyle = {
  background: "#ffffff",
  minHeight: "100vh",
  padding: "64px 20px",
};

const containerStyle = {
  maxWidth: "1120px",
  margin: "0 auto",
};

const cardStyle = {
  background:
    "linear-gradient(135deg, #2c3a7a 0%, #5569d6 55%, #ffffff 100%)",
  borderRadius: "20px",
  padding: "32px",
  marginBottom: "32px",
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
  marginRight: "12px",
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

const linkStyle = {
  display: "inline-block",
  marginTop: "14px",
  color: "#ff4d4f",
  fontWeight: "600",
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

function Home() {
  return (
    <div role="main" style={pageStyle}>
      <div style={containerStyle}>
        <div style={heroTitleWrap} className="home-hero-heading">
          <img
            src="/logo-icon.webp"
            width="180"
            height="120"
            fetchpriority="high"
            alt="CasinoProsCons icon"
            style={heroIconStyle}
            className="hero-icon"
          />
          <h1
            style={{
              fontSize: "42px",
              lineHeight: "1.2",
              color: "#111111",
              margin: 0,
            }}
          >
            Best Online Casinos
          </h1>
        </div>

        <p
          style={{
            color: "#444444",
            marginBottom: "56px",
            maxWidth: "860px",
            lineHeight: "1.7",
            fontSize: "17px",
          }}
        >
          We review and rank the best online casinos based on real gameplay,
          bonuses, payouts, and usability. Honest pros & cons — no hype.
        </p>

        {rankedCasinos(homeRanking).map((casino, i) => (
          <CasinoCard key={casino.name} rank={i + 1} casino={casino} />
        ))}

        <div style={{ textAlign: "center", margin: "48px 0" }}>
          <Link to="/casinos" className="cta-link" style={buttonStyle}>
            View full casino ranking
          </Link>
        </div>

        <div style={{ marginTop: "80px", marginBottom: "80px" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "16px" }}>
            Best Casino Bonuses – Ranked by Real Value
          </h2>
          <p style={{ color: "#555", maxWidth: "760px", lineHeight: "1.7" }}>
            On our bonus ranking page, we compare welcome offers based on real value —
            including bonus size, wagering requirements, hidden terms, max cashout limits,
            and withdrawal restrictions. We focus on how realistic it is to actually
            convert a bonus into withdrawable funds, not just headline numbers.
          </p>

          <div style={{ marginTop: "24px" }}>
            <Link to="/bonuses" className="cta-link" style={buttonStyle}>
              View bonus ranking
            </Link>
          </div>
        </div>

        <div
          style={{
            marginTop: "80px",
            padding: "56px 48px",
            borderRadius: "22px",
            background: "#f3f5fb",
            maxWidth: "1120px",
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              marginBottom: "18px",
              color: "#111111",
            }}
          >
            Our Independent Casino Review Methodology
          </h2>

          <p style={{ color: "#444444", lineHeight: "1.75", marginBottom: "14px" }}>
            At CasinoProsCons, we follow a transparent and independent review process to
            evaluate online casinos fairly and consistently. Our goal is to help
            players make informed decisions based on real data — not marketing hype.
          </p>

          <p style={{ color: "#444444", lineHeight: "1.75", marginBottom: "14px" }}>
            Each casino is reviewed across key criteria including bonus terms,
            withdrawal speed, game quality, usability, payment options, and overall
            player experience. We also analyze terms and conditions carefully to spot
            unfair wagering rules or hidden limitations.
          </p>

          <p style={{ color: "#444444", lineHeight: "1.75", marginBottom: "14px" }}>
            In addition to hands-on testing, we research verified player feedback,
            industry reputation, and regulatory background. This allows us to combine
            expert analysis with real-world player sentiment.
          </p>

          <p style={{ color: "#444444", lineHeight: "1.75" }}>
            Our rankings are updated regularly to reflect changes in bonuses, software
            providers, payouts, and user experience — ensuring our recommendations stay
            accurate and trustworthy over time.
          </p>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .hero-icon {
            height: 64px !important;
            max-width: 96px !important;
          }
          h1 {
            font-size: 32px !important;
          }
        }
      ` }} />
    </div>
  );
}

export default Home;
