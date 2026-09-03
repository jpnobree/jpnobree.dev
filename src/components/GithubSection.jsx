import { ArrowUpRight, Github, GitFork, BookMarked } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../i18n/LanguageContext'

export default function GithubSection() {
  const ref = useReveal()
  const { t } = useLanguage()
  const g = t.github

  const stats = [
    { icon: BookMarked, label: g.stats.reposLabel, value: '8' },
    { icon: GitFork, label: g.stats.langLabel, value: 'Java' },
    { icon: Github, label: g.stats.activityLabel, value: g.stats.activityValue },
  ]

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div
          ref={ref}
          className="reveal rounded-3xl border border-border bg-surface p-10 md:p-14 flex flex-col md:flex-row md:items-center justify-between gap-10"
        >
          <div className="max-w-xl">
            <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase mb-3">{g.eyebrow}</p>
            <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight mb-4">
              {g.heading}
            </h2>
            <p className="text-muted leading-relaxed mb-8">{g.description}</p>
            <a
              href="https://github.com/jpnobree"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 bg-accent text-bg font-semibold text-sm px-6 py-3 rounded-full hover:brightness-110 transition"
            >
              <Github size={16} />
              github.com/jpnobree
              <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-3 md:gap-4 md:shrink-0 md:w-[200px]">
            {stats.map((s) => (
              <div
                key={s.label}
                className="min-w-0 flex items-center gap-3 sm:block rounded-xl border border-border bg-surface2 px-4 py-3 sm:py-4"
              >
                <s.icon size={16} className="text-accent shrink-0 sm:mb-2" />
                <div className="min-w-0">
                  <p className="text-base sm:text-lg font-semibold text-ink truncate">{s.value}</p>
                  <p className="text-xs text-muted truncate">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
