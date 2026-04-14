'use client'

import { useState } from 'react'

export default function Page() {
  const [count, setCount] = useState(0)

  return (
    <main
      style={{
        minHeight: '100vh',
        margin: 0,
        display: 'grid',
        placeItems: 'center',
        backgroundImage:
          "linear-gradient(rgba(2, 6, 23, 0.62), rgba(2, 6, 23, 0.7)), url('https://images.unsplash.com/photo-1579528530668-9f84c9f133ec?auto=format&fit=crop&w=2000&q=80')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color: '#e2e8f0',
        fontFamily:
          'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
        padding: '24px',
      }}
    >
      <section
        style={{
          width: '100%',
          maxWidth: '720px',
          background: 'rgba(15, 23, 42, 0.78)',
          border: '1px solid rgba(148, 163, 184, 0.24)',
          borderRadius: '20px',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.35)',
          padding: '40px 28px',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            lineHeight: 1.1,
            color: '#f8fafc',
          }}
        >
          Clean, Modern Landing Page
        </h1>

        <p
          style={{
            marginTop: '14px',
            marginBottom: '28px',
            fontSize: '1.05rem',
            lineHeight: 1.6,
            color: '#cbd5e1',
          }}
        >
          Explore horse racing and betting at ATG, then come back and tap the
          counter.
        </p>

        <a
          href="https://www.atg.se"
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-block',
            textDecoration: 'none',
            color: '#0f172a',
            background: 'linear-gradient(90deg, #38bdf8, #22d3ee)',
            fontWeight: 700,
            borderRadius: '999px',
            padding: '12px 22px',
            boxShadow: '0 8px 24px rgba(34, 211, 238, 0.35)',
            marginBottom: '28px',
          }}
        >
          Visit atg.se
        </a>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '14px',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={() => setCount((previous) => previous + 1)}
            style={{
              border: 0,
              borderRadius: '12px',
              background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '1rem',
              padding: '12px 18px',
              cursor: 'pointer',
              boxShadow: '0 12px 26px rgba(99, 102, 241, 0.35)',
            }}
          >
            Increase Counter
          </button>

          <output
            aria-live="polite"
            style={{
              minWidth: '64px',
              textAlign: 'center',
              fontVariantNumeric: 'tabular-nums',
              fontSize: '1.3rem',
              fontWeight: 700,
              color: '#e2e8f0',
              background: 'rgba(30, 41, 59, 0.8)',
              border: '1px solid rgba(148, 163, 184, 0.35)',
              borderRadius: '12px',
              padding: '10px 12px',
            }}
          >
            {count}
          </output>
        </div>
      </section>
    </main>
  )
}
