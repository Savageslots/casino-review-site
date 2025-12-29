import logo from "../assets/logo.png";
import CasinoCard from "../components/CasinoCard";

export default function Home() {
  return (
    <main style={pageStyle}>
      {/* HERO */}
      <section style={heroStyle}>
        <img
          src={logo}
          alt="SavageSlots"
          style={logoStyle}
        />

        <h1 style={titleStyle}>
          Best Online Casinos 2025
        </h1>

        <p style={subtitleStyle}>
          Compare the best online casinos, bonuses and payment methods.
        </p>
      </section>

      {/* CASINO LIST */}
      <section style={listStyle}>
        <CasinoCard
          rank={1}
          name="Savage Casino"
          bonus="100% bonus up to $500"
          rating="9.8"
        />

        <CasinoCard
          rank={2}
          name="Golden Lion Casino"
          bonus="200% bonus up to $300"
          rating="9.5"
        />

        <CasinoCard
          rank={3}
          name="Lucky Spin Casino"
          bonus="50 Free Spins"
          rating="9.2"
        />
      </section>
    </main>
  );
}

/* ===== styles ===== */

const pageStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "32px 24px 40px",
};

const heroStyle = {
  textAlign: "center",
  marginBottom: 56,
};

const logoStyle = {
  height: 176, // x2 size, як ти просив
  marginBottom: 24,
};

const titleStyle = {
  fontSize: 44,
  fontWeight: 700,
  marginBottom: 14,
};

const subtitleStyle = {
  fontSize: 18,
  color: "#555",
  maxWidth: 680,
  margin: "0 auto",
  lineHeight: 1.5,
};

const listStyle = {
  display: "grid",
  gap: 20,
};