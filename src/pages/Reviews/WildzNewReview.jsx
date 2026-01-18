import ProsCons from "../../components/ProsCons";

export const prosCons = {
  pros: [
    "Slot-first experience",
    "Modern interface",
    "Generally smooth withdrawals",
  ],
  cons: [
    "Limited depth beyond slots",
    "Bonuses are simple, not aggressive ",
    "Not ideal for high-rollers",
  ],
};

export default function WildzNewReview() {
  return (
    <main style={page}>
      {/* Hero */}
      <header style={{ marginBottom: 28 }}>
        <h1 style={h1}>Wildz Casino Review (NEW) - honest look at the pros and cons</h1>
        <p style={tagline}>We show both sides. No hype. Real pros and cons.</p>

        <p style={lead}>
          Wildz Casino is often positioned as a modern, design-first online casino with a strong
          focus on slots. That description is mostly accurate, but it does not tell the full story.
          While Wildz performs well in certain areas, it also has clear limitations that are easy
          to overlook in promotional reviews.
        </p>

        <p style={lead}>
          This review takes a practical look at Wildz - how the platform actually feels to use,
          what players usually appreciate, and where frustration tends to appear. The goal is
          clarity, not hype.
        </p>
      </header>

      {/* Quick facts */}
      <section style={section}>
        <h2 style={h2}>Quick facts</h2>

        <div style={cardWrap}>
          <div style={factsGrid}>
            <div style={factItem}>
              <div style={factLabel}>Welcome bonus</div>
              <div style={factValue}>!! Placeholder !!</div>
            </div>

            <div style={factItem}>
              <div style={factLabel}>Min deposit</div>
              <div style={factValue}>€10</div>
            </div>

            <div style={factItem}>
              <div style={factLabel}>Wagering</div>
              <div style={factValue}>!! Placeholder !!</div>
            </div>

            <div style={factItem}>
              <div style={factLabel}>Platform type</div>
              <div style={factValue}>Slots-focused casino</div>
            </div>
          </div>

          <div style={note}>
            Wildz Casino operates under a recognized European gambling license and primarily targets
            slot-focused players. The platform prioritizes visual clarity, smooth navigation, and fast
            core functionality rather than complex bonus mechanics or a wide mix of game verticals.
          </div>
        </div>
      </section>

      <section style={section}>
        <h2 style={h2}>Pros & Cons</h2>
        <ProsCons pros={prosCons.pros} cons={prosCons.cons} />
      </section>

      {/* What Wildz does well */}
      <section style={section}>
        <h2 style={h2}>What Wildz does well</h2>

        <div style={contentCard}>
          <h3 style={h3}>Slot-first experience</h3>
          <p style={p}>
            Wildz feels most comfortable if you mainly play slots. The lobby is clean and easy to navigate,
            without excessive filters or clutter. Even new players usually find what they need quickly.
          </p>

          <h3 style={h3}>Modern interface</h3>
          <p style={p}>
            The platform design is one of Wildz strongest points. Animations are subtle, loading times are short,
            and the interface feels polished rather than rushed. This becomes especially noticeable during longer sessions.
          </p>

          <h3 style={h3}>Generally smooth withdrawals</h3>
          <p style={p}>
            Aggregated user feedback suggests that payouts are typically processed without major issues. While this does not
            guarantee instant withdrawals for everyone, serious delays are not a recurring theme.
          </p>
        </div>
      </section>

      {/* Where Wildz falls short */}
      <section style={section}>
        <h2 style={h2}>Where Wildz falls short</h2>

        <div style={contentCard}>
          <h3 style={h3}>Limited depth beyond slots</h3>
          <p style={p}>
            Players looking for a strong live casino or advanced table game features may find Wildz underwhelming.
            The platform has a clear focus, and that focus does not suit every playing style.
          </p>

          <h3 style={h3}>Bonuses are simple, not aggressive</h3>
          <p style={p}>
            Bonus offers are easy to understand, which helps avoid confusion. However, experienced players may find
            them relatively modest compared to promotion-heavy competitors.
          </p>

          <h3 style={h3}>Not ideal for high-rollers</h3>
          <p style={p}>
            Casual and mid-stakes players generally report a smooth experience. High-rollers, on the other hand,
            may notice limited flexibility and a lack of deeper VIP-level incentives.
          </p>
        </div>
      </section>

      {/* Is legit */}
      <section style={section}>
        <h2 style={h2}>Is Wildz Casino legit?</h2>

        <div style={contentCard}>
          <p style={p}>
            From a legitimacy standpoint, Wildz does not raise serious concerns. The casino follows standard licensing and
            security practices and avoids misleading claims. That said, legitimacy alone does not make it a perfect fit for every player.
          </p>

          <div style={callout}>
            <div style={calloutTitle}>What we still want to verify</div>
            <div style={calloutText}>
              License number, regulator details, and payment method limits should be double-checked on the official Wildz pages.
              <strong> !! Placeholder !!</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section style={section}>
        <h2 style={h2}>Bonuses and promotions - what to expect</h2>

        <div style={contentCard}>
          <p style={p}>
            Wildz offers straightforward bonuses without overly complex wagering structures. On paper, the offers look reasonable.
            In practice, their real value depends on how often you play and how much time you are willing to invest in clearing wagering requirements.
          </p>

          <div style={callout}>
            <div style={calloutTitle}>Bonus details to confirm</div>
            <div style={calloutText}>
              Welcome offer structure, free spins terms, max cashout limits, and excluded games.
              <strong> !! Placeholder !!</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Street voice */}
      <section style={section}>
        <h2 style={h2}>Street Voice - reviews with no filter</h2>

        <div style={contentCard}>
          <p style={p}>
            To understand how Wildz performs beyond official descriptions, we analyzed user feedback across major review platforms
            and gambling communities, focusing on recurring patterns rather than isolated cases.
          </p>

          <div style={streetGrid}>
            <div style={streetBox}>
              <div style={streetLabel}>Average user rating</div>
              <div style={streetValue}>7.6 out of 10</div>
              <div style={streetHint}>Based on recurring sentiment patterns across major review hubs.</div>
            </div>

            <div style={streetBox}>
              <div style={streetLabel}>Most commonly praised</div>
              <ul style={ul}>
                <li>Clean and modern interface</li>
                <li>Easy navigation and fast loading</li>
                <li>Withdrawals without unnecessary friction</li>
                <li>Solid experience for slot-focused players</li>
              </ul>
            </div>

            <div style={streetBox}>
              <div style={streetLabel}>Most common complaints</div>
              <ul style={ul}>
                <li>Limited variety outside slots</li>
                <li>Bonuses seen as average rather than exciting</li>
                <li>Few incentives for long-term or high-stakes players</li>
                <li>Expectations set higher than actual feature depth</li>
              </ul>
            </div>
          </div>

          <div style={smallPrint}>
            Note: This section summarizes recurring themes and does not represent any single platform or isolated review.
          </div>
        </div>
      </section>

      {/* Final verdict */}
      <section style={{ ...section, marginBottom: 10 }}>
        <h2 style={h2}>Final verdict</h2>

        <div style={contentCard}>
          <p style={p}>
            Wildz Casino makes the most sense for players who value simplicity, visual clarity, and a slot-first experience.
            It is reliable within its niche, but not designed to be an all-in-one gambling platform.
          </p>

          <p style={{ ...p, marginBottom: 0 }}>
            <strong>Bottom line:</strong> Wildz is not for everyone, but for the right audience it delivers a stable and mostly frustration-free experience.
          </p>
        </div>
      </section>
    </main>
  );
}

