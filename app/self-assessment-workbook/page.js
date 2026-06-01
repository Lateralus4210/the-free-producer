'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { AREAS, REFLECTION_PROMPTS, ACTION_PLAN_STEPS } from '@/lib/workbook-data';

// ── Helpers ───────────────────────────────────────────────────────────────────

function genSessionId() {
  return `wb_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

async function logToSheet(payload) {
  try {
    await fetch('/api/log-workbook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch {
    // fail silently — logging should never block the user
  }
}

// ── Shared UI primitives ──────────────────────────────────────────────────────

function NavBar({ current, total, onPrev, onNext, nextLabel = 'Next →', prevDisabled = false }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 40 }}>
      <button
        onClick={onPrev}
        disabled={prevDisabled}
        style={{
          background: 'transparent',
          border: '1px solid #222',
          color: prevDisabled ? '#2a2a2a' : '#555',
          borderRadius: 50,
          fontFamily: 'var(--font-montserrat), sans-serif',
          fontSize: 11, fontWeight: 600, letterSpacing: '0.06em',
          padding: '10px 22px', cursor: prevDisabled ? 'default' : 'pointer',
        }}
      >
        ← Back
      </button>
      <span style={{
        fontFamily: 'var(--font-montserrat), sans-serif',
        fontSize: 10, color: '#333', letterSpacing: '0.08em',
      }}>
        {current} / {total}
      </span>
      <button
        onClick={onNext}
        style={{
          background: '#F0C400', color: '#000',
          borderRadius: 50, border: 'none',
          fontFamily: 'var(--font-montserrat), sans-serif',
          fontSize: 11, fontWeight: 700, letterSpacing: '0.06em',
          padding: '10px 22px', cursor: 'pointer',
        }}
      >
        {nextLabel}
      </button>
    </div>
  );
}

function AreaLabel({ text }) {
  return (
    <p style={{
      fontFamily: 'var(--font-montserrat), sans-serif',
      fontSize: 9, fontWeight: 700, letterSpacing: '0.18em',
      textTransform: 'uppercase', color: '#F0C400', marginBottom: 6,
    }}>
      {text}
    </p>
  );
}

function Textarea({ value, onChange, placeholder }) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder || 'Your answer…'}
      rows={3}
      style={{
        width: '100%', boxSizing: 'border-box',
        background: '#0a0a0a', border: '1px solid #1c1c1c',
        borderRadius: 8, color: '#ddd',
        fontFamily: 'var(--font-dm-sans), sans-serif',
        fontSize: 14, lineHeight: 1.6,
        padding: '10px 14px', resize: 'vertical',
        outline: 'none',
      }}
    />
  );
}

// ── Page: Intro ───────────────────────────────────────────────────────────────

function IntroPage({ onNext }) {
  return (
    <div style={{ maxWidth: 580, margin: '0 auto', padding: '56px 24px 80px' }}>
      <AreaLabel text="Compass for Music Producers" />
      <h1 style={{
        fontFamily: 'var(--font-libre), Georgia, serif',
        fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 700,
        color: '#fff', lineHeight: 1.2, marginBottom: 10,
      }}>
        Self-Assessment Workbook
      </h1>
      <p style={{
        fontFamily: 'var(--font-libre), Georgia, serif',
        fontSize: 14, color: '#555', fontStyle: 'italic', marginBottom: 36,
      }}>
        A guided journey through the Compass Skill Tree
      </p>

      <p style={{
        fontFamily: 'var(--font-dm-sans), sans-serif',
        fontSize: 15, color: '#bbb', lineHeight: 1.85, marginBottom: 18,
      }}>
        Most producers have a vague sense that something isn&apos;t working. They know they want to
        improve, and they know they&apos;re not where they want to be, but the path from here to there
        feels unclear — or even invisible in the worst cases.
      </p>
      <p style={{
        fontFamily: 'var(--font-dm-sans), sans-serif',
        fontSize: 15, color: '#bbb', lineHeight: 1.85, marginBottom: 18,
      }}>
        This workbook exists to change that.
      </p>
      <p style={{
        fontFamily: 'var(--font-dm-sans), sans-serif',
        fontSize: 15, color: '#bbb', lineHeight: 1.85, marginBottom: 32,
      }}>
        By the time you finish, you&apos;ll have a scored snapshot of where you are across every
        dimension of your development, a set of honest reflections about what&apos;s actually going
        on, and a clear, actionable plan for what to work on first.
      </p>

      <div style={{
        background: '#080808', border: '1px solid #1a1a1a',
        borderRadius: 10, padding: '20px 20px', marginBottom: 36,
      }}>
        <p style={{
          fontFamily: 'var(--font-montserrat), sans-serif',
          fontSize: 9, fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: '#F0C400', marginBottom: 10,
        }}>
          A note on scoring
        </p>
        <p style={{
          fontFamily: 'var(--font-dm-sans), sans-serif',
          fontSize: 13, color: '#888', lineHeight: 1.75,
        }}>
          A score of 1 means you&apos;re just starting out. A score of 10 means you&apos;re operating at
          a fully professional level. The goal isn&apos;t a <em>high</em> score — it&apos;s an <em>accurate</em> one.
          Your first instinct is usually the most accurate, so don&apos;t overthink it.
        </p>
      </div>

      <button
        onClick={onNext}
        style={{
          width: '100%', background: '#F0C400', color: '#000',
          fontFamily: 'var(--font-montserrat), sans-serif',
          fontSize: 12, fontWeight: 700, letterSpacing: '0.08em',
          padding: '15px', borderRadius: 10, border: 'none', cursor: 'pointer',
        }}
      >
        Begin the assessment →
      </button>
    </div>
  );
}

// ── Page: Area ────────────────────────────────────────────────────────────────

function AreaPage({ area, areaIndex, answers, onAnswerChange, scoreValue, onScoreChange, onNext, onPrev }) {
  return (
    <div style={{ maxWidth: 640, margin: '0 auto', padding: '48px 24px 80px' }}>
      <p style={{
        fontFamily: 'var(--font-montserrat), sans-serif',
        fontSize: 10, color: '#444', letterSpacing: '0.1em', marginBottom: 6,
      }}>
        Area {area.number} of 10
      </p>
      <h2 style={{
        fontFamily: 'var(--font-libre), Georgia, serif',
        fontSize: 'clamp(24px, 4vw, 34px)', fontWeight: 700,
        color: '#F0C400', lineHeight: 1.2, marginBottom: 10,
      }}>
        {area.name}
      </h2>
      <p style={{
        fontFamily: 'var(--font-dm-sans), sans-serif',
        fontSize: 14, color: '#888', lineHeight: 1.75, marginBottom: 28,
      }}>
        {area.description}
      </p>

      {/* Low / High columns */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 36,
      }}>
        {/* Low score */}
        <div style={{
          background: '#0d0005', border: '1px solid #2a0010',
          borderRadius: 10, padding: '16px 16px',
        }}>
          <p style={{
            fontFamily: 'var(--font-montserrat), sans-serif',
            fontSize: 8, fontWeight: 700, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: '#c0392b', marginBottom: 10,
          }}>
            Low score looks like
          </p>
          <ul style={{ margin: 0, padding: '0 0 0 16px' }}>
            {area.lowScore.map((item, i) => (
              <li key={i} style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: 12, color: '#c0392b', lineHeight: 1.6, marginBottom: 4,
              }}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* High score */}
        <div style={{
          background: '#00100a', border: '1px solid #002a14',
          borderRadius: 10, padding: '16px 16px',
        }}>
          <p style={{
            fontFamily: 'var(--font-montserrat), sans-serif',
            fontSize: 8, fontWeight: 700, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: '#27ae60', marginBottom: 10,
          }}>
            High score looks like
          </p>
          <ul style={{ margin: 0, padding: '0 0 0 16px' }}>
            {area.highScore.map((item, i) => (
              <li key={i} style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: 12, color: '#27ae60', lineHeight: 1.6, marginBottom: 4,
              }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Diagnostic questions */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 36 }}>
        {area.questions.map((q, qi) => (
          <div key={qi}>
            <p style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: 14, color: '#ddd', lineHeight: 1.6, marginBottom: 8,
            }}>
              {q}
            </p>
            <Textarea
              value={answers[qi] || ''}
              onChange={(val) => onAnswerChange(qi, val)}
            />
          </div>
        ))}
      </div>

      {/* Score */}
      <div style={{
        background: '#080808', border: '1px solid #1a1a1a',
        borderRadius: 10, padding: '20px 20px', marginBottom: 8,
      }}>
        <p style={{
          fontFamily: 'var(--font-montserrat), sans-serif',
          fontSize: 9, fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: '#555', marginBottom: 14,
        }}>
          Your score
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => onScoreChange(n)}
              style={{
                width: 40, height: 40,
                borderRadius: 8,
                background: scoreValue === n ? '#F0C400' : '#111',
                border: scoreValue === n ? 'none' : '1px solid #222',
                color: scoreValue === n ? '#000' : '#555',
                fontFamily: 'var(--font-montserrat), sans-serif',
                fontSize: 13, fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              {n}
            </button>
          ))}
        </div>
        <div style={{
          display: 'flex', justifyContent: 'space-between', marginTop: 8,
        }}>
          <span style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontSize: 9, color: '#333' }}>
            Just starting out
          </span>
          <span style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontSize: 9, color: '#333' }}>
            Fully professional
          </span>
        </div>
      </div>

      <NavBar
        current={areaIndex + 1}
        total={10}
        onPrev={onPrev}
        onNext={onNext}
        prevDisabled={areaIndex === 0}
        nextLabel={areaIndex === 9 ? 'Reflection →' : 'Next →'}
      />
    </div>
  );
}

// ── Page: Reflection Prompts ──────────────────────────────────────────────────

function ReflectionPage({ answers, onAnswerChange, onNext, onPrev }) {
  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '48px 24px 80px' }}>
      <AreaLabel text="Part Two" />
      <h2 style={{
        fontFamily: 'var(--font-libre), Georgia, serif',
        fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 700,
        color: '#fff', lineHeight: 1.2, marginBottom: 10,
      }}>
        Reflection Prompts
      </h2>
      <p style={{
        fontFamily: 'var(--font-dm-sans), sans-serif',
        fontSize: 14, color: '#666', lineHeight: 1.7, marginBottom: 36,
      }}>
        Take your time with these. These are the questions that tend to surface what&apos;s actually
        going on. There are no right answers — be as honest as possible.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        {REFLECTION_PROMPTS.map((prompt, i) => (
          <div key={i}>
            <p style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: 14, color: '#ddd', lineHeight: 1.65, marginBottom: 8,
            }}>
              {i + 1}. {prompt}
            </p>
            <Textarea
              value={answers[i] || ''}
              onChange={(val) => onAnswerChange(i, val)}
            />
          </div>
        ))}
      </div>

      <NavBar
        current={11}
        total={12}
        onPrev={onPrev}
        onNext={onNext}
        nextLabel="Action Plan →"
      />
    </div>
  );
}

// ── Page: Action Plan ─────────────────────────────────────────────────────────

function ActionPlanPage({ scores, answers, onAnswerChange, onNext, onPrev }) {
  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '48px 24px 80px' }}>
      <AreaLabel text="Part Three" />
      <h2 style={{
        fontFamily: 'var(--font-libre), Georgia, serif',
        fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 700,
        color: '#fff', lineHeight: 1.2, marginBottom: 10,
      }}>
        Your Personalized Action Plan
      </h2>
      <p style={{
        fontFamily: 'var(--font-dm-sans), sans-serif',
        fontSize: 14, color: '#666', lineHeight: 1.7, marginBottom: 36,
      }}>
        Now that you have a clear picture of where you are, it&apos;s time to build a plan for where you&apos;re going.
      </p>

      {/* Score summary */}
      <div style={{
        background: '#080808', border: '1px solid #1a1a1a',
        borderRadius: 10, padding: '20px', marginBottom: 32,
      }}>
        <p style={{
          fontFamily: 'var(--font-montserrat), sans-serif',
          fontSize: 9, fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: '#F0C400', marginBottom: 14,
        }}>
          Step 1 — Your Skill Tree Summary
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 24px' }}>
          {AREAS.map((area, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: 13, color: '#777',
              }}>
                {area.name}
              </span>
              <span style={{
                fontFamily: 'var(--font-montserrat), sans-serif',
                fontSize: 13, fontWeight: 700,
                color: scores[i] ? '#F0C400' : '#333',
              }}>
                {scores[i] ? `${scores[i]} / 10` : '— / 10'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Steps 2-5 */}
      {ACTION_PLAN_STEPS.slice(1).map((step, si) => (
        <div key={si} style={{ marginBottom: 28 }}>
          <p style={{
            fontFamily: 'var(--font-montserrat), sans-serif',
            fontSize: 9, fontWeight: 700, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: '#F0C400', marginBottom: 6,
          }}>
            {step.label}
          </p>
          <p style={{
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontSize: 13, color: '#666', lineHeight: 1.65, marginBottom: 14,
          }}>
            {step.instruction}
          </p>
          {step.fields.map((field, fi) => (
            <div key={fi} style={{ marginBottom: 10 }}>
              <p style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: 12, color: '#555', marginBottom: 6,
              }}>
                {field.prompt}
              </p>
              <Textarea
                value={answers[`${step.type}_${field.key}`] || ''}
                onChange={(val) => onAnswerChange(`${step.type}_${field.key}`, val)}
              />
            </div>
          ))}
        </div>
      ))}

      <NavBar
        current={12}
        total={12}
        onPrev={onPrev}
        onNext={onNext}
        nextLabel="Finish →"
      />
    </div>
  );
}

// ── Page: Done ────────────────────────────────────────────────────────────────

function DonePage() {
  return (
    <div style={{ maxWidth: 520, margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
      <p style={{
        fontFamily: 'var(--font-montserrat), sans-serif',
        fontSize: 10, fontWeight: 600, letterSpacing: '0.2em',
        textTransform: 'uppercase', color: '#555', marginBottom: 20,
      }}>
        You now have something most producers never build for themselves.
      </p>
      <h2 style={{
        fontFamily: 'var(--font-libre), Georgia, serif',
        fontSize: 'clamp(26px, 5vw, 38px)', fontWeight: 700,
        color: '#F0C400', marginBottom: 24, lineHeight: 1.2,
      }}>
        You&apos;ve made a concrete plan.
      </h2>
      <p style={{
        fontFamily: 'var(--font-dm-sans), sans-serif',
        fontSize: 15, color: '#888', lineHeight: 1.85, marginBottom: 16,
      }}>
        For some producers, this workbook will be enough to get moving. You know what to
        focus on, you have your three actions, and you have someone to be accountable to.
      </p>
      <p style={{
        fontFamily: 'var(--font-dm-sans), sans-serif',
        fontSize: 15, color: '#888', lineHeight: 1.85, marginBottom: 40,
      }}>
        For others, this workbook will surface the recognition that knowing what to do and
        actually doing it are two different problems — and that having a map is different
        from having someone walking alongside you while you follow it.
      </p>
      <p style={{
        fontFamily: 'var(--font-dm-sans), sans-serif',
        fontSize: 15, color: '#bbb', lineHeight: 1.85, marginBottom: 36,
        fontStyle: 'italic',
      }}>
        If that&apos;s where you are, Compass was built for you.
      </p>
      <Link
        href="/work-with-us"
        style={{
          display: 'inline-block', background: '#F0C400', color: '#000',
          fontFamily: 'var(--font-montserrat), sans-serif',
          fontSize: 12, fontWeight: 700, letterSpacing: '0.08em',
          padding: '13px 32px', borderRadius: 50, textDecoration: 'none',
        }}
      >
        Work with us →
      </Link>
    </div>
  );
}

// ── Root component ────────────────────────────────────────────────────────────

export default function SelfAssessmentWorkbook() {
  const sessionId = useRef(null);
  // page: 0 = intro, 1-10 = areas, 11 = reflection, 12 = action plan, 13 = done
  const [page, setPage] = useState(0);

  // area answers: { areaIndex: { qi: string } }
  const [areaAnswers, setAreaAnswers] = useState({});
  // area scores: { areaIndex: number }
  const [scores, setScores] = useState({});
  // reflection answers: { qi: string }
  const [reflectionAnswers, setReflectionAnswers] = useState({});
  // action plan answers: { key: string }
  const [actionAnswers, setActionAnswers] = useState({});

  useEffect(() => {
    sessionId.current = genSessionId();
  }, []);

  const areaIndex = page - 1; // 0-9 when page is 1-10

  function handleAreaAnswerChange(qi, val) {
    setAreaAnswers((prev) => ({
      ...prev,
      [areaIndex]: { ...(prev[areaIndex] || {}), [qi]: val },
    }));
  }

  function handleScoreChange(val) {
    setScores((prev) => ({ ...prev, [areaIndex]: val }));
  }

  async function advanceFromArea() {
    // Log this area's data before moving on
    await logToSheet({
      sessionId: sessionId.current,
      type: 'area',
      areaIndex,
      areaName: AREAS[areaIndex].name,
      answers: areaAnswers[areaIndex] || {},
      score: scores[areaIndex] || null,
    });
    setPage((p) => p + 1);
  }

  async function advanceFromReflection() {
    await logToSheet({
      sessionId: sessionId.current,
      type: 'reflection',
      answers: reflectionAnswers,
    });
    setPage(12);
  }

  async function advanceFromActionPlan() {
    await logToSheet({
      sessionId: sessionId.current,
      type: 'action-plan',
      scores,
      answers: actionAnswers,
    });
    setPage(13);
  }

  const totalPages = 12;

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
        {page === 0 && <IntroPage onNext={() => setPage(1)} />}

        {page >= 1 && page <= 10 && (
          <AreaPage
            area={AREAS[areaIndex]}
            areaIndex={areaIndex}
            answers={areaAnswers[areaIndex] || {}}
            onAnswerChange={handleAreaAnswerChange}
            scoreValue={scores[areaIndex] || null}
            onScoreChange={handleScoreChange}
            onNext={advanceFromArea}
            onPrev={() => setPage((p) => p - 1)}
          />
        )}

        {page === 11 && (
          <ReflectionPage
            answers={reflectionAnswers}
            onAnswerChange={(i, val) =>
              setReflectionAnswers((prev) => ({ ...prev, [i]: val }))
            }
            onNext={advanceFromReflection}
            onPrev={() => setPage(10)}
          />
        )}

        {page === 12 && (
          <ActionPlanPage
            scores={scores}
            answers={actionAnswers}
            onAnswerChange={(key, val) =>
              setActionAnswers((prev) => ({ ...prev, [key]: val }))
            }
            onNext={advanceFromActionPlan}
            onPrev={() => setPage(11)}
          />
        )}

        {page === 13 && <DonePage />}
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
