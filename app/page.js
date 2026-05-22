import Link from "next/link";

export const metadata = {
  title: "Compass for Music Producers",
  description: "Figure out what's stuck in your music production journey and start moving it.",
};

export default function Home() {
  return (
    <>
      <style>{`
        .learn-btn:hover { transform: scale(1.03); box-shadow: 0 0 32px #F0C40045; }
        .moon-bird { display: block; margin: 0 auto 12px; opacity: 0.55; width: 140px; }
        @media (min-width: 640px) { .moon-bird { width: 210px; } }
        .bt {
          font-size: 15px;
          font-family: var(--font-dm-sans), sans-serif;
          line-height: 1.78;
        }
        @media (min-width: 640px) { .bt { font-size: 17px; } }
        .story-left {
          margin-left: -24px;
          padding: 22px 20px 22px 24px;
          border-left: 3px solid #F0C400;
          background: #080808;
          border-radius: 0 10px 10px 0;
        }
        .story-right {
          margin-right: -24px;
          padding: 22px 24px 22px 20px;
          border-right: 3px solid #F0C400;
          background: #080808;
          border-radius: 10px 0 0 10px;
          text-align: right;
        }
        .story-attr {
          font-family: var(--font-montserrat), sans-serif;
          font-size: 10px; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #444; margin-top: 10px;
        }
      `}</style>

      <div style={{ minHeight: '100dvh', background: '#000', color: '#fff', display: 'flex', flexDirection: 'column' }}>
        <div style={{ maxWidth: 580, margin: '0 auto', width: '100%', padding: '56px 24px 56px' }}>

          {/* ── HEADER ── */}
          <div style={{ textAlign: 'center', marginBottom: 16 }}>
            <p style={{
              fontFamily: 'var(--font-montserrat), sans-serif',
              fontSize: 'clamp(14px, 3vw, 20px)',
              fontWeight: 600, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: '#888', marginBottom: 8,
            }}>
              Your Music Production
            </p>
            <p style={{
              fontFamily: 'var(--font-libre), Georgia, serif',
              fontSize: 'clamp(38px, 7vw, 68px)',
              fontWeight: 700, lineHeight: 1, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: '#F0C400',
            }}>
              Compass
            </p>
          </div>
          <img src="/moon-bird.png" alt="" aria-hidden="true" className="moon-bird" />

          {/* ── BLOCK 1: ASPIRATIONAL — left card, white text ── */}
          <div style={{
            background: '#111111', borderRadius: 14, padding: '28px 24px',
            maxWidth: 460, marginLeft: 0, marginRight: 'auto',
            marginTop: 40, marginBottom: 20,
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <p className="bt" style={{ color: '#e8e8e8', fontWeight: 600 }}>
                Remember the last session where you lost track of time.
              </p>
              <p className="bt" style={{ color: '#e8e8e8' }}>
                You were locked in. The ideas were flowing. You went to bed that night actually
                satisfied — not just tired. The best producers in the world have more of those
                days, not fewer. That&apos;s not a coincidence.
              </p>
            </div>
          </div>

          {/* ── BLOCK 2: CORTISOL — center card, yellow text ── */}
          <div style={{
            background: '#0b0b1a', borderRadius: 14, padding: '28px 24px',
            maxWidth: 490, margin: '0 auto 20px',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, textAlign: 'center' }}>
              <p className="bt" style={{ color: '#F0C400', fontWeight: 600 }}>
                So why does it feel like it&apos;s getting harder, not easier?
              </p>
              <p className="bt" style={{ color: '#F0C400' }}>
                You&apos;ve put in the hours. You&apos;ve got tracks; maybe hundreds of them. But
                the more you learn about what &ldquo;good&rdquo; looks like, the more aware you
                become of everything you haven&apos;t figured out yet. The gap between where you
                are and where you want to be feels like it keeps widening.{' '}
                That&apos;s a navigation problem.{' '}
                <span style={{ color: '#fff', fontWeight: 600 }}>You don&apos;t have a compass.</span>
              </p>
            </div>
          </div>

          {/* ── BLOCK 3: SOLUTION — right card, white text ── */}
          <div style={{
            background: '#160e00', borderRadius: 14, padding: '28px 24px',
            maxWidth: 460, marginLeft: 'auto', marginRight: 0,
            marginBottom: 16,
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, textAlign: 'right' }}>
              <p className="bt" style={{ color: '#F0C400', fontWeight: 600 }}>
                Compass is a gamified skill tree built specifically for music producers.
              </p>
              <p className="bt" style={{ color: '#e8e8e8' }}>
                Developed by Zach Burger (<em>RemEmber</em>) and Skyler Newsome (<em>Circles in the Sky</em>),
                Compass maps your production abilities across 10 areas and shows you exactly where
                you&apos;re strong and exactly where you&apos;re stuck. That stuck area is your{' '}
                <strong style={{ color: '#F0C400', fontWeight: 700 }}>North Star</strong>: the one
                thing that, if you moved it, would unlock everything else.
              </p>
              <p className="bt" style={{ color: '#e8e8e8' }}>
                The framework has grown into a community of over 200 producers, a suite of digital
                products, and a coaching program for producers who take their craft seriously enough
                to want real guidance.
              </p>
            </div>
          </div>

          {/* ── STORY BLOCKS — below solution ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
            <div className="story-left">
              <p className="bt" style={{ color: '#ddd' }}>
                &ldquo;Six years ago I had 600 songs and hadn&apos;t released a single one.
                Figuring out why that was gave birth to the Compass framework.&rdquo;
              </p>
              <p className="story-attr">Zach Burger — RemEmber</p>
            </div>
            <div className="story-right">
              <p className="bt" style={{ color: '#ddd' }}>
                &ldquo;I spent 10 years wanting to make music for video games. Then I spent
                6 years actually doing it. Everything I learned went into this.&rdquo;
              </p>
              <p className="story-attr">Skyler Newsome — Circles in the Sky</p>
            </div>
          </div>

          {/* ── BLOCK 4: INACTION — left card, yellow text ── */}
          <div style={{
            background: '#111111', borderRadius: 14, padding: '28px 24px',
            maxWidth: 460, marginLeft: 0, marginRight: 'auto',
            marginBottom: 20,
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <p className="bt" style={{ color: '#F0C400', fontWeight: 600 }}>
                Most producers never figure out what&apos;s actually holding them back.
              </p>
              <p className="bt" style={{ color: '#F0C400' }}>
                They keep making tracks. They keep improving at the things they&apos;re already
                good at. And they drift further from the version of themselves that actually ships
                music, finishes things, and builds a career. The catalog grows. The fulfillment
                doesn&apos;t.
              </p>
            </div>
          </div>

          {/* ── BLOCK 5: RELIEVE TENSION — center card, white text ── */}
          <div style={{
            background: '#0b0b1a', borderRadius: 14, padding: '28px 24px',
            maxWidth: 490, margin: '0 auto 48px',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, textAlign: 'center' }}>
              <p className="bt" style={{ color: '#e8e8e8', fontWeight: 600 }}>
                You don&apos;t have to figure this out alone — and you don&apos;t have to commit
                to anything today.
              </p>
              <p className="bt" style={{ color: '#e8e8e8' }}>
                Start with the free resources. Read the frameworks. See where you actually stand.
                When you&apos;re ready to move faster, coaching is there.
              </p>
            </div>
          </div>

          {/* ── CTA ── */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link
              href="/learn"
              className="learn-btn"
              style={{
                display: 'block', textAlign: 'center',
                background: '#F0C400', color: '#000',
                fontSize: 14, fontWeight: 700, padding: '14px 40px',
                borderRadius: 50, letterSpacing: '0.06em',
                textDecoration: 'none',
                transition: 'transform 0.15s, box-shadow 0.15s',
                boxShadow: '0 0 20px #F0C40018',
              }}
            >
              See more
            </Link>
          </div>

        </div>

        {/* Footer */}
        <div style={{
          marginTop: 'auto',
          fontFamily: 'var(--font-montserrat), sans-serif',
          fontSize: 9, fontWeight: 600, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: '#444',
          textAlign: 'center', paddingBottom: 20,
          display: 'flex', flexDirection: 'column', gap: 3,
        }}>
          <div>© {new Date().getFullYear()} ZMT LLC</div>
          <div>Compass for Music Producers</div>
        </div>
      </div>
    </>
  );
}
