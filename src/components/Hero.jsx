import Spline from '@splinetool/react-spline'
import { ArrowRight, Shield, Sparkles } from 'lucide-react'

function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-black" id="home">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-4 text-center text-white">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
          Introducing the $SHAMAN token
        </div>
        <h1 className="mt-6 bg-gradient-to-br from-white via-cyan-100 to-fuchsia-200 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Crypto Shaman
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-white/80 sm:text-base">
          A futuristic token weaving on-chain magic. Built for speed, security, and community—crafted for the next era of crypto believers.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black shadow-lg transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            Buy $SHAMAN
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#tokenomics"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition-colors hover:bg-white/20"
          >
            Explore Tokenomics
            <Shield className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
