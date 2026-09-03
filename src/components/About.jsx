import { useReveal } from '../hooks/useReveal'

const points = [
  {
    title: 'Formação técnica desde 2020',
    text: 'Base construída num curso profissionalizante em Informática (2020–2022), seguida da graduação em Análise e Desenvolvimento de Sistemas na UNIFOR, em andamento.',
  },
  {
    title: 'Experiência profissional real',
    text: 'Estágio de 7 meses na Deway, com contato direto com Java, React Native, PostgreSQL e testes de API via Postman em um ambiente de desenvolvimento de verdade.',
  },
  {
    title: 'Projetos que saem do papel',
    text: 'Depois do estágio, apliquei o que aprendi em projetos próprios completos — como a Distribuidora, com back-end em Spring Boot e front-end em React se comunicando via API REST autenticada.',
  },
]

export default function About() {
  const ref = useReveal()

  return (
    <section id="sobre" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div ref={ref} className="reveal grid md:grid-cols-[minmax(0,320px)_1fr] gap-12 md:gap-20">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase mb-3">Sobre mim</p>
            <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight text-balance">
              Em evolução constante, com resultado prático para mostrar.
            </h2>
          </div>

          <div className="space-y-10">
            {points.map((p) => (
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
