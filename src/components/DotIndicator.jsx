const sections = ['home', 'about', 'skills', 'projects', 'contact']

export default function DotIndicator({ activeSection = 'home' }) {
  return (
    <nav
      className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-[100]"
      aria-label="Section navigation"
    >
      {sections.map((section) => (
        <a
          key={section}
          href={`#${section}`}
          aria-label={`Go to ${section}`}
          className={`w-3 h-3 rounded-full border border-outline-variant hover:scale-125 transition-transform ${
            activeSection === section
              ? 'bg-primary'
              : 'bg-outline-variant hover:bg-primary'
          }`}
        />
      ))}
    </nav>
  )
}
