import { useState } from "react";
import CasinoInfoGrid from "./CasinoInfoGrid";

function CasinoAccordion({ index, name, isOpen, onToggle, content }) {
  return (
    <div style={wrapperStyle}>
      {/* HEADER */}
      <div style={headerStyle} onClick={onToggle}>
        <div style={leftStyle}>
          <strong style={{ marginRight: 12 }}>#{index}</strong>
          <span>{name}</span>
        </div>

        <div style={arrowStyle}>{isOpen ? "▼" : "▶"}</div>
      </div>

      {/* CONTENT */}
      {isOpen && (
        <div style={contentStyle}>
          <CasinoInfoGrid
            title="Bonus Offer Details"
            items={content.bonusDetails}
          />

          <section style={sectionStyle}>
            <h3>About {name}</h3>
            <p>{content.description}</p>
          </section>

          <section style={sectionStyle}>
            <h3>Our Rating</h3>
            <p>
              <strong>Rating:</strong> {content.rating} / 10
            </p>
          </section>
        </div>
      )}
    </div>
  );
}

export default CasinoAccordion;

/* ===== styles ===== */

const wrapperStyle = {
  border: "1px solid #e6e6e6",
  borderRadius: 12,
  marginBottom: 16,
  overflow: "hidden",
};

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "18px 24px",
  cursor: "pointer",
  background: "#fafafa",
  fontSize: 18,
  fontWeight: 600,
};

const leftStyle = {
  display: "flex",
  alignItems: "center",
};

const arrowStyle = {
  fontSize: 18,
};

const contentStyle = {
  padding: "24px",
  background: "#fff",
};

const sectionStyle = {
  marginBottom: 32,
};