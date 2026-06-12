import Image from 'next/image'
import Link from 'next/link'

import {
  FaHotTub,
  FaTree,
  FaUser,
  FaWater
} from 'react-icons/fa'

type Include = {
  icon: React.ElementType
  label: string
}

type Experience = {
  title: string
  description: string
  image: string
  href: string
  includes: Include[]
  status?: string
}

const experiences: Experience[] = [
  {
    title: 'Casa Roble',
    description: 'La experiencia Del Abuelo.',
    image: '/images/cabanas/roble/portadaNoche.jpg',
    href: '/cabanas/roble',
    includes: [
      { icon: FaUser, label: '6 huéspedes' },
      { icon: FaHotTub, label: 'Tinaja privada' },
      { icon: FaTree, label: 'Vista al bosque' },
    ],
  },
  {
    title: 'Refugio Ulmo',
    description: 'La experiencia Del Gran Sanador.',
    image: '/images/cabanas/ulmo/portadaPrueba.jpg',
    href: '/cabanas/ulmo',
    includes: [
      { icon: FaUser, label: '2 huéspedes' },
      { icon: FaHotTub, label: 'Tinaja privada' },
      { icon: FaWater, label: 'Vista al lago' },
    ],
  },
  {
    title: 'Refugio Canelo',
    description: 'La experiencia Del Lugar De La Verdad.',
    image: '/images/cabanas/canelo/portadaAmanecer.jpg',
    href: '/cabanas/canelo',
    includes: [
      { icon: FaUser, label: '2 huéspedes' },
      { icon: FaHotTub, label: 'Tinaja privada' },
      { icon: FaWater, label: 'Vista al lago' },
    ],
  },
]

export default function Alojamientos() {
  return (
    <section id='alojamientos' className="bg-secondary w-full py-20 md:py-36 px-4 md:px-0">
      <div className="max-w-7xl mx-auto">
        <h4 className="title-introduction !text-center text-3x1 lg:text-4x1">
          NUESTRAS CABAÑAS
        </h4>
        <h1 className="title text-4xl !text-center">Tres experiencias únicas</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {experiences.map((experience) => (
            <Link
              key={experience.title}
              href={experience.href}
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
              <div className="relative h-[190px]">
                <Image
                  src={experience.image}
                  alt={experience.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="main-text-dark font-bold text-xl mt-1 transition-colors duration-300 group-hover:text-icon">
                  {experience.title}
                </h3>

                <p className="secondary-text-dark text-sm leading-relaxed mt-1">
                  {experience.description}
                </p>

                <div className="mt-4 grid grid-cols-1 gap-2">
                  {experience.includes.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 secondary-text-dark text-sm"
                    >
                      <Icon className="text-icon" size={15} />
                      <span>{label}</span>
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

