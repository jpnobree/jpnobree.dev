import { ArrowUpRight } from 'lucide-react'
import { featuredProjects, otherProjects } from '../data/projects'
import FeaturedProject from './FeaturedProject'
import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../i18n/LanguageContext'

export default function Projects() {
  const headerRef = useReveal()
  const othersRef = useReveal()
  const { t, lang } = useLanguage()
  const p = t.projects

  return (
    <section id="projetos" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div ref={headerRef} className="reveal mb-6">
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase mb-3">{p.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-2">
            {p.heading}
          </h2>
          <p className="text-muted max-w-xl">{p.subtext}</p>
        </div>

        <div>
          {featuredProjects[lang].map((project, i) => (
            <FeaturedProject key={project.id} project={project} index={i} />
          ))}
        </div>

        <div ref={othersRef} className="reveal mt-20 pt-16 border-t border-border">
          <h3 className="text-lg font-semibold text-ink mb-2">{p.otherHeading}</h3>
          <p className="text-muted text-sm mb-8 max-w-xl">{p.otherSubtext}</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherProjects[lang].map((proj) => (
              <a
                key={proj.name}
                href={proj.repo}
                target="_blank"
                rel="noreferrer noopener"
                className="group rounded-xl border border-border bg-surface p-5 hover:border-accent transition-colors flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-ink text-sm">{proj.name}</h4>
                  <ArrowUpRight
                    size={15}
                    className="text-faint group-hover:text-accent transition-colors shrink-0 mt-0.5"
                  />
                </div>
                <p className="text-xs text-muted leading-relaxed flex-1">{proj.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {proj.stack.map((s) => (
                    <span key={s} className="font-mono text-[10px] text-faint">
                      {s}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
