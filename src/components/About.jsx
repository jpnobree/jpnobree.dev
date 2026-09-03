import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../i18n/LanguageContext'

export default function About() {
  const ref = useReveal()
  const { t } = useLanguage()
  const a = t.about

  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div ref={ref} className="reveal grid md:grid-cols-[minmax(0,320px)_1fr] gap-12 md:gap-20">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase mb-3">{a.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight text-balance">
              {a.heading}
            </h2>
          </div>

          <div className="space-y-10">
            {a.points.map((p) => (
              <div key={p.title} className="border-l-2 border-border pl-6 hover:border-accent transition-colors">
                <h3 className="text-lg font-semibold text-ink mb-2">{p.title}</h3>
                <p className="text-muted leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
