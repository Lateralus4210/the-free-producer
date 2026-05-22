import Link from "next/link";

export const metadata = {
  title: "Thank You — Compass for Music Producers",
};

export default function ThankYou() {
  return (
    <div style={{ minHeight: '100dvh', background: '#000', color: '#fff', display: 'flex', flexDirection: 'column' }}>
      <div style={{ maxWidth: 540, margin: '0 auto', width: '100%', padding: '96px 24px 80px', textAlign: 'center' }}>

        <p style={{
          fontFamily: 'var(--font-montserrat), sans-serif',
          fontSize: 10, fontWeight: 600, letterSpacing: '0.2em',
          textTransform: 'uppercase', color: '#444', marginBottom: 16,
        }}>
          Purchase confirmed
        </p>
        <h1 style={{
          fontFamily: 'var(--font-libre), Georgia, serif',
          fontSize: 'clamp(36px, 7vw, 58px)',
          fontWeight: 700, color: '#F0C400',
          marginBottom: 24, lineHeight: 1.05,
        }}>
          You&apos;re in.
        </h1>
        <p style={{
          fontFamily: 'var(--font-dm-sans), sans-serif',
          fontSize: 16, color: '#e0e0e0', lineHeight: 1.8, marginBottom: 16,
        }}>
          Check your email — your download link is on its way.
        </p>
        <p style={{
          fontFamily: 'var(--font-dm-sans), sans-serif',
          fontSize: 15, color: '#aaa', lineHeight: 1.8, marginBottom: 72,
        }}>
          Take some time with it. If anything in the reading resonates — a section that feels
          particularly sharp or a gap you hadn&apos;t quite named before — that&apos;s usually
          the sign that a conversation would be worth having.
        </p>

        {/* Cross-sell to coaching */}
        <div style={{
          border: '1px solid #1a1a1a', borderRadius: 16,
          padding: '36px 28px', textAlign: 'center',
        }}>
          <p style={{
            fontFamily: 'var(--font-montserrat), sans-serif',
            fontSize: 10, fontWeight: 600, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: '#444', marginBottom: 14,
          }}>
            Take it further
          </p>
          <h2 style={{
            fontFamily: 'var(--font-libre), Georgia, serif',
            fontSize: 'clamp(22px, 4vw, 32px)',
            fontWeight: 700, color: '#fff', marginBottom: 16, lineHeight: 1.2,
          }}>
            Win Track by Compass
          </h2>
          <p style={{
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontSize: 15, color: '#aaa', lineHeight: 1.8, marginBottom: 28,
          }}>
            The Compass framework was built from the same foundation as this product.
            Coaching with Compass goes deeper — a live conversation, a producer profile
            built from your Skill Tree scores, and a clear plan for what to focus on next.
          </p>
          <Link
            href="/work-with-us"
            style={{
              display: 'inline-block', background: '#F0C400', color: '#000',
              fontSize: 14, fontWeight: 700, padding: '14px 36px',
              borderRadius: 50, textDecoration: 'none', letterSpacing: '0.06em',
            }}
          >
            Work with us →
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
  );
}
