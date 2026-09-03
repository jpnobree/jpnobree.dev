export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-content mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-faint">
          © {new Date().getFullYear()} João Pedro Nobre
        </p>
        <p className="text-xs text-faint">Fortaleza, CE — Brasil</p>
      </div>
    </footer>
  )
}
