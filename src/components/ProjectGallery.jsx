import { useState, useEffect, useCallback } from 'react'

function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  const image = images[currentIndex]

  // Keyboard navigation
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-on-surface/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-surface/90 text-on-surface hover:bg-surface transition-colors z-10"
        aria-label="Close lightbox"
      >
        <span className="material-symbols-outlined text-[22px]">close</span>
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-4 px-3 py-1.5 bg-surface/90 rounded-lg font-code-sm text-code-sm text-on-surface-variant z-10">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Previous */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-surface/90 text-on-surface hover:bg-surface transition-colors z-10"
          aria-label="Previous image"
        >
          <span className="material-symbols-outlined text-[22px]">chevron_left</span>
        </button>
      )}

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext() }}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-surface/90 text-on-surface hover:bg-surface transition-colors z-10"
          aria-label="Next image"
        >
          <span className="material-symbols-outlined text-[22px]">chevron_right</span>
        </button>
      )}

      {/* Image */}
      <div
        className="max-w-[90vw] max-h-[85vh] flex flex-col items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
        />
        {image.caption && (
          <p className="font-technical-label text-technical-label text-surface-container-lowest text-center">
            {image.caption}
          </p>
        )}
      </div>
    </div>
  )
}

export default function ProjectGallery({ images }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = useCallback(() => setLightboxOpen(false), [])
  const prevImage = useCallback(() => {
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  }, [images.length])
  const nextImage = useCallback(() => {
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1))
  }, [images.length])

  if (!images || images.length === 0) return null

  return (
    <div className="flex flex-col gap-4 mt-6">
      <h4 className="font-technical-label text-technical-label text-on-surface uppercase tracking-widest flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-primary inline-block" /> Project Screenshots
      </h4>

      {/* Gallery Grid */}
      <div className={`grid gap-3 ${
        images.length === 1
          ? 'grid-cols-1 max-w-lg'
          : images.length === 2
          ? 'grid-cols-1 sm:grid-cols-2'
          : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
      }`}>
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className="group relative overflow-hidden rounded-lg border border-outline-variant hover:border-primary transition-all duration-300 bg-surface-container cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/30"
            aria-label={`View ${image.caption || image.alt}`}
          >
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[28px] opacity-0 group-hover:opacity-80 transition-opacity duration-300 drop-shadow-lg">
                zoom_in
              </span>
            </div>
            {/* Caption */}
            {image.caption && (
              <div className="px-3 py-2 bg-surface-container border-t border-outline-variant">
                <span className="font-code-sm text-[11px] text-on-surface-variant line-clamp-1">
                  {image.caption}
                </span>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={images}
          currentIndex={currentIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </div>
  )
}
