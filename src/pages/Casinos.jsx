export default function Casinos() {
  return (
    <main style={pageStyle}>
      <h1>Best Online Casinos</h1>
      <p style={{ color: "#555", marginBottom: 32 }}>
        Hand-picked and reviewed online casinos.
      </p>

      {/* тут далі буде список CasinoCard */}
    </main>
  );
}

const pageStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "40px",
};