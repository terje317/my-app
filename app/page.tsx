'use client'

import { useState } from 'react'

export default function Page() {
  const [count, setCount] = useState(0)

  return (
    <main className="min-h-screen grid place-items-center bg-porto text-slate-200 font-sans p-6">
      <section className="w-full max-w-[720px] bg-slate-900/80 border border-slate-400/25 rounded-2xl backdrop-blur-[10px] shadow-[0_20px_50px_rgba(0,0,0,0.35)] px-7 py-10 text-center">
        <h1 className="m-0 text-[clamp(2rem,4vw,3rem)] leading-[1.1] text-slate-50">
          Clean, Modern Landing Page
        </h1>

        <p className="mt-3.5 mb-7 text-[1.05rem] leading-relaxed text-slate-300">
          Explore horse racing and betting at ATG, then come back and tap the
          counter.
        </p>

        <a
          href="https://www.atg.se"
          target="_blank"
          rel="noreferrer"
          className="inline-block no-underline text-slate-900 bg-gradient-to-r from-sky-400 to-cyan-400 font-bold rounded-full px-[22px] py-3 shadow-[0_8px_24px_rgba(34,211,238,0.35)] mb-7 hover:brightness-110 transition-[filter]"
        >
          Visit atg.se
        </a>

        <div className="flex justify-center items-center gap-3.5 flex-wrap">
          <button
            onClick={() => setCount((c) => c + 1)}
            className="border-0 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-bold text-base px-[18px] py-3 cursor-pointer shadow-[0_12px_26px_rgba(99,102,241,0.35)] hover:brightness-110 transition-[filter]"
          >
            Increase
          </button>

          <output
            aria-live="polite"
            className="min-w-16 text-center tabular-nums text-[1.3rem] font-bold text-slate-200 bg-slate-800/80 border border-slate-400/35 rounded-xl px-3 py-2.5"
          >
            {count}
          </output>

          <button
            onClick={() => setCount(0)}
            className="border-0 rounded-xl bg-slate-700/80 text-slate-300 font-bold text-base px-[18px] py-3 cursor-pointer border-slate-500/50 hover:bg-slate-600/80 transition-colors"
          >
            Reset
          </button>
        </div>
      </section>
    </main>
  )
}
