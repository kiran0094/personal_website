import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ParticleField from '@/components/ParticleField'
import SpiderCursor from '@/components/SpiderCursor'

function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <SpiderCursor />
      <ParticleField />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
