export default function AboutSection() {
  return (
    <section id="about" className="py-24 section-padding bg-surface">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Section Header */}
            <div className="flex items-center gap-4">
              <h2 className="font-display-lg text-display-lg text-primary">About</h2>
              <div className="h-[1px] flex-1 bg-outline-variant" />
            </div>

            <div className="flex flex-col gap-6">
              <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                I'm an Information Technology student at Quezon City University with a strong focus on software development and Internet of Things systems. I enjoy building things that connect hardware to software — from sensors and microcontrollers to backends, databases, and user-facing applications.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                My project experience spans web applications, mobile apps, REST APIs, IoT systems, embedded programming, real-time monitoring, and hardware integration. What drives me is the process of turning a real-world problem into a working technical solution — and seeing all the layers communicate end to end.
              </p>
            </div>

            {/* Education Timeline */}
            <div className="mt-4">
              <h3 className="font-technical-label text-technical-label text-primary uppercase tracking-widest mb-6">
                Education
              </h3>
              <div className="flex flex-col gap-6 relative before:absolute before:left-[11px] before:top-3 before:bottom-3 before:w-[1px] before:bg-outline-variant">
                {/* QCU */}
                <div className="flex gap-5 relative">
                  <div className="w-6 h-6 rounded-full bg-surface border-2 border-primary flex-shrink-0 z-10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-technical-label text-technical-label text-primary">2023 – 2027 (Expected)</span>
                    <h4 className="font-headline-md text-headline-md text-on-surface mt-1">Quezon City University</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Bachelor of Science in Information Technology
                    </p>
                    <p className="font-code-sm text-code-sm text-on-surface-variant mt-1">
                      San Bartolome, Quezon City
                    </p>
                  </div>
                </div>

                {/* AICS */}
                <div className="flex gap-5 relative">
                  <div className="w-6 h-6 rounded-full bg-surface border-2 border-outline-variant flex-shrink-0 z-10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-outline-variant" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-technical-label text-technical-label text-on-surface-variant">2021 – 2023</span>
                    <h4 className="font-headline-md text-headline-md text-on-surface mt-1">Asian Institute of Computer Studies</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Science, Technology, Engineering, and Mathematics (STEM)
                    </p>
                    <p className="font-code-sm text-code-sm text-on-surface-variant mt-1">
                      Commonwealth, Quezon City
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="lg:col-span-5 flex items-start justify-center pt-4">
            <div className="relative w-full max-w-sm">
              {/* Tech Diagram */}
              <div className="bg-surface-container border border-outline-variant rounded-xl p-8 flex flex-col gap-6">
                <div className="font-code-sm text-code-sm text-on-surface-variant opacity-60">
                  // what makes me different
                </div>
                <div className="flex flex-col gap-3">
                  {[
                    { icon: 'sensors', label: 'Hardware & Sensors' },
                    { icon: 'arrow_downward', label: '' },
                    { icon: 'dns', label: 'Backend & APIs' },
                    { icon: 'arrow_downward', label: '' },
                    { icon: 'database', label: 'Database & Cloud' },
                    { icon: 'arrow_downward', label: '' },
                    { icon: 'devices', label: 'Web & Mobile Apps' },
                  ].map((item, i) =>
                    item.label ? (
                      <div key={i} className="flex items-center gap-3 p-3 bg-surface-container-lowest border border-outline-variant rounded-lg">
                        <span className="material-symbols-outlined text-primary text-[20px]">{item.icon}</span>
                        <span className="font-technical-label text-technical-label text-on-surface">{item.label}</span>
                      </div>
                    ) : (
                      <div key={i} className="flex justify-center">
                        <span className="material-symbols-outlined text-outline-variant text-[16px]">{item.icon}</span>
                      </div>
                    )
                  )}
                </div>
                <div className="font-code-sm text-code-sm text-primary text-center mt-2 opacity-80">
                  Full-stack from hardware to UI
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
