import { skillCategories } from '../data/skills'

function SkillBadge({ name }) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 bg-surface-container-lowest border border-outline-variant rounded-lg font-technical-label text-[13px] text-on-surface hover:border-primary hover:text-primary transition-colors cursor-default">
      {name}
    </span>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 section-padding bg-surface-container-low">
      <div className="section-container">
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-16">
          <div className="flex items-center gap-4">
            <div className="h-1 w-10 bg-primary rounded" />
            <span className="font-technical-label text-technical-label text-primary uppercase tracking-widest">
              Technical Skills
            </span>
          </div>
          <h2 className="font-display-lg text-display-lg text-on-surface tracking-tight">
            Tools & Technologies
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Technologies I've worked with across academic projects, ranging from embedded systems to full-stack web development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="flex flex-col gap-5 bg-surface border border-outline-variant rounded-xl p-6 hover:border-primary/30 hover:shadow-sm transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-headline-md text-[20px] text-on-surface font-semibold">
                  {category.title}
                </h3>
                <span className="material-symbols-outlined text-[22px] text-on-surface-variant opacity-50 group-hover:opacity-100 group-hover:text-primary transition-all">
                  {category.icon}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
