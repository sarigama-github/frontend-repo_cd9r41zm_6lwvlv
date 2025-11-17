import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Tokenomics from './components/Tokenomics'
import Roadmap from './components/Roadmap'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <Tokenomics />
        <Roadmap />
        <CTA />
      </main>
      <footer className="border-t border-white/10 bg-black/80 py-10 text-center text-white/60">
        <p>
          © {new Date().getFullYear()} Crypto Shaman — All rights reserved. This is not financial advice.
        </p>
      </footer>
    </div>
  )
}

export default App
