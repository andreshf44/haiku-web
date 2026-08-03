'use client'

import CabanaHero from '@/components/cabanas/CabanaHero'
import CabanaGallery from '@/components/cabanas/CabanaGallery'
import CabanaDetails from '@/components/cabanas/CabanaDetails'
import CabanaStayInfo from '@/components/cabanas/CabanaStayInfo'
import CabanaExperiences from '@/components/cabanas/CabanaExperiences'
import CabanaFooter from '@/components/cabanas/CabanaFooter'
import { useLanguage } from '@/context/LanguageContext'

const translations = {
  es: {
    heroTitle: 'EL ABUELO',
    heroSubtitle: 'Casa Roble',
    reserveText: 'Reservar esta cabaña',
    whatsappText: 'Respuesta vía WhatsApp',

    guests: '6 huéspedes',
    bedrooms: '3 dormitorios',
    hotTub: 'Tinaja privada',
    forestView: 'Vista al bosque',

    symbolTitle: 'El símbolo del roble',
    symbolDescription:
      'La hoja de roble simboliza la fuerza y la resistencia a las condiciones adversas. Árbol conocido por su longevidad, posee cualidades espirituales; varias culturas lo consideran un portal de conexión con el reino divino.',

    cabinTitle: 'La cabaña',
    cabinDescription:
      'Inspirada en la fuerza y presencia del roble, esta cabaña invita a reunirse y habitar el bosque con tranquilidad. Diseñada para recibir hasta 6 personas, combina espacios cómodos para compartir con rincones donde descansar y contemplar la naturaleza que la rodea.',

    experienceTitle: 'La experiencia',
    experienceDescription:
      'Roble dispone de 3 habitaciones (1 matrimonial y 2 dobles), cocina completamente equipada, WiFi, terraza y accesibilidad universal en el primer piso. La experiencia se completa con una tinaja privada para 6 personas incluida en la reserva, perfecta para disfrutar el silencio, las estrellas y la atmósfera única de los bosques del sur de Chile.',

    surroundingsTitle: 'El entorno',
    surroundingsDescription:
      'Más allá de la cabaña, el bosque se convierte en parte de la experiencia. La presencia de árboles nativos, los sonidos del viento entre las ramas y la cercanía del lago invitan a habitar el paisaje con atención y calma. Aquí, cada amanecer, cada sendero y cada cambio de luz recuerdan la profunda conexión entre naturaleza, descanso y contemplación.',
  },

  en: {
    heroTitle: 'THE GRANDFATHER',
    heroSubtitle: 'Roble House',
    reserveText: 'Book this cabin',
    whatsappText: 'Response via WhatsApp',

    guests: '6 guests',
    bedrooms: '3 bedrooms',
    hotTub: 'Private hot tub',
    forestView: 'Forest view',

    symbolTitle: 'The symbol of the oak',
    symbolDescription:
      'The oak leaf symbolizes strength and resilience in the face of adversity. Known for its longevity, the oak also holds spiritual significance, and several cultures regard it as a gateway connecting the earthly and the divine.',

    cabinTitle: 'The cabin',
    cabinDescription:
      'Inspired by the strength and presence of the oak, this cabin invites guests to gather and experience the forest in tranquillity. Designed for up to six people, it combines comfortable shared spaces with quiet corners for rest and contemplation.',

    experienceTitle: 'The experience',
    experienceDescription:
      'Roble features three bedrooms, including one double room and two twin rooms, a fully equipped kitchen, WiFi, a terrace and accessible facilities on the ground floor. The stay also includes a private hot tub for six people, ideal for enjoying the silence, the stars and the atmosphere of southern Chile’s forests.',

    surroundingsTitle: 'The surroundings',
    surroundingsDescription:
      'Beyond the cabin, the forest becomes part of the experience. Native trees, the sound of the wind through the branches and the nearby lake invite you to experience the landscape with calm and attention. Every sunrise, trail and shift of light reveals the deep connection between nature, rest and contemplation.',
  },
}

const robleGallery = [
  '/images/cabanas/roble/roble-1.jpg',
  '/images/cabanas/roble/roble-2.jpg',
  '/images/cabanas/roble/roble-3.jpg',
  '/images/cabanas/roble/roble-4.jpg',
  '/images/cabanas/roble/roble-5.jpg',
  '/images/cabanas/roble/roble-6.jpg',
  '/images/cabanas/roble/roble-7.jpg',
  '/images/cabanas/roble/roble-8.jpg',
  '/images/cabanas/roble/roble-9.jpg',
  '/images/cabanas/roble/roble-12.jpg',
]

export default function RoblePage() {
  const { lang } = useLanguage()
  const t = translations[lang]

  const robleFeatures = [
    {
      icon: '/images/huesped-icon.png',
      alt: lang === 'es' ? 'Huéspedes' : 'Guests',
      label: t.guests,
    },
    {
      icon: '/images/room-icon.png',
      alt: lang === 'es' ? 'Dormitorios' : 'Bedrooms',
      label: t.bedrooms,
    },
    {
      icon: '/images/bathtub-icon.png',
      alt: lang === 'es' ? 'Tinaja privada' : 'Private hot tub',
      label: t.hotTub,
    },
    {
      icon: '/images/forest-icon.png',
      alt: lang === 'es' ? 'Bosque' : 'Forest',
      label: t.forestView,
    },
  ]

  const robleDetails = [
    {
      title: t.symbolTitle,
      description: t.symbolDescription,
      image: '/images/cabanas/roble/simbolo-roble.jpg',
    },
    {
      title: t.cabinTitle,
      description: t.cabinDescription,
      image: '/images/cabanas/roble/roble-1.jpg',
      reverse: true,
    },
    {
      title: t.experienceTitle,
      description: t.experienceDescription,
      image: '/images/cabanas/roble/experiencia-roble.jpg',
    },
    {
      title: t.surroundingsTitle,
      description: t.surroundingsDescription,
      image: '/images/cabanas/roble/entorno-roble.jpg',
      reverse: true,
    },
  ]

  return (
    <div className="bg-primary">
      <CabanaHero
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        image="/images/cabanas/roble/portada-interior.jpg"
        reserveHref="/?cabana=Roble#reservar"
        features={robleFeatures}
        reserveText={t.reserveText}
        whatsappText={t.whatsappText}
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