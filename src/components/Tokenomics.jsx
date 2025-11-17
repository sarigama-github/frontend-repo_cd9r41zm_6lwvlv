import { PieChart, Coins, Percent, ShieldCheck } from 'lucide-react'

function Stat({ icon: Icon, label, value, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/90">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/90 to-fuchsia-500/90">
          <Icon className="h-5 w-5 text-black" />
        </div>
        <div>
          <p className="text-sm text-white/70">{label}</p>
          <p className="text-xl font-semibold">{value}</p>
        </div>
      </div>
      {desc && <p className="mt-3 text-sm text-white/70">{desc}</p>}
    </div>
  )
}

function Tokenomics() {
  return (
    <section id="tokenomics" className="relative bg-black py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(56,189,248,0.15),rgba(0,0,0,0))]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <PieChart className="h-3.5 w-3.5 text-cyan-300" />
              Tokenomics
            </div>
            <h2 className="mt-4 bg-gradient-to-br from-white via-cyan-100 to-fuchsia-200 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
              Transparent, fair, and community-first
            </h2>
            <p className="mt-3 max-w-xl text-white/70">
              $SHAMAN supply and allocations are designed for long-term sustainability. Liquidity is locked and the contract is renounced for maximum trust.
            </p>
          </div>

          <div className="grid w-full max-w-xl grid-cols-1 gap-4 sm:grid-cols-2">
            <Stat icon={Coins} label="Total Supply" value="1,000,000,000 $SHAMAN" />
            <Stat icon={Percent} label="Buy/Sell Tax" value="0%/0%" desc="No hidden tokenomics—fair launch principles." />
            <Stat icon={ShieldCheck} label="Liquidity" value="Locked" desc="Ensuring stability and protection for holders." />
            <Stat icon={PieChart} label="Allocations" value="100% to LP" desc="No team or private allocations." />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tokenomics
