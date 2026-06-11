import Image from 'next/image'

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
      'Salón multiuso para clases, seminarios, retiros, formaciones y eventos privados. Capacidad para 12-15 personas, accesibilidad universal, kitchen equipada, camarines, baño, WiFi y mirador con vista al lago.',
    image: '/images/experiencias/arrayan.jpg',
  },
  {
    title: 'Spa',
    description:
      'Sauna a leña y baño turco con hierbas medicinales. Espacios pensados para relajar el cuerpo, reducir el estrés, favorecer el descanso y reconectar con una profunda sensación de bienestar.',
    image: '/images/experiencias/spa.jpg',
  },
  {
    title: 'Trekking',
    description:
      'Explora senderos rodeados de bosque nativo y ríos cristalinos, con rutas guiadas y de autoexploración para todos los niveles.',
    image: '/images/experiencias/trekking.jpg',
  },
  {
    title: 'Bicicleta',
    description:
      'Recorre caminos interiores y exteriores del complejo, con rutas de montaña y senderos para todos los niveles.',
    image: '/images/experiencias/bicicleta.jpg',
  },
  {
    title: 'Cursos y formaciones',
    description:
      'Muy pronto abriremos espacios para cursos, talleres y experiencias formativas en conexión con la naturaleza.',
    image: '/images/experiencias/formaciones.jpg',
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
            <article
              key={experience.title}
              className="bg-secondary rounded-xl overflow-hidden shadow-sm border border-[#d9d2bf]"
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

                <h3 className="main-text-dark font-semibold text-lg mt-1">
                  {experience.title}
                </h3>

                <p className="secondary-text-dark text-sm leading-relaxed mt-1">
                  {experience.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}