export default function Footer() {
  return (
    <footer className="w-full bg-surface-container border-t border-outline-variant py-10">
      <div className="section-container section-padding flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <span className="font-technical-label text-technical-label text-on-surface-variant">
            © 2024 John Kenneth Pitel
          </span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-outline-variant" />
          <span className="font-code-sm text-code-sm text-on-surface-variant/60">
            Built with React + Tailwind CSS
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/qwertech92"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary font-technical-label text-technical-label transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/john-kenneth-pitel-032b02428/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary font-technical-label text-technical-label transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:johnkennethpitel0@gmail.com"
            className="text-on-surface-variant hover:text-primary font-technical-label text-technical-label transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
