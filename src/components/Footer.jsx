import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-8">
      <div className="max-w-content mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-faint">
          © {new Date().getFullYear()} João Pedro Nobre
        </p>
        <p className="text-xs text-faint">{t.footer.location}</p>
      </div>
    </footer>
  )
}
