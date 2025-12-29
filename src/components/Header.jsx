import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "#fff",
        borderBottom: "1px solid #e5e5e5",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "16px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LOGO */}
        <NavLink
          to="/"
          style={{
            fontSize: 22,
            fontWeight: 700,
            textDecoration: "none",
            color: "#111",
          }}
        >
          SavageSlots
        </NavLink>

        {/* NAV */}
        <nav style={{ display: "flex", gap: "24px" }}>
          <NavLink to="/casinos" style={navStyle}>
            Casinos
          </NavLink>
          <NavLink to="/bonuses" style={navStyle}>
            Bonuses
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

const navStyle = ({ isActive }) => ({
  textDecoration: "none",
  fontWeight: 500,
  color: isActive ? "#e53935" : "#111",
  borderBottom: isActive ? "2px solid #e53935" : "none",
  paddingBottom: 4,
});

export default Header;