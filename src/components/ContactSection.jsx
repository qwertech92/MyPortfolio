const contactLinks = [
  {
    href: 'mailto:contact@johnkennethpitel.com',
    icon: 'alternate_email',
    title: 'Email',
    subtitle: 'Direct Inquiry',
    isLink: true,
  },
  {
    href: '#',
    icon: 'code',
    title: 'GitHub',
    subtitle: 'Repository Access',
    isLink: true,
  },
  {
    href: '#',
    icon: 'diversity_3',
    title: 'LinkedIn',
    subtitle: 'Professional Network',
    isLink: true,
  },
]

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="section-snap relative w-full h-screen flex flex-col justify-center items-center bg-surface px-4 lg:px-[48px] overflow-hidden"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          color: '#191c1f',
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute w-[800px] h-[800px] bg-gradient-to-tr from-primary-fixed-dim/10 to-transparent rounded-full blur-[100px] -top-1/4 -right-1/4 pointer-events-none" />
      <div className="absolute w-[600px] h-[600px] bg-gradient-to-bl from-secondary-fixed/10 to-transparent rounded-full blur-[80px] -bottom-1/4 -left-1/4 pointer-events-none" />

      <div className="relative z-10 w-full max-w-[800px] flex flex-col items-center gap-12 text-center">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center">
          <span className="font-technical-label text-technical-label text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
            <span className="w-8 h-[1px] bg-outline-variant" />
            Initiate Connection
            <span className="w-8 h-[1px] bg-outline-variant" />
          </span>
          <h2 className="font-display-lg text-display-lg text-on-surface tracking-tighter">
            Get in Touch
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[500px]">
            Available for complex engineering challenges, technical leadership roles, and collaborative architectural discussions.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-outline-variant relative">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-outline-variant bg-surface" />
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[600px]">
          {contactLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="group relative flex flex-col items-center gap-3 p-8 bg-surface-container-lowest border border-outline-variant rounded-xl hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="material-symbols-outlined text-[32px] text-on-surface-variant group-hover:text-primary transition-colors relative z-10">
                {link.icon}
              </span>
              <div className="flex flex-col items-center gap-1 relative z-10">
                <span className="font-headline-md text-headline-md text-on-surface text-[20px]">{link.title}</span>
                <span className="font-technical-label text-technical-label text-on-surface-variant group-hover:text-primary transition-colors">
                  {link.subtitle}
                </span>
              </div>
            </a>
          ))}

          {/* Status Card */}
          <div className="group relative flex flex-col items-center gap-3 p-8 bg-surface-container-low border border-outline-variant rounded-xl hover:border-primary transition-all duration-300 overflow-hidden cursor-default">
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="material-symbols-outlined text-[32px] text-on-surface-variant group-hover:text-secondary transition-colors relative z-10">
              terminal
            </span>
            <div className="flex flex-col items-center gap-1 relative z-10">
              <span className="font-headline-md text-headline-md text-on-surface text-[20px]">Status</span>
              <span className="font-technical-label text-technical-label flex items-center gap-2 text-on-surface-variant">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Accepting Proposals
              </span>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <p className="font-technical-label text-technical-label text-on-surface-variant">
            John Kenneth Pitel © 2024
          </p>
          <div className="flex items-center gap-4 text-outline">
            <span className="font-code-sm text-code-sm">SYS.VER_2.4.1</span>
            <span className="w-1 h-1 rounded-full bg-outline-variant" />
            <span className="font-code-sm text-code-sm">LOC_REMOTE</span>
          </div>
        </div>
      </div>
    </section>
  )
}
