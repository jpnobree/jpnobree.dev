import { useLanguage } from '../i18n/LanguageContext'

export default function LanguageToggle({ className = '' }) {
  const { lang, setLang, t } = useLanguage()
  const target = lang === 'pt' ? 'en' : 'pt'

  return (
    <button
      onClick={() => setLang(target)}
      aria-label={t.language.toggleAria}
      className={`inline-flex items-center justify-center h-11 min-w-11 px-3 rounded-full border border-border text-xs font-mono font-semibold text-muted hover:text-ink hover:border-accent transition-colors ${className}`}
    >
      {target.toUpperCase()}
    </button>
  )
}
