import Link from "next/link";
import { AREA_ORDER, articles } from "@/lib/articles";

export const metadata = {
  title: "The Compass Skill Tree — Compass for Music Producers",
  description: "An introduction to all 10 areas of the Compass framework for music producers.",
};

function CoachingPlug() {
  return (
    <div style={{
      border: '1px solid #1a1a1a', borderRadius: 16,
      padding: '24px 20px', textAlign: 'center', margin: '56px 0 0',
    }}>
      <p style={{ color: '#bbb', fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>
        If things feel like they&apos;re moving well in your music production, keep doing what
        you&apos;re doing.<br />
        If you get the sense at all that something is stagnant, that&apos;s a sign we can help.
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

export default function TheSkillTree() {
  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff' }}>
      <div style={{ maxWidth: 580, margin: '0 auto', padding: '48px 24px 80px' }}>

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
          ← Articles &amp; Products
        </Link>

        {/* Title */}
        <p style={{
          fontFamily: 'var(--font-montserrat), sans-serif',
          fontSize: 10, fontWeight: 600, letterSpacing: '0.2em',
          textTransform: 'uppercase', color: '#555', marginBottom: 10,
        }}>
          Article
        </p>
        <h1 style={{
          fontFamily: 'var(--font-libre), Georgia, serif',
          fontSize: 'clamp(28px, 5vw, 42px)',
          fontWeight: 700, color: '#F0C400', marginBottom: 24, lineHeight: 1.15,
        }}>
          The Compass Skill Tree
        </h1>
        <p style={{
          fontFamily: 'var(--font-dm-sans), sans-serif',
          fontSize: 16, color: '#aaa', lineHeight: 1.8, marginBottom: 56,
        }}>
          The Compass Skill Tree breaks music production into 10 distinct areas. Every producer
          has a unique profile — strengths in some areas, gaps in others. The goal isn&apos;t
          to score high across the board. It&apos;s to find the one area that, if you focused
          on it, would move everything else: your <strong style={{ color: '#fff' }}>North Star</strong>.
        </p>

        {/* 10 areas */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
          {AREA_ORDER.map((area, i) => {
            const areaData = articles[area];
            const intro = areaData?.["what-is"]?.body?.[0] ?? "";
            return (
              <div key={area}>
                {/* Area number + label */}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 14 }}>
                  <span style={{
                    fontFamily: 'var(--font-montserrat), sans-serif',
                    fontSize: 11, fontWeight: 600, letterSpacing: '0.12em',
                    color: '#333',
                  }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 style={{
                    fontFamily: 'var(--font-libre), Georgia, serif',
                    fontSize: 'clamp(20px, 3.5vw, 26px)',
                    fontWeight: 700, color: '#fff', lineHeight: 1.1,
                  }}>
                    {areaData.label}
                  </h2>
                </div>

                {/* First paragraph from what-is */}
                <p style={{
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontSize: 15, color: '#888', lineHeight: 1.8, marginBottom: 20,
                }}>
                  {intro}
                </p>

                {/* Article links */}
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {[
                    { slug: "what-is",    label: "What Is It?" },
                    { slug: "low-score",  label: "Low Score"   },
                    { slug: "high-score", label: "High Score"  },
                  ].map(({ slug, label }) => (
                    <Link
                      key={slug}
                      href={`/${area}/${slug}`}
                      style={{
                        fontFamily: 'var(--font-montserrat), sans-serif',
                        fontSize: 10, fontWeight: 600, letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        border: '1px solid #222', borderRadius: 50,
                        padding: '7px 14px', textDecoration: 'none', color: '#666',
                        transition: 'border-color 0.15s, color 0.15s',
                      }}
                    >
                      {label} →
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <CoachingPlug />

      </div>
    </div>
  );
}
