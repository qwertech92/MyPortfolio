import { useState } from 'react'

const projects = [
  {
    id: 'erbriwan',
    title: 'ERBriwan',
    subtitle: 'IoT / Web App • 2023',
    icon: 'memory',
    tags: ['ESP32', 'Node.js'],
    problem: 'Inefficient remote monitoring of distributed agricultural systems leading to resource waste and delayed response times.',
    solution: 'Developed an integrated IoT platform utilizing ESP32 microcontrollers to gather real-time sensor data, transmitted via MQTT to a central dashboard for automated irrigation control and analytics.',
    role: ['Hardware Prototyping', 'Firmware Development (C++)', 'Backend Architecture (Node.js)', 'Dashboard UI/UX'],
    architecture: [
      { icon: 'sensors', label: 'ESP32 + Sensors' },
      { connector: 'MQTT' },
      { icon: 'dns', label: 'Node.js Server' },
      { connector: 'REST API' },
      { icon: 'database', label: 'MongoDB' },
      { connector: 'WebSockets' },
      { icon: 'desktop_windows', label: 'Web App' },
    ],
  },
  {
    id: 'sentrygas',
    title: 'SentryGas',
    subtitle: 'IoT Safety System • 2022',
    icon: 'local_fire_department',
    tags: ['Arduino', 'React'],
    problem: null,
    solution: null,
    role: null,
    architecture: null,
  },
  {
    id: 'barangay',
    title: 'Barangay Admin System',
    subtitle: 'Full-Stack Web • 2024',
    icon: 'folder_managed',
    tags: ['PHP', 'MySQL'],
    problem: null,
    solution: null,
    role: null,
    architecture: null,
  },
]

function ArchitectureDiagram({ architecture }) {
  if (!architecture) return null

  return (
    <div className="flex flex-col gap-4 mt-4">
      <h4 className="font-technical-label text-technical-label text-on-surface uppercase tracking-widest flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-primary inline-block" /> System Architecture
      </h4>
      <div className="w-full h-auto p-6 bg-surface-container border border-outline-variant rounded flex items-center justify-between overflow-x-auto gap-4">
        {architecture.map((item, i) => {
          if (item.connector) {
            return (
              <div key={i} className="flex-1 h-px bg-outline-variant relative min-w-[60px]">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-outline-variant rotate-45" />
                <span className="absolute top-[-20px] left-1/2 -translate-x-1/2 font-code-sm text-[10px] text-outline whitespace-nowrap">
                  {item.connector}
                </span>
              </div>
            )
          }
          return (
            <div key={i} className="flex flex-col items-center gap-2 min-w-[120px]">
              <div className="w-16 h-16 rounded-full bg-surface border-2 border-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">{item.icon}</span>
              </div>
              <span className="font-code-sm text-code-sm text-on-surface-variant text-center">{item.label}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function ProjectCard({ project, isOpen, onToggle }) {
  return (
    <div
      className={`group bg-surface-container-lowest border ${isOpen ? 'border-primary' : 'border-outline-variant'} hover:border-primary transition-colors duration-300 rounded-lg overflow-hidden flex flex-col cursor-pointer`}
      onClick={onToggle}
    >
      {/* Card Header */}
      <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center shrink-0 border border-outline-variant group-hover:bg-primary group-hover:border-primary transition-colors">
            <span className="material-symbols-outlined text-[28px] text-primary group-hover:text-on-primary transition-colors">
              {project.icon}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <span className="font-technical-label text-technical-label text-on-surface-variant uppercase tracking-widest">
              {project.subtitle}
            </span>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-surface-container border border-outline-variant rounded font-code-sm text-code-sm text-on-surface-variant"
            >
              {tag}
            </span>
          ))}
          <span
            className={`material-symbols-outlined text-outline-variant group-hover:text-primary transition-all self-center ml-4 duration-300 ${isOpen ? 'rotate-180' : ''}`}
          >
            expand_more
          </span>
        </div>
      </div>

      {/* Card Detail */}
      {isOpen && (
        <div className="border-t border-outline-variant">
          <div className="p-6 md:p-8 flex flex-col gap-8 bg-surface-bright">
            {project.problem ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 flex flex-col gap-4">
                  <h4 className="font-body-md text-body-md font-semibold text-on-surface uppercase">The Problem</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">{project.problem}</p>
                  <h4 className="font-body-md text-body-md font-semibold text-on-surface uppercase mt-4">The Solution</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">{project.solution}</p>
                </div>
                {project.role && (
                  <div className="flex flex-col gap-4 p-6 bg-surface-container-low border border-outline-variant rounded">
                    <h4 className="font-technical-label text-technical-label text-primary uppercase">My Role</h4>
                    <ul className="font-body-md text-body-md text-on-surface-variant space-y-2 list-disc list-inside">
                      {project.role.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <p className="font-body-md text-body-md text-on-surface-variant">
                {project.title} details...
              </p>
            )}
            <ArchitectureDiagram architecture={project.architecture} />
          </div>
        </div>
      )}
    </div>
  )
}

export default function ProjectsSection() {
  const [openProject, setOpenProject] = useState(null)

  return (
    <section id="projects" className="section-snap flex flex-col w-full px-4 lg:px-[48px] py-16 relative overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5 z-0"
        style={{
          backgroundImage: 'radial-gradient(#191c1f 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col gap-4 mb-8">
        <div className="flex items-center gap-4">
          <div className="h-1 w-12 bg-primary" />
          <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-wider">Project Portfolio</h2>
        </div>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          A curated selection of technical solutions, spanning IoT hardware integration to full-stack web applications.
        </p>
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isOpen={openProject === project.id}
            onToggle={() => setOpenProject(openProject === project.id ? null : project.id)}
          />
        ))}
      </div>
    </section>
  )
}
