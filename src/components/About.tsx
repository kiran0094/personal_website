import ScrollReveal from './ScrollReveal'
import SectionHeading from './SectionHeading'
import { Code2, Brain, Rocket, Server } from 'lucide-react'

const highlights = [
  { icon: Code2, label: 'MERN Stack', value: 'Expert' },
  { icon: Brain, label: 'AI/ML', value: 'Enthusiast' },
  { icon: Server, label: 'Backend', value: 'Scalable APIs' },
  { icon: Rocket, label: 'Projects', value: '10+' },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <SectionHeading
            title="About Me"
            subtitle="The story behind the mask — passionate developer building with purpose"
          />
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative group">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
              <img
                src="/images/spiderman-about.jpg"
                alt="About section visual"
                className="relative w-full max-w-md mx-auto rounded-2xl border border-border object-cover aspect-[3/4]"
                loading="lazy"
              />
              {/* Comic speech bubble */}
              <div className="absolute -top-4 -right-4 md:top-4 md:-right-8 glass rounded-2xl rounded-br-sm p-4 border-glow-red max-w-[200px]">
                <p className="text-sm font-medium text-foreground">
                  "With great code comes great responsibility!"
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a Full-Stack Developer specializing in AI/ML integration, I build robust digital products from the ground up. My expertise lies in designing scalable REST APIs, implementing secure authentication workflows, and crafting modern frontend interfaces with React and Next.js. I am actively looking for my next full-time engineering role to help teams scale their applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I enjoy solving real-world problems through technology and
                continuously learning new tools like LangChain, Docker, and
                cloud services. My goal is to create impactful digital
                experiences that make a difference.
              </p>

              {/* Highlight Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {highlights.map((item, i) => (
                  <ScrollReveal key={item.label} delay={i * 0.1}>
                    <div className="glass rounded-xl p-4 border-glow-red group hover:scale-105 transition-transform duration-300">
                      <item.icon className="h-6 w-6 text-primary mb-2 group-hover:animate-glow-pulse" />
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="text-lg font-bold text-foreground">{item.value}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
