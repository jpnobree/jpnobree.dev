import { ArrowUpRight, Award } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const certifications = [
  {
    title: 'Inglês — Nível C1',
    issuer: 'EF SET English Certificate',
    detail: 'EF SET Score 62/100 (C1 Advanced)',
    url: 'https://cert.efset.org/en/3LkMcR',
  },
]

export default function Certifications() {
  const ref = useReveal()

  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div ref={ref} className="reveal">
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase mb-3">Certificações</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-12">
            Credenciais verificadas
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {certifications.map((c) => (
              <a
                key={c.title}
                href={c.url}
                target="_blank"
                rel="noreferrer noopener"
                className="group rounded-2xl border border-border bg-surface p-6 hover:border-accent/50 transition-colors flex flex-col"
              >
                <Award className="text-accent mb-4" size={22} />
                <h3 className="text-lg font-semibold text-ink mb-1">{c.title}</h3>
                <p className="text-muted text-sm mb-1">{c.issuer}</p>
                <p className="font-mono text-xs text-faint mb-4">{c.detail}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm text-accent font-medium">
                  Ver certificado
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
