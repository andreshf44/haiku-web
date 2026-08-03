'use client'

import { useEffect, useRef, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { useLanguage } from '@/context/LanguageContext'

const translations = {
  es: {
    close: 'Cerrar reserva',
    title: 'Reserva tu experiencia',
    description: 'Consulta disponibilidad para tu estadía en el bosque.',
    cabin: 'Cabaña',
    checkIn: 'Entrada',
    checkOut: 'Salida',
    availability: 'Consultar disponibilidad',
    whatsappResponse: 'Respuesta vía WhatsApp',
    book: 'Reservar',
    dateAlert: 'Por favor selecciona fecha de ingreso y salida',
    whatsappMessage: {
      greeting: 'Hola Haiku 🌿',
      introduction:
        'Quiero consultar disponibilidad para la siguiente reserva:',
      cabin: 'Cabaña',
      checkIn: 'Entrada',
      checkOut: 'Salida',
      closing: 'Quedo atento/a. Muchas gracias.',
    },
  },

  en: {
    close: 'Close booking form',
    title: 'Book your experience',
    description: 'Check availability for your stay in the forest.',
    cabin: 'Cabin',
    checkIn: 'Check-in',
    checkOut: 'Check-out',
    availability: 'Check availability',
    whatsappResponse: 'Response via WhatsApp',
    book: 'Book',
    dateAlert: 'Please select your check-in and check-out dates',
    whatsappMessage: {
      greeting: 'Hello Haiku 🌿',
      introduction:
        'I would like to check availability for the following booking:',
      cabin: 'Cabin',
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      closing: 'I look forward to your response. Thank you very much.',
    },
  },
}

export default function ReservaFlotante() {
  const { lang } = useLanguage()
  const t = translations[lang]

  const [casa, setCasa] = useState('Roble')
  const [fechaInicio, setFechaInicio] = useState('')
  const [fechaSalida, setFechaSalida] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  const fechaInicioRef = useRef<HTMLInputElement>(null)
  const fechaSalidaRef = useRef<HTMLInputElement>(null)

  const telefonoWhatsApp = '56985991949'

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true)
        setIsExpanded(false)
      } else {
        setHasScrolled(false)
      }
    }

    handleScroll()

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
      alert(t.dateAlert)
      return
    }

    const mensaje = `${t.whatsappMessage.greeting}

${t.whatsappMessage.introduction}

🏡 ${t.whatsappMessage.cabin}: ${casa}
📅 ${t.whatsappMessage.checkIn}: ${fechaInicio}
📅 ${t.whatsappMessage.checkOut}: ${fechaSalida}

${t.whatsappMessage.closing}`

    const whatsappUrl = `https://wa.me/${telefonoWhatsApp}?text=${encodeURIComponent(
      mensaje
    )}`

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-[calc(100%-32px)] md:w-[auto] max-w-[95vw]">

      <div
        role="dialog"
        aria-modal="false"
        aria-labelledby="reserva-flotante-title"
        className={`prueba bg-primary shadow-2xl rounded-[28px] p-6 md:p-7 border border-[#d9d2bf] relative transition-all duration-300 
          ${
            isExpanded
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'hidden opacity-0 translate-y-5 pointer-events-none'
          }`}
      >
        <button
          type="button"
          onClick={toggleExpand}
          aria-label={t.close}
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
            cursor-pointer
          "
        >
          ×
        </button>

        <div className="text-center mb-7">
          <p className="text-icon text-[11px] tracking-[0.35em] uppercase mb-2">
            Haiku
          </p>

          <h3
            id="reserva-flotante-title"
            className="main-text-dark text-[24px] font-semibold leading-tight"
          >
            {t.title}
          </h3>

          <p className="secondary-text-dark text-sm mt-2">
            {t.description}
          </p>
        </div>

        <div className="mb-6">
          <label
            htmlFor="reserva-cabana"
            className="text-icon block text-[11px] uppercase tracking-[0.18em] mb-2"
          >
            {t.cabin}
          </label>

          <select
            id="reserva-cabana"
            value={casa}
            onChange={(e) => setCasa(e.target.value)}
            className="main-text-dark w-full bg-transparent border-0 border-b border-[#cfc6ae] rounded-none px-0 py-3 text-base font-medium focus:outline-none focus:border-[#01552a]"
          >
            <option value="Roble">Casa Roble</option>
            <option value="Ulmo">Refugio Ulmo</option>
            <option value="Canelo">Refugio Canelo</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-5 mb-8">
          <div>
            <label
              htmlFor="reserva-fecha-inicio"
              className="text-icon block text-[11px] uppercase tracking-[0.18em] mb-2"
            >
              {t.checkIn}
            </label>

            <div
              onClick={() => openDatePicker(fechaInicioRef)}
              className="cursor-pointer"
            >
              <input
                id="reserva-fecha-inicio"
                ref={fechaInicioRef}
                type="date"
                value={fechaInicio}
                onChange={(e) => setFechaInicio(e.target.value)}
                className="main-text-dark w-full bg-transparent border-0 border-b border-[#cfc6ae] rounded-none px-0 py-3 text-sm cursor-pointer focus:outline-none focus:border-[#01552a]"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="reserva-fecha-salida"
              className="text-icon block text-[11px] uppercase tracking-[0.18em] mb-2"
            >
              {t.checkOut}
            </label>

            <div
              onClick={() => openDatePicker(fechaSalidaRef)}
              className="cursor-pointer"
            >
              <input
                id="reserva-fecha-salida"
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
          type="button"
          className="w-full bg-[#01552a] text-white font-semibold py-3 rounded-xl hover:bg-[#004421] transition cursor-pointer"
          onClick={handleReserva}
        >
          {t.availability}
        </button>

        <div className="flex items-center justify-center gap-2 mt-4 text-sm font-medium secondary-text-dark">
          <FaWhatsapp size={16} aria-hidden="true" />
          <span>{t.whatsappResponse}</span>
        </div>
      </div>

      <button
        type="button"
        onClick={toggleExpand}
        aria-label={t.book}
        aria-expanded={isExpanded}
        aria-controls="reserva-flotante-title"
        className={`
          cursor-pointer
          ${
            hasScrolled
              ? 'ml-auto block bg-[#01552a] text-white px-5 py-3 rounded-full shadow-xl hover:bg-[#004421] transition text-sm md:text-base'
              : 'hidden w-[290px] ml-auto block text-white px-5 py-3 border-2 border-[#01552a] rounded w-[70%] bg-transparent hover:bg-[#01552a] hover:text-white transition text-sm md:text-base'
          }
          ${
            isExpanded
              ? 'opacity-0 translate-y-0 pointer-events-none'
              : 'opacity-100 -translate-y-5 pointer-events-auto md:ml-auto md:mx-0 mx-auto'
          }
        `}
      >
        {t.book}
      </button>
    </div>
  )
}