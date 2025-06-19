'use client'

import { useEffect, useState } from 'react'

export default function ReservaFlotante() {
  const [casa, setCasa] = useState('Mizu')
  const [fechaInicio, setFechaInicio] = useState('')
  const [fechaSalida, setFechaSalida] = useState('')
  const [isExpanded, setIsExpanded] = useState(true)

  // Detectar scroll para contraer
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsExpanded(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Alternar expansión manual
  const toggleExpand = () => {
    setIsExpanded((prev) => !prev)
  }

  return (
    <div className="fixed bottom-[25px] right-[25px] w-[25vw] z-50">
      {isExpanded ? (
        <div className="bg-[#efe9d7] shadow-lg rounded-xl p-4 text-white">
          <div className="text-[#004421] font-semibold text-center mb-4">Selecciona tu cabaña</div>

          {/* Selector de casas */}
          <div className="flex justify-between mb-4">
            {['Mizu', 'Yuki', 'Kumo'].map((nombre) => (
              <button
                key={nombre}
                onClick={() => setCasa(nombre)}
                className={`flex-1 mx-1 px-3 py-2 rounded-full text-sm font-medium border transition ${
                  casa === nombre
                    ? 'bg-[#01552a] text-white border-white'
                    : 'bg-white text-[#004421] border-white hover:bg-[#01552a] hover:text-white'
                }`}
              >
                {nombre}
              </button>
            ))}
          </div>

          {/* Fechas */}
          <div className="flex gap-2 mb-4">
            <div className="flex-1">
              <label className="block text-xs text-[#004421] mb-1">Ingreso</label>
              <input
                type="date"
                value={fechaInicio}
                onChange={(e) => setFechaInicio(e.target.value)}
                className="w-full p-2 rounded text-[#016630] border border-white bg-white text-sm"
              />
            </div>
            <div className="flex-1">
              <label className="block text-xs text-[#004421] mb-1">Salida</label>
              <input
                type="date"
                value={fechaSalida}
                onChange={(e) => setFechaSalida(e.target.value)}
                className="w-full p-2 rounded text-[#016630] border border-white bg-white text-sm"
              />
            </div>
          </div>

          {/* Botón reservar */}
          <button
            className="w-full bg-[#01552a] text-white font-semibold py-2 rounded hover:bg-[#004421] transition"
            onClick={toggleExpand}
          >
            Reservar
          </button>
        </div>
      ) : (
        <button
          onClick={toggleExpand}
          className="relative     position: relative left-[14vw] bg-[#01552a] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#004421] transition w-[10vw]"
        >
          Reservar
        </button>
      )}
    </div>
  )
}
