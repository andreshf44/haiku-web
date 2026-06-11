'use client'

import { useEffect, useState } from 'react'
import Layout from '@/components/Layout'
import Image from 'next/image'
import { FiFeather, FiHome, FiSun } from 'react-icons/fi'

const images = [
  '/images/portadaPrueba.jpg',
  '/images/portadaNoche.jpg',
  '/images/portadaAmanecer.jpg',
]

export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Layout>
      <div id="home" className="relative">
        {/* Hero */}
        <section className="sticky top-0 h-screen overflow-hidden">

          {/* Imágenes */}
          <div className="absolute inset-0">
            {images.map((image, index) => (
              <Image
                key={image}
                src={image}
                alt={`Haiku ${index + 1}`}
                fill
                priority={index === 0}
                className={`
                  absolute inset-0
                  object-cover
                  transition-opacity
                  duration-[2000ms]
                  ${
                    currentImage === index
                      ? 'opacity-100'
                      : 'opacity-0'
                  }
                `}
              />
            ))}
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 z-10" />

          {/* Texto */}
          <div className="absolute top-20 z-20 p-[25px] text-left max-w-[600px] secondary-text-light no-hover">
            <h2 className="text-[24px] md:text-[36px] leading-tight">
              “La luna pasa rápidamente, las ramas aún sostienen las gotas de lluvia.”.
            </h2>

            <p className="text-lg italic mt-4">
              Cada mañana despertarse a la vida abrazados por la magia del Lago Maihue, sus bosques y montañas
            </p>
            <p className="text-lg italic mt-4">
              Un nuevo concepto de turismo wellness en la Región de los Ríos, sur de Chile
            </p>
            <p className='text-xs text-right mt-4'>Haiku de Matsuo Bashō</p>

            {/* Indicadores */}
            <div className="flex gap-2 mt-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-[3px] rounded-full transition-all duration-500 ${
                    currentImage === index
                      ? 'w-12 bg-[#efe9d7]'
                      : 'w-6 bg-[#efe9d780]'
                  }`}
                />
              ))}
            </div>

            {/* ÍCONOS */}
            <div className="flex justify-evenly items-baseline pt-20 font-bold" >
              <div className='grid place-items-center'>
                <img src="/images/bienestar-icon.png" alt="bienestar" className='w-12'/>
                <span className='text-icon'>Bienestar</span>
              </div>
              <div className='grid place-items-center'>
                <img src="/images/alojamiento-icon.png" alt="alojamiento" className='w-16'/>
                <span className='text-icon'>Alojamiento</span>
              </div>
              <div className='grid place-items-center'>
                <img src="/images/experiencias-icon.png" alt="experiencias" className='w-16'/>
                <span className='text-icon'>Experiencias</span>
              </div>
          
            </div>
          </div>

        </section>
      </div>
    </Layout>
  )
}