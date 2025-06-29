import { useState } from 'react'

export default function Reservar() {
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    email: '',
    fechaEntrada: '',
    fechaSalida: '',
    cabana: '',
  })

  const cabanas = [
    'Mizu',
    'Kumo',
    'Yuki',
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(
      `Gracias por reservar:\nNombre: ${form.nombre}\nTeléfono: ${form.telefono}\nEmail: ${form.email}\nCabaña: ${form.cabana}\nDesde: ${form.fechaEntrada}\nHasta: ${form.fechaSalida}`
    )
    setForm({
      nombre: '',
      telefono: '',
      email: '',
      fechaEntrada: '',
      fechaSalida: '',
      cabana: '',
    })
  }

  return (
    <section className="bg-[#004421] py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-xl">
        <h2 className="text-3xl font-bold text-[#b98f5a] mb-8 text-center">
          Reserva tu cabaña
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-[#f9f7f2] p-8 rounded-xl shadow-md"
        >
          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            value={form.nombre}
            onChange={handleChange}
            required
            className="p-3 rounded border border-gray-300 focus:outline-none focus:border-[#b98f5a]"
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={form.telefono}
            onChange={handleChange}
            required
            className="p-3 rounded border border-gray-300 focus:outline-none focus:border-[#b98f5a]"
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={handleChange}
            required
            className="p-3 rounded border border-gray-300 focus:outline-none focus:border-[#b98f5a]"
          />
          <input
            type="date"
            name="fechaEntrada"
            value={form.fechaEntrada}
            onChange={handleChange}
            required
            className="p-3 rounded border border-gray-300 focus:outline-none focus:border-[#b98f5a]"
          />
          <input
            type="date"
            name="fechaSalida"
            value={form.fechaSalida}
            onChange={handleChange}
            required
            className="p-3 rounded border border-gray-300 focus:outline-none focus:border-[#b98f5a]"
          />
          <select
            name="cabana"
            value={form.cabana}
            onChange={handleChange}
            required
            className="p-3 rounded border border-gray-300 focus:outline-none focus:border-[#b98f5a]"
          >
            <option value="">Selecciona una cabaña</option>
            {cabanas.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
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
