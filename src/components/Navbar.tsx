'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

const translations = {
  es: {
    about: 'Quiénes Somos',
    stays: 'Alojamientos',
    experiences: 'Experiencias',
    book: 'Reservar',
    contact: 'Contacto',
  },
  en: {
    about: 'About Us',
    stays: 'Stays',
    experiences: 'Experiences',
    book: 'Book',
    contact: 'Contact',
  },
}

export default function Navbar() {
  const { lang, setLang } = useLanguage()

  const [menuOpen, setMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  const t = translations[lang]

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > window.innerHeight * 0.8)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        hasScrolled
          ? 'bg-[#f5f5ef]/70 backdrop-blur-sm shadow-md border-b border-[#d9d2bf]'
          : 'bg-transparent shadow-none'
      }`}
    >
      <div className="flex items-center justify-between px-5 py-0">
        {/* Logo */}
        <Link
          href="/#home"
          className="relative flex h-16 w-[180px] items-center"
        >
          {/* Logo crema */}
          <img
            src="/images/logo-extendido-crema.png"
            alt="Haiku"
            className={`
              absolute h-16 object-contain transition-all duration-500
              ${
                hasScrolled
                  ? 'opacity-0 scale-95'
                  : 'opacity-100 scale-100'
              }
            `}
          />

          {/* Logo verde */}
          <img
            src="/images/logo-extendido.png"
            alt="Haiku"
            className={`
              absolute h-16 object-contain transition-all duration-500
              ${
                hasScrolled
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95'
              }
            `}
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            className={`p-[5px] transition-all duration-500 ${
              hasScrolled
                ? 'main-text-dark hover-secondary-light'
                : 'secondary-text-light hover-secondary-light'
            }`}
            href="/#quienes-somos"
          >
            {t.about}
          </Link>

          <Link
            className={`p-[5px] transition-all duration-500 ${
              hasScrolled
                ? 'main-text-dark hover-secondary-light'
                : 'secondary-text-light hover-secondary-light'
            }`}
            href="/#alojamientos"
          >
            {t.stays}
          </Link>

          <Link
            className={`p-[5px] transition-all duration-500 ${
              hasScrolled
                ? 'main-text-dark hover-secondary-light'
                : 'secondary-text-light hover-secondary-light'
            }`}
            href="/#experiencias"
          >
            {t.experiences}
          </Link>

          <Link
            className={`p-[5px] transition-all duration-500 ${
              hasScrolled
                ? 'main-text-dark hover-secondary-light'
                : 'secondary-text-light hover-secondary-light'
            }`}
            href="/#reservar"
          >
            {t.book}
          </Link>

          <Link
            className={`p-[5px] transition-all duration-500 ${
              hasScrolled
                ? 'main-text-dark hover-secondary-light'
                : 'secondary-text-light hover-secondary-light'
            }`}
            href="/#contacto"
          >
            {t.contact}
          </Link>

          <div
            className={`flex items-center gap-2 text-sm tracking-[0.12em] transition-all duration-500 ${
              hasScrolled
                ? 'main-text-dark'
                : 'secondary-text-light'
            }`}
            aria-label="Seleccionar idioma"
          >
            <button
              type="button"
              onClick={() => setLang('es')}
              className={`relative py-1 transition-all duration-300 cursor-pointer ${
                lang === 'es'
                  ? 'opacity-100'
                  : 'opacity-45 hover:opacity-75'
              }`}
              aria-pressed={lang === 'es'}
            >
              ES

              <span
                className={`absolute bottom-0 left-0 h-px w-full bg-current transition-all duration-300 ${
                  lang === 'es'
                    ? 'scale-x-100 opacity-100'
                    : 'scale-x-0 opacity-0'
                }`}
              />
            </button>

            <span className="opacity-40">|</span>

            <button
              type="button"
              onClick={() => setLang('en')}
              className={`relative py-1 transition-all duration-300 cursor-pointer ${
                lang === 'en'
                  ? 'opacity-100'
                  : 'opacity-45 hover:opacity-75'
              }`}
              aria-pressed={lang === 'en'}
            >
              EN

              <span
                className={`absolute bottom-0 left-0 h-px w-full bg-current transition-all duration-300 ${
                  lang === 'en'
                    ? 'scale-x-100 opacity-100'
                    : 'scale-x-0 opacity-0'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="relative flex h-8 w-8 flex-col items-center justify-center md:hidden"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span
            className={`absolute h-[2px] w-7 rounded bg-accent transition-all duration-300 ${
              hasScrolled
                ? 'bg-dark'
                : 'bg-accent'
              } ${
              menuOpen ? 'rotate-45' : '-translate-y-2'
            }`}
          />

          <span
            className={`absolute h-[2px] w-7 rounded bg-accent transition-all duration-300 ${
              hasScrolled
                ? 'bg-dark'
                : 'bg-accent'
              } ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />

          <span
            className={`absolute h-[2px] w-7 rounded bg-accent transition-all duration-300 ${
              hasScrolled
                ? 'bg-dark'
                : 'bg-accent'
              } ${
              menuOpen ? '-rotate-45' : 'translate-y-2'
            }`}
          />
        </button>
      </div>

      {/* Mobile floating menu */}
      <div
        className={`absolute top-[85px] right-4 left-4 transition-all duration-300 md:hidden ${
          menuOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-5 opacity-0'
        }`}
      >
        <div className="rounded-3xl border border-[#d7d0bf] bg-[#efe9d7]/85 p-6 shadow-2xl backdrop-blur-lg">
          <div className="main-text-dark flex flex-col gap-5 text-lg">
            <Link
              href="/#quienes-somos"
              onClick={() => setMenuOpen(false)}
            >
              {t.about}
            </Link>

            <Link
              href="/#alojamientos"
              onClick={() => setMenuOpen(false)}
            >
              {t.stays}
            </Link>

            <Link
              href="/#experiencias"
              onClick={() => setMenuOpen(false)}
            >
              {t.experiences}
            </Link>

            <Link
              href="/#reservar"
              onClick={() => setMenuOpen(false)}
            >
              {t.book}
            </Link>

            <Link
              href="/#contacto"
              onClick={() => setMenuOpen(false)}
            >
              {t.contact}
            </Link>

            <div
              className="main-text-dark mt-2 flex items-center gap-3 text-sm tracking-[0.15em]"
              aria-label="Seleccionar idioma"
            >
              <button
                type="button"
                onClick={() => setLang('es')}
                className={`relative py-1 transition-all duration-300 cursor-pointer ${
                  lang === 'es'
                    ? 'opacity-100'
                    : 'opacity-40'
                }`}
                aria-pressed={lang === 'es'}
              >
                ES

                <span
                  className={`absolute bottom-0 left-0 h-px w-full bg-current transition-all duration-300 ${
                    lang === 'es'
                      ? 'scale-x-100 opacity-100'
                      : 'scale-x-0 opacity-0'
                  }`}
                />
              </button>

              <span className="opacity-30">|</span>

              <button
                type="button"
                onClick={() => setLang('en')}
                className={`relative py-1 transition-all duration-300 cursor-pointer ${
                  lang === 'en'
                    ? 'opacity-100'
                    : 'opacity-40'
                }`}
                aria-pressed={lang === 'en'}
              >
                EN

                <span
                  className={`absolute bottom-0 left-0 h-px w-full bg-current transition-all duration-300 ${
                    lang === 'en'
                      ? 'scale-x-100 opacity-100'
                      : 'scale-x-0 opacity-0'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}