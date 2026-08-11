export default function AboutSection() {
  return (
    <section id="about" className="section-snap flex flex-col w-full px-4 lg:px-[48px] py-12 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-[1200px] mx-auto w-full">
        {/* Left Column */}
        <div className="lg:col-span-6 flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <h2 className="font-display-lg text-display-lg text-primary">About</h2>
            <div className="h-[1px] flex-1 bg-outline-variant" />
          </div>

          <p className="font-body-lg text-body-lg text-on-surface">
            I am currently pursuing a degree in Information Technology at Quezon City University, driven by a deep fascination with how physical hardware interacts with software systems. My core interest lies in the Internet of Things (IoT), where I explore the bridge between embedded devices and cloud-based applications. I approach every project with an engineering mindset—prioritizing clean architecture, efficient data flow, and reliable execution.
          </p>

          {/* Education Timeline */}
          <div className="flex flex-col gap-6 mt-4 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-outline-variant">
            {/* QCU */}
            <div className="flex gap-6 relative">
              <div className="w-6 h-6 rounded-full bg-surface-container border-[3px] border-surface flex-shrink-0 z-10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-technical-label text-technical-label text-primary">2023 — 2027</span>
                <h3 className="font-headline-md text-headline-md text-on-surface mt-1">Quezon City University (QCU)</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Bachelor of Science in Information Technology (BSIT)</p>
              </div>
            </div>

            {/* AICS */}
            <div className="flex gap-6 relative">
              <div className="w-6 h-6 rounded-full bg-surface-container border-[3px] border-surface flex-shrink-0 z-10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-outline-variant" />
              </div>
              <div className="flex flex-col">
                <span className="font-technical-label text-technical-label text-on-surface-variant">2021 — 2023</span>
                <h3 className="font-headline-md text-headline-md text-on-surface mt-1">Asian Institute of Computer Studies (AICS)</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Senior High School — STEM Strand</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Chip SVG */}
        <div className="lg:col-span-5 lg:col-start-8 flex items-center justify-center relative">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, #001947 1px, transparent 0)',
              backgroundSize: '24px 24px',
            }}
          />
          <div className="relative w-full max-w-sm aspect-square bg-surface-container border border-outline-variant rounded-xl flex items-center justify-center overflow-hidden group">
            <svg
              className="w-3/4 h-3/4 text-primary opacity-80 group-hover:scale-105 transition-transform duration-700 ease-in-out"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 100 100"
            >
              <rect height="50" rx="4" width="50" x="25" y="25" />
              <path d="M40 40h20v20H40z" strokeDasharray="2 2" />
              <path d="M10 30h15M10 50h15M10 70h15" />
              <path d="M75 30h15M75 50h15M75 70h15" />
              <path d="M30 10v15M50 10v15M70 10v15" />
              <path d="M30 75v15M50 75v15M70 75v15" />
              <circle cx="50" cy="50" fill="currentColor" r="4" />
              <path d="M50 25v15M50 60v15M25 50h15M60 50h15" strokeDasharray="1 3" />
            </svg>
            <div className="absolute top-4 left-4 font-code-sm text-code-sm text-on-surface-variant">SYS.ARCH.01</div>
            <div className="absolute bottom-4 right-4 font-code-sm text-code-sm text-on-surface-variant">ESP32_DEV</div>
          </div>
        </div>
      </div>
    </section>
  )
}
