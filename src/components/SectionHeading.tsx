interface SectionHeadingProps {
  title: string
  subtitle: string
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text-spidey mb-4">
        {title}
      </h2>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
        {subtitle}
      </p>
      <div className="section-divider mt-6 max-w-xs mx-auto" />
    </div>
  )
}
