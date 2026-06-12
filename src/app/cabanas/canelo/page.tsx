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
  '/images/cabanas/canelo/canelo-1.jpg',
  '/images/cabanas/canelo/canelo-2.jpg',
  '/images/cabanas/canelo/canelo-3.jpg',
  '/images/cabanas/canelo/canelo-4.jpg',
  '/images/cabanas/canelo/canelo-5.jpg',
  '/images/cabanas/canelo/canelo-6.png',
  '/images/cabanas/canelo/canelo-7.png',
  '/images/cabanas/canelo/canelo-8.png',
  '/images/cabanas/canelo/canelo-9.png',
  '/images/cabanas/canelo/canelo-10.jpg',
]

const robleDetails = [
  {
    title: 'El símbolo del canelo',
    description:
      'Simboliza el punto de intersección del eje cósmico con la Tierra (Mapu). Con sus raíces internadas hacia el inframundo, bajo el canelo se despojan de armas y diferencias y sólo se habla la verdad. Un símbolo de la paz, sagrado por sus efectos curativos.',
    image: '/images/cabanas/canelo/canelo-10.jpg',
  },
  {
    title: 'La cabaña',
    description:
      'Inspirada en la paz y el espíritu sanador del canelo, esta cabaña invita a detener el ritmo cotidiano y reconectar con lo esencial. Diseñada para dos personas, combina comodidad, privacidad y una vista privilegiada al lago, creando un refugio sereno donde descansar, compartir y disfrutar la naturaleza en toda su profundidad.',
    image: '/images/cabanas/canelo/canelo-7.png',
    reverse: true,
  },
  {
    title: 'La experiencia',
    description:
      'Canelo dispone de una habitación con cama matrimonial, cocina completamente equipada, WiFi y una amplia terraza orientada hacia el lago. La experiencia se completa con una tinaja privada incluida en la reserva, ideal para disfrutar los atardeceres, el silencio del entorno y la atmósfera única de los bosques del sur de Chile.',
    image: '/images/cabanas/canelo/canelo-8.png',
  },
  {
    title: 'El entorno',
    description:
      'Más allá de la cabaña, el bosque se convierte en parte de la experiencia. La presencia de árboles nativos, los sonidos del viento entre las ramas y la cercanía del lago invitan a habitar el paisaje con atención y calma. Aquí, cada amanecer, cada sendero y cada cambio de luz recuerdan la profunda conexión entre naturaleza, descanso y contemplación.',
    image: '/images/cabanas/canelo/canelo-9.png',
    reverse: true,
  },
]

export default function CaneloPage() {
  return (
    <div className="bg-primary">
      <CabanaHero
        title="EL LUGAR DE LA VERDAD"
        subtitle="Refugio Canelo"
        image="/images/cabanas/canelo/portadaAmanecer.jpg"
        reserveHref="/?cabana=Canelo#reservar"
        features={robleFeatures}
      />

      <CabanaGallery images={robleGallery} />

      <CabanaDetails blocks={robleDetails} />

      <CabanaStayInfo hasLakeView />

      <CabanaExperiences />

      <CabanaFooter
        cabanaName="Canelo"
        reserveHref="/?cabana=Canelo#reservar"
      />
    </div>
  )
}