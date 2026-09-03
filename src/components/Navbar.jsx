import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#stack', label: 'Stack' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#formacao', label: 'Formação' },
  { href: '#contato', label: 'Contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-bg border-b border-border' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-content mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-mono text-sm font-medium text-ink tracking-tight"
        >
          jp<span className="text-accent">.</span>nobre
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted hover:text-ink transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contato"
            className="inline-flex text-sm font-medium px-4 py-2 rounded-full border border-border text-ink hover:border-accent hover:text-accent transition-colors"
          >
            Vamos conversar
          </a>
        </div>

        <div className="flex lg:hidden items-center gap-3">
          <ThemeToggle />
          <button
            className="text-ink"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-bg border-b border-border px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base text-muted hover:text-ink transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
