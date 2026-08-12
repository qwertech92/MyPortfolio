const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'contact', 'send-message']

export default function DotIndicator({ activeSection = 'home' }) {
  return (
    <nav
      className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-[100] hidden lg:flex"
      aria-label="Section navigation"
    >
      {sections.map((section) => (
        <a
          key={section}
          href={`#${section}`}
          aria-label={`Go to ${section}`}
          title={section.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
          className={`w-3 h-3 rounded-full border transition-all duration-300 ${
            activeSection === section
              ? 'bg-primary border-primary scale-110'
              : 'bg-outline-variant border-outline-variant hover:bg-primary hover:border-primary hover:scale-125'
          }`}
        />
      ))}
    </nav>
  )
}
