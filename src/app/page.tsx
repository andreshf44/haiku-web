'use client'

import { useEffect, useState } from 'react'
import Layout from '@/components/Layout'
import Image from 'next/image'

export default function HomePage() {
  const [showHero, setShowHero] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setShowHero(window.scrollY < 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Layout>
      <div className="text-center relative">
        {/* Contenedor del texto + imagen */}
        <div
          className={`fixed w-full h-screen overflow-hidden transition-opacity duration-700 ease-in-out z-10 ${
            showHero ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Texto sobre la imagen */}
          <div className="absolute z-20 text-[#efe9d7] p-[25px] text-left">
            <h2 className="text-[24px]">
              “No es solo un lugar, es un respiro que se siente en la piel”.
            </h2>
            <p className="text-[18px] italic">
              Cabañas de inspiración japonesa, terapias de bienestar y conexión con lo esencial, en medio del bosque.
            </p>
          </div>

          {/* Imagen de fondo */}
          <Image
            src="/images/portadaPrueba.jpg"
            alt="Vista natural de Haiku"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </div>
    </Layout>
  )
}
