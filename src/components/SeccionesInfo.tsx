'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

const experiencias = [
  {
    title: {
      es: 'Espacio Arrayán',
      en: 'Arrayán Space',
    },
    subtitle: {
      es: 'Encuentros y formación',
      en: 'Gatherings and learning',
    },
    image: '/images/experiencias/portada-salon.jpg',
    description: {
      es: 'Salón multiuso para clases, seminarios, retiros, formaciones y eventos privados. Un espacio rodeado de naturaleza, con kitchen equipada, camarines, baño, WiFi y mirador con vista al lago.',
      en: 'A multipurpose space for classes, seminars, retreats, training programs and private events. Surrounded by nature, with an equipped kitchenette, changing rooms, bathroom, WiFi and a viewpoint overlooking the lake.',
    },
    booking: 'haiku',
  },
  {
    title: {
      es: 'Spa',
      en: 'Spa',
    },
    subtitle: {
      es: 'Calor, vapor y descanso',
      en: 'Warmth, steam and relaxation',
    },
    image: '/images/experiencias/portada-spa.jpg',
    description: {
      es: 'Un espacio de bienestar con sauna a leña y baño turco con hierbas medicinales, pensado para relajar el cuerpo, disminuir el estrés y recuperar una profunda sensación de calma.',
      en: 'A wellness space with a wood-fired sauna and Turkish bath with medicinal herbs, designed to relax the body, reduce stress and restore a deep sense of calm.',
    },
    booking: 'haiku',
  },
  {
    title: {
      es: 'Trekking',
      en: 'Trekking',
    },
    subtitle: {
      es: 'Salto Hueinahue y cascada Trailef',
      en: 'Hueinahue Waterfall and Trailef Cascade',
    },
    image: '/images/experiencias/portada-trekking.png',
    description: {
      es: 'Caminata inmersiva a través de bosque siempre verde hasta el Salto Hueinahue y cascada Trailef, donde se aprecia una vista panorámica del sector y la erosión que el agua ha dejado en las rocas con el paso del tiempo. La experiencia incorpora el relato de la historia local y la cosmovisión mapuche-huilliche.',
      en: 'An immersive hike through evergreen native forest to Hueinahue Waterfall and Trailef Cascade, offering panoramic views of the area and the formations created by water erosion over time. The experience also explores local history and the Mapuche-Huilliche worldview.',
    },
    booking: 'manke',
  },
  {
    title: {
      es: 'Stand Up Paddle',
      en: 'Stand Up Paddle',
    },
    subtitle: {
      es: 'Aventura en Lago Maihue',
      en: 'Adventure on Lake Maihue',
    },
    image: '/images/experiencias/portada-stand.png',
    description: {
      es: 'Travesía guiada de Stand Up Paddle desde Puerto Rupumeica hasta la base del volcán Los Guindos, navegando en un entorno cordillerano de alto valor paisajístico. El recorrido permite descubrir la historia y geografía del Lago Maihue desde una perspectiva única.',
      en: 'A guided Stand Up Paddle journey from Puerto Rupumeica toward the base of Los Guindos volcano, surrounded by spectacular Andean scenery. Discover the history and geography of Lake Maihue from a unique perspective on the water.',
    },
    booking: 'manke',
  },
  {
    title: {
      es: 'Rapel en Cascadas',
      en: 'Waterfall Rappelling',
    },
    subtitle: {
      es: 'Aventura entre cascadas',
      en: 'Adventure among waterfalls',
    },
    image: '/images/experiencias/portada-rapel.png',
    description: {
      es: 'Ruta de turismo aventura que combina el descenso en rapel por destacadas caídas de agua de difícil acceso. Una experiencia de inmersión en el ecosistema, realizada con guías capacitados, protocolos de seguridad y equipamiento técnico certificado.',
      en: 'An adventure route combining rappelling descents alongside remote waterfalls. An immersive experience in the local ecosystem, accompanied by trained guides and carried out with safety protocols and certified technical equipment.',
    },
    booking: 'manke',
  },
  {
    title: {
      es: 'Canyoning',
      en: 'Canyoning',
    },
    subtitle: {
      es: 'Descenso por cascada Trailef',
      en: 'Trailef Cascade descent',
    },
    image: '/images/experiencias/portada-canyoning.png',
    description: {
      es: 'Descenso de la cascada Trailef, saltando a pozas cristalinas, deslizándose por toboganes naturales de roca y descendiendo en rapel junto a la fuerza del agua, rodeado de bosque nativo. Una experiencia de adrenalina y conexión profunda con la naturaleza.',
      en: 'Descend Trailef Cascade by jumping into crystal-clear pools, sliding down natural rock formations and rappelling alongside the rushing water, surrounded by native forest. An experience filled with adrenaline and a deep connection with nature.',
    },
    booking: 'manke',
  },
]

