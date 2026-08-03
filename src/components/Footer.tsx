'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa'

const translations = {
  es: {
    locationIntroduction: '¿CÓMO LLEGAR?',
    locationTitleFirst: 'En Hueinahue,',
    locationTitleSecond: 'a orillas del Lago Maihue',
    locationItemOne: 'Sector Hueinahue, comuna de Futrono',
    locationItemTwo: 'Rodeado por el Lago Maihue y la cordillera',
    locationItemThree: 'En plena naturaleza de la Región de Los Ríos',
    mapTitle: 'Ubicación de Haiku Refugio & Spa en Google Maps',
    openMap: 'Abrir ubicación en Google Maps',

    brandPhrase: 'Naturaleza. Silencio. Presencia.',
    brandDescription:
      'Cabañas y experiencias de bienestar en Hueinahue, a orillas del Lago Maihue.',

    navigation: 'Navegación',
    about: 'Quiénes Somos',
    stays: 'Alojamientos',
    experiences: 'Experiencias',
    book: 'Reservar',
    contact: 'Contacto',

    contactTitle: 'Contacto',
    address: 'Hueinahue, Futrono, Región de Los Ríos, Chile',

    legal: 'Legal',
    terms: 'Términos y condiciones',
    privacy: 'Política de privacidad',

    rights: 'Todos los derechos reservados.',
    signature: 'Diseñado y desarrollado por Andrés Enrique',

    whatsappLabel: 'Contactar a Haiku por WhatsApp',
    emailLabel: 'Enviar un correo a Haiku',
    instagramLabel: 'Instagram de Haiku',
    facebookLabel: 'Facebook de Haiku',
  },

  en: {
    locationIntroduction: 'HOW TO GET HERE',
    locationTitleFirst: 'In Hueinahue,',
    locationTitleSecond: 'on the shores of Lake Maihue',
    locationItemOne: 'Hueinahue, in the municipality of Futrono',
    locationItemTwo: 'Surrounded by Lake Maihue and the Andes',
    locationItemThree: 'In the heart of nature in Chile’s Los Ríos Region',
    mapTitle: 'Location of Haiku Refugio & Spa on Google Maps',
    openMap: 'Open location in Google Maps',

    brandPhrase: 'Nature. Silence. Presence.',
    brandDescription:
      'Cabins and wellness experiences in Hueinahue, on the shores of Lake Maihue.',

    navigation: 'Navigation',
    about: 'About Us',
    stays: 'Stays',
    experiences: 'Experiences',
    book: 'Book',
    contact: 'Contact',

    contactTitle: 'Contact',
    address: 'Hueinahue, Futrono, Los Ríos Region, Chile',

    legal: 'Legal',
    terms: 'Terms and conditions',
    privacy: 'Privacy policy',

    rights: 'All rights reserved.',
    signature: 'Designed and developed by Andrés Enrique',

    whatsappLabel: 'Contact Haiku via WhatsApp',
    emailLabel: 'Send an email to Haiku',
    instagramLabel: 'Haiku on Instagram',
    facebookLabel: 'Haiku on Facebook',
  },
}

