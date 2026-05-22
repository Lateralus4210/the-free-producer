import Link from "next/link";
import { AREA_ORDER, articles, SLUG_ORDER } from "@/lib/articles";
import { PRODUCTS } from "@/lib/products";

const SLUG_LABELS = {
  "what-is":    "What Is It?",
  "low-score":  "Low Score",
  "high-score": "High Score",
};

export const metadata = {
  title: "Articles & Digital Products — Compass for Music Producers",
};

function CoachingPlug() {
  return (
    <div style={{
      border: '1px solid #1a1a1a', borderRadius: 16,
      padding: '28px 24px', textAlign: 'center',
      margin: '48px 0',
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
    <div style={{ minHeight: '100dvh', background: '#000', color: '#fff', display: 'flex', flexDirection: 'column' }}>
      <div style={{ maxWidth: 620, margin: '0 auto', width: '100%', padding: '56px 24px 80px' }}>

        {/* Page header */}
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
          marginBottom: 56, lineHeight: 1.2,
        }}>
          Articles &amp; Digital Products
        </h1>

        {/* ── DIGITAL PRODUCTS ── */}
        <section style={{ marginBottom: 8 }}>
          <p style={{
            fontFamily: 'var(--font-montserrat), sans-serif',
            fontSize: 10, fontWeight: 600, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: '#444', marginBottom: 20,
          }}>
            Digital Products
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {PRODUCTS.map((product) => (
              <Link
                key={product.slug}
                href={`/digital-products/${product.slug}`}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  border: '1px solid #1a1a1a', borderRadius: 12,
                  padding: '18px 20px', textDecoration: 'none',
                  gap: 16,
                }}
              >
                <div style={{ minWidth: 0 }}>
                  <p style={{
                    fontFamily: 'var(--font-montserrat), sans-serif',
                    fontSize: 9, fontWeight: 600, letterSpacing: '0.16em',
                    textTransform: 'uppercase', color: '#555', marginBottom: 5,
                  }}>
                    {product.area}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-libre), Georgia, serif',
                    fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 4,
                  }}>
                    {product.name}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontSize: 13, color: '#666', lineHeight: 1.6,
                  }}>
                    {product.tagline}
                  </p>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  {product.buyUrl ? (
                    <span style={{
                      fontFamily: 'var(--font-libre), Georgia, serif',
                      fontSize: 20, fontWeight: 700, color: '#F0C400',
                    }}>
                      ${product.price}
                    </span>
                  ) : (
                    <span style={{
                      fontFamily: 'var(--font-montserrat), sans-serif',
                      fontSize: 9, color: '#333', letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}>
                      Soon
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <CoachingPlug />

        {/* ── ARTICLES ── */}
        <section>
          <p style={{
            fontFamily: 'var(--font-montserrat), sans-serif',
            fontSize: 10, fontWeight: 600, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: '#444', marginBottom: 24,
          }}>
            Articles
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
            {AREA_ORDER.map((area) => {
              const areaData = articles[area];
              return (
                <div key={area}>
                  <p style={{
                    fontFamily: 'var(--font-libre), Georgia, serif',
                    fontSize: 19, fontWeight: 700, color: '#F0C400',
                    marginBottom: 12,
                  }}>
                    {areaData.label}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {SLUG_ORDER.map((slug) => {
                      const art = areaData[slug];
                      if (!art) return null;
                      return (
                        <Link
                          key={slug}
                          href={`/${area}/${slug}`}
                          style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            padding: '12px 16px',
                            border: '1px solid #141414', borderRadius: 8,
                            textDecoration: 'none',
                          }}
                        >
                          <div>
                            <span style={{
                              fontFamily: 'var(--font-montserrat), sans-serif',
                              fontSize: 9, fontWeight: 600, letterSpacing: '0.14em',
                              textTransform: 'uppercase', color: '#444',
                              display: 'block', marginBottom: 3,
                            }}>
                              {SLUG_LABELS[slug]}
                            </span>
                            <span style={{
                              fontFamily: 'var(--font-dm-sans), sans-serif',
                              fontSize: 14, color: '#ccc',
                            }}>
                              {art.title}
                            </span>
                          </div>
                          <span style={{ color: '#333', fontSize: 14, flexShrink: 0 }}>→</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

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
  );
}
