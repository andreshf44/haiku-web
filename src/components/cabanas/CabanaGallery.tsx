'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

type CabanaGalleryProps = {
  images: string[]
}

const translations = {
  es: {
    sectionTitle: 'Galería de la cabaña',
    galleryHint: 'Haz clic en una imagen para ver la galería completa',
    imageAlt: 'Imagen de la galería',
    expandedImageAlt: 'Imagen ampliada de la galería',
    close: 'Cerrar galería',
    previous: 'Imagen anterior',
    next: 'Imagen siguiente',
    dialogLabel: 'Galería de imágenes ampliada',
  },
  en: {
    sectionTitle: 'Cabin gallery',
    galleryHint: 'Click an image to view the full gallery',
    imageAlt: 'Gallery image',
    expandedImageAlt: 'Expanded gallery image',
    close: 'Close gallery',
    previous: 'Previous image',
    next: 'Next image',
    dialogLabel: 'Expanded image gallery',
  },
}

export default function CabanaGallery({ images }: CabanaGalleryProps) {
  const { lang } = useLanguage()
  const t = translations[lang]

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const isOpen = selectedIndex !== null

  const closeModal = () => setSelectedIndex(null)

  const nextImage = () => {
    if (selectedIndex === null) return

    setSelectedIndex((selectedIndex + 1) % images.length)
  }

  const prevImage = () => {
    if (selectedIndex === null) return

    setSelectedIndex(
      (selectedIndex - 1 + images.length) % images.length
    )
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === 'Escape') closeModal()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, selectedIndex])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <section
        className="bg-primary py-10 px-4"
        aria-labelledby="cabana-gallery-title"
      >
        <h2
          id="cabana-gallery-title"
          className="sr-only"
        >
          {t.sectionTitle}
        </h2>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {images.slice(0, 5).map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`${t.imageAlt} ${index + 1}`}
                className="overflow-hidden rounded-lg shadow-md group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`${t.imageAlt} ${index + 1}`}
                  className="w-full h-[180px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 main-text-dark text-sm font-semibold">
            <span>{t.galleryHint}</span>

            <span
              className="text-lg"
              aria-hidden="true"
            >
              ↗
            </span>
          </div>
        </div>
      </section>

      {isOpen && selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t.dialogLabel}
          className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button
            type="button"
            onClick={closeModal}
            className="absolute top-5 right-5 text-white text-3xl hover:opacity-70 transition z-20 cursor-pointer"
            aria-label={t.close}
          >
            ×
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            className="absolute left-4 md:left-8 text-white text-5xl hover:opacity-70 transition z-20 cursor-pointer"
            aria-label={t.previous}
          >
            ‹
          </button>

          <img
            src={images[selectedIndex]}
            alt={`${t.expandedImageAlt} ${selectedIndex + 1}`}
            className="max-w-full max-h-[85vh] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="absolute right-4 md:right-8 text-white text-5xl hover:opacity-70 transition z-20 cursor-pointer"
            aria-label={t.next}
          >
            ›
          </button>

          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm"
            aria-live="polite"
          >
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}