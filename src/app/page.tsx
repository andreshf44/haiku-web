'use client'

import Layout from '@/components/Layout'
import { useLanguage } from '@/context/LanguageContext'

const translations = {
  es: {
    title: 'Haiku, cabañas y experiencias en la naturaleza',
    book: 'Reservar',
    videoLabel: 'Paisaje natural que rodea los alojamientos Haiku',
  },
  en: {
    title: 'Haiku, cabins and experiences surrounded by nature',
    book: 'Book now',
    videoLabel: 'Natural landscape surrounding Haiku accommodations',
  },
}

export default function HomePage() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <Layout>
      <main>
        <section
          id="home"
          aria-labelledby="hero-title"
          className="relative flex h-screen items-center justify-center overflow-hidden"
        >
          {/* Título principal para SEO y accesibilidad */}
          <h1 id="hero-title" className="sr-only">
            {t.title}
          </h1>

          {/* Video de fondo */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={t.videoLabel}
            className="absolute inset-0 z-0 h-full w-full object-cover"
          >
            <source
              src="/images/video-dron.mp4"
              type="video/mp4"
            />
          </video>

          {/* Overlay oscuro */}
          <div
            className="absolute inset-0 z-10 bg-black/30"
            aria-hidden="true"
          />

          {/* Degradado */}
          <div
            className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-transparent to-black/45"
            aria-hidden="true"
          />

          {/* Contenido central */}
          <div className="relative z-20 flex flex-col items-center justify-center px-6">
            <img
              src="/images/logo-crema.png"
              alt="Haiku"
              className="
                h-auto
                w-[280px]
                object-contain
                drop-shadow-[0_8px_30px_rgba(0,0,0,0.45)]
                md:w-[430px]
                lg:w-[520px]
              "
            />

            <a
              href="#reservar"
              className="
                secondary-text-light
                mt-8
                min-w-[220px]
                border border-[#efe9d7]/80
                bg-black/10
                px-8 py-3
                text-center
                text-sm font-medium
                uppercase
                tracking-[0.18em]
                backdrop-blur-sm
                transition-all duration-300
                hover:bg-[#efe9d7]
                hover-secondary-light
              "
            >
              {t.book}
            </a>
          </div>
        </section>
      </main>
    </Layout>
  )
}