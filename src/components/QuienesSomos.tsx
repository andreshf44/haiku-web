'use client'

import { useLanguage } from '@/context/LanguageContext'

const translations = {
  es: {
    introduction: 'QUIÉNES SOMOS',
    title: 'Un refugio para reconectar contigo',
    description:
      'Somos un proyecto turístico en el sector Hueinahue de Lago Maihue, un tesoro vivo en la Región de Los Ríos, a 60 km de Futrono. A los pies de las imponentes y majestuosas montañas de la Cordillera de los Andes, el Lago Maihue, tiene un área de 46 km², regalando a los ojos un verdadero poema vivo y constante, un espectáculo estético y conmovedor de la naturaleza. Aguas puras cristalinas, azules, verdes y turquesas, miradores, saltos y cascadas, ríos y las mejores playas de la región. Promovemos el bienestar y la salud integral, fomentando prácticas de amabilidad y sana convivencia. Apoyamos la inclusión, la diversidad y el respeto por el medio ambiente. Más que cabañas, somos un refugio, inspirado en tu bienestar, tu conexión con la naturaleza y el encuentro profundo contigo mismo. HAIKU Refugio & Spa nace en 2026, espacio hermano de Sentido Vital Sur, centro de medicina natural y spa en La Unión, Región de los Ríos.',
  },
  en: {
    introduction: 'ABOUT US',
    title: 'A retreat to reconnect with yourself',
    description:
      'We are a tourism project located in Hueinahue, on Lake Maihue, a living treasure in the Los Ríos Region, 60 km from Futrono. At the foot of the imposing and majestic Andes Mountains, Lake Maihue covers an area of 46 km², offering a living and ever-changing poem, a breathtaking display of nature. Pure, crystal-clear waters in shades of blue, green and turquoise, viewpoints, waterfalls, rivers and some of the most beautiful beaches in the region. We promote well-being and holistic health, encouraging kindness and harmonious coexistence. We support inclusion, diversity and respect for the environment. More than cabins, we are a retreat inspired by your well-being, your connection with nature and a deeper connection with yourself. HAIKU Refugio & Spa was founded in 2026 as a sister space to Sentido Vital Sur, a natural medicine and spa center in La Unión, Los Ríos Region.',
  },
}

export default function QuienesSomos() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section
      id="quienes-somos"
      className="bg-primary w-full py-20 md:py-36 px-4 md:px-0"
    >
      <div className="max-w-7xl mx-auto">

        {/* TITLE SOLO MOBILE */}
        <h4 className="block md:hidden title-introduction text-3x1 lg:text-4x1 !text-center">
          {t.introduction}
        </h4>
        <h2 className="block md:hidden text-2xl !mb-8 title !text-center">
          {t.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* IMAGE */}
          <div>
            <img
              src="/images/descripcionLogo.png"
              alt={lang === 'es' ? 'Bosque Haiku' : 'Haiku forest'}
              className="w-full rounded-2xl shadow-md hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* TEXT */}
          <div>
            
            {/* TITLE SOLO DESKTOP */}
            <h4 className="title-introduction text-3x1 lg:text-4x1 hidden md:block">
              {t.introduction}
            </h4>

            <h2 className="title text-4xl hidden md:block">
              {t.title}
            </h2>

            <p className="text-sm leading-relaxed secondary-text-dark text-center md:text-left">
              {t.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}