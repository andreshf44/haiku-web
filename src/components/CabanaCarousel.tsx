'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const cabanas = [
  {
    slug: 'mizu',
    nombre: 'Mizu',
    descripcion:
      'Mizu es una cabaña grupal para 4 personas que fluye con naturalidad entre árboles y susurros del bosque. Diseñada para compartir una experiencia cálida y comunitaria, con una tinaja al aire libre bajo el cielo del sur. Ideal para familias o amistades que quieren reconectar, reír, descansar.',
    imagen: '/images/mizu.jpg',
  },
  {
    slug: 'yuki',
    nombre: 'Yuki',
    descripcion:
      'Yuki es una cabaña íntima, silenciosa, pensada para el descanso profundo. Minimalismo cálido, texturas naturales y una tinaja privada con vista al bosque te invitan a soltar el tiempo y volver a ti. Un refugio para quienes buscan quietud, pareja o retiro personal.',
    imagen: '/images/yuki.jpg',
  },
  {
    slug: 'kumo',
    nombre: 'Kumo',
    descripcion:
      'Kumo es la cabaña más etérea de Haiku. Su diseño ligero y envolvente ofrece una experiencia suspendida entre el bosque y el cielo. Ideal para desconectar del mundo, reencontrarte con tu cuerpo y respirar profundo. Todo está pensado para el placer tranquilo.',
    imagen: '/images/kumo.jpg',
  },
]

export default function CabanaCarousel() {
  const [index, setIndex] = useState(0)
  const cabana = cabanas[index]

  const next = () => setIndex((prev) => (prev + 1) % cabanas.length)
  const prev = () =>
    setIndex((prev) => (prev - 1 + cabanas.length) % cabanas.length)

  const goTo = (i: number) => setIndex(i)

  useEffect(() => {
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-[#f5f5ef] w-full mx-auto mt-[14vh] h-[80vh] px-[25px] transition-all duration-500">

      {/* ================= MOBILE ================= */}
      <div className="relative w-full md:hidden">

        {/* IMAGE */}
        <div className="relative">
          <Image
            src={cabana.imagen}
            alt={cabana.nombre}
            width={600}
            height={400}
            className="rounded-xl w-full h-[40vh] object-cover shadow-lg"
          />

          {/* LEFT ARROW */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md text-[#004421] w-10 h-10 rounded-full shadow-md flex items-center justify-center"
          >
            ‹
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md text-[#004421] w-10 h-10 rounded-full shadow-md flex items-center justify-center"
          >
            ›
          </button>
        </div>

        {/* TEXT BELOW IMAGE */}
        <div className="mt-5">
          <h2 className="text-2xl font-bold text-[#004421] mb-3">
            {cabana.nombre}
          </h2>

          <p className="text-gray-700 italic text-base leading-relaxed">
            {cabana.descripcion}
          </p>

          <Link
            href={`/cabanas/${cabana.slug}`}
            className="inline-block mt-4 px-5 py-2 bg-[#004421] text-white rounded-lg w-full text-center"
          >
            Saber más
          </Link>
        </div>
      </div>

      {/* ================= DESKTOP (TU DISEÑO ORIGINAL INTACTO) ================= */}
      <div className="hidden md:flex flex-row items-center justify-between w-full">

        <div className="w-1/2 pr-4 flex h-[40vh] flex-col justify-between">
          <h2 className="text-[32px] font-bold text-[#004421] mb-2">
            {cabana.nombre}
          </h2>

          <p className="text-gray-700 italic text-lg">
            {cabana.descripcion}
          </p>

          <div className="flex justify-between items-center">
            <div className="mt-4 flex space-x-2">
              {cabanas.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-3 h-3 rounded-full ${
                    i === index ? 'bg-[#004421]' : 'bg-gray-400'
                  } transition`}
                />
              ))}
            </div>

            <Link
              href={`/cabanas/${cabana.slug}`}
              className="mt-4 inline-block px-4 py-2 bg-[#004421] text-white rounded hover:bg-[#006633] transition"
            >
              Saber más
            </Link>
          </div>
        </div>

        <div className="w-1/2 pl-4">
          <Image
            src={cabana.imagen}
            alt={cabana.nombre}
            width={600}
            height={400}
            className="rounded-lg w-full h-[65vh] object-cover shadow"
          />
        </div>

      </div>
    </section>
  )
}