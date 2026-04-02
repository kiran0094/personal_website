import { Github, Linkedin, Globe, Mail, Heart } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/', label: 'LinkedIn' },
  { icon: Globe, href: '#', label: 'Portfolio' },
  { icon: Mail, href: 'mailto:kummkiran@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-border">
      {/* Subtle web pattern */}
      <div className="absolute inset-0 web-pattern opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center gap-6">
          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-[0_0_20px_hsl(var(--spidey-red)/0.3)] transition-all duration-300"
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>

          {/* Logo */}
          <p className="font-display text-sm tracking-wider text-muted-foreground">
            &lt;KIRAN/DEV&gt;
          </p>

          {/* Quote */}
          <p className="text-xs text-muted-foreground italic">
            "With great power comes great responsibility."
          </p>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Built with <Heart size={12} className="text-primary" /> by Kiran K &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
