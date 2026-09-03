import { stackCategories } from '../data/stack'
import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../i18n/LanguageContext'

export default function Stack() {
  const ref = useReveal()
  const { t } = useLanguage()
  const s = t.stack

  return (
    <section id="stack" className="py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div ref={ref} className="reveal">
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase mb-3">{s.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-2">
            {s.heading}
          </h2>
          <p className="text-muted max-w-xl mb-12">{s.subtext}</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {stackCategories.map((cat) => (
              <div key={cat.key}>
                <h3 className="text-sm font-semibold text-ink mb-4 uppercase tracking-wide">
                  {s.categories[cat.key]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs text-muted border border-border rounded-full px-3 py-1.5 hover:border-accent hover:text-ink transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
