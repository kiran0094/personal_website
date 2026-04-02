import { cn } from "@/lib/utils"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiOpenjdk,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiTailwindcss,
  SiFramer,
  SiTensorflow,
  SiGit,
  SiDocker,
  SiGooglecloud,
  SiInsomnia,
  SiLangchain
} from '@icons-pack/react-simple-icons';

export const skills = [
  { name: "React", icon: SiReact, color: "hsl(190 80% 50%)" },
  { name: "Next.js", icon: SiNextdotjs, color: "hsl(0 0% 100%)" },
  { name: "TypeScript", icon: SiTypescript, color: "hsl(210 80% 55%)" },
  { name: "JavaScript", icon: SiJavascript, color: "hsl(50 90% 55%)" },
  { name: "Node.js", icon: SiNodedotjs, color: "hsl(120 60% 45%)" },
  { name: "Python", icon: SiPython, color: "hsl(200 70% 50%)" },
  { name: "Java", icon: SiOpenjdk, color: "hsl(10 70% 50%)" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "hsl(210 60% 45%)" },
  { name: "MongoDB", icon: SiMongodb, color: "hsl(130 60% 45%)" },
  { name: "Prisma", icon: SiPrisma, color: "hsl(260 60% 55%)" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "hsl(180 70% 50%)" },
  { name: "Framer Motion", icon: SiFramer, color: "hsl(300 70% 60%)" },
  { name: "TensorFlow", icon: SiTensorflow, color: "hsl(30 80% 50%)" },
  { name: "Git", icon: SiGit, color: "hsl(10 80% 55%)" },
  { name: "Docker", icon: SiDocker, color: "hsl(200 80% 50%)" },
  { name: "AWS", icon: SiGooglecloud, color: "hsl(35 80% 50%)" },
  { name: "REST APIs", icon: SiInsomnia, color: "hsl(0 80% 50%)" },
  { name: "LangChain", icon: SiLangchain, color: "hsl(280 70% 55%)" },
];

const firstRow = skills.slice(0, skills.length / 2)
const secondRow = skills.slice(skills.length / 2)

interface SkillCardProps {
  name: string
  icon: React.ElementType
  color: string
}

const SkillCard = ({ name, icon: Icon, color }: SkillCardProps) => {
  return (
    <figure
      className={cn(
        "relative flex items-center gap-3 cursor-pointer overflow-hidden rounded-lg border px-4 py-2",
        "border-border/50 bg-card/50 backdrop-blur-sm",
        "hover:bg-card/80 hover:border-primary/30",
        "transition-all duration-300 hover:scale-105"
      )}
      style={{
        boxShadow: `0 0 0 1px ${color}20`,
      }}
    >
      <div
        className="flex items-center justify-center w-8 h-8 rounded-md"
        style={{
          background: `${color}20`,
        }}
      >
        <Icon
          className="w-4 h-4"
          style={{ color }}
        />
      </div>
      <figcaption
        className="text-sm font-semibold whitespace-nowrap"
        style={{ color }}
      >
        {name}
      </figcaption>
    </figure>
  )
}

interface MarqueeProps {
  children: React.ReactNode
  reverse?: boolean
  pauseOnHover?: boolean
  className?: string
}

const Marquee = ({ children, reverse = false, pauseOnHover = false, className }: MarqueeProps) => {
  return (
    <div
      className={cn(
        "flex overflow-hidden",
        pauseOnHover && "hover:[animation-play-state:paused]",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 gap-4 animate-marquee",
          reverse && "animate-marquee-reverse"
        )}
        style={{
          animationDuration: "var(--duration, 30s)",
        }}
      >
        {children}
        {children}
      </div>
    </div>
  )
}

export function SkillsMarquee() {
  return (
    <div className="relative flex w-full flex-col gap-3 overflow-hidden py-4">
      <Marquee pauseOnHover className="[--duration:25s]">
        {firstRow.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:30s]">
        {secondRow.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </Marquee>
      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent z-10" />
    </div>
  )
}

export default SkillsMarquee
