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
    heroTitle: 'EL GRAN SANADOR',
    heroSubtitle: 'Refugio Ulmo',
    reserveText: 'Reservar esta cabaña',
    whatsappText: 'Respuesta vía WhatsApp',

    guests: '2 huéspedes',
    bedrooms: '1 dormitorio',
    hotTub: 'Tinaja privada',
    lakeView: 'Vista al lago',

    symbolTitle: 'El símbolo del ulmo',
    symbolDescription:
      'Conocido por sus hermosas flores blancas y perfumadas que le dan aspecto de árbol de algodón o recién nevado. Su néctar único es apreciado en el mundo como una miel nutritiva, aromática y altamente medicinal.',

    cabinTitle: 'La cabaña',
    cabinDescription:
      'Inspirada en la serenidad y elegancia del ulmo, esta cabaña ofrece un refugio íntimo para quienes buscan desconectar y contemplar la naturaleza en calma. Diseñada para dos personas, combina comodidad, privacidad y una vista privilegiada al lago, creando el escenario perfecto para descansar, compartir y reconectar con lo esencial.',

    experienceTitle: 'La experiencia',
    experienceDescription:
      'Ulmo dispone de una habitación con cama matrimonial, cocina completamente equipada, WiFi y una amplia terraza orientada hacia el lago. La experiencia se completa con una tinaja privada incluida en la reserva, ideal para disfrutar los atardeceres, el silencio del entorno y la atmósfera única de los bosques del sur de Chile.',

    surroundingsTitle: 'El entorno',
    surroundingsDescription:
      'Más allá de la cabaña, el bosque se convierte en parte de la experiencia. La presencia de árboles nativos, los sonidos del viento entre las ramas y la cercanía del lago invitan a habitar el paisaje con atención y calma. Aquí, cada amanecer, cada sendero y cada cambio de luz recuerdan la profunda conexión entre naturaleza, descanso y contemplación.',

    footerCabinName: 'Ulmo',
  },

  en: {
    heroTitle: 'THE GREAT HEALER',
    heroSubtitle: 'Ulmo Retreat',
    reserveText: 'Book this cabin',
    whatsappText: 'Response via WhatsApp',

    guests: '2 guests',
    bedrooms: '1 bedroom',
    hotTub: 'Private hot tub',
    lakeView: 'Lake view',

    symbolTitle: 'The symbol of the ulmo',
    symbolDescription:
      'Known for its beautiful, fragrant white flowers, which give it the appearance of a cotton-covered or freshly snowed tree. Its unique nectar is valued around the world as a nutritious, aromatic and highly medicinal honey.',

    cabinTitle: 'The cabin',
    cabinDescription:
      'Inspired by the serenity and elegance of the ulmo tree, this cabin offers an intimate retreat for those seeking to disconnect and contemplate nature in peace. Designed for two guests, it combines comfort, privacy and a privileged lake view, creating the perfect setting to rest, share and reconnect with what truly matters.',

    experienceTitle: 'The experience',
    experienceDescription:
      'Ulmo features one bedroom with a double bed, a fully equipped kitchen, WiFi and a spacious terrace overlooking the lake. The stay also includes a private hot tub, ideal for enjoying the sunsets, the silence of the surroundings and the unique atmosphere of southern Chile’s forests.',

    surroundingsTitle: 'The surroundings',
    surroundingsDescription:
      'Beyond the cabin, the forest becomes part of the experience. Native trees, the sound of the wind through the branches and the nearby lake invite you to experience the landscape with calm and attention. Every sunrise, trail and shift of light reveals the deep connection between nature, rest and contemplation.',

    footerCabinName: 'Ulmo',
  },
}

const ulmoGallery = [
  '/images/cabanas/ulmo/ulmo-1.jpg',
  '/images/cabanas/ulmo/ulmo-2.jpg',
  '/images/cabanas/ulmo/ulmo-3.jpg',
  '/images/cabanas/ulmo/ulmo-4.jpg',
  '/images/cabanas/ulmo/ulmo-5.jpg',
  '/images/cabanas/ulmo/ulmo-6.jpg',
  '/images/cabanas/ulmo/ulmo-7.jpg',
  '/images/cabanas/ulmo/ulmo-8.jpg',
]

export default function UlmoPage() {
  const { lang } = useLanguage()
  const t = translations[lang]

  const ulmoFeatures = [
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

  const ulmoDetails = [
    {
      title: t.symbolTitle,
      description: t.symbolDescription,
      image: '/images/cabanas/ulmo/simbolo-ulmo.jpg',
    },
    {
      title: t.cabinTitle,
      description: t.cabinDescription,
      image: '/images/cabanas/ulmo/ulmo-4.jpg',
      reverse: true,
    },
    {
      title: t.experienceTitle,
      description: t.experienceDescription,
      image: '/images/cabanas/ulmo/ulmo-7.jpg',
    },
    {
      title: t.surroundingsTitle,
      description: t.surroundingsDescription,
      image: '/images/cabanas/ulmo/entorno-ulmo.jpg',
      reverse: true,
    },
  ]

  return (
    <main className="bg-primary">
      <CabanaHero
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        image="/images/cabanas/ulmo/portadaUlmo.jpg"
        reserveHref="/?cabana=Ulmo#reservar"
        features={ulmoFeatures}
        reserveText={t.reserveText}
        whatsappText={t.whatsappText}
      />

      <CabanaGallery images={ulmoGallery} />

      <CabanaDetails blocks={ulmoDetails} />

      <CabanaStayInfo hasLakeView />

      <CabanaExperiences />

      <CabanaFooter
        cabanaName={t.footerCabinName}
        reserveHref="/?cabana=Ulmo#reservar"
      />
    </main>
  )
}