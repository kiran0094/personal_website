
import ScrollReveal from './ScrollReveal'
import SectionHeading from './SectionHeading'
import SkillsMarquee from './SkillsMarquee'

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      {/* Spider-web connector decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute w-full h-full opacity-[0.03]" viewBox="0 0 1000 800">
          {Array.from({ length: 12 }, (_, i) => {
            const angle = (i * 360) / 12
            const rad = (angle * Math.PI) / 180
            return (
              <line
                key={i}
                x1="500"
                y1="400"
                x2={500 + Math.cos(rad) * 500}
                y2={400 + Math.sin(rad) * 400}
                stroke="hsl(0 80% 50%)"
                strokeWidth="1"
              />
            )
          })}
          {[100, 200, 300, 400].map((r, i) => (
            <circle
              key={i}
              cx="500"
              cy="400"
              r={r}
              fill="none"
              stroke="hsl(0 80% 50%)"
              strokeWidth="0.5"
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <SectionHeading
            title="My Arsenal"
            subtitle="Technologies and tools in my web — constantly expanding"
          />
        </ScrollReveal>

        {/* Category Legend */}
       
        {/* Skills Marquee */}
        <ScrollReveal delay={0.3}>
          <SkillsMarquee />
        </ScrollReveal>
      </div>
    </section>
  )
}
