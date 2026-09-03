import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../i18n/LanguageContext'

export default function Contact() {
  const ref = useReveal()
  const { t } = useLanguage()
  const c = t.contact

  const channels = [
    {
      icon: Mail,
      label: c.channels.email,
      value: 'jpnobreee@gmail.com',
      href: 'mailto:jpnobreee@gmail.com',
    },
    {
      icon: Linkedin,
      label: c.channels.linkedin,
      value: 'in/jpnobree',
      href: 'https://linkedin.com/in/jpnobree',
    },
    {
      icon: Github,
      label: c.channels.github,
      value: 'jpnobree',
      href: 'https://github.com/jpnobree',
    },
  ]

  return (
    <section id="contato" className="py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div ref={ref} className="reveal text-center max-w-2xl mx-auto">
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase mb-4">{c.eyebrow}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-ink tracking-tight mb-5 text-balance">
            {c.heading}
          </h2>
          <p className="text-muted leading-relaxed mb-10">{c.description}</p>

          <a
            href="mailto:jpnobreee@gmail.com"
            className="inline-flex items-center gap-2 bg-accent text-bg font-semibold px-7 py-3.5 rounded-full hover:brightness-110 transition mb-12"
          >
            <Mail size={17} />
            {c.ctaEmail}
          </a>

          <div className="flex flex-wrap justify-center gap-4">
            {channels.map((ch) => (
              <a
                key={ch.label}
                href={ch.href}
                target={ch.href.startsWith('http') ? '_blank' : undefined}
                rel={ch.href.startsWith('http') ? 'noreferrer noopener' : undefined}
                className="group inline-flex items-center gap-2.5 border border-border rounded-full px-5 py-2.5 text-sm text-ink hover:border-accent transition-colors"
              >
                <ch.icon size={16} className="text-muted group-hover:text-accent transition-colors" />
                {ch.value}
                <ArrowUpRight size={13} className="text-faint" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
