const journeyData = [
  {
    year: '2026',
    projects: [
      {
        title: 'ERBriwan',
        description: 'IoT-based emergency alert and monitoring system with ESP32, GPS, Node.js REST API, and mobile application.',
        tags: ['IoT', 'Node.js', 'Mobile', 'ESP32'],
      },
      {
        title: 'Reports & Barangay Administration System',
        description: 'React-based administrative web system with Supabase integration for real-time data management.',
        tags: ['React', 'Supabase', 'Web'],
      },
    ],
  },
  {
    year: '2025',
    projects: [
      {
        title: 'SentryGas',
        description: 'IoT gas and fire safety system with real-time monitoring, automated responses, and Firebase integration.',
        tags: ['IoT', 'ESP32', 'Firebase', 'Automation'],
      },
      {
        title: 'HAND',
        description: 'Wearable health-monitoring glove with flex sensors, pulse oximeter, Android app, and GSM emergency alerts.',
        tags: ['Wearable', 'Android', 'ESP32', 'GSM'],
      },
    ],
  },
  {
    year: '2024',
    projects: [
      {
        title: 'QCITS',
        description: 'Seat reservation and monitoring system for auditorium management built with VB.NET.',
        tags: ['VB.NET', 'Desktop'],
      },
    ],
  },
]

export default function JourneySection() {
  return (
    <section id="journey" className="py-24 section-padding bg-surface-container-low">
      <div className="section-container">
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-16">
          <div className="flex items-center gap-4">
            <div className="h-1 w-10 bg-primary rounded" />
            <span className="font-technical-label text-technical-label text-primary uppercase tracking-widest">
              Development Journey
            </span>
          </div>
          <h2 className="font-display-lg text-display-lg text-on-surface tracking-tight">
            Growth Over Time
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            A timeline of projects showing progression from desktop applications to full IoT systems with hardware, backend, and mobile components.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-outline-variant" />

          <div className="flex flex-col gap-16">
            {journeyData.map((yearGroup, yearIndex) => (
              <div key={yearGroup.year} className="relative">
                {/* Year Badge */}
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="w-12 h-12 md:absolute md:left-1/2 md:-translate-x-1/2 rounded-full bg-primary flex items-center justify-center shadow-md">
                    <span className="font-technical-label text-[13px] text-on-primary font-bold">
                      {yearGroup.year}
                    </span>
                  </div>
                </div>

                {/* Projects for this year */}
                <div className="flex flex-col gap-6 pl-16 md:pl-0">
                  {yearGroup.projects.map((project, projIndex) => {
                    const isLeft = projIndex % 2 === 0
                    return (
                      <div
                        key={project.title}
                        className={`md:grid md:grid-cols-2 md:gap-12 ${isLeft ? '' : ''}`}
                      >
                        {/* Left side content (or empty) */}
                        <div className={`${isLeft ? 'md:text-right' : 'md:col-start-2'}`}>
                          <div className={`bg-surface border border-outline-variant rounded-xl p-6 hover:border-primary/30 hover:shadow-sm transition-all duration-300 ${isLeft ? 'md:ml-auto' : ''} max-w-md`}>
                            <h4 className="font-headline-md text-[18px] text-on-surface font-semibold mb-2">
                              {project.title}
                            </h4>
                            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
                              {project.description}
                            </p>
                            <div className={`flex flex-wrap gap-1.5 ${isLeft ? 'md:justify-end' : ''}`}>
                              {project.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2 py-0.5 bg-surface-container border border-outline-variant rounded font-code-sm text-[11px] text-on-surface-variant"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Right side (empty when left, or content when right) */}
                        {isLeft && <div className="hidden md:block" />}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
