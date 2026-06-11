import Link from 'next/link'
import CabanaHero from '@/components/cabanas/CabanaHero'
import CabanaGallery from '@/components/cabanas/CabanaGallery'
import CabanaDetails from '@/components/cabanas/CabanaDetails'
import CabanaStayInfo from '@/components/cabanas/CabanaStayInfo'
import CabanaExperiences from '@/components/cabanas/CabanaExperiences'

const robleFeatures = [
  {
    icon: '/images/huesped-icon.png',
    alt: 'huésped',
    label: '6 huéspedes',
  },
  {
    icon: '/images/room-icon.png',
    alt: 'dormitorio',
    label: '3 dormitorios',
  },
  {
    icon: '/images/bathtub-icon.png',
    alt: 'tinaja',
    label: 'Tinaja privada',
  },
  {
    icon: '/images/forest-icon.png',
    alt: 'bosque',
    label: 'Vista al bosque',
  },
]

const robleGallery = [
  '/images/cabanas/roble/roble-1.jpg',
  '/images/cabanas/roble/roble-2.jpg',
  '/images/cabanas/roble/roble-3.jpg',
  '/images/cabanas/roble/roble-4.jpg',
  '/images/cabanas/roble/roble-5.jpg',
  '/images/cabanas/roble/roble-6.png',
]

const robleDetails = [
  {
    title: 'El símbolo del roble',
    description:
      'La hoja de roble simboliza la fuerza y la resistencia a las condiciones adversas. Árbol conocido por su longevidad, posee cualidades espirituales; varias culturas lo consideran un portal de conexión con el reino divino.',
    image: '/images/cabanas/roble/roble-1.jpg',
  },
  {
    title: 'La cabaña',
    description:
      'Inspirada en la fuerza y presencia del roble, esta cabaña invita a reunirse y habitar el bosque con tranquilidad. Diseñada para recibir hasta 6 personas, combina espacios cómodos para compartir con rincones donde descansar y contemplar la naturaleza que la rodea.',
    image: '/images/cabanas/roble/roble-2.jpg',
    reverse: true,
  },
  {
    title: 'La experiencia',
    description:
      'Roble dispone de 3 habitaciones (1 matrimonial y 2 dobles), cocina completamente equipada, WiFi, terraza y accesibilidad universal en el primer piso. La experiencia se completa con una tinaja privada para 6 personas incluida en la reserva, perfecta para disfrutar el silencio, las estrellas y la atmósfera única de los bosques del sur de Chile.',
    image: '/images/cabanas/roble/roble-3.jpg',
  },
]

const robleExperiences = [
  {
    icon: '🌽',
    label: 'Trekking',
  },
  {
    icon: '🌳',
    label: 'Caminatas',
  },
  {
    icon: '🕯️',
    label: 'Spa',
  },
  {
    icon: '🎪',
    label: 'Inmersión sensorial',
  },
]

export default function RoblePage() {
  return (
    <div className="bg-primary">
      <CabanaHero
        title="EL ABUELO"
        subtitle="Casa Roble"
        image="/images/cabanas/roble/portadaNoche.jpg"
        reserveHref="/?cabana=Roble#reservar"
        features={robleFeatures}
      />

      <CabanaGallery images={robleGallery} />

      <CabanaDetails blocks={robleDetails} />

      <CabanaStayInfo />

      <CabanaExperiences />

      <div className="text-center py-10">
        <Link
          href="/"
          className="inline-block bg-[#c19454] text-[#3c371f] px-6 py-2 rounded hover:bg-[#b88a4c] transition"
        >
          ← Volver al inicio
        </Link>
      </div>
    </div>
  )
}