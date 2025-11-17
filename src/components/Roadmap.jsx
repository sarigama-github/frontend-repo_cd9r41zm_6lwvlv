import { CheckCircle2, Rocket, Sparkles } from 'lucide-react'

const milestones = [
  {
    title: 'Phase 1 — Summoning',
    points: [
      'Fair launch and community formation',
      'DEX listing and initial liquidity',
      'Branding, website, and socials',
    ],
  },
  {
    title: 'Phase 2 — Enchantment',
    points: [
      'CMC/CG listings',
      'Partnerships and KOL alliances',
      'Staking and holder rewards',
    ],
  },
  {
    title: 'Phase 3 — Ascension',
    points: [
      'CEX listings',
      'Ecosystem utilities and tools',
      'Global community expansion',
    ],
  },
]

function Roadmap() {
  return (
    <section id="roadmap" className="relative bg-black py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(244,114,182,0.15),rgba(0,0,0,0))]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <Rocket className="h-3.5 w-3.5 text-fuchsia-300" />
              Roadmap
            </div>
            <h2 className="mt-4 bg-gradient-to-br from-white via-cyan-100 to-fuchsia-200 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
              Guided by the Shamanic path
            </h2>
            <p className="mt-3 max-w-xl text-white/70">
              Our journey is mapped to deliver real value while staying true to our community-driven spirit.
            </p>
          </div>

          <div className="grid w-full max-w-2xl grid-cols-1 gap-4">
            {milestones.map((m) => (
              <div key={m.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90">
                <div className="mb-4 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-cyan-300" />
                  <h3 className="text-lg font-semibold">{m.title}</h3>
                </div>
                <ul className="space-y-2">
                  {m.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-white/80">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-400" />
                      <span className="text-sm">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Roadmap
