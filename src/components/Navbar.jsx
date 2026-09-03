import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import { useLanguage } from '../i18n/LanguageContext'

export default function Navbar() {
  const { t } = useLanguage()
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
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-bg border-b border-border' : 'bg-transparent border-b border-transparent'
        }`}
    >
      <nav className="max-w-content mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-mono text-sm font-medium text-ink tracking-tight"
        >
          jpnobree<span className="text-accent">.</span>dev
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {t.nav.links.map((l) => (
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
            {t.nav.contactCta}
          </a>
          <LanguageToggle />
        </div>

        <div className="flex lg:hidden items-center gap-3">
          <ThemeToggle />
          <LanguageToggle />
          <button
            className="inline-flex items-center justify-center h-11 w-11 text-ink"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-bg border-b border-border px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-1">
            {t.nav.links.map((l) => (
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
