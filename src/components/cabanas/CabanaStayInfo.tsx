import {
    FaWifi,
    FaHotTub,
    FaBed,
    FaTemperatureHigh,
    FaParking,
    FaTree,
    FaMapMarkerAlt,
    FaClock,
    FaUtensils
  } from 'react-icons/fa'
  
  const includes = [
    { icon: FaWifi, label: 'WiFi' },
    { icon: FaHotTub, label: 'Tinaja privada' },
    { icon: FaUtensils, label: 'Cocina equipada' },
    { icon: FaBed, label: 'Toallas y ropa de cama' },
    { icon: FaTemperatureHigh, label: 'Calefacción' },
    { icon: FaParking, label: 'Estacionamiento' },
    { icon: FaTree, label: 'Vista al bosque' },
  ]
  
  const locationItems = [
    'A 15 minutos de Pucón',
    'A 10 minutos del lago',
    'Rodeado de bosque nativo',
  ]
  
  export default function CabanaStayInfo() {
    return (
      <section className="bg-primary px-4 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
  
          {/* Incluye */}
          <div className="bg-[#f5f5ef] border border-[#d9d2bf] rounded-xl p-6 shadow-sm">
            <h3 className="main-text-dark text-2xl font-semibold mb-6">
              ¿Qué incluye tu estadía?
            </h3>
  
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {includes.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 secondary-text-dark text-sm"
                >
                  <Icon className="text-icon" size={16} />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
  
          {/* Ubicación */}
          <div className="bg-[#f5f5ef] border border-[#d9d2bf] rounded-xl overflow-hidden shadow-sm grid grid-cols-1 md:grid-cols-2">
            <div className="p-6">
              <h3 className="main-text-dark text-2xl font-semibold mb-6">
                Ubicación
              </h3>
  
              <div className="space-y-4">
                {locationItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 secondary-text-dark text-sm"
                  >
                    <FaClock className="text-icon" size={14} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
  
            <div className="relative min-h-[180px] bg-[#dfeadf] flex items-center justify-center">
              <FaMapMarkerAlt className="text-[#01552a]" size={36} />
  
              <span className="absolute mt-16 main-text-dark italic">
                Haiku
              </span>
            </div>
          </div>
  
        </div>
      </section>
    )
  }