export default function Footer() {
  const { lang } = useLanguage()
  const t = translations[lang]

  const googleMapsUrl =
    'https://www.google.com/maps/place/Haiku+Refugio+%26+Spa/@-40.3114189,-71.9806811,17z/data=!3m1!4b1!4m6!3m5!1s0x9616cd406f87c88b:0x406e97dab0a0bb96!8m2!3d-40.3114189!4d-71.9806811!16s%2Fg%2F11zgscr3b6'

  const googleMapsEmbed =
    'https://www.google.com/maps?q=-40.3114189,-71.9806811&z=15&output=embed'

  const whatsappUrl =
    'https://wa.me/56985991949?text=Hola%20Haiku%20🌿%2C%20quisiera%20realizar%20una%20consulta.'

  return (
    <footer
      id="contacto"
      aria-labelledby="footer-location-title"
      className="bg-dark relative overflow-hidden"
    >
      {/* Decoración */}
      <div
        className="absolute right-0 bottom-0 opacity-20 pointer-events-none"
        aria-hidden="true"
      >
        <img
          src="/images/bamboo-footer.png"
          alt=""
          className="w-[250px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Ubicación */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 pb-12 border-b border-[#736536]/30">

          {/* Texto ubicación */}
          <div>
            <p className="text-icon text-sm font-semibold tracking-[0.22em] uppercase mb-3">
              {t.locationIntroduction}
            </p>

            <h2
              id="footer-location-title"
              className="secondary-text-light text-4xl leading-tight mb-5"
            >
              {t.locationTitleFirst}
              <br />
              {t.locationTitleSecond}
            </h2>

            <div className="space-y-3 secondary-text-light">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt
                  className="text-icon shrink-0"
                  aria-hidden="true"
                />

                <span>{t.locationItemOne}</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt
                  className="text-icon shrink-0"
                  aria-hidden="true"
                />

                <span>{t.locationItemTwo}</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt
                  className="text-icon shrink-0"
                  aria-hidden="true"
                />

                <span>{t.locationItemThree}</span>
              </div>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-text-light hover-secondary-light inline-block mt-6 text-sm underline underline-offset-4 transition-colors"
            >
              {t.openMap} →
            </a>
          </div>

          {/* Mapa real */}
          <div className="relative overflow-hidden rounded-2xl min-h-[240px] border border-[#736536]/30">
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

        {/* Información principal */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* Marca */}
          <div>
            <h3 className="secondary-text-light text-4xl mb-4">
              Haiku
            </h3>

            <p className="secondary-text-light font-medium mb-3">
              {t.brandPhrase}
            </p>

            <p className="secondary-text-light opacity-80 text-sm leading-relaxed">
              {t.brandDescription}
            </p>
          </div>

          {/* Navegación */}
          <nav aria-label={t.navigation}>
            <h4 className="text-icon font-semibold mb-4">
              {t.navigation}
            </h4>

            <div className="flex flex-col gap-2">
              <Link
                href="/#quienes-somos"
                className="secondary-text-light hover-secondary-light"
              >
                {t.about}
              </Link>

              <Link
                href="/#alojamientos"
                className="secondary-text-light hover-secondary-light"
              >
                {t.stays}
              </Link>

              <Link
                href="/#experiencias"
                className="secondary-text-light hover-secondary-light"
              >
                {t.experiences}
              </Link>

              <Link
                href="/#reservar"
                className="secondary-text-light hover-secondary-light"
              >
                {t.book}
              </Link>

              <Link
                href="/#contacto"
                className="secondary-text-light hover-secondary-light"
              >
                {t.contact}
              </Link>
            </div>
          </nav>

          {/* Contacto */}
          <div>
            <h4 className="text-icon font-semibold mb-4">
              {t.contactTitle}
            </h4>

            <address className="space-y-3 not-italic">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.whatsappLabel}
                className="flex items-center gap-3 secondary-text-light hover-secondary-light"
              >
                <FaWhatsapp aria-hidden="true" />
                <span>+56 9 8599 1949</span>
              </a>

              <a
                href="mailto:hola@haiku.cl"
                aria-label={t.emailLabel}
                className="flex items-center gap-3 secondary-text-light hover-secondary-light"
              >
                <FaEnvelope aria-hidden="true" />
                <span>haikurefugio@gmail.com</span>
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 secondary-text-light hover-secondary-light"
              >
                <FaMapMarkerAlt
                  className="mt-1 shrink-0"
                  aria-hidden="true"
                />

                <span>{t.address}</span>
              </a>
            </address>

            <div className="flex gap-4 mt-5">
              <a
                href="https://www.instagram.com/sentidovitalsur/"
                aria-label={t.instagramLabel}
                className="secondary-text-light hover-secondary-light flex item-center gap-[5px]"
              >
                <FaInstagram size={20} aria-hidden="true" />
                @sentidovitalsur
              </a>
              {/*
              <a
                href="#"
                aria-label={t.facebookLabel}
                className="secondary-text-light hover-secondary-light"
              >
                <FaFacebookF size={18} aria-hidden="true" />
              </a>
              */}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-icon font-semibold mb-4">
              {t.legal}
            </h4>

            <div className="flex flex-col gap-2">
              <Link
                href="#"
                className="secondary-text-light hover-secondary-light"
              >
                {t.terms}
              </Link>

              <Link
                href="#"
                className="secondary-text-light hover-secondary-light"
              >
                {t.privacy}
              </Link>
            </div>
          </div>
        </div>

        {/* Línea final */}
        <div className="border-t border-[#736536]/30 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="secondary-text-light text-sm opacity-80">
              © 2026 Haiku. {t.rights}
            </p>

            <a
              href="https://mi-portafolio-sandy-five.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-text-light text-sm hover-secondary-light transition-colors"
            >
              {t.signature}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}