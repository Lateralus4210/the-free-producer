import { notFound } from "next/navigation";
import Link from "next/link";
import { PRODUCTS } from "@/lib/products";

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} — Compass for Music Producers`,
    description: product.tagline,
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <div style={{ minHeight: '100dvh', background: '#000', color: '#fff', display: 'flex', flexDirection: 'column' }}>
      <div style={{ maxWidth: 580, margin: '0 auto', width: '100%', padding: '56px 24px 80px' }}>

        {/* Back link */}
        <Link
          href="/learn"
          style={{
            fontFamily: 'var(--font-montserrat), sans-serif',
            fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: '#444',
            textDecoration: 'none', display: 'inline-block', marginBottom: 40,
          }}
        >
          ← All articles &amp; products
        </Link>

        {/* Area label */}
        <p style={{
          fontFamily: 'var(--font-montserrat), sans-serif',
          fontSize: 10, fontWeight: 600, letterSpacing: '0.18em',
          textTransform: 'uppercase', color: '#555', marginBottom: 10,
        }}>
          {product.area}
        </p>

        {/* Title */}
        <h1 style={{
          fontFamily: 'var(--font-libre), Georgia, serif',
          fontSize: 'clamp(28px, 5vw, 42px)',
          fontWeight: 700, color: '#fff', marginBottom: 14, lineHeight: 1.2,
        }}>
          {product.name}
        </h1>

        {/* Tagline */}
        <p style={{
          fontFamily: 'var(--font-dm-sans), sans-serif',
          fontSize: 17, color: '#888', lineHeight: 1.7, marginBottom: 40,
        }}>
          {product.tagline}
        </p>

        {/* Cover image */}
        {product.cover && (
          <img
            src={product.cover}
            alt={product.name}
            style={{ width: '100%', borderRadius: 12, marginBottom: 40, display: 'block' }}
          />
        )}

        {/* Description */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 48 }}>
          {product.description.map((para, i) => (
            <p key={i} style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: 16, color: '#aaa', lineHeight: 1.8,
            }}>
              {para}
            </p>
          ))}
        </div>

        {/* Price + Buy */}
        <div style={{
          border: '1px solid #1a1a1a', borderRadius: 16,
          padding: '28px 24px', display: 'flex',
          alignItems: 'center', justifyContent: 'space-between',
          gap: 16,
        }}>
          <span style={{
            fontFamily: 'var(--font-libre), Georgia, serif',
            fontSize: 32, fontWeight: 700, color: '#F0C400',
          }}>
            {product.price ? `$${product.price}` : '—'}
          </span>
          {product.buyUrl ? (
            <a
              href={product.buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#F0C400', color: '#000',
                fontSize: 14, fontWeight: 700, padding: '14px 36px',
                borderRadius: 50, textDecoration: 'none', letterSpacing: '0.06em',
              }}
            >
              Buy →
            </a>
          ) : (
            <span style={{
              background: '#111', color: '#444', border: '1px solid #222',
              fontSize: 13, fontWeight: 700, padding: '14px 28px',
              borderRadius: 50, letterSpacing: '0.06em',
            }}>
              Coming soon
            </span>
          )}
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
