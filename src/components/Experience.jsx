import { experience } from '../data/experience'
import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../i18n/LanguageContext'

export default function Experience() {
  const ref = useReveal()
  const { t, lang } = useLanguage()
  const e = t.experience

  return (
    <section id="experiencia" className="py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div ref={ref} className="reveal">
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase mb-3">{e.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-12">
            {e.heading}
          </h2>

          <div className="space-y-0">
            {experience[lang].map((job) => (
              <div
                key={job.company}
                className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-10 border-t border-border py-10 first:border-t-0 first:pt-0"
              >
                <div>
                  <p className="text-sm font-mono text-faint">{job.period}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ink mb-1">{job.role}</h3>
                  <p className="text-accent text-sm font-medium mb-4">{job.company}</p>
                  <p className="text-muted leading-relaxed mb-4">{job.description}</p>
                  <p className="text-ink/80 text-sm leading-relaxed border-l-2 border-border pl-4">
                    {job.takeaway}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.stack.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-xs text-muted border border-border rounded-full px-3 py-1"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
