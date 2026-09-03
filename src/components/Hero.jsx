import { ArrowRight, Github, Linkedin, Mail, FileDown } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../i18n/LanguageContext'

export default function Hero() {
  const ref = useReveal()
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section id="top" className="relative min-h-[92vh] flex items-center pt-24 pb-16">
      <div ref={ref} className="reveal max-w-content mx-auto px-6 md:px-10 w-full text-center">
        <p className="font-mono text-xs md:text-sm tracking-[0.2em] text-accent uppercase mb-6">
          {h.eyebrow}
          <span className="text-muted"> · </span>
          {h.eyebrowSecondary}
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold text-ink leading-[1.08] tracking-tight text-balance max-w-3xl mx-auto">
          {h.name}
        </h1>

        <p className="mt-6 text-xl md:text-2xl text-ink/90 font-medium leading-snug max-w-2xl text-balance mx-auto">
          {h.headline}
        </p>

        <p className="mt-5 text-base md:text-lg text-muted leading-relaxed max-w-2xl mx-auto">
          {h.description}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 bg-accent text-bg font-semibold text-sm px-6 py-3 rounded-full hover:brightness-110 transition"
          >
            {h.ctaProjects}
            <ArrowRight size={16} />
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 border border-border text-ink text-sm font-medium px-6 py-3 rounded-full hover:border-accent hover:text-accent transition"
          >
            {h.ctaContact}
          </a>
          <div className="inline-flex items-center gap-2 text-muted text-sm font-medium px-4 py-3">
            <FileDown size={16} />
            <span>{h.resumeLabel}</span>
            <a
              href="/curriculo.pdf"
              download="Joao_Pedro_Nobre_Curriculo_PT.pdf"
              className="text-ink/80 hover:text-accent underline-offset-4 hover:underline transition"
            >
              PT
            </a>
            <span className="text-border" aria-hidden="true">
              /
            </span>
            <a
              href="/resume.pdf"
              download="Joao_Pedro_Nobre_Resume_EN.pdf"
              className="text-ink/80 hover:text-accent underline-offset-4 hover:underline transition"
            >
              EN
            </a>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-1">
          <a
            href="https://github.com/jpnobree"
            target="_blank"
            rel="noreferrer noopener"
            aria-label={h.ariaGithub}
            className="inline-flex items-center justify-center h-11 w-11 text-muted hover:text-ink transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/jpnobree"
            target="_blank"
            rel="noreferrer noopener"
            aria-label={h.ariaLinkedin}
            className="inline-flex items-center justify-center h-11 w-11 text-muted hover:text-ink transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:jpnobreee@gmail.com"
            aria-label={h.ariaEmail}
            className="inline-flex items-center justify-center h-11 w-11 text-muted hover:text-ink transition"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
