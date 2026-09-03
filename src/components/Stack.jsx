import { stackCategories } from '../data/stack'
import { useReveal } from '../hooks/useReveal'

export default function Stack() {
  const ref = useReveal()

  return (
    <section id="stack" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div ref={ref} className="reveal">
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase mb-3">Stack</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-2">
            Tecnologias que eu efetivamente uso
          </h2>
          <p className="text-muted max-w-xl mb-12">
            Construída a partir dos projetos e da experiência real, não de uma lista de modismos.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {stackCategories.map((cat) => (
              <div key={cat.label}>
                <h3 className="text-sm font-semibold text-ink mb-4 uppercase tracking-wide">
                  {cat.label}
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
