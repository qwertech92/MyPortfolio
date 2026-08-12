import { useState } from 'react'

const certificates = [
  { src: '/Certificates/awscerts.jpg', alt: 'AWS Certificate' },
  { src: '/Certificates/certs.png', alt: 'Certificate' },
  { src: '/Certificates/certs2.png', alt: 'Certificate 2' },
  { src: '/Certificates/certs3.png', alt: 'Certificate 3' },
  { src: '/Certificates/highschoolcerts.jpg', alt: 'High School Certificate' },
  { src: '/Certificates/senirohighcerts.jpg', alt: 'Senior High School Certificate' },
]

export default function CertificationsSection() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="certifications" className="relative flex flex-col w-full px-4 lg:px-[48px] py-24">
      <div className="max-w-[1200px] mx-auto w-full flex flex-col gap-8">
        {/* Header */}
        <div className="flex items-center gap-4">
          <h2 className="font-display-lg text-display-lg text-primary">Certifications</h2>
          <div className="h-[1px] flex-1 bg-outline-variant" />
        </div>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Certificates and achievements earned throughout my academic and professional journey.
        </p>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <button
              key={index}
              onClick={() => setSelected(cert)}
              className="group relative bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="w-full h-full object-contain bg-surface-container-low p-2 group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="material-symbols-outlined text-[20px] text-primary bg-surface/90 rounded-full p-1 shadow-sm">
                  zoom_in
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-on-surface/80 backdrop-blur-sm p-4"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate preview"
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.src}
              alt={selected.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            />
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-3 -right-3 w-10 h-10 bg-surface border border-outline-variant rounded-full flex items-center justify-center shadow-md hover:bg-surface-container hover:border-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Close preview"
            >
              <span className="material-symbols-outlined text-[20px] text-on-surface">close</span>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
