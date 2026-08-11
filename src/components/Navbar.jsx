import { useState, useEffect } from 'react'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/95 backdrop-blur-md border-b border-outline-variant shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container section-padding flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <svg viewBox="0 0 100 100" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 20 V80 H35 V55 H50 V45 H35 V20 Z" fill="#0B2D6B" />
            <path d="M55 20 V80 H65 V55 L80 80 H95 L75 45 L90 20 H75 L65 40 V20 Z" fill="#0B2D6B" />
          </svg>
          <span className="font-technical-label text-technical-label text-primary hidden sm:block">
            JKP
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-primary bg-primary/5'
                    : 'text-on-surface-variant hover:text-primary hover:bg-primary/5'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-on-surface-variant hover:text-primary transition-colors"
          aria-label="Toggle navigation menu"
        >
          <span className="material-symbols-outlined">
            {mobileOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface/98 backdrop-blur-md border-b border-outline-variant">
          <ul className="section-padding py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'text-primary bg-primary/5'
                      : 'text-on-surface-variant hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
