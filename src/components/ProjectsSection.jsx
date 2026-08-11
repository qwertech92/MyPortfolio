import { useState } from 'react'
import { projects } from '../data/projects'

function ArchitectureDiagram({ architecture }) {
  if (!architecture) return null
  return (
    <div className="flex flex-col gap-3 mt-6">
      <h4 className="font-technical-label text-technical-label text-primary uppercase tracking-widest flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-primary" />
        System Architecture
      </h4>
      <div className="w-full p-4 bg-surface-container border border-outline-variant rounded-lg flex items-center justify-between overflow-x-auto gap-3">
        {architecture.map((item, i) => {
          if (item.connector) {
            return (
              <div key={i} className="flex-1 min-w-[50px] flex flex-col items-center gap-1">
                <span className="font-code-sm text-[10px] text-outline whitespace-nowrap">
                  {item.connector}
                </span>
                <div className="w-full h-px bg-outline-variant relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t border-r border-outline-variant rotate-45" />
                </div>
              </div>
            )
          }
          return (
            <div key={i} className="flex flex-col items-center gap-2 min-w-[80px]">
              <div className="w-12 h-12 rounded-full bg-surface border-2 border-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[20px]">{item.icon}</span>
              </div>
              <span className="font-code-sm text-[11px] text-on-surface-variant text-center leading-tight">
                {item.label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function ProjectModal({ project, onClose }) {
  if (!project) return null
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-on-surface/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-surface rounded-xl border border-outline-variant shadow-2xl w-full max-w-3xl max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-surface border-b border-outline-variant p-6 flex items-center justify-between z-10">
          <div>
            <h3 className="font-headline-md text-headline-md text-on-surface">{project.title}</h3>
            <span className="font-technical-label text-technical-label text-on-surface-variant">{project.date}</span>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-surface-container rounded-lg transition-colors" aria-label="Close modal">
            <span className="material-symbols-outlined text-on-surface-variant">close</span>
          </button>
        </div>

        <div className="p-6 flex flex-col gap-8">
          {/* Overview */}
          <div>
            <h4 className="font-technical-label text-technical-label text-primary uppercase tracking-widest mb-3">Overview</h4>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{project.overview}</p>
          </div>

          {/* Problem & Solution */}
          {project.problem && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface-container-low border border-outline-variant rounded-lg p-5">
                <h4 className="font-technical-label text-technical-label text-on-surface uppercase mb-3">Problem</h4>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{project.problem}</p>
              </div>
              <div className="bg-surface-container-low border border-outline-variant rounded-lg p-5">
                <h4 className="font-technical-label text-technical-label text-on-surface uppercase mb-3">Solution</h4>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{project.solution}</p>
              </div>
            </div>
          )}

          {/* My Role */}
          {project.role && (
            <div>
              <h4 className="font-technical-label text-technical-label text-primary uppercase tracking-widest mb-3">My Role</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.role.map((r) => (
                  <li key={r} className="flex items-start gap-2 font-body-md text-body-md text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary text-[16px] mt-0.5">check_circle</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div>
            <h4 className="font-technical-label text-technical-label text-primary uppercase tracking-widest mb-3">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-surface-container border border-outline-variant rounded-lg font-technical-label text-[12px] text-on-surface">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          {project.features && (
            <div>
              <h4 className="font-technical-label text-technical-label text-primary uppercase tracking-widest mb-3">Key Features</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 font-body-md text-body-md text-on-surface-variant">
                    <span className="material-symbols-outlined text-outline text-[16px] mt-0.5">arrow_right</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Architecture */}
          <ArchitectureDiagram architecture={project.architecture} />

          {/* Screenshot Placeholder */}
          <div className="border-2 border-dashed border-outline-variant rounded-xl p-8 flex flex-col items-center justify-center gap-3 bg-surface-container-low">
            <span className="material-symbols-outlined text-[40px] text-outline-variant">image</span>
            <span className="font-technical-label text-technical-label text-on-surface-variant">Project screenshots / media placeholder</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, onViewDetails }) {
  return (
    <div className="group bg-surface border border-outline-variant rounded-xl overflow-hidden hover:border-primary/40 hover:shadow-md transition-all duration-300">
      {/* Image Placeholder */}
      <div className="h-48 bg-surface-container flex items-center justify-center border-b border-outline-variant relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#001947 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
        <div className="flex flex-col items-center gap-2 z-10">
          <span className="material-symbols-outlined text-[36px] text-on-surface-variant/40">image</span>
          <span className="font-code-sm text-code-sm text-on-surface-variant/50">Preview</span>
        </div>
        {project.featured && (
          <span className="absolute top-3 right-3 px-2 py-0.5 bg-primary text-on-primary font-code-sm text-[11px] rounded">
            Featured
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-headline-md text-[20px] text-on-surface group-hover:text-primary transition-colors font-semibold">
              {project.title}
            </h3>
            <span className="font-technical-label text-[12px] text-on-surface-variant uppercase tracking-widest">
              {project.category} • {project.date.split('–')[0].trim().split(' ').pop()}
            </span>
          </div>
        </div>

        <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 leading-relaxed">
          {project.overview}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="px-2 py-0.5 bg-surface-container border border-outline-variant rounded font-code-sm text-[11px] text-on-surface-variant">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 text-on-surface-variant font-code-sm text-[11px]">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        <button
          onClick={() => onViewDetails(project)}
          className="mt-auto flex items-center gap-2 text-primary font-technical-label text-technical-label hover:gap-3 transition-all group/btn"
        >
          View Details
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <>
      <section id="projects" className="py-24 section-padding bg-surface relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#191c1f 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        <div className="section-container relative z-10">
          {/* Section Header */}
          <div className="flex flex-col gap-4 mb-16">
            <div className="flex items-center gap-4">
              <div className="h-1 w-10 bg-primary rounded" />
              <span className="font-technical-label text-technical-label text-primary uppercase tracking-widest">
                Project Portfolio
              </span>
            </div>
            <h2 className="font-display-lg text-display-lg text-on-surface tracking-tight">
              What I've Built
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Academic projects spanning IoT systems, web applications, mobile development, and embedded hardware — each solving a real-world problem.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewDetails={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  )
}