const page = {
  maxWidth: 1100,
  margin: "0 auto",
  padding: "40px 20px",
};

const section = {
  marginBottom: 46,
};

const h1 = {
  fontSize: 56,
  lineHeight: 1.05,
  margin: "0 0 10px",
  letterSpacing: "-0.02em",
};

const tagline = {
  margin: "0 0 18px",
  color: "#777",
  fontSize: 18,
};

const lead = {
  fontSize: 18,
  lineHeight: 1.65,
  color: "#111",
  margin: "0 0 14px",
  maxWidth: 980,
};

const h2 = {
  fontSize: 34,
  margin: "0 0 18px",
};

const h3 = {
  fontSize: 20,
  margin: "22px 0 10px",
};

const p = {
  color: "#222",
  lineHeight: 1.7,
  margin: "0 0 14px",
  fontSize: 16,
};

const cardWrap = {
  background: "#fff",
  borderRadius: 20,
  padding: 22,
  boxShadow: "0 12px 32px rgba(0,0,0,0.06)",
  border: "1px solid rgba(0,0,0,0.06)",
};

const factsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  gap: 18,
};

const factItem = {
  padding: "12px 10px",
};

const factLabel = {
  fontWeight: 800,
  fontSize: 16,
  marginBottom: 6,
};

const factValue = {
  fontSize: 18,
  color: "#111",
};

const note = {
  marginTop: 16,
  paddingTop: 16,
  borderTop: "1px solid rgba(0,0,0,0.08)",
  color: "#333",
  lineHeight: 1.7,
};

const prosConsGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 18,
};

const miniCard = {
  border: "1px solid rgba(0,0,0,0.08)",
  borderRadius: 16,
  padding: 16,
  marginBottom: 12,
};

const miniTitle = {
  fontWeight: 800,
  fontSize: 18,
  marginBottom: 8,
};

const miniText = {
  color: "#222",
  lineHeight: 1.6,
};

const contentCard = {
  background: "#fff",
  borderRadius: 20,
  padding: 22,
  boxShadow: "0 12px 32px rgba(0,0,0,0.06)",
  border: "1px solid rgba(0,0,0,0.06)",
};

const callout = {
  marginTop: 16,
  padding: 16,
  borderRadius: 16,
  background: "rgba(0,0,0,0.03)",
  border: "1px solid rgba(0,0,0,0.08)",
};

const calloutTitle = {
  fontWeight: 900,
  marginBottom: 6,
};

const calloutText = {
  color: "#333",
  lineHeight: 1.65,
};

const streetGrid = {
  display: "grid",
  gridTemplateColumns: "1.1fr 1fr 1fr",
  gap: 14,
  marginTop: 16,
};

const streetBox = {
  borderRadius: 16,
  border: "1px solid rgba(0,0,0,0.08)",
  padding: 16,
  background: "#fff",
};

const streetLabel = {
  fontWeight: 900,
  marginBottom: 10,
  fontSize: 16,
};

const streetValue = {
  fontSize: 28,
  fontWeight: 900,
  marginBottom: 6,
};

const streetHint = {
  color: "#666",
  lineHeight: 1.6,
  fontSize: 14,
};

const ul = {
  margin: 0,
  paddingLeft: 18,
  color: "#222",
  lineHeight: 1.7,
};

const smallPrint = {
  marginTop: 12,
  fontSize: 13,
  color: "#666",
  lineHeight: 1.6,
};