const translations = {
  es: {
    introduction: 'VIVE LA EXPERIENCIA HAIKU',
    title: 'Actividades para cuerpo y alma',
    book: 'Reservar',
    operatedBy: 'Experiencia operada por Excursiones Mañke',
  },
  en: {
    introduction: 'LIVE THE HAIKU EXPERIENCE',
    title: 'Activities for body and soul',
    book: 'Book',
    operatedBy: 'Experience operated by Excursiones Mañke',
  },
}

export default function SeccionesInfo() {
  const [activeIndex, setActiveIndex] = useState(0)
  const { lang } = useLanguage()

  const activeExperience = experiencias[activeIndex]
  const t = translations[lang]

  const mankeWhatsapp = `https://wa.me/56984273219?text=${encodeURIComponent(
    lang === 'es'
      ? `Hola Excursiones Mañke, los contacto a través de Haiku Refugio & Spa. Quisiera reservar la experiencia ${activeExperience.title.es}.`
      : `Hello Excursiones Mañke, I'm contacting you through Haiku Refugio & Spa. I would like to book the ${activeExperience.title.en} experience.`
  )}`

  return (
    <section id="experiencias" className="bg-dark w-full py-20 md:py-36 px-4 md:px-0">
      <div className="max-w-7xl mx-auto">

        <h4 className="title-introduction !text-center text-3x1 lg:text-4x1">
          {t.introduction}
        </h4>

        <h2 className="title-light text-4xl !text-center">
          {t.title}
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12">
          {experiencias.map((experiencia, index) => (
            <button
              key={experiencia.title.es}
              onClick={() => setActiveIndex(index)}
              className={`px-5 py-2 rounded-full border transition-all duration-300 text-sm md:text-base cursor-pointer ${
                activeIndex === index
                  ? 'bg-[#cda264] border-[#cda264] text-white'
                  : 'border-[#cda264] text-[#efe9d7] hover:bg-[#cda264] hover:text-white'
              }`}
            >
              {experiencia.title[lang]}
            </button>
          ))}
        </div>

        {/* Contenido activo */}
        <div className="grid md:grid-cols-[3fr_2fr] bg-[#f5f5ef] rounded-2xl overflow-hidden shadow-2xl">

          <div className="relative h-[320px] md:h-[460px]">
            <Image
              src={activeExperience.image}
              alt={`${activeExperience.title[lang]} - Haiku Refugio & Spa`}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center p-8 md:p-12">

            <p className="text-icon uppercase tracking-[0.22em] text-xs font-semibold mb-3">
              {activeExperience.subtitle[lang]}
            </p>

            <h3 className="title-font main-text-dark text-4xl font-medium mb-5">
              {activeExperience.title[lang]}
            </h3>

            <p className="secondary-text-dark text-sm leading-relaxed mb-8">
              {activeExperience.description[lang]}
            </p>

            {activeExperience.booking === 'manke' ? (
              <>
                <a
                  href={mankeWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-button-gold inline-block w-fit"
                  aria-label={`${t.book} ${activeExperience.title[lang]} con Excursiones Mañke`}
                >
                  {t.book}
                </a>

                <p className="secondary-text-dark text-xs mt-3 opacity-70">
                  {t.operatedBy}
                </p>
              </>
            ) : (
              <a
                href="/#reservar"
                className="bg-button-gold inline-block w-fit"
              >
                {t.book}
              </a>
            )}

          </div>
        </div>
      </div>
    </section>
  )
}