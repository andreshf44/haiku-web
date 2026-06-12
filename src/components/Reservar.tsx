'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'

export default function Reservar() {
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

    const numeroWhatsapp = '56944177821'

    const mensajeWhatsapp = `Hola Haiku 🌿, quiero solicitar una reserva:

👤 Nombre: ${form.nombre}
📞 Teléfono: ${form.telefono}
📧 Email: ${form.email}

🏡 Cabaña: ${form.cabana}

📅 Fecha de entrada: ${form.fechaEntrada}
📅 Fecha de salida: ${form.fechaSalida}

💬 Consulta o solicitud especial:
${form.mensaje || 'Sin comentarios adicionales'}

Quedo atento(a) a la disponibilidad. Muchas gracias.`

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
    <section id="reservar" className="bg-primary w-full py-20 md:py-36 px-4 md:px-0">
      <div className="grid md:grid-cols-[2fr_3fr] gap-8 max-w-7xl mx-auto">

        {/* Intro reserva */}
        <div className="items-center">
          <h4 className="title-introduction text-3x1 lg:text-4x1">
            RESERVA TU ESTADÍA
          </h4>
          <h1 className="title text-4xl">Tu próximo respiro te está esperando</h1>
          <p className="secondary-text-dark text-base md:text-lg leading-relaxed mb-6">
            Consulta disponibilidad y asegura tu cabaña. Te responderemos por WhatsApp para confirmar fechas, detalles y acompañarte en tu reserva.
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
              placeholder="Nombre completo"
              value={form.nombre}
              onChange={handleChange}
              required
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-[#b98f5a]"
            />

            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono"
              value={form.telefono}
              onChange={handleChange}
              required
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-[#b98f5a]"
            />

            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-[#b98f5a]"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block main-text-dark font-medium mb-1 text-sm">
                Fecha de entrada
              </label>

              <div
                onClick={() => fechaEntradaRef.current?.showPicker()}
                className="cursor-pointer"
              >
                <input
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
              <label className="block main-text-dark font-medium mb-1 text-sm">
                Fecha de salida
              </label>

              <div
                onClick={() => fechaSalidaRef.current?.showPicker()}
                className="cursor-pointer"
              >
                <input
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
              <label className="block main-text-dark font-medium mb-1 text-sm">
                Cabaña
              </label>

              <select
                name="cabana"
                value={form.cabana}
                onChange={handleChange}
                required
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-[#b98f5a]"
              >
                <option value="">Selecciona una cabaña</option>

                {cabanas.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block main-text-dark font-medium mb-1 text-sm">
              ¿Tienes alguna pregunta o solicitud especial?
            </label>

            <textarea
              name="mensaje"
              placeholder="Ej: viajamos con niños, queremos tinaja privada, celebraremos aniversario, tenemos dudas sobre el acceso, etc."
              value={form.mensaje}
              onChange={handleChange}
              rows={4}
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-[#b98f5a] resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-button-gold w-full md:w-fit md:px-14 justify-self-center font-semibold"
          >
            Solicitar Reserva
          </button>
          <div className="flex justify-center items-center gap-2 secondary-text-dark text-sm font-medium">
            <FaWhatsapp size={16} />
            <span>Respuesta vía WhatsApp</span>
          </div>
        </form>
      </div>
    </section>
  )
}