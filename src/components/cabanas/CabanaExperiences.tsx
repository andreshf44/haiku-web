import Image from 'next/image'
import Link from 'next/link'

type Experience = {
  title: string
  description: string
  image: string
  status?: string
}

const experiences: Experience[] = [
  {
    title: 'Espacio Arrayán',
    description:
      'Un espacio para encuentros, aprendizaje y conexión.',
    image: '/images/experiencias/salon.jpg',
  },
  {
    title: 'Spa',
    description:
      'Bienestar profundo entre calor, vapor y naturaleza.',
    image: '/images/experiencias/spa.jpg',
  },
  {
    title: 'Trekking',
    description:
      'Senderos que invitan a descubrir el bosque nativo.',
    image: '/images/experiencias/trekking.jpg',
  },
  {
    title: 'Bicicleta',
    description:
      'Recorre paisajes únicos a tu propio ritmo.',
    image: '/images/experiencias/bicicleta.jpg',
  },
  {
    title: 'Cursos y formaciones',
    description:
      'Próximamente nuevas experiencias de aprendizaje.',
    image: '/images/experiencias/inmersivas.jpg',
    status: 'Próximamente',
  },
]

export default function CabanaExperiences() {
  return (
    <section className="bg-primary py-14 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="main-text-dark text-3xl md:text-4xl font-semibold text-center mb-8">
          Experiencias Haiku
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {experiences.map((experience) => (
            <Link
            key={experience.title}
            href="/#experiencias"
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
                  alt={experience.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                {experience.status && (
                  <span className="text-icon text-xs uppercase tracking-[0.18em]">
                    {experience.status}
                  </span>
                )}

                <h3 className="main-text-dark font-semibold text-lg mt-1 transition-colors duration-300 group-hover:text-icon">
                  {experience.title}
                </h3>

                <p className="secondary-text-dark text-sm leading-relaxed mt-1">
                  {experience.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}