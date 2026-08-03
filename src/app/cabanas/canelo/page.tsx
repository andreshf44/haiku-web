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
    heroTitle: 'EL LUGAR DE LA VERDAD',
    heroSubtitle: 'Refugio Canelo',
    reserveText: 'Reservar esta cabaña',
    whatsappText: 'Respuesta vía WhatsApp',

    guests: '2 huéspedes',
    bedrooms: '1 dormitorio',
    hotTub: 'Tinaja privada',
    lakeView: 'Vista al lago',

    symbolTitle: 'El símbolo del canelo',
    symbolDescription:
      'Simboliza el punto de intersección del eje cósmico con la Tierra (Mapu). Con sus raíces internadas hacia el inframundo, bajo el canelo se despojan de armas y diferencias y sólo se habla la verdad. Un símbolo de la paz, sagrado por sus efectos curativos.',

    cabinTitle: 'La cabaña',
    cabinDescription:
      'Inspirada en la paz y el espíritu sanador del canelo, esta cabaña invita a detener el ritmo cotidiano y reconectar con lo esencial. Diseñada para dos personas, combina comodidad, privacidad y una vista privilegiada al lago, creando un refugio sereno donde descansar, compartir y disfrutar la naturaleza en toda su profundidad.',

    experienceTitle: 'La experiencia',
    experienceDescription:
      'Canelo dispone de una habitación con cama matrimonial, cocina completamente equipada, WiFi y una amplia terraza orientada hacia el lago. La experiencia se completa con una tinaja privada incluida en la reserva, ideal para disfrutar los atardeceres, el silencio del entorno y la atmósfera única de los bosques del sur de Chile.',

    surroundingsTitle: 'El entorno',
    surroundingsDescription:
      'Más allá de la cabaña, el bosque se convierte en parte de la experiencia. La presencia de árboles nativos, los sonidos del viento entre las ramas y la cercanía del lago invitan a habitar el paisaje con atención y calma. Aquí, cada amanecer, cada sendero y cada cambio de luz recuerdan la profunda conexión entre naturaleza, descanso y contemplación.',

    footerCabinName: 'Canelo',
  },

  en: {
    heroTitle: 'THE PLACE OF TRUTH',
    heroSubtitle: 'Canelo Retreat',
    reserveText: 'Book this cabin',
    whatsappText: 'Response via WhatsApp',

    guests: '2 guests',
    bedrooms: '1 bedroom',
    hotTub: 'Private hot tub',
    lakeView: 'Lake view',

    symbolTitle: 'The symbol of the canelo',
    symbolDescription:
      'The canelo symbolizes the point where the cosmic axis meets the Earth, or Mapu. With its roots extending toward the underworld, it is a place where weapons and differences are left behind and only the truth is spoken. It is a sacred symbol of peace and healing.',

    cabinTitle: 'The cabin',
    cabinDescription:
      'Inspired by the peace and healing spirit of the canelo tree, this cabin invites guests to slow down and reconnect with what truly matters. Designed for two people, it combines comfort, privacy and a privileged lake view, creating a serene retreat for rest, connection and contemplation.',

    experienceTitle: 'The experience',
    experienceDescription:
      'Canelo features one bedroom with a double bed, a fully equipped kitchen, WiFi and a spacious terrace overlooking the lake. The stay also includes a private hot tub, ideal for enjoying the sunsets, the silence of the surroundings and the unique atmosphere of southern Chile’s forests.',

    surroundingsTitle: 'The surroundings',
    surroundingsDescription:
      'Beyond the cabin, the forest becomes part of the experience. Native trees, the sound of the wind through the branches and the nearby lake invite you to experience the landscape with calm and attention. Every sunrise, trail and shift of light reveals the deep connection between nature, rest and contemplation.',

    footerCabinName: 'Canelo',
  },
}

const caneloGallery = [
  '/images/cabanas/canelo/canelo-1.jpg',
  '/images/cabanas/canelo/canelo-2.jpg',
  '/images/cabanas/canelo/canelo-3.jpg',
  '/images/cabanas/canelo/canelo-4.jpg',
  '/images/cabanas/canelo/canelo-5.jpg',
  '/images/cabanas/canelo/canelo-6.jpg',
  '/images/cabanas/canelo/canelo-7.jpg',
  '/images/cabanas/canelo/canelo-8.jpg',
]

export default function CaneloPage() {
  const { lang } = useLanguage()
  const t = translations[lang]

  const caneloFeatures = [
    {
      icon: '/images/huesped-icon.png',
      alt: lang === 'es' ? 'Huéspedes' : 'Guests',
      label: t.guests,
    },
    {
      icon: '/images/room-icon.png',
      alt: lang === 'es' ? 'Dormitorio' : 'Bedroom',
      label: t.bedrooms,
    },
    {
      icon: '/images/bathtub-icon.png',
      alt: lang === 'es' ? 'Tinaja privada' : 'Private hot tub',
      label: t.hotTub,
    },
    {
      icon: '/images/lake-icon.png',
      alt: lang === 'es' ? 'Vista al lago' : 'Lake view',
      label: t.lakeView,
    },
  ]

  const caneloDetails = [
    {
      title: t.symbolTitle,
      description: t.symbolDescription,
      image: '/images/cabanas/canelo/simbolo-canelo.jpg',
    },
    {
      title: t.cabinTitle,
      description: t.cabinDescription,
      image: '/images/cabanas/canelo/canelo-1.jpg',
      reverse: true,
    },
    {
      title: t.experienceTitle,
      description: t.experienceDescription,
      image: '/images/cabanas/canelo/canelo-6.jpg',
    },
    {
      title: t.surroundingsTitle,
      description: t.surroundingsDescription,
      image: '/images/cabanas/canelo/entorno-canelo.jpg',
      reverse: true,
    },
  ]

  return (
    <main className="bg-primary">
      <CabanaHero
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        image="/images/cabanas/canelo/portadaCanelo.jpg"
        reserveHref="/?cabana=Canelo#reservar"
        features={caneloFeatures}
        reserveText={t.reserveText}
        whatsappText={t.whatsappText}
      />

      <CabanaGallery images={caneloGallery} />

      <CabanaDetails blocks={caneloDetails} />

      <CabanaStayInfo hasLakeView />

      <CabanaExperiences />

      <CabanaFooter
        cabanaName={t.footerCabinName}
        reserveHref="/?cabana=Canelo#reservar"
      />
    </main>
  )
}