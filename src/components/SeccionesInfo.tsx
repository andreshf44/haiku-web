import { FiMap, FiHeart, FiUsers, FiGlobe } from 'react-icons/fi'
import { FaBicycle } from 'react-icons/fa'
import Image from 'next/image'

const secciones = [
  { title: 'Trekking', icon: FiMap },
  { title: 'Bicicleta', icon: FaBicycle },
  { title: 'Spa', icon: FiHeart },
  { title: 'Salón de evento', icon: FiUsers },
  { title: 'Experiencias inmersivas', icon: FiGlobe },
]

const detalles = [
  {
    title: 'Trekking',
    description:
      'Explora senderos rodeados de bosque nativo y ríos cristalinos, con rutas guiadas y de autoexploración para todos los niveles.',
    image: '/images/trekking.jpg',
  },
  {
    title: 'Bicicleta',
    description:
      'Recorre caminos interiores y exteriores del complejo, con rutas de montaña y senderos para todos los niveles.',
    image: '/images/bicicleta.jpg',
  },
  {
    title: 'Spa',
    description:
      'Relájate con masajes, baños calientes y experiencias de bienestar en un entorno natural único.',
    image: '/images/spa.jpg',
  },
  {
    title: 'Salón de evento',
    description:
      'Espacios cómodos y equipados para retiros, matrimonios, talleres y celebraciones con vista privilegiada.',
    image: '/images/salon.jpg',
  },
  {
    title: 'Experiencias inmersivas',
    description:
      'Actividades sensoriales, observación de estrellas y caminatas nocturnas para conectar con la naturaleza.',
    image: '/images/inmersivas.jpg',
  },
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

        <div className="mt-16 space-y-20">
        {detalles.map(({ title, description, image }, index) => (
          <div
            key={title}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="md:w-1/2 w-full">
              <Image
                src={image}
                alt={title}
                width={600}
                height={400}
                className="rounded-2xl object-cover w-full h-auto shadow-lg"
              />
            </div>
            <div className="md:w-1/2 w-full px-4">
              <h4 className="text-3xl font-bold text-[#01552a] mb-4">{title}</h4>
              <p className="text-lg text-[#333] leading-relaxed">{description}</p>
            </div>
          </div>
        ))}
        </div>
      </section>
    )
}
