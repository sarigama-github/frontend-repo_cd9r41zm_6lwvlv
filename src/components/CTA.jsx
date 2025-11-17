import { ArrowRight, ExternalLink } from 'lucide-react'

function CTA() {
  return (
    <section id="cta" className="relative bg-black py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_100%,rgba(56,189,248,0.15),rgba(0,0,0,0))]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 text-white shadow-2xl">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="bg-gradient-to-br from-white via-cyan-100 to-fuchsia-200 bg-clip-text text-2xl font-bold text-transparent">
                Join the circle and claim your $SHAMAN
              </h3>
              <p className="mt-2 max-w-xl text-white/70">
                Trade on your favorite DEX and follow our socials to stay in the loop.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black shadow-lg transition-transform hover:scale-[1.02]"
              >
                Trade on DEX
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition-colors hover:bg-white/20"
              >
                Join Telegram
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
