'use client'

import { useRef, useState } from 'react'

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

  const fechaEntradaRef = useRef<HTMLInputElement>(null)
  const fechaSalidaRef = useRef<HTMLInputElement>(null) 

  const cabanas = ['Mizu', 'Kumo', 'Yuki']

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

    // REEMPLAZA ESTE NÚMERO POR EL TUYO
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

    // limpiar formulario
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
    <section id="reservar" className="bg-[#004421] py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-xl">
        <h2 className="text-3xl font-bold text-[#b98f5a] mb-8 text-center">
          Reserva tu cabaña
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-[#f9f7f2] p-8 rounded-xl shadow-md"
        >
          {/* Nombre */}
          <div>
            <label className="block md:hidden text-[#004421] font-medium mb-1">
              Nombre completo
            </label>

            <input
              type="text"
              name="nombre"
              placeholder="Nombre completo"
              value={form.nombre}
              onChange={handleChange}
              required
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-[#b98f5a]"
            />
          </div>

          {/* Teléfono */}
          <div>
            <label className="block md:hidden text-[#004421] font-medium mb-1">
              Teléfono
            </label>

            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono"
              value={form.telefono}
              onChange={handleChange}
              required
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-[#b98f5a]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block md:hidden text-[#004421] font-medium mb-1">
              Correo electrónico
            </label>

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

          {/* Fechas */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[#004421] font-medium mb-1 text-sm">
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
              <label className="block text-[#004421] font-medium mb-1 text-sm">
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
          </div>

          {/* Cabaña */}
          <div>
            <label className="block md:hidden text-[#004421] font-medium mb-1">
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

          {/* Pregunta / solicitud especial */}
          <div>
            <label className="block text-[#004421] font-medium mb-1 text-sm">
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

          {/* Botón */}
          <button
            type="submit"
            className="bg-[#b98f5a] text-white py-3 rounded font-semibold hover:bg-[#a97e39] transition"
          >
            Solicitar Reserva
          </button>
        </form>
      </div>
    </section>
  )
}