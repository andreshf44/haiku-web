import CabanaHero from '@/components/cabanas/CabanaHero'
import CabanaGallery from '@/components/cabanas/CabanaGallery'
import CabanaDetails from '@/components/cabanas/CabanaDetails'
import CabanaStayInfo from '@/components/cabanas/CabanaStayInfo'
import CabanaExperiences from '@/components/cabanas/CabanaExperiences'
import CabanaFooter from '@/components/cabanas/CabanaFooter'

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
  '/images/cabanas/roble/roble-7.png',
  '/images/cabanas/roble/roble-8.png',
  '/images/cabanas/roble/roble-9.png',
  '/images/cabanas/roble/roble-10.jpg',
]

const robleDetails = [
  {
    title: 'El símbolo del roble',
    description:
      'La hoja de roble simboliza la fuerza y la resistencia a las condiciones adversas. Árbol conocido por su longevidad, posee cualidades espirituales; varias culturas lo consideran un portal de conexión con el reino divino.',
    image: '/images/cabanas/roble/roble-10.jpg',
  },
  {
    title: 'La cabaña',
    description:
      'Inspirada en la fuerza y presencia del roble, esta cabaña invita a reunirse y habitar el bosque con tranquilidad. Diseñada para recibir hasta 6 personas, combina espacios cómodos para compartir con rincones donde descansar y contemplar la naturaleza que la rodea.',
    image: '/images/cabanas/roble/roble-7.png',
    reverse: true,
  },
  {
    title: 'La experiencia',
    description:
      'Roble dispone de 3 habitaciones (1 matrimonial y 2 dobles), cocina completamente equipada, WiFi, terraza y accesibilidad universal en el primer piso. La experiencia se completa con una tinaja privada para 6 personas incluida en la reserva, perfecta para disfrutar el silencio, las estrellas y la atmósfera única de los bosques del sur de Chile.',
    image: '/images/cabanas/roble/roble-8.png',
  },
  {
    title: 'El entorno',
    description:
      'Más allá de la cabaña, el bosque se convierte en parte de la experiencia. La presencia de árboles nativos, los sonidos del viento entre las ramas y la cercanía del lago invitan a habitar el paisaje con atención y calma. Aquí, cada amanecer, cada sendero y cada cambio de luz recuerdan la profunda conexión entre naturaleza, descanso y contemplación.',
    image: '/images/cabanas/roble/roble-9.png',
    reverse: true,
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

      <CabanaFooter
        cabanaName="Roble"
        reserveHref="/?cabana=Roble#reservar"
      />
    </div>
  )
}