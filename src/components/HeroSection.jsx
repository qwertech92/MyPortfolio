import { useEffect, useRef, useState } from 'react'
import ShaderBackground from './ShaderBackground'

export default function HeroSection() {
  const headlineRef = useRef(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setRevealed(true), 50)
    return () => clearTimeout(timeout)
  }, [])

  const firstName = 'John Kenneth'
  const lastName = 'Pitel'

  function renderLetters(text, startIndex = 0, className = '') {
    return text.split('').map((char, i) => {
      if (char === ' ') {
        return <span key={startIndex + i}>&nbsp;</span>
      }
      return (
        <span
          key={startIndex + i}
          className="inline-block transition-all duration-500"
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: `${(startIndex + i) * 30}ms`,
          }}
        >
          {char}
        </span>
      )
    })
  }

  return (
    <section id="home" className="section-snap relative flex flex-col justify-center">
      <ShaderBackground />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 lg:px-[48px] grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col justify-center h-full pt-12 lg:pt-0">
          <h1
            ref={headlineRef}
            className="font-display-lg text-display-lg-mobile lg:text-[80px] text-on-surface mb-6 tracking-tight overflow-hidden leading-[1.1]"
          >
            <span className="block">
              {renderLetters(firstName, 0)}
            </span>
            <span className="block text-primary-container">
              {renderLetters(lastName, firstName.length + 1)}
            </span>
          </h1>

          <div
            className="font-technical-label text-technical-label text-primary uppercase tracking-widest mb-8 transition-all duration-700 ease-out"
            style={{
              opacity: revealed ? 1 : 0,
              transform: revealed ? 'translateY(0)' : 'translateY(16px)',
              transitionDelay: '400ms',
            }}
          >
            IT Student &amp; Aspiring Software Engineer
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 transition-all duration-700 ease-out"
            style={{
              opacity: revealed ? 1 : 0,
              transform: revealed ? 'translateY(0)' : 'translateY(16px)',
              transitionDelay: '600ms',
            }}
          >
            <button className="bg-primary hover:bg-on-primary-fixed-variant text-on-primary font-technical-label text-technical-label px-6 py-3 rounded transition-colors shadow-sm hover:shadow-md flex items-center justify-center gap-2 group">
              <span className="material-symbols-outlined text-[20px] group-hover:-translate-y-1 transition-transform">download</span>
              DOWNLOAD RESUME
            </button>
            <button className="bg-transparent border border-outline hover:border-primary text-on-surface hover:text-primary font-technical-label text-technical-label px-6 py-3 rounded transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 group">
              VIEW PROJECTS
              <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-5 flex flex-col h-full justify-center lg:pl-12 pt-12 lg:pt-0 border-l border-outline/10 relative">
          <div className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-[9px] h-[9px] rounded-full border border-primary bg-surface hidden lg:block" />
          <div className="absolute -left-0 top-[20%] w-12 h-px bg-outline/20 hidden lg:block" />

          <div
            className="transition-all duration-700 ease-out"
            style={{
              opacity: revealed ? 1 : 0,
              transform: revealed ? 'translateY(0)' : 'translateY(16px)',
              transitionDelay: '900ms',
            }}
          >
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-md">
              Dedicated Information Technology student with a strong focus on software development and Internet of Things (IoT) solutions. Passionate about building robust, scalable systems that bridge the gap between hardware and innovative software applications.
            </p>

            <ul className="flex flex-col gap-4 font-technical-label text-technical-label text-on-surface-variant">
              {['ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'].map((label, i) => (
                <li key={label} className="flex items-center gap-4 group cursor-pointer hover:text-primary transition-colors">
                  <span className="text-primary/50 text-code-sm">{String(i + 1).padStart(2, '0')}</span>
                  <span className="w-8 h-px bg-outline-variant group-hover:bg-primary group-hover:w-12 transition-all" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
