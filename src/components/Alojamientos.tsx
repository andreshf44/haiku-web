'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useLanguage } from '@/context/LanguageContext'

import {
  FaHotTub,
  FaTree,
  FaUser,
  FaWater
} from 'react-icons/fa'

type Include = {
  icon: React.ElementType
  label: {
    es: string
    en: string
  }
}

type Experience = {
  title: string
  description: {
    es: string
    en: string
  }
  image: string
  href: string
  includes: Include[]
  status?: string
}

const experiences: Experience[] = [
  {
    title: 'Casa Roble',
    description: {
      es: 'La experiencia Del Abuelo.',
      en: 'The Grandfather experience.',
    },
    image: '/images/cabanas/roble/portada-roble.jpg',
    href: '/cabanas/roble',
    includes: [
      {
        icon: FaUser,
        label: {
          es: '6 huéspedes',
          en: '6 guests',
        },
      },
      {
        icon: FaHotTub,
        label: {
          es: 'Tinaja privada',
          en: 'Private hot tub',
        },
      },
      {
        icon: FaTree,
        label: {
          es: 'Vista al bosque',
          en: 'Forest view',
        },
      },
    ],
  },
  {
    title: 'Refugio Ulmo',
    description: {
      es: 'La experiencia Del Gran Sanador.',
      en: 'The Great Healer experience.',
    },
    image: '/images/cabanas/ulmo/portada-home.jpg',
    href: '/cabanas/ulmo',
    includes: [
      {
        icon: FaUser,
        label: {
          es: '2 huéspedes',
          en: '2 guests',
        },
      },
      {
        icon: FaHotTub,
        label: {
          es: 'Tinaja privada',
          en: 'Private hot tub',
        },
      },
      {
        icon: FaWater,
        label: {
          es: 'Vista al lago',
          en: 'Lake view',
        },
      },
    ],
  },
  {
    title: 'Refugio Canelo',
    description: {
      es: 'La experiencia Del Lugar De La Verdad.',
      en: 'The Place of Truth experience.',
    },
    image: '/images/cabanas/canelo/portadaCanelo.jpg',
    href: '/cabanas/canelo',
    includes: [
      {
        icon: FaUser,
        label: {
          es: '2 huéspedes',
          en: '2 guests',
        },
      },
      {
        icon: FaHotTub,
        label: {
          es: 'Tinaja privada',
          en: 'Private hot tub',
        },
      },
      {
        icon: FaWater,
        label: {
          es: 'Vista al lago',
          en: 'Lake view',
        },
      },
    ],
  },
]

const translations = {
  es: {
    introduction: 'NUESTRAS CABAÑAS',
    title: 'Tres experiencias únicas',
  },
  en: {
    introduction: 'OUR CABINS',
    title: 'Three unique experiences',
  },
}

export default function Alojamientos() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section id='alojamientos' className="bg-secondary w-full py-20 md:py-36 px-4 md:px-0">
      <div className="max-w-7xl mx-auto">
        <h4 className="title-introduction !text-center text-3x1 lg:text-4x1">
          {t.introduction}
        </h4>

        <h2 className="title text-4xl !text-center">
          {t.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {experiences.map((experience) => (
            <Link
              key={experience.title}
              href={experience.href}
              aria-label={
                lang === 'es'
                  ? `Ver alojamiento ${experience.title}`
                  : `View ${experience.title} accommodation`
              }
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
              <div className="relative h-[220px]">
                <Image
                  src={experience.image}
                  alt={
                    lang === 'es'
                      ? `${experience.title}, alojamiento de Haiku Refugio & Spa`
                      : `${experience.title}, accommodation at Haiku Refugio & Spa`
                  }
                  fill
                  className="object-fill"
                />
              </div>

              <div className="p-4">
                <h3 className="main-text-dark font-bold text-xl mt-1 transition-colors duration-300 group-hover:text-icon">
                  {experience.title}
                </h3>

                <p className="secondary-text-dark text-sm leading-relaxed mt-1">
                  {experience.description[lang]}
                </p>

                <div className="mt-4 grid grid-cols-1 gap-2">
                  {experience.includes.map(({ icon: Icon, label }) => (
                    <div
                      key={label.es}
                      className="flex items-center gap-2 secondary-text-dark text-sm"
                    >
                      <Icon className="text-icon" size={15} />
                      <span>{label[lang]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}