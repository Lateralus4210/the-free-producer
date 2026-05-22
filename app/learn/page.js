import Link from "next/link";
import { PRODUCTS } from "@/lib/products";

export const metadata = {
  title: "Articles & Digital Products — Compass for Music Producers",
};

function CoachingPlug() {
  return (
    <div style={{
      border: '1px solid #1a1a1a', borderRadius: 16,
      padding: '28px 24px', textAlign: 'center',
      margin: '40px 0',
    }}>
      <p style={{
        fontFamily: 'var(--font-montserrat), sans-serif',
        fontSize: 10, fontWeight: 600, letterSpacing: '0.18em',
        textTransform: 'uppercase', color: '#444', marginBottom: 12,
      }}>
        Compass for Music Producers
      </p>
      <p style={{
        fontFamily: 'var(--font-dm-sans), sans-serif',
        fontSize: 15, color: '#bbb', lineHeight: 1.8, marginBottom: 20,
      }}>
        If anything in your production feels stagnant — something you haven&apos;t been able
        to move — that&apos;s a sign we can help.
      </p>
      <Link
        href="/work-with-us"
        style={{
          display: 'inline-block', background: '#F0C400', color: '#000',
          fontSize: 13, fontWeight: 700, padding: '11px 28px',
          borderRadius: 50, textDecoration: 'none', letterSpacing: '0.06em',
        }}
      >
        Work with us →
      </Link>
    </div>
  );
}

export default function LearnIndex() {
  return (
    <>
      <style>{`
        .grid-card {
          border: 1px solid #1a1a1a;
          border-radius: 14px;
          padding: 20px 18px 22px;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
          transition: border-color 0.15s;
        }
        .grid-card:hover { border-color: #333; }
        .grid-card-featured {
          border: 1px solid #2a2a2a;
          border-radius: 14px;
          padding: 22px 22px 24px;
          text-decoration: none;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          transition: border-color 0.15s;
          grid-column: 1 / -1;
        }
        .grid-card-featured:hover { border-color: #F0C40033; }
      `}</style>

      <div style={{ minHeight: '100dvh', background: '#000', color: '#fff', display: 'flex', flexDirection: 'column' }}>
        <div style={{ maxWidth: 620, margin: '0 auto', width: '100%', padding: '56px 24px 80px' }}>

          <p style={{
            fontFamily: 'var(--font-montserrat), sans-serif',
            fontSize: 10, fontWeight: 600, letterSpacing: '0.2em',
            textTransform: 'uppercase', color: '#444',
            textAlign: 'center', marginBottom: 10,
          }}>
            Compass for Music Producers
          </p>
          <h1 style={{
            fontFamily: 'var(--font-libre), Georgia, serif',
            fontSize: 'clamp(26px, 5vw, 40px)',
            fontWeight: 700, textAlign: 'center', color: '#fff',
            marginBottom: 48, lineHeight: 1.2,
          }}>
            Articles &amp; Digital Products
          </h1>

          {/* ── GRID ── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 12,
          }}>

            {/* Digital product cards */}
            {PRODUCTS.map((product) => (
              <Link
                key={product.slug}
                href={`/digital-products/${product.slug}`}
                className="grid-card"
              >
                <p style={{
                  fontFamily: 'var(--font-montserrat), sans-serif',
                  fontSize: 9, fontWeight: 600, letterSpacing: '0.16em',
                  textTransform: 'uppercase', color: '#444',
                }}>
                  {product.area}
                </p>
                <p style={{
                  fontFamily: 'var(--font-libre), Georgia, serif',
                  fontSize: 16, fontWeight: 700, color: '#fff', lineHeight: 1.25,
                }}>
                  {product.name}
                </p>
                <p style={{
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontSize: 12, color: '#555', lineHeight: 1.55, marginTop: 2,
                }}>
                  {product.tagline}
                </p>
                <p style={{
                  fontFamily: 'var(--font-libre), Georgia, serif',
                  fontSize: 17, fontWeight: 700,
                  color: product.buyUrl ? '#F0C400' : '#333',
                  marginTop: 8,
                }}>
                  {product.buyUrl ? `$${product.price}` : 'Soon'}
                </p>
              </Link>
            ))}

            {/* The Skill Tree — featured full-width card */}
            <Link href="/the-skill-tree" className="grid-card-featured">
              <div>
                <p style={{
                  fontFamily: 'var(--font-montserrat), sans-serif',
                  fontSize: 9, fontWeight: 600, letterSpacing: '0.16em',
                  textTransform: 'uppercase', color: '#555', marginBottom: 6,
                }}>
                  Article
                </p>
                <p style={{
                  fontFamily: 'var(--font-libre), Georgia, serif',
                  fontSize: 20, fontWeight: 700, color: '#F0C400',
                  lineHeight: 1.2, marginBottom: 8,
                }}>
                  The Compass Skill Tree
                </p>
                <p style={{
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontSize: 14, color: '#666', lineHeight: 1.6,
                }}>
                  An introduction to all 10 areas of the Compass framework — what each one means
                  for your production journey.
                </p>
              </div>
              <span style={{ color: '#444', fontSize: 20, flexShrink: 0 }}>→</span>
            </Link>

          </div>

          <CoachingPlug />

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
