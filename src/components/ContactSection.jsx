export default function ContactSection() {
  return (
    <section id="contact" className="py-24 section-padding bg-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute w-[600px] h-[600px] bg-gradient-to-tr from-primary-fixed-dim/10 to-transparent rounded-full blur-[100px] -top-1/4 -right-1/4 pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] bg-gradient-to-bl from-secondary-fixed/8 to-transparent rounded-full blur-[80px] -bottom-1/4 -left-1/4 pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-16 text-center items-center">
          <div className="flex items-center gap-4">
            <span className="w-8 h-[1px] bg-outline-variant" />
            <span className="font-technical-label text-technical-label text-primary uppercase tracking-widest">
              Get In Touch
            </span>
            <span className="w-8 h-[1px] bg-outline-variant" />
          </div>
          <h2 className="font-display-lg text-display-lg text-on-surface tracking-tight">
            Let's Connect
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
            Open to internship opportunities, project collaborations, and technical discussions.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {/* Email */}
          <a
            href="mailto:johnkennethpitel0@gmail.com"
            className="group flex flex-col items-center gap-4 p-8 bg-surface-container-lowest border border-outline-variant rounded-xl hover:border-primary hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined text-[28px] text-on-surface-variant group-hover:text-primary transition-colors">
                alternate_email
              </span>
            </div>
            <div className="text-center">
              <h3 className="font-headline-md text-[18px] text-on-surface mb-1">Email</h3>
              <span className="font-code-sm text-code-sm text-on-surface-variant break-all">
                johnkennethpitel0@gmail.com
              </span>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/qwertech92"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4 p-8 bg-surface-container-lowest border border-outline-variant rounded-xl hover:border-primary hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <svg className="w-7 h-7 text-on-surface-variant group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <div className="text-center">
              <h3 className="font-headline-md text-[18px] text-on-surface mb-1">GitHub</h3>
              <span className="font-code-sm text-code-sm text-on-surface-variant">
                qwertech92
              </span>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/john-kenneth-pitel-032b02428/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4 p-8 bg-surface-container-lowest border border-outline-variant rounded-xl hover:border-primary hover:shadow-md transition-all duration-300 hover:-translate-y-1 sm:col-span-2 lg:col-span-1"
          >
            <div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <svg className="w-7 h-7 text-on-surface-variant group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <div className="text-center">
              <h3 className="font-headline-md text-[18px] text-on-surface mb-1">LinkedIn</h3>
              <span className="font-code-sm text-code-sm text-on-surface-variant">
                john-kenneth-pitel
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
