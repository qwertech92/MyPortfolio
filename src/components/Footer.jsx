export default function Footer() {
  return (
    <footer className="w-full bg-surface-container py-12 border-t border-outline-variant">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-[48px] flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="font-technical-label text-technical-label text-on-surface-variant uppercase">
          © 2024 John Kenneth Pitel. Engineered with Precision.
        </div>
        <div className="flex gap-6">
          <a className="text-on-surface-variant hover:text-primary font-technical-label text-technical-label transition-colors" href="#">
            LINKEDIN
          </a>
          <a className="text-on-surface-variant hover:text-primary font-technical-label text-technical-label transition-colors" href="#">
            GITHUB
          </a>
        </div>
      </div>
    </footer>
  )
}
