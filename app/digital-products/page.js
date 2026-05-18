import Link from "next/link";

// Add new products here — one entry per product.
const PRODUCTS = [
  {
    slug: "freemix-companion",
    name: "Freemix Companion",
    area: "Mixing",
    tagline: "A reference guide built alongside the Freemix mixing series.",
    price: 5,
    cover: "/products/freemix-companion-cover.png",
    buyUrl: "https://compassadmin.gumroad.com/l/nrvln",
  },
];

export const metadata = {
  title: "Digital Products — Compass for Music Producers",
};

export default function DigitalProducts() {
  return (
    <div style={{ minHeight: '100dvh', background: '#000', color: '#fff', display: 'flex', flexDirection: 'column' }}>
      <div style={{ maxWidth: 580, margin: '0 auto', width: '100%', padding: '56px 24px 56px' }}>

        <p style={{
          fontFamily: 'var(--font-montserrat), sans-serif',
          fontSize: 11, fontWeight: 600, letterSpacing: '0.2em',
          textTransform: 'uppercase', color: '#555',
          textAlign: 'center', marginBottom: 8,
        }}>
          Compass for Music Producers
        </p>
        <h1 style={{
          fontFamily: 'var(--font-libre), Georgia, serif',
          fontSize: 'clamp(24px, 5vw, 38px)',
          fontWeight: 700, textAlign: 'center',
          color: '#fff', marginBottom: 48, lineHeight: 1.2,
        }}>
          Digital Products
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {PRODUCTS.map((product) => (
            <div
              key={product.slug}
              style={{
                border: '1px solid #1a1a1a',
                borderRadius: 16,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Cover image */}
              {product.cover && (
                <img
                  src={product.cover}
                  alt={product.name}
                  style={{ width: '100%', display: 'block', maxHeight: 280, objectFit: 'cover', objectPosition: 'top' }}
                />
              )}

              {/* Product info */}
              <div style={{ padding: '24px 24px 28px', textAlign: 'center' }}>
                <p style={{
                  fontFamily: 'var(--font-montserrat), sans-serif',
                  fontSize: 10, fontWeight: 600, letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: '#555', marginBottom: 8,
                }}>
                  {product.area}
                </p>
                <h2 style={{
                  fontFamily: 'var(--font-libre), Georgia, serif',
                  fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 10,
                }}>
                  {product.name}
                </h2>
                <p style={{
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontSize: 14, color: '#888', lineHeight: 1.7, marginBottom: 20,
                }}>
                  {product.tagline}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
                  <span style={{
                    fontFamily: 'var(--font-libre), Georgia, serif',
                    fontSize: 22, fontWeight: 700, color: '#F0C400',
                  }}>
                    ${product.price}
                  </span>
                  {product.buyUrl ? (
                    <a
                      href={product.buyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: '#F0C400', color: '#000',
                        fontSize: 13, fontWeight: 700, padding: '11px 28px',
                        borderRadius: 50, textDecoration: 'none', letterSpacing: '0.06em',
                      }}
                    >
                      Buy →
                    </a>
                  ) : (
                    <span style={{
                      background: '#111', color: '#444', border: '1px solid #222',
                      fontSize: 13, fontWeight: 700, padding: '11px 28px',
                      borderRadius: 50, letterSpacing: '0.06em',
                    }}>
                      Coming soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
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
