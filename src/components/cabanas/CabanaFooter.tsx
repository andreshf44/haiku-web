'use client'

import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { useLanguage } from '@/context/LanguageContext'

type CabanaFooterProps = {
  cabanaName: string
  reserveHref: string
}

const translations = {
  es: {
    titleStart: '¿Listo para vivir la experiencia',
    description: 'Consulta disponibilidad y asegura tu estadía.',
    reserve: 'Reservar esta cabaña',
    whatsapp: 'Respuesta vía WhatsApp',
    ariaReserve: 'Reservar la cabaña',
  },

  en: {
    titleStart: 'Ready to experience',
    description: 'Check availability and secure your stay.',
    reserve: 'Book this cabin',
    whatsapp: 'Response via WhatsApp',
    ariaReserve: 'Book the cabin',
  },
}

export default function CabanaFooter({
  cabanaName,
  reserveHref,
}: CabanaFooterProps) {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <footer
      className="relative overflow-hidden bg-dark px-6 py-10"
      aria-labelledby="cabana-footer-title"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-8">
        <div className="secondary-text-light text-center md:text-left">
          <h2
            id="cabana-footer-title"
            className="text-2xl md:text-3xl font-semibold mb-2"
          >
            {lang === 'es'
              ? `${t.titleStart} ${cabanaName}?`
              : `${t.titleStart} ${cabanaName}?`}
          </h2>

          <p className="text-sm md:text-base">
            {t.description}
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Link
            href={reserveHref}
            aria-label={`${t.ariaReserve} ${cabanaName}`}
            className="bg-button-gold px-10 py-3 rounded font-semibold text-white transition"
          >
            {t.reserve}
          </Link>

          <div className="flex items-center justify-center gap-2 mt-4 text-sm font-medium secondary-text-light">
            <FaWhatsapp
              size={16}
              aria-hidden="true"
            />

            <span>{t.whatsapp}</span>
          </div>
        </div>

        <div
          className="hidden md:flex justify-end opacity-25"
          aria-hidden="true"
        >
          <img
            src="/images/logo-haiku.png"
            alt=""
            className="w-[180px] object-contain"
          />
        </div>
      </div>
    </footer>
  )
}