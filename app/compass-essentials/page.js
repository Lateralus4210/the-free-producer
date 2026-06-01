'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ESSAYS } from '@/lib/essentials-data';

const SECTIONS = ['Mindset & Philosophy', 'Tactical', 'Strategy'];

function ProgressDots({ current, total }) {
  return (
    <div style={{ display: 'flex', gap: 6, alignItems: 'center', justifyContent: 'center' }}>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          style={{
            width: i === current ? 18 : 6,
            height: 6,
            borderRadius: 3,
            background: i === current ? '#F0C400' : '#222',
            transition: 'all 0.2s',
          }}
        />
      ))}
    </div>
  );
}

function CoverPage({ onStart }) {
  const bySection = SECTIONS.map((s) => ({
    section: s,
    essays: ESSAYS.filter((e) => e.section === s),
  }));

  return (
    <div style={{ maxWidth: 580, margin: '0 auto', padding: '60px 24px 80px' }}>
      <p style={{
        fontFamily: 'var(--font-montserrat), sans-serif',
        fontSize: 10, fontWeight: 600, letterSpacing: '0.2em',
        textTransform: 'uppercase', color: '#555', marginBottom: 16, textAlign: 'center',
      }}>
        Compass for Music Producers
      </p>

      <h1 style={{
        fontFamily: 'var(--font-libre), Georgia, serif',
        fontSize: 'clamp(30px, 6vw, 48px)', fontWeight: 700,
        color: '#F0C400', textAlign: 'center', marginBottom: 12, lineHeight: 1.15,
      }}>
        Compass Essentials
      </h1>

      <p style={{
        fontFamily: 'var(--font-dm-sans), sans-serif',
        fontSize: 15, color: '#888', textAlign: 'center',
        lineHeight: 1.7, marginBottom: 8,
      }}>
        Thirteen essays on the mindset, habits, and decisions that separate producers who keep going from producers who don&apos;t.
      </p>
      <p style={{
        fontFamily: 'var(--font-dm-sans), sans-serif',
        fontSize: 12, color: '#555', textAlign: 'center', marginBottom: 48,
      }}>
        Written by Zach Burger (RemEmber) and Skyler Newsome (Circles in the Sky)
      </p>

      {/* TOC */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28, marginBottom: 52 }}>
        {bySection.map(({ section, essays }) => (
          <div key={section}>
            <p style={{
              fontFamily: 'var(--font-montserrat), sans-serif',
              fontSize: 9, fontWeight: 700, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: '#F0C400', marginBottom: 10,
            }}>
              {section}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {essays.map((e) => (
                <div key={e.id} style={{ display: 'flex', gap: 14, alignItems: 'baseline' }}>
                  <span style={{
                    fontFamily: 'var(--font-montserrat), sans-serif',
                    fontSize: 10, color: '#444', minWidth: 18,
                  }}>
                    {String(e.id).padStart(2, '0')}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontSize: 14, color: '#bbb', lineHeight: 1.4,
                  }}>
                    {e.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center' }}>
        <button
          onClick={onStart}
          style={{
            background: '#F0C400', color: '#000',
            fontFamily: 'var(--font-montserrat), sans-serif',
            fontSize: 12, fontWeight: 700, letterSpacing: '0.08em',
            padding: '13px 36px', borderRadius: 50,
            border: 'none', cursor: 'pointer',
          }}
        >
          Start reading →
        </button>
      </div>
    </div>
  );
}

function EssayPage({ essay, index, total, onPrev, onNext }) {
  const isFirstOfSection =
    index === 0 || ESSAYS[index - 1].section !== essay.section;

  return (
    <div style={{ maxWidth: 580, margin: '0 auto', padding: '52px 24px 80px' }}>
      {/* Section label */}
      {isFirstOfSection && (
        <div style={{
          borderLeft: '2px solid #F0C400',
          paddingLeft: 12, marginBottom: 28,
        }}>
          <p style={{
            fontFamily: 'var(--font-montserrat), sans-serif',
            fontSize: 9, fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: '#F0C400', marginBottom: 2,
          }}>
            {essay.section}
          </p>
          {essay.sectionSubtitle && (
            <p style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: 12, color: '#555',
            }}>
              {essay.sectionSubtitle}
            </p>
          )}
        </div>
      )}

      {/* Essay number + title */}
      <p style={{
        fontFamily: 'var(--font-montserrat), sans-serif',
        fontSize: 10, color: '#444', letterSpacing: '0.1em',
        marginBottom: 8,
      }}>
        {String(essay.id).padStart(2, '0')} of {String(total).padStart(2, '0')}
      </p>
      <h2 style={{
        fontFamily: 'var(--font-libre), Georgia, serif',
        fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 700,
        color: '#fff', lineHeight: 1.2, marginBottom: essay.tagline ? 10 : 32,
      }}>
        {essay.title}
      </h2>
      {essay.tagline && (
        <p style={{
          fontFamily: 'var(--font-dm-sans), sans-serif',
          fontSize: 13, color: '#666', fontStyle: 'italic',
          lineHeight: 1.6, marginBottom: 32,
        }}>
          {essay.tagline}
        </p>
      )}

      {/* Body sections */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 36 }}>
        {essay.body.map((section, i) => (
          <div key={i}>
            {section.heading && (
              <p style={{
                fontFamily: 'var(--font-montserrat), sans-serif',
                fontSize: 10, fontWeight: 700, letterSpacing: '0.12em',
                textTransform: 'uppercase', color: '#F0C400', marginBottom: 8,
              }}>
                {section.heading}
              </p>
            )}
            {section.text.split('\n\n').map((para, j) => (
              <p key={j} style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: 15, color: '#ccc', lineHeight: 1.8,
                marginBottom: j < section.text.split('\n\n').length - 1 ? 12 : 0,
              }}>
                {para}
              </p>
            ))}
          </div>
        ))}
      </div>

      {/* Coaching CTA */}
      <div style={{
        background: '#0d0d0d', border: '1px solid #1a1a1a',
        borderLeft: '3px solid #F0C400',
        borderRadius: 10, padding: '20px 20px 20px 20px',
        marginBottom: 44,
      }}>
        <p style={{
          fontFamily: 'var(--font-montserrat), sans-serif',
          fontSize: 9, fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: '#F0C400', marginBottom: 10,
        }}>
          Compass Coaching
        </p>
        <p style={{
          fontFamily: 'var(--font-dm-sans), sans-serif',
          fontSize: 13, color: '#888', lineHeight: 1.75, marginBottom: 12,
        }}>
          {essay.cta}
        </p>
        <p style={{
          fontFamily: 'var(--font-dm-sans), sans-serif',
          fontSize: 12, color: '#555',
        }}>
          $250/month · Three-month minimum ·{' '}
          <Link href="/work-with-us" style={{ color: '#F0C400', textDecoration: 'none' }}>
            producer-compass.com
          </Link>
        </p>
      </div>

      {/* Navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button
          onClick={onPrev}
          style={{
            background: 'transparent', border: '1px solid #222',
            color: '#555', borderRadius: 50,
            fontFamily: 'var(--font-montserrat), sans-serif',
            fontSize: 11, fontWeight: 600, letterSpacing: '0.06em',
            padding: '10px 22px', cursor: 'pointer',
          }}
        >
          ← Back
        </button>

        <ProgressDots current={index} total={total} />

        <button
          onClick={onNext}
          style={{
            background: index === total - 1 ? 'transparent' : '#F0C400',
            border: index === total - 1 ? '1px solid #333' : 'none',
            color: index === total - 1 ? '#888' : '#000',
            borderRadius: 50,
            fontFamily: 'var(--font-montserrat), sans-serif',
            fontSize: 11, fontWeight: 700, letterSpacing: '0.06em',
            padding: '10px 22px', cursor: 'pointer',
          }}
        >
          {index === total - 1 ? 'Done' : 'Next →'}
        </button>
      </div>
    </div>
  );
}

function DonePage() {
  return (
    <div style={{
      maxWidth: 520, margin: '0 auto', padding: '80px 24px',
      textAlign: 'center',
    }}>
      <p style={{
        fontFamily: 'var(--font-montserrat), sans-serif',
        fontSize: 10, fontWeight: 600, letterSpacing: '0.2em',
        textTransform: 'uppercase', color: '#555', marginBottom: 20,
      }}>
        You finished it.
      </p>
      <h2 style={{
        fontFamily: 'var(--font-libre), Georgia, serif',
        fontSize: 'clamp(26px, 5vw, 38px)', fontWeight: 700,
        color: '#F0C400', marginBottom: 20, lineHeight: 1.2,
      }}>
        That&apos;s the framework.
      </h2>
      <p style={{
        fontFamily: 'var(--font-dm-sans), sans-serif',
        fontSize: 15, color: '#888', lineHeight: 1.8, marginBottom: 40,
      }}>
        Everything in Compass Coaching is built on what you just read. If any of it
        landed — if you recognized yourself in more than a few of those essays — the
        next step is the Self-Assessment Workbook.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
        <Link
          href="/self-assessment-workbook"
          style={{
            display: 'inline-block', background: '#F0C400', color: '#000',
            fontFamily: 'var(--font-montserrat), sans-serif',
            fontSize: 12, fontWeight: 700, letterSpacing: '0.08em',
            padding: '13px 32px', borderRadius: 50, textDecoration: 'none',
          }}
        >
          Take the Self-Assessment →
        </Link>
        <Link
          href="/work-with-us"
          style={{
            display: 'inline-block', color: '#555',
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontSize: 13, textDecoration: 'none', marginTop: 4,
          }}
        >
          Or apply for coaching directly
        </Link>
      </div>
    </div>
  );
}

export default function CompassEssentials() {
  // page: -1 = cover, 0..11 = essays, 12 = done
  const [page, setPage] = useState(-1);

  const handleNext = () => setPage((p) => Math.min(p + 1, ESSAYS.length));
  const handlePrev = () => setPage((p) => Math.max(p - 1, -1));

  return (
    <div style={{ minHeight: '100dvh', background: '#000', color: '#fff', display: 'flex', flexDirection: 'column' }}>
      {/* Back link */}
      <div style={{ padding: '20px 24px 0' }}>
        <Link
          href="/learn"
          style={{
            fontFamily: 'var(--font-montserrat), sans-serif',
            fontSize: 10, fontWeight: 600, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: '#333', textDecoration: 'none',
          }}
        >
          ← Learn
        </Link>
      </div>

      <div style={{ flex: 1 }}>
        {page === -1 && <CoverPage onStart={() => setPage(0)} />}
        {page >= 0 && page < ESSAYS.length && (
          <EssayPage
            essay={ESSAYS[page]}
            index={page}
            total={ESSAYS.length}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
        {page === ESSAYS.length && <DonePage />}
      </div>

      {/* Footer */}
      <div style={{
        fontFamily: 'var(--font-montserrat), sans-serif',
        fontSize: 9, fontWeight: 600, letterSpacing: '0.14em',
        textTransform: 'uppercase', color: '#333',
        textAlign: 'center', paddingBottom: 20,
        display: 'flex', flexDirection: 'column', gap: 3,
      }}>
        <div>© {new Date().getFullYear()} ZMT LLC</div>
        <div>Compass for Music Producers</div>
      </div>
    </div>
  );
}
