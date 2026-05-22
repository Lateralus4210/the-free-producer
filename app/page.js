import Link from "next/link";

export const metadata = {
  title: "Compass for Music Producers",
  description: "Figure out what's stuck in your music production journey and start moving it.",
};

export default function Home() {
  return (
    <>
      <style>{`
        .lp-section { padding: 72px 0; border-top: 1px solid #111; }
        .lp-label {
          font-family: var(--font-montserrat), sans-serif;
          font-size: 10px; font-weight: 600;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: #444; margin-bottom: 14px;
        }
        .lp-heading {
          font-family: var(--font-libre), Georgia, serif;
          font-size: clamp(26px, 5vw, 40px);
          font-weight: 700; line-height: 1.15; color: #fff; margin-bottom: 24px;
        }
        .lp-body {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 16px; line-height: 1.8; color: #aaa;
          display: flex; flex-direction: column; gap: 18px;
        }
        @media (min-width: 640px) { .lp-body { font-size: 17px; } }
        .lp-body em { font-style: italic; color: #ddd; }
        .lp-body strong { font-weight: 700; color: #fff; }
        .quote-block {
          border-left: 2px solid #F0C400;
          padding-left: 20px; margin: 4px 0;
        }
        .cta-pill {
          display: inline-block; background: #F0C400; color: #000;
          font-size: 14px; font-weight: 700; padding: 14px 40px;
          border-radius: 50px; text-decoration: none; letter-spacing: 0.06em;
          transition: transform 0.15s, box-shadow 0.15s;
          box-shadow: 0 0 20px #F0C40018;
        }
        .cta-pill:hover { transform: scale(1.03); box-shadow: 0 0 32px #F0C40045; }
      `}</style>

      <div style={{ background: '#000', color: '#fff' }}>
        <div style={{ maxWidth: 620, margin: '0 auto', width: '100%', padding: '0 24px' }}>

          {/* ── SECTION 1: HERO ── */}
          <section style={{ padding: '88px 0 72px', textAlign: 'center' }}>
            <p className="lp-label">Compass for Music Producers</p>
            <h1 style={{
              fontFamily: 'var(--font-libre), Georgia, serif',
              fontSize: 'clamp(40px, 8vw, 72px)',
              fontWeight: 700, lineHeight: 1, color: '#F0C400',
              marginBottom: 32, letterSpacing: '0.04em',
            }}>
              [Needs copy]
            </h1>
            <div className="lp-body" style={{ maxWidth: 500, margin: '0 auto' }}>
              <p>[Needs copy]</p>
            </div>
          </section>

          {/* ── SECTION 2: WHO WE ARE ── */}
          <section className="lp-section">
            <p className="lp-label">Who we are</p>
            <h2 className="lp-heading">[Needs copy]</h2>
            <div className="lp-body">
              <div className="quote-block">
                <p>&ldquo;Six years ago I had 600 songs and hadn&apos;t released a single one.&rdquo;</p>
                <p style={{
                  fontSize: 13, color: '#555', marginTop: 8,
                  fontFamily: 'var(--font-montserrat)', letterSpacing: '0.05em', textTransform: 'uppercase',
                }}>
                  — Zach Burger, RemEmber
                </p>
              </div>
              <p>[Needs copy — Skyler&apos;s story]</p>
              <p>[Needs copy — bridge to what we built]</p>
            </div>
          </section>

          {/* ── SECTION 3: OUR SOLUTION ── */}
          <section className="lp-section">
            <p className="lp-label">Our solution</p>
            <h2 className="lp-heading">The Compass Framework</h2>
            <div className="lp-body">
              <p>
                <em>Compass for Music Producers</em> is a framework built by producers{' '}
                Zach Burger (<em>RemEmber</em>) and Skyler Newsome (<em>Circles in the Sky</em>).
              </p>
              <p>
                Think of it like a <strong>skill tree</strong> for music producers. Every producer
                has a different profile. Seeing your scores across <strong>10 areas</strong> is
                meant to encourage you in your strong suits — and reveal your{' '}
                <strong>North Star</strong>: the one area that, if you focused on it, would move
                everything else forward.
              </p>
              <p>[Needs copy]</p>
            </div>
          </section>

          {/* ── SECTION 4: INACTIVITY COST ── */}
          <section className="lp-section">
            <p className="lp-label">The cost of doing nothing</p>
            <h2 className="lp-heading">[Needs copy]</h2>
            <div className="lp-body">
              <p>[Needs copy]</p>
            </div>
          </section>

          {/* ── SECTION 5: RESOURCES BLURB ── */}
          <section className="lp-section" style={{ paddingBottom: 96 }}>
            <p className="lp-label">Articles &amp; Digital Products</p>
            <h2 className="lp-heading">[Needs copy]</h2>
            <div className="lp-body" style={{ marginBottom: 40 }}>
              <p>[Needs copy]</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Link href="/learn" className="cta-pill">
                Explore articles &amp; products →
              </Link>
            </div>
          </section>

        </div>

        {/* Footer */}
        <footer style={{
          fontFamily: 'var(--font-montserrat), sans-serif',
          fontSize: 9, fontWeight: 600, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: '#333',
          textAlign: 'center', padding: '0 0 24px',
          display: 'flex', flexDirection: 'column', gap: 3,
        }}>
          <div>© {new Date().getFullYear()} ZMT LLC</div>
          <div>Compass for Music Producers</div>
        </footer>
      </div>
    </>
  );
}
