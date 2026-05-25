'use client'

import { useEffect, useRef, useState } from 'react'

export default function ReservaFlotante() {
  const [casa, setCasa] = useState('Mizu')
  const [fechaInicio, setFechaInicio] = useState('')
  const [fechaSalida, setFechaSalida] = useState('')
  const [isExpanded, setIsExpanded] = useState(true)

  const fechaInicioRef = useRef<HTMLInputElement>(null)
  const fechaSalidaRef = useRef<HTMLInputElement>(null)

  // Número WhatsApp
  const telefonoWhatsApp = '56944177821'

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsExpanded(false)
      } else {
        setIsExpanded(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev)
  }

  const openDatePicker = (
    ref: React.RefObject<HTMLInputElement | null>
  ) => {
    if (ref.current) {
      ref.current.showPicker?.()
      ref.current.focus()
    }
  }

  const handleReserva = () => {
    if (!fechaInicio || !fechaSalida) {
      alert('Por favor selecciona fecha de ingreso y salida')
      return
    }

    const mensaje = `
Hola Haiku 🌿

Quiero consultar disponibilidad para la siguiente reserva:

🏡 Cabaña: ${casa}
📅 Entrada: ${fechaInicio}
📅 Salida: ${fechaSalida}

Quedo atento/a. Muchas gracias.
    `

    const whatsappUrl = `https://wa.me/${telefonoWhatsApp}?text=${encodeURIComponent(
      mensaje
    )}`

    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-[calc(100%-32px)] md:w-[380px] max-w-[95vw]">
      {isExpanded ? (
        <div className="bg-[#efe9d7] shadow-xl rounded-2xl p-4 text-white border border-[#d9d2bf]">
          <div className="text-[#004421] font-semibold text-center mb-4 text-sm md:text-base">
            Selecciona tu cabaña
          </div>

          {/* Selector de casas */}
          <div className="flex gap-2 mb-4">
            {['Mizu', 'Yuki', 'Kumo'].map((nombre) => (
              <button
                key={nombre}
                onClick={() => setCasa(nombre)}
                className={`flex-1 px-2 md:px-3 py-2 rounded-full text-xs md:text-sm font-medium border transition ${
                  casa === nombre
                    ? 'bg-[#01552a] text-white border-[#01552a]'
                    : 'bg-white text-[#004421] border-[#d8d8d8] hover:bg-[#01552a] hover:text-white'
                }`}
              >
                {nombre}
              </button>
            ))}
          </div>

          {/* Fechas */}
          <div className="flex flex-col md:flex-row gap-3 mb-4">
            {/* Entrada */}
            <div className="flex-1">
              <label className="block text-xs text-[#004421] mb-1">
                Ingreso
              </label>

              <div
                onClick={() => openDatePicker(fechaInicioRef)}
                className="w-full cursor-pointer"
              >
                <input
                  ref={fechaInicioRef}
                  type="date"
                  value={fechaInicio}
                  onChange={(e) => setFechaInicio(e.target.value)}
                  className="w-full p-2 rounded-lg text-[#016630] border border-[#d8d8d8] bg-white text-sm cursor-pointer"
                />
              </div>
            </div>

            {/* Salida */}
            <div className="flex-1">
              <label className="block text-xs text-[#004421] mb-1">
                Salida
              </label>

              <div
                onClick={() => openDatePicker(fechaSalidaRef)}
                className="w-full cursor-pointer"
              >
                <input
                  ref={fechaSalidaRef}
                  type="date"
                  value={fechaSalida}
                  onChange={(e) => setFechaSalida(e.target.value)}
                  className="w-full p-2 rounded-lg text-[#016630] border border-[#d8d8d8] bg-white text-sm cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Botón reservar */}
          <button
            className="w-full bg-[#01552a] text-white font-semibold py-3 rounded-xl hover:bg-[#004421] transition"
            onClick={handleReserva}
          >
            Reservar
          </button>
        </div>
      ) : (
        <button
          onClick={toggleExpand}
          className="ml-auto block bg-[#01552a] text-white px-5 py-3 rounded-full shadow-xl hover:bg-[#004421] transition text-sm md:text-base"
        >
          Reservar
        </button>
      )}
    </div>
  )
}