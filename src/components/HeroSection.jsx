import { useEffect, useState } from 'react'
import ShaderBackground from './ShaderBackground'

export default function HeroSection() {
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setRevealed(true), 100)
    return () => clearTimeout(timeout)
  }, [])

  const firstName = 'John Kenneth'
  const lastName = 'Pitel'

  function renderLetters(text, startIndex = 0) {
    return text.split('').map((char, i) => {
      if (char === ' ') return <span key={startIndex + i}>&nbsp;</span>
      return (
        <span
          key={startIndex + i}
          className="inline-block transition-all duration-500 ease-out"
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? 'translateY(0)' : 'translateY(24px)',
            transitionDelay: `${(startIndex + i) * 35}ms`,
          }}
        >
          {char}
        </span>
      )
    })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <ShaderBackground />

      <div className="relative z-10 section-container section-padding pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            <h1 className="font-display-lg text-display-lg-mobile lg:text-[72px] text-on-surface tracking-tight leading-[1.05] mb-6">
              <span className="block">{renderLetters(firstName, 0)}</span>
              <span className="block text-primary-container">
                {renderLetters(lastName, firstName.length + 1)}
              </span>
            </h1>

            <p
              className="font-technical-label text-technical-label text-primary uppercase tracking-widest mb-6 transition-all duration-700 ease-out"
              style={{
                opacity: revealed ? 1 : 0,
                transform: revealed ? 'translateY(0)' : 'translateY(16px)',
                transitionDelay: '500ms',
              }}
            >
              IT Student &amp; Aspiring Software Engineer
            </p>

            <p
              className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-10 transition-all duration-700 ease-out"
              style={{
                opacity: revealed ? 1 : 0,
                transform: revealed ? 'translateY(0)' : 'translateY(16px)',
                transitionDelay: '650ms',
              }}
            >
              Building web, mobile, backend, and IoT systems that connect technology with real-world solutions.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-4 mb-10 transition-all duration-700 ease-out"
              style={{
                opacity: revealed ? 1 : 0,
                transform: revealed ? 'translateY(0)' : 'translateY(16px)',
                transitionDelay: '800ms',
              }}
            >
              <a
                href="#projects"
                className="bg-primary hover:bg-primary-container text-on-primary font-technical-label text-technical-label px-6 py-3 rounded transition-colors shadow-sm hover:shadow-md flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">folder_open</span>
                View Projects
              </a>
              <a
                href="#about"
                className="border border-outline hover:border-primary text-on-surface hover:text-primary font-technical-label text-technical-label px-6 py-3 rounded transition-all flex items-center gap-2"
              >
                About Me
              </a>
              <a
                href="#contact"
                className="border border-outline hover:border-primary text-on-surface hover:text-primary font-technical-label text-technical-label px-6 py-3 rounded transition-all flex items-center gap-2"
              >
                Contact
              </a>
            </div>

            {/* Social Links */}
            <div
              className="flex items-center gap-6 transition-all duration-700 ease-out"
              style={{
                opacity: revealed ? 1 : 0,
                transform: revealed ? 'translateY(0)' : 'translateY(16px)',
                transitionDelay: '950ms',
              }}
            >
              <a
                href="https://github.com/qwertech92"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-technical-label text-technical-label"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/john-kenneth-pitel-032b02428/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-technical-label text-technical-label"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div
            className="lg:col-span-5 hidden lg:flex items-center justify-center transition-all duration-1000 ease-out"
            style={{
              opacity: revealed ? 1 : 0,
              transform: revealed ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
              transitionDelay: '600ms',
            }}
          >
            <div className="relative w-full max-w-sm aspect-square">
              {/* Tech stack visual */}
              <div className="absolute inset-0 border border-outline-variant rounded-2xl bg-surface-container/50 backdrop-blur-sm flex flex-col items-center justify-center gap-4 p-8">
                <div className="font-code-sm text-code-sm text-on-surface-variant text-center opacity-60 mb-2">
                  // what I build
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {['Web Apps', 'Mobile', 'REST APIs', 'IoT Systems', 'Embedded', 'Real-Time'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-surface-container-lowest border border-outline-variant rounded-lg font-technical-label text-[12px] text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 w-full border-t border-outline-variant pt-4">
                  <div className="font-code-sm text-code-sm text-on-surface-variant text-center opacity-50">
                    Hardware → Backend → Cloud → App
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
