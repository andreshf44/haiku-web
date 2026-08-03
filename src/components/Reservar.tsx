'use client'

import { useRef, useState, useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { useLanguage } from '@/context/LanguageContext'

const translations = {
  es: {
    introduction: 'RESERVA TU ESTADÍA',
    title: 'Tu próximo respiro te está esperando',
    description:
      'Consulta disponibilidad y asegura tu cabaña. Te responderemos por WhatsApp para confirmar fechas, detalles y acompañarte en tu reserva.',
    name: 'Nombre completo',
    phone: 'Teléfono',
    email: 'Correo electrónico',
    checkIn: 'Fecha de entrada',
    checkOut: 'Fecha de salida',
    cabin: 'Cabaña',
    selectCabin: 'Selecciona una cabaña',
    specialRequest: '¿Tienes alguna pregunta o solicitud especial?',
    messagePlaceholder:
      'Ej: viajamos con niños, queremos tinaja privada, celebraremos aniversario, tenemos dudas sobre el acceso, etc.',
    submit: 'Solicitar Reserva',
    whatsappResponse: 'Respuesta vía WhatsApp',
    noComments: 'Sin comentarios adicionales',
    whatsappMessage: {
      greeting: 'Hola Haiku 🌿, quiero solicitar una reserva:',
      name: 'Nombre',
      phone: 'Teléfono',
      email: 'Email',
      cabin: 'Cabaña',
      checkIn: 'Fecha de entrada',
      checkOut: 'Fecha de salida',
      specialRequest: 'Consulta o solicitud especial',
      closing:
        'Quedo atento(a) a la disponibilidad. Muchas gracias.',
    },
  },

  en: {
    introduction: 'BOOK YOUR STAY',
    title: 'Your next breath of calm is waiting',
    description:
      'Check availability and secure your cabin. We will contact you via WhatsApp to confirm dates, details and guide you through your booking.',
    name: 'Full name',
    phone: 'Phone number',
    email: 'Email address',
    checkIn: 'Check-in date',
    checkOut: 'Check-out date',
    cabin: 'Cabin',
    selectCabin: 'Select a cabin',
    specialRequest: 'Do you have any questions or special requests?',
    messagePlaceholder:
      'For example: we are travelling with children, we would like a private hot tub, we are celebrating an anniversary or have questions about access.',
    submit: 'Request Booking',
    whatsappResponse: 'Response via WhatsApp',
    noComments: 'No additional comments',
    whatsappMessage: {
      greeting: 'Hello Haiku 🌿, I would like to request a booking:',
      name: 'Name',
      phone: 'Phone',
      email: 'Email',
      cabin: 'Cabin',
      checkIn: 'Check-in date',
      checkOut: 'Check-out date',
      specialRequest: 'Question or special request',
      closing:
        'I look forward to hearing about availability. Thank you very much.',
    },
  },
}

export default function Reservar() {
  const { lang } = useLanguage()
  const t = translations[lang]

  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    email: '',
    fechaEntrada: '',
    fechaSalida: '',
    cabana: '',
    mensaje: '',
  })

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const cabanaUrl = params.get('cabana')

    if (cabanaUrl) {
      setForm((prev) => ({
        ...prev,
        cabana: cabanaUrl,
      }))
    }
  }, [])

  const fechaEntradaRef = useRef<HTMLInputElement>(null)
  const fechaSalidaRef = useRef<HTMLInputElement>(null)

  const cabanas = ['Roble', 'Canelo', 'Ulmo']

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const numeroWhatsapp = '56985991949'

    const mensajeWhatsapp = `${t.whatsappMessage.greeting}

👤 ${t.whatsappMessage.name}: ${form.nombre}
📞 ${t.whatsappMessage.phone}: ${form.telefono}
📧 ${t.whatsappMessage.email}: ${form.email}

🏡 ${t.whatsappMessage.cabin}: ${form.cabana}

📅 ${t.whatsappMessage.checkIn}: ${form.fechaEntrada}
📅 ${t.whatsappMessage.checkOut}: ${form.fechaSalida}

💬 ${t.whatsappMessage.specialRequest}:
${form.mensaje || t.noComments}

${t.whatsappMessage.closing}`

    const url = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(
      mensajeWhatsapp
    )}`

    window.open(url, '_blank')

    setForm({
      nombre: '',
      telefono: '',
      email: '',
      fechaEntrada: '',
      fechaSalida: '',
      cabana: '',
      mensaje: '',
    })
  }

  return (
    <section
      id="reservar"
      aria-labelledby="reservar-title"
      className="bg-primary w-full py-20 md:py-36 px-4 md:px-0"
    >
      <div className="grid md:grid-cols-[2fr_3fr] gap-8 max-w-7xl mx-auto">

        {/* Intro reserva */}
        <div className="items-center">
          <h4 className="title-introduction text-3x1 lg:text-4x1">
            {t.introduction}
          </h4>

          <h2 id="reservar-title" className="title text-4xl">
            {t.title}
          </h2>

          <p className="secondary-text-dark text-base md:text-lg leading-relaxed mb-6">
            {t.description}
          </p>
        </div>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#f9f7f2] max-w-4xl mx-auto p-6 md:p-8 rounded-2xl shadow-md grid gap-5"
        >
          <div className="grid md:grid-cols-3 gap-4">
            <input
              type="text"
              name="nombre"
              placeholder={t.name}
              aria-label={t.name}
              value={form.nombre}
              onChange={handleChange}
              required
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-[#b98f5a]"
            />

            <input
              type="tel"
              name="telefono"
              placeholder={t.phone}
              aria-label={t.phone}
              value={form.telefono}
              onChange={handleChange}
              required
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-[#b98f5a]"
            />

            <input
              type="email"
              name="email"
              placeholder={t.email}
              aria-label={t.email}
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-[#b98f5a]"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="fechaEntrada"
                className="block main-text-dark font-medium mb-1 text-sm"
              >
                {t.checkIn}
              </label>

              <div
                onClick={() => fechaEntradaRef.current?.showPicker()}
                className="cursor-pointer"
              >
                <input
                  id="fechaEntrada"
                  ref={fechaEntradaRef}
                  type="date"
                  name="fechaEntrada"
                  value={form.fechaEntrada}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-[#b98f5a] cursor-pointer"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="fechaSalida"
                className="block main-text-dark font-medium mb-1 text-sm"
              >
                {t.checkOut}
              </label>

              <div
                onClick={() => fechaSalidaRef.current?.showPicker()}
                className="cursor-pointer"
              >
                <input
                  id="fechaSalida"
                  ref={fechaSalidaRef}
                  type="date"
                  name="fechaSalida"
                  value={form.fechaSalida}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-[#b98f5a] cursor-pointer"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="cabana"
                className="block main-text-dark font-medium mb-1 text-sm"
              >
                {t.cabin}
              </label>

              <select
                id="cabana"
                name="cabana"
                value={form.cabana}
                onChange={handleChange}
                required
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-[#b98f5a]"
              >
                <option value="">
                  {t.selectCabin}
                </option>

                {cabanas.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="mensaje"
              className="block main-text-dark font-medium mb-1 text-sm"
            >
              {t.specialRequest}
            </label>

            <textarea
              id="mensaje"
              name="mensaje"
              placeholder={t.messagePlaceholder}
              value={form.mensaje}
              onChange={handleChange}
              rows={4}
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-[#b98f5a] resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-button-gold w-full md:w-fit md:px-14 justify-self-center font-semibold cursor-pointer"
          >
            {t.submit}
          </button>

          <div className="flex justify-center items-center gap-2 secondary-text-dark text-sm font-medium">
            <FaWhatsapp size={16} aria-hidden="true" />
            <span>{t.whatsappResponse}</span>
          </div>
        </form>
      </div>
    </section>
  )
}