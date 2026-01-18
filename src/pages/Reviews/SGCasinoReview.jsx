import ProsCons from "../../components/ProsCons";

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

export const prosCons = {
  pros: [
    "Huge game library with modern, polished design",
    "Strong live casino and integrated sportsbook",
    "Wide payment coverage and 24/7 live chat",
    "Tiered VIP program with cashback up to 15%",
  ],
  cons: [
    "High wagering requirements and bonus exclusions",
    "Withdrawal limits tied to VIP level",
    "No weekend withdrawal processing",
    "Offshore (non‑GGL) licence for Germany",
  ],
};

function SGCasinoReview() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 20px" }}>
      {/* HEADER */}
      <section style={{ marginBottom: "48px" }}>
        <h1 style={titleStyle}>SG Casino Review</h1>
        <p style={subtitleStyle}>
          Balanced review of bonuses, wagering, withdrawals and real player feedback.
        </p>

        <p style={{ fontSize: "17px", lineHeight: "1.7", maxWidth: "850px" }}>
          SG Casino is a Rabidi-group, Curacao-licensed casino and sportsbook aimed at international players including Germany. It offers strong features such as an extensive game library and live betting, but comes with demanding wagering terms and some regulatory trade-offs.
        </p>
        <p style={{ fontSize: "17px", lineHeight: "1.7", maxWidth: "850px" }}>
          Designed for players who appreciate a hybrid casino and sportsbook experience, SG Casino combines polished design with a wide payment coverage, though bonus restrictions and withdrawal limits require careful consideration.
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
            <div>100% up to €500 + 200 Free Spins</div>
          </div>
          <div>
            <strong>Min deposit</strong>
            <div>€20</div>
          </div>
          <div>
            <strong>Wagering</strong>
            <div>35x deposit + bonus / 40x FS winnings</div>
          </div>
          <div>
            <strong>Casino type</strong>
            <div>Casino + Sportsbook (Curacao licence)</div>
          </div>
        </div>
      </section>

      <ProsCons data={prosCons} />

      {/* What SG Casino does well */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>What SG Casino does well</h2>

        <p style={{ maxWidth: "800px", lineHeight: "1.7" }}>
          SG Casino offers a large and diverse library of slot games complemented by a strong live casino powered primarily by Evolution Gaming. The integration of a sportsbook alongside casino games provides a seamless hybrid experience for players who enjoy both.
        </p>
        <p style={{ maxWidth: "800px", lineHeight: "1.7" }}>
          The platform's modern and polished design enhances usability, while smooth mobile web performance ensures gaming on the go is hassle-free and enjoyable.
        </p>
      </section>

      {/* Where SG Casino falls short */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Where SG Casino falls short</h2>

        <p style={{ maxWidth: "800px", lineHeight: "1.7" }}>
          The 35x and 40x wagering requirements can significantly impact bonus value and withdrawal potential. Additionally, some popular payment methods like Skrill and Neteller are excluded from bonus eligibility, limiting flexibility.
        </p>
        <p style={{ maxWidth: "800px", lineHeight: "1.7" }}>
          Withdrawal caps tied to VIP levels and the absence of weekend withdrawal processing may cause delays. Furthermore, the Curacao licence means the casino operates offshore relative to German regulation, which may concern players prioritizing local compliance.
        </p>
      </section>

      {/* STREET VOICE */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Street Voice – reviews with no filter</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr 1fr",
            gap: "14px",
            marginTop: "16px",
          }}
        >
          <div
            style={{
              borderRadius: "16px",
              border: "1px solid rgba(0,0,0,0.08)",
              padding: "16px",
              background: "#fff",
            }}
          >
            <div style={{ fontWeight: 900, marginBottom: "10px", fontSize: "16px" }}>
              Average user rating
            </div>
            <div style={{ fontSize: "28px", fontWeight: 900, marginBottom: "6px" }}>
              6.8 out of 10
            </div>
            <div style={{ color: "#666", lineHeight: "1.6", fontSize: "14px" }}>
              Based on recurring sentiment patterns across major review platforms.
            </div>
          </div>

          <div
            style={{
              borderRadius: "16px",
              border: "1px solid rgba(0,0,0,0.08)",
              padding: "16px",
              background: "#fff",
            }}
          >
            <div style={{ fontWeight: 900, marginBottom: "10px", fontSize: "16px" }}>
              Most commonly praised
            </div>
            <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: "1.7" }}>
              <li>Large game library and modern interface</li>
              <li>Strong live casino powered by Evolution</li>
              <li>Hybrid casino + sportsbook setup</li>
              <li>Wide payment options and 24/7 live chat</li>
            </ul>
          </div>

          <div
            style={{
              borderRadius: "16px",
              border: "1px solid rgba(0,0,0,0.08)",
              padding: "16px",
              background: "#fff",
            }}
          >
            <div style={{ fontWeight: 900, marginBottom: "10px", fontSize: "16px" }}>
              Most common complaints
            </div>
            <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: "1.7" }}>
              <li>High wagering requirements on bonuses</li>
              <li>Withdrawal limits tied to VIP level</li>
              <li>No weekend withdrawal processing</li>
              <li>Mixed experiences with support and payouts</li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: "12px", fontSize: "13px", color: "#666", lineHeight: "1.6" }}>
          Note: This section summarizes recurring user feedback patterns and does not represent a single review or isolated case.
        </div>
      </section>

      {/* VERDICT */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Our verdict</h2>

        <p style={{ fontSize: "17px", lineHeight: "1.7", maxWidth: "850px" }}>
          SG Casino is a solid choice for experienced players comfortable with higher wagering requirements and offshore licensing. Its hybrid casino and sportsbook offering suits those seeking variety and live game depth. However, it may not be ideal for low-risk or regulation-first German-speaking users who prefer stricter compliance and faster withdrawals.
        </p>

        <p style={{ marginTop: "16px", fontWeight: "600" }}>
          👉 A good pick for slot players. Less ideal for fast-withdrawal hunters.
        </p>
      </section>
    </div>
  );
}

export default SGCasinoReview;