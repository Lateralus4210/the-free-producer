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
        .bt em { font-style: italic; }
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
            background: '#111111',
            borderRadius: 14, padding: '28px 24px',
            maxWidth: 460, marginLeft: 0, marginRight: 'auto',
            marginTop: 40, marginBottom: 20,
          }}>
            <p className="bt" style={{ color: '#e8e8e8', textAlign: 'left' }}>
              Think about the last time you went to sleep amped from a great session making music.
              Or the last time you woke up and knew that the day was going to be dedicated to
              nothing but diving into your music craft. The more successful you are as a producer,
              the more often you have those days.
            </p>
          </div>

          {/* ── BLOCK 2: PAIN — center card, yellow text ── */}
          <div style={{
            background: '#0b0b1a',
            borderRadius: 14, padding: '28px 24px',
            maxWidth: 490, margin: '0 auto 20px',
          }}>
            <p className="bt" style={{ color: '#F0C400', textAlign: 'center' }}>
              If it&apos;s been a while since you&apos;ve felt that way, it&apos;s not because
              you&apos;re worse at producing. It&apos;s because you became aware of more skills
              that were necessary to propel yourself forward.
            </p>
          </div>

          {/* ── STORY BLOCKS ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 20 }}>
            <div className="story-left">
              <p className="bt" style={{ color: '#ddd' }}>
                &ldquo;Six years ago I had 600 songs and hadn&apos;t released a single one.
                Figuring out why that was gave birth to the Compass framework.&rdquo;
              </p>
              <p className="story-attr">Zach Burger — RemEmber</p>
            </div>
            <div className="story-right">
              <p className="bt" style={{ color: '#ddd' }}>
                &ldquo;I spent 10 years wanting to make music for video games, then finally
                spent 6 years actually making music for video games. I put the knowledge I
                gained into the Compass framework.&rdquo;
              </p>
              <p className="story-attr">Skyler Newsome — Circles in the Sky</p>
            </div>
          </div>

          {/* ── BLOCK 3: SOLUTION — right card, white text, yellow on em ── */}
          <div style={{
            background: '#160e00',
            borderRadius: 14, padding: '28px 24px',
            maxWidth: 460, marginLeft: 'auto', marginRight: 0,
            marginBottom: 20,
          }}>
            <div style={{
              display: 'flex', flexDirection: 'column', gap: 14,
              textAlign: 'right',
            }}>
              <p className="bt" style={{ color: '#e8e8e8' }}>
                <em style={{ color: '#F0C400' }}>Compass for Music Producers</em> is a gamified
                framework developed by producers{' '}
                Zach Burger (<em style={{ color: '#F0C400' }}>RemEmber</em>) and{' '}
                Skyler Newsome (<em style={{ color: '#F0C400' }}>Circles in the Sky</em>).
              </p>
              <p className="bt" style={{ color: '#e8e8e8' }}>
                Think about it like a{' '}
                <strong style={{ color: '#F0C400', fontWeight: 700 }}>skill tree</strong>{' '}
                for{' '}
                <strong style={{ color: '#F0C400', fontWeight: 700 }}>music producers</strong>.
              </p>
              <p className="bt" style={{ color: '#e8e8e8' }}>
                Every producer will have a different profile. Seeing your scores in each of the
                10 areas is meant to encourage you in your strong suits, and reveal which area
                needs the most work: what we call your{' '}
                <strong style={{ color: '#F0C400', fontWeight: 700 }}>North Star</strong>.
              </p>
            </div>
          </div>

          {/* ── BLOCK 4: INACTION — left card, yellow text ── */}
          <div style={{
            background: '#111111',
            borderRadius: 14, padding: '28px 24px',
            maxWidth: 460, marginLeft: 0, marginRight: 'auto',
            marginBottom: 20,
          }}>
            <p className="bt" style={{ color: '#F0C400', textAlign: 'left' }}>
              If we hadn&apos;t taken the initiative to build out a{' '}
              <strong style={{ color: '#fff', fontWeight: 700 }}>system</strong>{' '}
              for our music careers, we would still be sitting on hundreds of tracks and
              floating through life with a deep sense of being unfulfilled by our musical
              endeavors; feeling like we hadn&apos;t accomplished much at all.
            </p>
          </div>

          {/* ── BLOCK 5: WHAT WE BUILT — center card, white text ── */}
          <div style={{
            background: '#0b0b1a',
            borderRadius: 14, padding: '28px 24px',
            maxWidth: 490, margin: '0 auto 48px',
          }}>
            <p className="bt" style={{ color: '#e8e8e8', textAlign: 'center' }}>
              With these years of experience, Skyler and Zach have built a suite of digital
              products and a coaching framework called{' '}
              <strong style={{ color: '#F0C400', fontWeight: 700 }}>Compass</strong>{' '}
              that uses a 10-area Skill Tree to figure out where the &ldquo;stuck&rdquo; piece
              is, and get it moving so producers can start feeling invigorated by making music
              again.
            </p>
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
