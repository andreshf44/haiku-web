import { FiMap, FiHeart, FiUsers, FiGlobe } from 'react-icons/fi'
import { FaBicycle } from 'react-icons/fa'

const secciones = [
  { title: 'Trekking', icon: FiMap },
  { title: 'Bicicleta', icon: FaBicycle },
  { title: 'Spa', icon: FiHeart },
  { title: 'Salón de evento', icon: FiUsers },
  { title: 'Experiencias inmersivas', icon: FiGlobe },
]

export default function SeccionesInfo() {
    return (
      <section className="my-12 container mx-auto px-4">
        <h3 className='text-center text-[26px] text-[#01552a] mb-[5vh] font-semibold'>Experiencias Haiku</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-center">
          {secciones.map(({ title, icon: Icon }) => (
            <div key={title} className="flex flex-col items-center">
              <Icon className="text-5xl text-[#b98f5a] mb-3 cursor-pointer" />
              <h3 className="text-lg font-semibold text-[#b98f5a] cursor-pointer">{title}</h3>
            </div>
          ))}
        </div>
      </section>
    )
  }
