import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)

function getInitialLang() {
  if (typeof window === 'undefined') return 'pt'
  try {
    const stored = localStorage.getItem('lang')
    if (stored === 'pt' || stored === 'en') return stored
  } catch (e) {
    // localStorage indisponível — segue com o padrão
  }
  return 'pt'
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
    const t = translations[lang].meta
    document.title = t.title
    const descTag = document.querySelector('meta[name="description"]')
    if (descTag) descTag.setAttribute('content', t.description)
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', t.title)
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', t.description)
    const twTitle = document.querySelector('meta[name="twitter:title"]')
    if (twTitle) twTitle.setAttribute('content', t.title)
    const twDesc = document.querySelector('meta[name="twitter:description"]')
    if (twDesc) twDesc.setAttribute('content', t.description)
    const ogLocale = document.querySelector('meta[property="og:locale"]')
    if (ogLocale) ogLocale.setAttribute('content', lang === 'pt' ? 'pt_BR' : 'en_US')
  }, [lang])

  function setLang(next) {
    setLangState(next)
    try {
      localStorage.setItem('lang', next)
    } catch (e) {
      // localStorage indisponível — idioma não persiste, mas segue funcional
    }
  }

  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
