'use client'

import { useState } from 'react'
import Image from 'next/image'

const experiencias = [
  {
    title: 'Espacio Arrayán',
    subtitle: 'Encuentros y formación',
    image: '/images/experiencias/salon.jpg',
    description:
      'Salón multiuso para clases, seminarios, retiros, formaciones y eventos privados. Un espacio rodeado de naturaleza, con kitchen equipada, camarines, baño, WiFi y mirador con vista al lago.',
  },
  {
    title: 'Spa',
    subtitle: 'Calor, vapor y descanso',
    image: '/images/experiencias/spa.jpg',
    description:
      'Un espacio de bienestar con sauna a leña y baño turco con hierbas medicinales, pensado para relajar el cuerpo, disminuir el estrés y recuperar una profunda sensación de calma.',
  },
  {
    title: 'Trekking',
    subtitle: 'Bosque y montaña',
    image: '/images/experiencias/trekking.jpg',
    description:
      'Explora senderos rodeados de bosque nativo y paisajes del sur, con rutas pensadas para caminar con calma, respirar profundo y reconectar con la naturaleza.',
  },
  {
    title: 'Bicicleta',
    subtitle: 'Recorridos naturales',
    image: '/images/experiencias/bicicleta.jpg',
    description:
      'Recorre caminos interiores y exteriores del complejo, disfrutando el paisaje a tu propio ritmo entre bosque, senderos y aire puro.',
  },
  {
    title: 'Cursos y formaciones',
    subtitle: 'Próximamente',
    image: '/images/experiencias/formaciones.jpg',
    description:
      'Muy pronto abriremos espacios para cursos, talleres y experiencias formativas en conexión con la naturaleza.',
  },
]

export default function SeccionesInfo() {
  const [activeIndex, setActiveIndex] = useState(0)

  const activeExperience = experiencias[activeIndex]

  return (
    <section id="experiencias" className="bg-dark w-full py-20 md:py-36 px-4 md:px-0">
      <div className="max-w-7xl mx-auto">
        <h4 className="title-introduction !text-center text-3x1 lg:text-4x1">
          VIVE LA EXPERIENCIA HAIKU
        </h4>
        <h1 className="title-light text-4xl !text-center">Actividades para cuerpo y alma</h1>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12">
          {experiencias.map((experiencia, index) => (
            <button
              key={experiencia.title}
              onClick={() => setActiveIndex(index)}
              className={`px-5 py-2 rounded-full border transition-all duration-300 text-sm md:text-base ${
                activeIndex === index
                  ? 'bg-[#cda264] border-[#cda264] text-white'
                  : 'border-[#cda264] text-[#efe9d7] hover:bg-[#cda264] hover:text-white'
              }`}
            >
              {experiencia.title}
            </button>
          ))}
        </div>

        {/* Contenido activo */}
        <div className="grid md:grid-cols-[3fr_2fr] bg-[#f5f5ef] rounded-2xl overflow-hidden shadow-2xl">
          <div className="relative h-[320px] md:h-[460px]">
            <Image
              src={activeExperience.image}
              alt={activeExperience.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center p-8 md:p-12">
            <p className="text-icon uppercase tracking-[0.22em] text-xs font-semibold mb-3">
              {activeExperience.subtitle}
            </p>

            <h3 className="title-font main-text-dark text-4xl font-medium mb-5">
              {activeExperience.title}
            </h3>

            <p className="secondary-text-dark text-sm leading-relaxed mb-8">
              {activeExperience.description}
            </p>

            <a
              href="/#reservar"
              className="bg-button-gold inline-block w-fit"
            >
              Reservar
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}