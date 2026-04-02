import { motion } from 'framer-motion'
import { ArrowDown, Download, FolderOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import WebBackground from './WebBackground'

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero-bg.png)' }}
      />
      <div className="absolute inset-0 bg-background/80" />

      <WebBackground />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Text Side */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 mt-14 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase border border-primary/30 text-primary mb-6">
              Full Stack Developer &bull; AI/ML Enthusiast
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6"
          >
            <span className="text-foreground">Hi, I'm</span>
            <br />
            <span className="gradient-text-spidey text-glow-red">
              Kiran K
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 mx-auto lg:mx-0"
          >
            Result-oriented Computer Science student with expertise in MERN stack
            and AI/ML. Passionate about building scalable applications, optimizing
            backend systems, and creating impactful user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <Button 
              variant="spidey" 
              size="lg" 
              onClick={() => window.open('/images/resume.pdf', '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              Resume
            </Button>
            <Button variant="spidey-outline" size="lg" onClick={scrollToContact}>
              Contact Me
            </Button>
            
            <Button variant="spidey-blue" size="lg" onClick={scrollToProjects}>
              <FolderOpen className="mr-2 h-5 w-5" />
              View Projects
            </Button>
          </motion.div>
        </div>

        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex-1 flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-[80px] animate-glow-pulse" />
            <img
              src="/images/kiran.jpg"
              alt="Kiran K - Spider-Man themed hero visual"
              className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl border-2 border-primary/20 glow-red animate-float"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.button>
    </section>
  )
}
