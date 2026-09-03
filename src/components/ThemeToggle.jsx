import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ className = '' }) {
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    setIsLight(document.documentElement.classList.contains('light'))
  }, [])

  function toggleTheme() {
    const next = !isLight
    setIsLight(next)
    document.documentElement.classList.toggle('light', next)
    try {
      localStorage.setItem('theme', next ? 'light' : 'dark')
    } catch (e) {
      // localStorage indisponível — tema não persiste, mas segue funcional
    }
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={isLight ? 'Ativar modo escuro' : 'Ativar modo claro'}
      className={`inline-flex items-center justify-center h-9 w-9 rounded-full border border-border text-muted hover:text-ink hover:border-accent transition-colors ${className}`}
    >
      {isLight ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  )
}
