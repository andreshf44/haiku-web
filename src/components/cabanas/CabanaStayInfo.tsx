'use client'

import {
  FaWifi,
  FaHotTub,
  FaBed,
  FaTemperatureHigh,
  FaParking,
  FaTree,
  FaMapMarkerAlt,
  FaUtensils,
  FaWater,
} from 'react-icons/fa'

import { useLanguage } from '@/context/LanguageContext'

type CabanaStayInfoProps = {
  hasLakeView?: boolean
}

const translations = {
  es: {
    includesTitle: '¿Qué incluye tu estadía?',
    locationTitle: 'Ubicación',

    wifi: 'WiFi',
    hotTub: 'Tinaja privada',
    kitchen: 'Cocina equipada',
    bedding: 'Toallas y ropa de cama',
    heating: 'Calefacción',
    parking: 'Estacionamiento',
    forestView: 'Vista al bosque',
    lakeView: 'Vista al lago',

    locationItems: [
      'Sector Hueinahue, comuna de Futrono',
      'A orillas del Lago Maihue',
      'Rodeado de bosque nativo y cordillera',
    ],

    mapTitle: 'Ubicación de Haiku Refugio & Spa en Hueinahue, Futrono',
    openMap: 'Ver ubicación en Google Maps',
  },

  en: {
    includesTitle: 'What is included in your stay?',
    locationTitle: 'Location',

    wifi: 'WiFi',
    hotTub: 'Private hot tub',
    kitchen: 'Equipped kitchen',
    bedding: 'Towels and bed linen',
    heating: 'Heating',
    parking: 'Parking',
    forestView: 'Forest view',
    lakeView: 'Lake view',

    locationItems: [
      'Hueinahue, in the municipality of Futrono',
      'On the shores of Lake Maihue',
      'Surrounded by native forest and the Andes',
    ],

    mapTitle: 'Location of Haiku Refugio & Spa in Hueinahue, Futrono',
    openMap: 'View location on Google Maps',
  },
}

export default function CabanaStayInfo({
  hasLakeView = false,
}: CabanaStayInfoProps) {
  const { lang } = useLanguage()
  const t = translations[lang]

  const includes = [
    { icon: FaWifi, label: t.wifi },
    { icon: FaHotTub, label: t.hotTub },
    { icon: FaUtensils, label: t.kitchen },
    { icon: FaBed, label: t.bedding },
    { icon: FaTemperatureHigh, label: t.heating },
    { icon: FaParking, label: t.parking },
    { icon: FaTree, label: t.forestView },
  ]

  if (hasLakeView) {
    includes.push({
      icon: FaWater,
      label: t.lakeView,
    })
  }

  const googleMapsUrl =
    'https://www.google.com/maps/place/Haiku+Refugio+%26+Spa/@-40.3114189,-71.9806811,17z/data=!3m1!4b1!4m6!3m5!1s0x9616cd406f87c88b:0x406e97dab0a0bb96!8m2!3d-40.3114189!4d-71.9806811!16s%2Fg%2F11zgscr3b6'

  const googleMapsEmbed =
    'https://www.google.com/maps?q=-40.3114189,-71.9806811&z=15&output=embed'

  return (
    <section
      aria-labelledby="cabana-stay-info-title"
      className="bg-primary px-4 py-10"
    >
      <h2 id="cabana-stay-info-title" className="sr-only">
        {lang === 'es'
          ? 'Servicios y ubicación de la cabaña'
          : 'Cabin amenities and location'}
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Incluye */}
        <div className="bg-[#f5f5ef] border border-[#d9d2bf] rounded-xl p-6 shadow-sm">
          <h3 className="main-text-dark text-2xl font-semibold mb-6">
            {t.includesTitle}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {includes.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 secondary-text-dark text-sm"
              >
                <Icon
                  className="text-icon shrink-0"
                  size={16}
                  aria-hidden="true"
                />

                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ubicación */}
        <div className="bg-[#f5f5ef] border border-[#d9d2bf] rounded-xl overflow-hidden shadow-sm grid grid-cols-1 md:grid-cols-2">
          <div className="p-6">
            <h3 className="main-text-dark text-2xl font-semibold mb-6">
              {t.locationTitle}
            </h3>

            <div className="space-y-4">
              {t.locationItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 secondary-text-dark text-sm"
                >
                  <FaMapMarkerAlt
                    className="text-icon mt-1 shrink-0"
                    size={14}
                    aria-hidden="true"
                  />

                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="main-text-dark inline-block mt-6 text-sm font-medium underline underline-offset-4 hover-secondary-light transition-colors"
            >
              {t.openMap} →
            </a>
          </div>

          {/* Mapa real */}
          <div className="relative min-h-[220px] md:min-h-[100%]">
            <iframe
              src={googleMapsEmbed}
              title={t.mapTitle}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>

      </div>
    </section>
  )
}