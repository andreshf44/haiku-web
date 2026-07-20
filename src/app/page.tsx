'use client'

import Layout from '@/components/Layout'

export default function HomePage() {
  return (
    <Layout>
      <div id="home" className="relative">
        {/* Hero */}
        <section className="sticky top-0 h-screen overflow-hidden">
          {/* Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/images/video-dron.mp4" type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 z-10 bg-black/20" />

          {/* Texto */}
          <div className="absolute top-60 z-20 max-w-[600px] p-[25px] text-left secondary-text-light no-hover">
            <h2 className="text-[24px] leading-tight md:text-[36px]">
              “La luna pasa rápidamente, las ramas aún sostienen las gotas de
              lluvia.”
            </h2>

            <p className="mt-4 text-lg italic">
              Cada mañana, despertar a la vida abrazados por la magia del Lago
              Maihue, sus bosques y montañas.
            </p>

            <p className="mt-4 text-lg italic">
              Un nuevo concepto de turismo wellness en la Región de Los Ríos,
              sur de Chile.
            </p>

            <p className="mt-4 text-right text-xs">
              Haiku de Matsuo Bashō
            </p>

            {/* Íconos */}
            <div className="flex items-baseline justify-evenly pt-20 font-bold">
              <div className="grid place-items-center">
                <img
                  src="/images/bienestar-icon.png"
                  alt="Bienestar"
                  className="w-12"
                />
                <span className="text-icon">Bienestar</span>
              </div>

              <div className="grid place-items-center">
                <img
                  src="/images/alojamiento-icon.png"
                  alt="Alojamiento"
                  className="w-16"
                />
                <span className="text-icon">Alojamiento</span>
              </div>

              <div className="grid place-items-center">
                <img
                  src="/images/experiencias-icon.png"
                  alt="Experiencias"
                  className="w-16"
                />
                <span className="text-icon">Experiencias</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}