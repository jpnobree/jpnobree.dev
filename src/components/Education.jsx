import { GraduationCap } from 'lucide-react'
import { education } from '../data/experience'
import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../i18n/LanguageContext'

export default function Education() {
  const ref = useReveal()
  const { t, lang } = useLanguage()
  const ed = t.education

  return (
    <section id="formacao" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div ref={ref} className="reveal">
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase mb-3">{ed.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-12">
            {ed.heading}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {education[lang].map((e) => (
              <div
                key={e.institution + e.degree}
                className="rounded-2xl border border-border bg-surface p-6 hover:border-accent/50 transition-colors"
              >
                <GraduationCap className="text-accent mb-4" size={22} />
                <h3 className="text-lg font-semibold text-ink mb-1">{e.degree}</h3>
                <p className="text-muted text-sm mb-3">{e.institution}</p>
                <p className="font-mono text-xs text-faint">{e.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
