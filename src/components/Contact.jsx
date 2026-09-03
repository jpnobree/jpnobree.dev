import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const channels = [
  {
    icon: Mail,
    label: 'E-mail',
    value: 'jpnobreee@gmail.com',
    href: 'mailto:jpnobreee@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'in/jpnobree',
    href: 'https://linkedin.com/in/jpnobree',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'jpnobree',
    href: 'https://github.com/jpnobree',
  },
]

export default function Contact() {
  const ref = useReveal()

  return (
    <section id="contato" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div ref={ref} className="reveal text-center max-w-2xl mx-auto">
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase mb-4">Contato</p>
          <h2 className="text-3xl md:text-5xl font-bold text-ink tracking-tight mb-5 text-balance">
            Vamos construir algo?
          </h2>
          <p className="text-muted leading-relaxed mb-10">
            Estou em busca da minha primeira oportunidade sólida como desenvolvedor. Se você tem
            uma vaga, um desafio técnico ou só quer trocar uma ideia sobre um projeto, me chama.
          </p>

          <a
            href="mailto:jpnobreee@gmail.com"
            className="inline-flex items-center gap-2 bg-accent text-bg font-semibold px-7 py-3.5 rounded-full hover:brightness-110 transition mb-12"
          >
            <Mail size={17} />
            Enviar e-mail
          </a>

          <div className="flex flex-wrap justify-center gap-4">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noreferrer noopener' : undefined}
                className="group inline-flex items-center gap-2.5 border border-border rounded-full px-5 py-2.5 text-sm text-ink hover:border-accent transition-colors"
              >
                <c.icon size={16} className="text-muted group-hover:text-accent transition-colors" />
                {c.value}
                <ArrowUpRight size={13} className="text-faint" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
