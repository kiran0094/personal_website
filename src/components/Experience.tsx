import ScrollReveal from './ScrollReveal'
import SectionHeading from './SectionHeading'
import { Briefcase, GraduationCap, Trophy, Award, MapPin, Calendar, Target } from 'lucide-react'

type ItemType = 'work' | 'education' | 'achievement' | 'certification'

interface TimelineItem {
  type: ItemType
  title: string
  organization: string
  period: string
  description: string
}

const timelineItems: TimelineItem[] = [
  {
    type: 'work',
    title: 'Junior Developer',
    organization: 'Astronix Technologies',
    period: 'Apr 2025 - Aug 2025',
    description: 'Built responsive UIs using React & Next.js. Integrated REST APIs, optimized performance & scalability, and debugged applications achieving 99.9% uptime.',
  },
  {
    type: 'achievement',
    title: 'Tech Lead',
    organization: 'GDSC MLRITM',
    period: 'Jun 2023 - Jul 2024',
    description: 'Mentored students in web development, conducted technical workshops, and built a thriving developer community at the college level.',
  },
  {
    type: 'achievement',
    title: 'ML Hackathon Mentor',
    organization: 'MLRITM',
    period: '2023',
    description: 'Guided junior students in ML/DL projects during hackathons, helping them build and deploy machine learning models.',
  },
]

interface EducationItem {
  title: string
  organization: string
  location?: string
  period?: string
  score: string
}

const educationData: EducationItem[] = [
  {
    title: 'B.Tech (CSE)',
    organization: 'Marri Laxman Reddy Institute of Technology and Management',
    location: 'Hyderabad',
    period: '2021 – 2025',
    score: 'CGPA: 7.96',
  },
  {
    title: 'Intermediate (MPC)',
    organization: 'Sri Chaitanya Junior College',
    period: '2019 – 2021',
    score: '95.8%',
  },
  {
    title: 'School (SSC)',
    organization: 'Nava Jothi High School',
    period: '',
    score: 'CGPA: 9.3',
  },
]

const achievements: string[] = [
  '🏆 Kavach Hackathon Participant',
  '🤖 ML Mentor for junior batches',
  '🎤 Organized multiple tech workshops',
]

interface Certification {
  name: string
  provider: string
}
const certifications: Certification[] = [
  { name: 'React', provider: 'Scrimba' },
  { name: 'TypeScript', provider: 'Scrimba' },
  { name: 'LangChain', provider: 'Scrimba' },
  { name: 'Full Stack Web Development', provider: 'Udemy' },
]



const iconMap: Record<ItemType, typeof Briefcase> = {
  work: Briefcase,
  education: GraduationCap,
  achievement: Trophy,
  certification: Award,
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <SectionHeading
            title="My Journey"
            subtitle="Experience, education, and milestones along the way"
          />
        </ScrollReveal>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent" />

          {timelineItems.map((item, i) => {
            const isLeft = i % 2 === 0
            const Icon = iconMap[item.type]

            return (
              <ScrollReveal
                key={i}
                direction={isLeft ? 'left' : 'right'}
                delay={i * 0.1}
              >
                <div className={`relative flex items-start gap-8 mb-12 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Content */}
                  <div className={`flex-1 ml-16 md:ml-0 ${isLeft ? 'md:text-right' : ''}`}>
                    <div className="glass rounded-xl p-6 border-glow-red hover:scale-[1.02] transition-transform duration-300">
                      {item.period && (
                        <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'md:justify-end' : ''}`}>
                          <span className="text-xs font-mono text-primary">{item.period}</span>
                        </div>
                      )}
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-primary mb-3">{item.organization}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full glass border border-primary/40 flex items-center justify-center animate-node-pulse">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block flex-1" />
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* ===== EDUCATION ===== */}
        <div className="mt-20 mb-16">
          <ScrollReveal>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-spidey-blue" />
              <span>Education</span>
            </h3>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4">
            {educationData.map((edu, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="glass rounded-xl p-5 group hover:border-spidey-blue/30 transition-all duration-300 hover:glow-blue">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-spidey-blue/10 border border-spidey-blue/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <GraduationCap className="text-spidey-blue text-xs" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm mb-1">{edu.title}</h4>
                      <p className="text-xs text-muted-foreground mb-1">{edu.organization}</p>
                      {edu.location && (
                        <p className="text-xs text-muted-foreground/70 mb-1 flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {edu.location}
                        </p>
                      )}
                      {edu.period && (
                        <p className="text-xs text-muted-foreground/70 mb-2 flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {edu.period}
                        </p>
                      )}
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-spidey-blue/10 text-spidey-blue border border-spidey-blue/20">
                        <Target className="w-3 h-3" /> {edu.score}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* ===== ACHIEVEMENTS & CERTIFICATIONS ===== */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Achievements */}
          <div>
            <ScrollReveal>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Trophy className="text-yellow-500" />
                <span>Achievements</span>
              </h3>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="glass rounded-xl p-6 space-y-3">
                {achievements.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-2 h-2 rounded-full bg-spidey-red flex-shrink-0 group-hover:scale-150 transition-transform" />
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Certifications */}
          <div>
            <ScrollReveal>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Award className="text-spidey-blue" />
                <span>Certifications</span>
              </h3>
            </ScrollReveal>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="glass rounded-lg px-5 py-3 flex items-center justify-between group hover:border-spidey-blue/20 transition-all">
                    <span className="text-sm text-muted-foreground font-medium">{cert.name}</span>
                    <span className="text-xs text-muted-foreground/70 bg-white/5 px-2 py-1 rounded-full">{cert.provider}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
