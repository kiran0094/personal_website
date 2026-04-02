import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ScrollReveal from './ScrollReveal'
import SectionHeading from './SectionHeading'

interface Project {
  title: string
  emoji: string
  description: string
  longDescription: string
  tags: string[]
  image: string
  github: string
  demo: string
}

const projects: Project[] = [
  {
    title: 'DxAI',
    emoji: '\u{1F9E0}',
    description: 'AI-powered medical report analysis app with secure login and intelligent insights.',
    longDescription: 'An AI-powered medical report analysis application built with Next.js and Firebase. Users can upload medical reports and receive intelligent AI-driven analysis and insights. Features include secure authentication, real-time processing, and a clean dashboard for managing reports.',
    tags: ['Next.js', 'Firebase', 'AI', 'Medical Tech'],
    image: '/images/Dxai.png',
    github: '#',
    demo: 'https://dx-ai-lokeshs-projects-d5ed2be8.vercel.app',
  },
  {
    title: 'Auth App',
    emoji: '\u{1F510}',
    description: 'Full authentication system with OAuth, credentials login, and email verification.',
    longDescription: 'A comprehensive authentication system built with Next.js, Prisma, and Auth.js. Supports OAuth providers and credentials-based login with email verification. Implements secure auth flows including password reset, session management, and role-based access control.',
    tags: ['Next.js', 'Prisma', 'Auth.js', 'OAuth'],
    image: '/images/Authapp.png',
    github: '#',
    demo: '#',
  },
  {
    title: 'Prompter',
    emoji: '\u{270D}\u{FE0F}',
    description: 'AI prompt sharing platform where users create, edit, and explore community prompts.',
    longDescription: 'A community-driven AI prompt sharing platform built with Next.js and MongoDB. Users can create, edit, and delete their own prompts while exploring prompts shared by other users. Features include search, tags, user profiles, and a clean modern interface.',
    tags: ['Next.js', 'MongoDB', 'CRUD', 'Community'],
    image: '/images/prompter.png',
    github: '#',
    demo: 'https://prompter-amber.vercel.app',
  },
  {
    title: 'FMCG Invoice Generator',
    emoji: '\u{1F9FE}',
    description: 'Dynamic invoice generation system with automated tax calculation and PDF export.',
    longDescription: 'An invoice generation system designed for FMCG businesses, built with React.js and SurveyJS. Features dynamic tax calculation based on product categories, customizable invoice templates, and PDF generation for easy sharing and printing.',
    tags: ['React.js', 'SurveyJS', 'PDF', 'Tax Calc'],
    image: '/images/image.png',
    github: 'https://github.com/kiran0094/FMCG-taxteller',
    demo: 'https://fms-ctaxteller.vercel.app/',
  },
]

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: y * -10, y: x * 10 })
  }

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 })

  return (
    <div
      className="group cursor-pointer perspective-[1000px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div
        className="glass rounded-2xl overflow-hidden border border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_hsl(var(--spidey-red)/0.15)]"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
          {/* Emoji badge */}
          <div className="absolute top-4 left-4 w-10 h-10 rounded-full glass flex items-center justify-center text-lg">
            {project.emoji}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative glass-strong rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border-glow-red"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-muted/50 hover:bg-muted text-foreground transition-colors"
        >
          <X size={20} />
        </button>

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-t-2xl"
        />

        <div className="p-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">{project.emoji}</span>
            <h3 className="text-2xl font-bold text-foreground">
              {project.title}
            </h3>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            {project.longDescription}
          </p>

          <div className="flex gap-4">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Button variant="spidey" size="lg">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <Button variant="spidey-outline" size="lg">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <SectionHeading
            title="What I've Built"
            subtitle="Featured projects from my web of creations"
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.1}>
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
