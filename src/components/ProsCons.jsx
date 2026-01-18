export default function ProsCons({ pros = [], cons = [] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "32px",
      }}
    >
      {/* PROS */}
      <div>
        <h3 style={{ marginBottom: "12px", color: "#1f8f5f" }}>Pros</h3>
        <div style={{ display: "grid", gap: "10px" }}>
          {pros.map((item, i) => (
            <div
              key={i}
              style={{
                background: "#f1fdf6",
                border: "1px solid #cceede",
                padding: "14px 16px",
                borderRadius: "10px",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* CONS */}
      <div>
        <h3 style={{ marginBottom: "12px", color: "#c0392b" }}>Cons</h3>
        <div style={{ display: "grid", gap: "10px" }}>
          {cons.map((item, i) => (
            <div
              key={i}
              style={{
                background: "#fff5f5",
                border: "1px solid #f3cccc",
                padding: "14px 16px",
                borderRadius: "10px",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}