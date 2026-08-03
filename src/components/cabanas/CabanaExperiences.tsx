'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

type Experience = {
  title: {
    es: string
    en: string
  }
  description: {
    es: string
    en: string
  }
  image: string
  status?: {
    es: string
    en: string
  }
}

const experiences: Experience[] = [
  {
    title: {
      es: 'Espacio Arrayán',
      en: 'Arrayán Space',
    },
    description: {
      es: 'Un espacio para encuentros, aprendizaje y conexión.',
      en: 'A space for gathering, learning and connection.',
    },
    image: '/images/experiencias/portada-salon.jpg',
  },
  {
    title: {
      es: 'Spa',
      en: 'Spa',
    },
    description: {
      es: 'Bienestar profundo entre calor, vapor y naturaleza.',
      en: 'Deep wellness through warmth, steam and nature.',
    },
    image: '/images/experiencias/portada-spa.jpg',
  },
  {
    title: {
      es: 'Trekking',
      en: 'Trekking',
    },
    description: {
      es: 'Descubre el Salto Hueinahue y la cascada Trailef.',
      en: 'Discover Hueinahue Waterfall and Trailef Cascade.',
    },
    image: '/images/experiencias/portada-trekking.png',
  },
  {
    title: {
      es: 'Stand Up Paddle',
      en: 'Stand Up Paddle',
    },
    description: {
      es: 'Explora el Lago Maihue desde el agua.',
      en: 'Explore Lake Maihue from the water.',
    },
    image: '/images/experiencias/portada-stand.png',
  },
  {
    title: {
      es: 'Rapel en Cascadas',
      en: 'Waterfall Rappelling',
    },
    description: {
      es: 'Descensos guiados entre cascadas.',
      en: 'Guided waterfall rappelling.',
    },
    image: '/images/experiencias/portada-rapel.png',
  },
  {
    title: {
      es: 'Canyoning',
      en: 'Canyoning',
    },
    description: {
      es: 'Pozas cristalinas, toboganes naturales y rapel.',
      en: 'Crystal-clear pools, natural slides and rappelling.',
    },
    image: '/images/experiencias/portada-canyoning.png',
  },
]

const translations = {
  es: {
    title: 'Experiencias Haiku',
    sectionDescription:
      'Experiencias disponibles para complementar tu estadía en Haiku Refugio & Spa.',
  },
  en: {
    title: 'Haiku Experiences',
    sectionDescription:
      'Experiences available to complement your stay at Haiku Refugio & Spa.',
  },
}

export default function CabanaExperiences() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section
      className="bg-primary py-14 px-4"
      aria-labelledby="experiencias-title"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="experiencias-title"
          className="main-text-dark text-3xl md:text-4xl font-semibold text-center mb-2"
        >
          {t.title}
        </h2>

        <p className="sr-only">
          {t.sectionDescription}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {experiences.map((experience) => (
            <Link
              key={experience.title.es}
              href="/#experiencias"
              aria-label={experience.title[lang]}
              className="
                group
                bg-secondary
                rounded-xl
                overflow-hidden
                shadow-sm
                border
                border-[#d9d2bf]
                block
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <div className="relative h-[150px]">
                <Image
                  src={experience.image}
                  alt={`${experience.title[lang]} - Haiku Refugio & Spa`}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 16vw"
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                {experience.status && (
                  <span className="text-icon text-xs uppercase tracking-[0.18em]">
                    {experience.status[lang]}
                  </span>
                )}

                <h3 className="main-text-dark font-semibold text-lg mt-1 transition-colors duration-300 group-hover:text-icon">
                  {experience.title[lang]}
                </h3>

                <p className="secondary-text-dark text-sm leading-relaxed mt-1">
                  {experience.description[lang]}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}