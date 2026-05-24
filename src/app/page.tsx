'use client'

import Layout from '@/components/Layout'
import Image from 'next/image'

export default function HomePage() {
  return (
    <Layout>
      <div className="relative pt-[45px]">
        {/* Hero fijo al inicio */}
        <section className="sticky top-0 h-screen overflow-hidden">
          {/* Overlay opcional para contraste */}
          <div className="absolute inset-0 bg-black/20 z-10" />

          {/* Texto sobre imagen */}
          <div className="absolute z-20 text-[#efe9d7] p-[25px] text-left max-w-[600px]">
            <h2 className="text-[24px] md:text-[36px] leading-tight">
              “No es solo un lugar, es un respiro que se siente en la piel”.
            </h2>

            <p className="text-[18px] italic mt-4">
              Cabañas de inspiración japonesa, terapias de bienestar y
              conexión con lo esencial, en medio del bosque.
            </p>
          </div>

          {/* Imagen fondo */}
          <Image
            src="/images/portadaPrueba.jpg"
            alt="Vista natural de Haiku"
            fill
            className="object-cover"
            priority
          />
        </section>
        
      </div>
    </Layout>
  )
}