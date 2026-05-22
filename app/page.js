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
        .blurb { font-size: 15px; font-family: var(--font-dm-sans), sans-serif; }
        @media (min-width: 640px) { .blurb { font-size: 17px; } }
        .blurb em { font-style: italic; color: #fff; }
        .blurb strong { font-weight: 700; color: #fff; }
        .story-left {
          margin-left: -24px;
          padding: 22px 20px 22px 24px;
          border-left: 3px solid #F0C400;
          background: #070707;
          border-radius: 0 10px 10px 0;
        }
        .story-right {
          margin-right: -24px;
          padding: 22px 24px 22px 20px;
          border-right: 3px solid #F0C400;
          background: #070707;
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

          {/* ── HEADER (unchanged from prior version) ── */}
          <div style={{ textAlign: 'center', marginBottom: 16 }}>
            <p style={{
              fontFamily: 'var(--font-montserrat), sans-serif',
              fontSize: 'clamp(14px, 3vw, 20px)',
              fontWeight: 600, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: '#888',
              marginBottom: 8,
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

          {/* ── BLOCK 1: ASPIRATIONAL ── */}
          <div className="blurb" style={{
            display: 'flex', flexDirection: 'column', gap: 16,
            color: '#ccc', lineHeight: 1.75, marginTop: 32, marginBottom: 40,
          }}>
            <p>
              Think about the last time you went to sleep amped from a great session making music.
              Or the last time you woke up and knew that the day was going to be dedicated to
              nothing but diving into your music craft. The more successful you are as a producer,
              the more often you have those days.
            </p>
          </div>

          {/* ── BLOCK 2: PAIN + STORIES ── */}
          <div className="blurb" style={{
            display: 'flex', flexDirection: 'column', gap: 24,
            color: '#ccc', lineHeight: 1.75, marginBottom: 40,
          }}>
            <p>
              If it&apos;s been a while since you&apos;ve felt that way, it&apos;s not because
              you&apos;re worse at producing. It&apos;s because you became aware of more skills
              that were necessary to propel yourself forward.
            </p>

            <div className="story-left">
              <p style={{ color: '#bbb', lineHeight: 1.75 }}>
                &ldquo;Six years ago I had 600 songs and hadn&apos;t released a single one.
                Figuring out why that was gave birth to the Compass framework.&rdquo;
              </p>
              <p className="story-attr">Zach Burger — RemEmber</p>
            </div>

            <div className="story-right">
              <p style={{ color: '#bbb', lineHeight: 1.75 }}>
                &ldquo;I spent 10 years wanting to make music for video games, then finally
                spent 6 years actually making music for video games. I put the knowledge I
                gained into the Compass framework.&rdquo;
              </p>
              <p className="story-attr">Skyler Newsome — Circles in the Sky</p>
            </div>
          </div>

          {/* ── BLOCK 3: SOLUTION (framework copy from prior version) ── */}
          <div className="blurb" style={{
            display: 'flex', flexDirection: 'column', gap: 16,
            color: '#ccc', lineHeight: 1.75, marginBottom: 40,
          }}>
            <p>
              <em>Compass for Music Producers</em> is a gamified framework developed by
              producers <span style={{ whiteSpace: 'nowrap' }}>Zach Burger (<em>RemEmber</em>)</span> and{' '}
              <span style={{ whiteSpace: 'nowrap' }}>Skyler Newsome (<em>Circles in the Sky</em>).</span>
            </p>
            <p>
              Think about it like a <strong>skill tree</strong> for <strong>music producers</strong>.
            </p>
            <p>
              Every producer will have a different profile. Seeing your scores in each of the
              10 areas is meant to encourage you in your strong suits, and reveal which area
              needs the most work: what we call your <strong>North Star</strong>.
            </p>
          </div>

          {/* ── BLOCK 4: INACTION COST ── */}
          <div className="blurb" style={{
            display: 'flex', flexDirection: 'column', gap: 16,
            color: '#ccc', lineHeight: 1.75, marginBottom: 40,
          }}>
            <p>
              If we hadn&apos;t taken the initiative to build out a <strong>system</strong> for our
              music careers, we would still be sitting on hundreds of tracks and floating through
              life with a deep sense of being unfulfilled by our musical endeavors; feeling like
              we hadn&apos;t accomplished much at all.
            </p>
          </div>

          {/* ── BLOCK 5: WHAT WE'VE BUILT ── */}
          <div className="blurb" style={{
            display: 'flex', flexDirection: 'column', gap: 16,
            color: '#ccc', lineHeight: 1.75, marginBottom: 48,
          }}>
            <p>
              With these years of experience, Skyler and Zach have built a suite of digital
              products and a coaching framework called Compass that uses a 10-area Skill Tree
              to figure out where the &ldquo;stuck&rdquo; piece is, and get it moving so
              producers can start feeling invigorated by making music again.
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
