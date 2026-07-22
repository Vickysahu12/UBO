import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import Hero from './components/sections/Hero.jsx'
import StatsBar from './components/sections/StatsBar.jsx'
import Solutions from './components/sections/Solutions.jsx'
import HowItWorks from './components/sections/HowItWorks.jsx'
import Features from './components/sections/Features.jsx'
import Testimonials from './components/sections/Testimonials.jsx'
import Partners from './components/sections/Partners.jsx'
import FinalCTA from './components/sections/FinalCTA.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <div className="mt-8">
          <StatsBar />
        </div>
        <Solutions />
        <HowItWorks />
        <Features />
        <Testimonials />
        <Partners />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
