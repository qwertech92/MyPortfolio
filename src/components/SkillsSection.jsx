const skillCategories = [
  {
    title: 'Languages',
    icon: 'code',
    skills: ['JavaScript', 'Java', 'C#', 'C++', 'PHP', 'SQL', 'VB.NET'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: 'language',
    skills: ['React', 'Node.js', 'Express'],
  },
  {
    title: 'Databases',
    icon: 'database',
    skills: ['MySQL', 'Firebase', 'Oracle', 'PostgreSQL'],
  },
  {
    title: 'Embedded & IoT',
    icon: 'memory',
    skills: ['ESP32', 'Arduino', 'Sensor Integration'],
  },
  {
    title: 'Tools',
    icon: 'build',
    skills: ['Git', 'GitHub', 'Postman', 'Docker'],
  },
  {
    title: 'Concepts',
    icon: 'lightbulb',
    skills: ['REST APIs', 'System Design'],
  },
]

function SkillPill({ name, index }) {
  const rotation = index % 2 === 0 ? 'hover:-rotate-2' : 'hover:rotate-2'
  return (
    <span
      className={`inline-flex items-center justify-center px-4 py-2 bg-surface-container-lowest text-primary font-technical-label text-technical-label rounded-[0.75rem] shadow-sm hover:-translate-y-1 ${rotation} transition-transform cursor-default`}
    >
      {name}
    </span>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative flex flex-col w-full px-4 lg:px-[48px] py-24">
      <div className="w-full max-w-[1200px] mx-auto pb-24">
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between mb-24 relative mt-16">
          <div className="w-full lg:w-3/5 flex flex-col gap-6 z-10 relative">
            <h2 className="font-display-lg text-display-lg text-primary tracking-tight">
              Technical<br />Arsenal.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              An engineered stack built for precision, performance, and scalability across the entire technology spectrum.
            </p>
          </div>

          {/* Radar SVG */}
          <div className="w-full lg:w-2/5 flex justify-end relative">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent blur-3xl -z-10 rounded-full" />
            <svg className="w-64 h-64 text-primary" fill="none" stroke="currentColor" viewBox="0 0 240 240">
              <g className="opacity-20 animate-[spin_30s_linear_infinite]">
                <circle cx="120" cy="120" r="100" strokeDasharray="2 6" strokeWidth="1" />
                <circle cx="120" cy="120" r="70" strokeWidth="1" />
                <circle cx="120" cy="120" r="40" strokeDasharray="4 4" strokeWidth="1" />
              </g>
              <g className="opacity-100 animate-[pulse_4s_ease-in-out_infinite]">
                <path d="M120 20 L170 60 L190 130 L140 190 L70 170 L40 110 Z" fill="currentColor" fillOpacity="0.1" strokeWidth="1.5" />
                <circle cx="120" cy="20" fill="currentColor" r="3" />
                <circle cx="170" cy="60" fill="currentColor" r="3" />
                <circle cx="190" cy="130" fill="currentColor" r="3" />
                <circle cx="140" cy="190" fill="currentColor" r="3" />
                <circle cx="70" cy="170" fill="currentColor" r="3" />
                <circle cx="40" cy="110" fill="currentColor" r="3" />
              </g>
              <circle className="animate-ping opacity-75" cx="120" cy="120" fill="currentColor" r="4" />
            </svg>
          </div>
        </div>

        {/* Skills Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="flex flex-col gap-6 bg-surface-container rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center justify-between text-primary">
                <h3 className="font-headline-md text-headline-md">{category.title}</h3>
                <span className="material-symbols-outlined opacity-50 group-hover:opacity-100 transition-opacity">
                  {category.icon}
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <SkillPill key={skill} name={skill} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
