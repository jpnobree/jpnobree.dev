import { ArrowUpRight, Github } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../i18n/LanguageContext'

export default function FeaturedProject({ project, index }) {
  const ref = useReveal()
  const { t } = useLanguage()
  const labels = t.projects.labels
  const repoLinks = Object.entries(project.links).filter(([, url]) => url)

  return (
    <article
      ref={ref}
      className="reveal grid lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)] gap-10 lg:gap-16 py-14 border-t border-border first:border-t-0 first:pt-0"
    >
      <div>
        <div className="flex items-baseline gap-4 mb-4">
          <span className="font-mono text-sm text-faint">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-ink tracking-tight">
            {project.name}
          </h3>
        </div>
        <p className="text-accent text-sm font-medium mb-6">{project.tagline}</p>

        <div className="space-y-5 text-muted leading-relaxed">
          <div>
            <p className="text-xs font-mono uppercase tracking-wide text-faint mb-1.5">{labels.problem}</p>
            <p>{project.problem}</p>
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-wide text-faint mb-1.5">{labels.solution}</p>
            <p>{project.solution}</p>
          </div>
        </div>

        <ul className="mt-7 space-y-3">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-sm text-ink/80 leading-relaxed">
              <span className="mt-2 h-1 w-1 rounded-full bg-accent shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          {repoLinks.map(([key, url]) => (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink border border-border rounded-full px-4 py-2 hover:border-accent hover:text-accent transition-colors"
            >
              <Github size={15} />
              {labels[key] ?? labels.demo}
              <ArrowUpRight size={13} />
            </a>
          ))}
        </div>
      </div>

      <div className="lg:sticky lg:top-24 self-start">
        <div className="rounded-2xl border border-border bg-surface p-6">
          {Object.entries(project.stack).map(([group, items]) => (
            <div key={group} className="mb-5 last:mb-0">
              <p className="text-xs font-mono uppercase tracking-wide text-faint mb-2">{group}</p>
              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono text-ink/80 bg-surface2 border border-border rounded-md px-2 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}
