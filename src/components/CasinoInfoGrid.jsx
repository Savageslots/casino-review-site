function CasinoInfoGrid({ title, items }) {
  return (
    <section style={wrapperStyle}>
      <h2 style={titleStyle}>{title}</h2>

      <div style={gridStyle}>
        {items.map((item, index) => (
          <div key={index} style={itemStyle}>
            <div style={iconStyle}>{item.icon}</div>

            <div>
              <div style={labelStyle}>{item.label}</div>
              <div style={valueStyle}>{item.value}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CasinoInfoGrid;

/* ===== styles ===== */

const wrapperStyle = {
  background: "#fff",
  border: "1px solid #e6e6e6",
  borderRadius: 12,
  padding: "28px 32px",
  marginBottom: 40,
};

const titleStyle = {
  fontSize: 24,
  fontWeight: 700,
  marginBottom: 24,
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: 24,
};

const itemStyle = {
  display: "flex",
  alignItems: "flex-start",
  gap: 16,
};

const iconStyle = {
  fontSize: 22,
  lineHeight: "22px",
};

const labelStyle = {
  fontSize: 14,
  fontWeight: 600,
  color: "#111",
  marginBottom: 4,
};

const valueStyle = {
  fontSize: 15,
  color: "#666",
};