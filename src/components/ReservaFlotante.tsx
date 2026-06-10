'use client'

import { useEffect, useRef, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function ReservaFlotante() {
  const [casa, setCasa] = useState('Mizu')
  const [fechaInicio, setFechaInicio] = useState('')
  const [fechaSalida, setFechaSalida] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  const fechaInicioRef = useRef<HTMLInputElement>(null)
  const fechaSalidaRef = useRef<HTMLInputElement>(null)

  const telefonoWhatsApp = '56944177821'

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true)
        setIsExpanded(false)
      } else {
        setHasScrolled(false)
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

  const openDatePicker = (ref: React.RefObject<HTMLInputElement | null>) => {
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
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-[calc(100%-32px)] md:w-[390px] max-w-[95vw]">
      <div className={`bg-primary shadow-2xl rounded-[28px] p-6 md:p-7 border border-[#d9d2bf] relative transition-all duration-300 
        ${
          isExpanded
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-5 pointer-events-none'
        }`}
      >
          <button
            onClick={toggleExpand}
            aria-label="Cerrar reserva"
            className="
              absolute
              top-5
              right-5
              w-7
              h-7
              flex
              items-center
              justify-center
              rounded-full
              main-text-dark
              bg-transparent
              border
              border-[#d9d2bf]
              hover:bg-[#efe9d7]
              hover:border-[#b98f5a]
              transition
              text-lg
              leading-none
            "
          >
            ×
          </button>
          <div className="text-center mb-7">
            <p className="text-icon text-[11px] tracking-[0.35em] uppercase mb-2">
              Haiku
            </p>

            <h3 className="main-text-dark text-[24px] font-semibold leading-tight">
              Reserva tu experiencia
            </h3>

            <p className="secondary-text-dark text-sm mt-2">
              Consulta disponibilidad para tu estadía en el bosque.
            </p>
          </div>

          <div className="mb-6">
            <label className="text-icon block text-[11px] uppercase tracking-[0.18em] mb-2">
              Cabaña
            </label>

            <select
              value={casa}
              onChange={(e) => setCasa(e.target.value)}
              className="main-text-dark w-full bg-transparent border-0 border-b border-[#cfc6ae] rounded-none px-0 py-3 text-base font-medium focus:outline-none focus:border-[#01552a]"
            >
              <option value="Mizu">Mizu</option>
              <option value="Yuki">Yuki</option>
              <option value="Kumo">Kumo</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-5 mb-8">
            <div>
              <label className="text-icon block text-[11px] uppercase tracking-[0.18em] mb-2">
                Entrada
              </label>

              <div
                onClick={() => openDatePicker(fechaInicioRef)}
                className="cursor-pointer"
              >
                <input
                  ref={fechaInicioRef}
                  type="date"
                  value={fechaInicio}
                  onChange={(e) => setFechaInicio(e.target.value)}
                  className="main-text-dark w-full bg-transparent border-0 border-b border-[#cfc6ae] rounded-none px-0 py-3 text-sm cursor-pointer focus:outline-none focus:border-[#01552a]"
                />
              </div>
            </div>

            <div>
              <label className="text-icon block text-[11px] uppercase tracking-[0.18em] mb-2">
                Salida
              </label>

              <div
                onClick={() => openDatePicker(fechaSalidaRef)}
                className="cursor-pointer"
              >
                <input
                  ref={fechaSalidaRef}
                  type="date"
                  value={fechaSalida}
                  onChange={(e) => setFechaSalida(e.target.value)}
                  className="main-text-dark w-full bg-transparent border-0 border-b border-[#cfc6ae] rounded-none px-0 py-3 text-sm cursor-pointer focus:outline-none focus:border-[#01552a]"
                />
              </div>
            </div>
          </div>

          <button
            className="w-full bg-[#01552a] text-white font-semibold py-3 rounded-xl hover:bg-[#004421] transition"
            onClick={handleReserva}
          >
            Consulta disponibilidad
          </button>

          <div className="flex items-center justify-center gap-2 mt-4 text-sm font-medium secondary-text-dark">
            <FaWhatsapp size={16} />
            <span>Respuesta vía WhatsApp</span>
          </div>
      </div>
      
      <button
          onClick={toggleExpand}
          className={`
          ${
            hasScrolled
            ? 'ml-auto block bg-[#01552a] text-white px-5 py-3 rounded-full shadow-xl hover:bg-[#004421] transition text-sm md:text-base'
            : 'ml-auto block text-white px-5 py-3 border-2 border-[#01552a] rounded w-[70%] bg-transparent hover:bg-[#01552a] hover:text-white transition text-sm md:text-base'
          }
          ${
            isExpanded
            ? 'opacity-0 translate-y-0 pointer-events-none'
            : 'opacity-100 -translate-y-5 pointer-events-auto md:ml-auto md:mx-0 mx-auto'
          }`}

        >
          Reservar
      </button>
      
    </div>
  )
}