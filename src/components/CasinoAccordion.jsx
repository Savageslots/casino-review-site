import { Link } from "react-router-dom";

export default function CasinoAccordion({
  index,
  casino,
  isOpen,
  onToggle,
}) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        marginBottom: 24,
        boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
        overflow: "hidden",
      }}
    >
      {/* HEADER (always visible) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "60px 1fr auto",
          alignItems: "center",
          gap: 24,
          padding: 24,
        }}
      >
        {/* RANK + TOGGLE */}
        <div
          onClick={onToggle}
          style={{
            cursor: "pointer",
            fontSize: 22,
            fontWeight: 800,
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          #{index}
          <span style={{ fontSize: 14, color: "#888" }}>
            {isOpen ? "▲" : "▼"}
          </span>
        </div>

        {/* MAIN INFO */}
        <div>
          <h2 style={{ margin: 0 }}>{casino.name}</h2>
          <p style={{ margin: "6px 0", color: "#666" }}>
            {casino.description}
          </p>
          <strong>{casino.bonus}</strong>
        </div>

        {/* RATING */}
        <div
          style={{
            fontSize: 20,
            fontWeight: 700,
            background: "#f5f5f5",
            padding: "10px 14px",
            borderRadius: 10,
          }}
        >
          ⭐ {casino.rating}
        </div>
      </div>

      {/* EXPANDABLE CONTENT */}
      {isOpen && (
        <div
          style={{
            borderTop: "1px solid #eee",
            padding: "24px",
            background: "#fafafa",
          }}
        >
          {/* DETAILS GRID */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 16,
              marginBottom: 24,
            }}
          >
            {casino.details.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  padding: "14px 16px",
                  borderRadius: 12,
                  display: "flex",
                  gap: 12,
                  alignItems: "center",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
                }}
              >
                <span style={{ fontSize: 20 }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: 13, color: "#777" }}>
                    {item.label}
                  </div>
                  <div style={{ fontWeight: 600 }}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* LINK TO FULL REVIEW */}
          {casino.reviewLink && (
            <Link
              to={casino.reviewLink}
              style={{
                display: "inline-block",
                marginTop: 8,
                fontWeight: 600,
                color: "#d6453d",
                textDecoration: "none",
              }}
            >
              Read full {casino.name} review →
            </Link>
          )}
        </div>
      )}
    </div>
  );
}