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
        © {new Date().getFullYear()} CasinoProsCons. Todos os direitos reservados.
        <p>18+. O jogo envolve risco. <a href="https://www.srij.turismodeportugal.pt/pt/jogo-seguro" target="_blank" rel="noopener noreferrer">Informação sobre jogo responsável — SRIJ</a>.</p>
      </div>
    </footer>
  );
}

export default Footer;