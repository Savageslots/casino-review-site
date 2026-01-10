import { Link } from "react-router-dom";

const cardStyle = {
  background: "#ffffff",
  borderRadius: "16px",
  padding: "24px",
  marginBottom: "24px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
  display: "grid",
  gridTemplateColumns: "60px 1fr auto",
  gap: "24px",
  alignItems: "center",
};

const rankStyle = {
  fontSize: "28px",
  fontWeight: "800",
};

const buttonStyle = {
  background: "#d6453d",
  color: "#fff",
  padding: "12px 20px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: "600",
};

function Home() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 20px" }}>
      <h1 style={{ fontSize: "42px", marginBottom: "12px" }}>
        Best Online Casinos 2025
      </h1>
      <p style={{ color: "#666", marginBottom: "40px", maxWidth: "800px" }}>
        We review and rank the best online casinos based on real gameplay,
        bonuses, payouts, and usability. We show both sides - no hype, real pros
        and cons.
      </p>

      {/* #1 Wildz */}
      <div style={cardStyle}>
        <div style={rankStyle}>#1</div>

        <div>
          <h2 style={{ marginBottom: "6px" }}>Wildz Casino</h2>
          <p style={{ color: "#666", marginBottom: "8px" }}>
            Modern slot-focused online casino with fast payouts and a strong
            welcome bonus.
          </p>
          <p style={{ fontSize: "14px" }}>
            🎁 Bonus: 100% up to €500 + Free Spins <br />
            💰 Min deposit: €10 · Wagering: 35x
          </p>

          <Link
            to="/casinos/wildz"
            style={{ display: "inline-block", marginTop: "10px" }}
          >
            Read full review →
          </Link>
        </div>

        <Link to="/casinos/wildz" style={buttonStyle}>
          View Casino
        </Link>
      </div>

      {/* #2 Betmatch */}
      <div style={cardStyle}>
        <div style={rankStyle}>#2</div>

        <div>
          <h2 style={{ marginBottom: "6px" }}>Betmatch Casino</h2>
          <p style={{ color: "#666", marginBottom: "8px" }}>
            Hybrid platform combining online casino games with sportsbook
            features.
          </p>
          <p style={{ fontSize: "14px" }}>
            🎁 Bonus: Up to €300 (casino & sports) <br />
            💰 Min deposit: €10 · Wagering: 35x
          </p>

          <Link
            to="/casinos/betmatch"
            style={{ display: "inline-block", marginTop: "10px" }}
          >
            Read full review →
          </Link>
        </div>

        <Link to="/casinos/betmatch" style={buttonStyle}>
          View Casino
        </Link>
      </div>

      {/* #3 Wildz NEW */}
      <div style={cardStyle}>
        <div style={rankStyle}>#3</div>

        <div>
          <h2 style={{ marginBottom: "6px" }}>Wildz (NEW)</h2>
          <p style={{ color: "#666", marginBottom: "8px" }}>
            Slot-first casino focused on simplicity, clean design, and smooth
            navigation rather than aggressive promotions.
          </p>
          <p style={{ fontSize: "14px" }}>
            🎁 Bonuses: Clear but modest <br />
            🎰 Best for: Casual slot players
          </p>

          <Link
            to="/casinos/wildz-new"
            style={{ display: "inline-block", marginTop: "10px" }}
          >
            Read full review →
          </Link>
        </div>

        <Link to="/casinos/wildz-new" style={buttonStyle}>
          View Casino
        </Link>
      </div>
    </div>
  );
}

export default Home;
