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
    label: '2 huéspedes',
  },
  {
    icon: '/images/room-icon.png',
    alt: 'dormitorio',
    label: '1 dormitorios',
  },
  {
    icon: '/images/bathtub-icon.png',
    alt: 'tinaja',
    label: 'Tinaja privada',
  },
  {
    icon: '/images/lake-icon.png',
    alt: 'lago',
    label: 'Vista al lago',
  },
]

const robleGallery = [
  '/images/cabanas/ulmo/ulmo-1.jpg',
  '/images/cabanas/ulmo/ulmo-2.jpg',
  '/images/cabanas/ulmo/ulmo-3.jpg',
  '/images/cabanas/ulmo/ulmo-4.jpg',
  '/images/cabanas/ulmo/ulmo-5.jpg',
  '/images/cabanas/ulmo/ulmo-6.png',
  '/images/cabanas/ulmo/ulmo-7.png',
  '/images/cabanas/ulmo/ulmo-8.png',
  '/images/cabanas/ulmo/ulmo-9.png',
  '/images/cabanas/ulmo/ulmo-10.jpg',
]

const robleDetails = [
  {
    title: 'El símbolo del ulmo',
    description:
    'Conocido por sus hermosas flores blancas y perfumadas que le dan aspecto de árbol de algodón o recién nevado. Su néctar único es apreciado en el mundo como una miel nutritiva, aromática y altamente medicinal.',
    image: '/images/cabanas/ulmo/ulmo-10.jpg',
  },
  {
    title: 'La cabaña',
    description:
    'Inspirada en la serenidad y elegancia del ulmo, esta cabaña ofrece un refugio íntimo para quienes buscan desconectar y contemplar la naturaleza en calma. Diseñada para dos personas, combina comodidad, privacidad y una vista privilegiada al lago, creando el escenario perfecto para descansar, compartir y reconectar con lo esencial.',
    image: '/images/cabanas/ulmo/ulmo-7.png',
    reverse: true,
  },
  {
    title: 'La experiencia',
    description:
    'Ulmo dispone de una habitación con cama matrimonial, cocina completamente equipada, WiFi y una amplia terraza orientada hacia el lago. La experiencia se completa con una tinaja privada incluida en la reserva, ideal para disfrutar los atardeceres, el silencio del entorno y la atmósfera única de los bosques del sur de Chile.',
    image: '/images/cabanas/ulmo/ulmo-8.png',
  },
  {
    title: 'El entorno',
    description:
      'Más allá de la cabaña, el bosque se convierte en parte de la experiencia. La presencia de árboles nativos, los sonidos del viento entre las ramas y la cercanía del lago invitan a habitar el paisaje con atención y calma. Aquí, cada amanecer, cada sendero y cada cambio de luz recuerdan la profunda conexión entre naturaleza, descanso y contemplación.',
    image: '/images/cabanas/ulmo/ulmo-9.png',
    reverse: true,
  },
]

export default function UlmoPage() {
  return (
    <div className="bg-primary">
      <CabanaHero
        title="EL GRAN SANADOR"
        subtitle="Refugio Ulmo"
        image="/images/cabanas/ulmo/portadaPrueba.jpg"
        reserveHref="/?cabana=Ulmo#reservar"
        features={robleFeatures}
      />

      <CabanaGallery images={robleGallery} />

      <CabanaDetails blocks={robleDetails} />

      <CabanaStayInfo hasLakeView />

      <CabanaExperiences />

      <CabanaFooter
        cabanaName="Ulmo"
        reserveHref="/?cabana=Ulmo#reservar"
      />
    </div>
  )
}