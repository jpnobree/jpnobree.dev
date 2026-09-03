import { ArrowRight, Github, Linkedin, Mail, FileDown } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

export default function Hero() {
  const ref = useReveal()

  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* subtle background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 18% 20%, rgba(45,212,191,0.10), transparent 40%), radial-gradient(circle at 82% 0%, rgba(245,196,81,0.06), transparent 35%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 20%, black, transparent)',
        }}
      />

      <div ref={ref} className="reveal max-w-content mx-auto px-6 md:px-10 w-full">
        <p className="font-mono text-xs md:text-sm tracking-[0.2em] text-accent uppercase mb-6">
          Desenvolvedor Full Stack
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold text-ink leading-[1.08] tracking-tight text-balance max-w-3xl">
          João Pedro Nobre
        </h1>

        <p className="mt-6 text-xl md:text-2xl text-ink/90 font-medium leading-snug max-w-2xl text-balance">
          Do banco de dados à interface: aplicações completas, pensadas para resolver problemas reais.
        </p>

        <p className="mt-5 text-base md:text-lg text-muted leading-relaxed max-w-2xl">
          Desenvolvedor Full Stack em formação em Análise e Desenvolvimento de Sistemas, com
          experiência prática em Java, Spring Boot e React. Já levei um sistema de ponta a
          ponta — de uma API REST autenticada até a interface que a consome.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 bg-accent text-bg font-semibold text-sm px-6 py-3 rounded-full hover:brightness-110 transition"
          >
            Ver projetos
            <ArrowRight size={16} />
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 border border-border text-ink text-sm font-medium px-6 py-3 rounded-full hover:border-accent hover:text-accent transition"
          >
            Entre em contato
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 text-muted text-sm font-medium px-4 py-3 hover:text-ink transition"
          >
            <FileDown size={16} />
            Baixar currículo
          </a>
        </div>

        <div className="mt-10 flex items-center gap-5">
          <a
            href="https://github.com/jpnobree"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="text-muted hover:text-ink transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/jpnobree"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="text-muted hover:text-ink transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:jpnobreee@gmail.com"
            aria-label="E-mail"
            className="text-muted hover:text-ink transition"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
