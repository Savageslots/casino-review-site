function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #e5e5e5",
        padding: "24px 40px",
        background: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          fontSize: 14,
          color: "#666",
        }}
      >
        © {new Date().getFullYear()} SavageSlots. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;