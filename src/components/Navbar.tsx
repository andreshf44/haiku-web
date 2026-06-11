'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

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
  const [lang, setLang] = useState<'es' | 'en'>('es')
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
      <div className="flex items-center justify-between px-5 py-4">
        {/* Logo */}
        <h1 className="flex items-center text-3xl font-bold main-text-light"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          <img src="/images/logo-haiku.png" alt="logo" className="h-10 object-contain" />
          <a href="/#home">Haiku</a>
        </h1>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link className={` p-[5px] transition-all duration-500 ${
            hasScrolled
              ? 'main-text-dark hover-secondary-light'
              : 'secondary-text-light hover-secondary-light'
            }`} href="/#quienes-somos">{t.about}</Link>
          <Link className={` p-[5px] transition-all duration-500 ${
            hasScrolled
              ? 'main-text-dark hover-secondary-light'
              : 'secondary-text-light hover-secondary-light'
            }`} href="/#alojamientos">{t.stays}</Link>
          <Link className={` p-[5px] transition-all duration-500 ${
            hasScrolled
              ? 'main-text-dark hover-secondary-light'
              : 'secondary-text-light hover-secondary-light'
            }`} href="/#experiencias">{t.experiences}</Link>
          <Link className={` p-[5px] transition-all duration-500 ${
            hasScrolled
              ? 'main-text-dark hover-secondary-light'
              : 'secondary-text-light hover-secondary-light'
            }`} href="/#reservar">{t.book}</Link>
          <Link className={` p-[5px] transition-all duration-500 ${
            hasScrolled
              ? 'main-text-dark hover-secondary-light'
              : 'secondary-text-light hover-secondary-light'
            }`} href="/#contacto">{t.contact}</Link>

          <select
            value={lang}
            onChange={(e) =>
              setLang(e.target.value as 'es' | 'en')
            }
            className={` border rounded-lg px-2 py-1 bg-transparent transition-all duration-500 ${
              hasScrolled
                ? 'main-text-dark hover-secondary-light'
                : 'secondary-text-light hover-secondary-light'
            }`}
          >
            <option value="es">ES</option>
            <option value="en">EN</option>
          </select>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center"
        >
          <span
            className={`absolute h-[2px] w-7 bg-hamburger rounded transition-all duration-300 ${
              menuOpen ? 'rotate-45' : '-translate-y-2'
            }`}
          />

          <span
            className={`absolute h-[2px] w-7 bg-hamburger rounded transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />

          <span
            className={`absolute h-[2px] w-7 bg-hamburger rounded transition-all duration-300 ${
              menuOpen ? '-rotate-45' : 'translate-y-2'
            }`}
          />
        </button>
      </div>

      {/* Mobile floating menu */}
      <div
        className={`md:hidden absolute top-[85px] right-4 left-4 transition-all duration-300 ${
          menuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-5 pointer-events-none'
        }`}
      >
        <div className="bg-[#efe9d7]/70 backdrop-blur-lg rounded-3xl shadow-2xl p-6 border border-[#d7d0bf]">
          <div className="flex flex-col gap-5 main-text-dark text-lg">
            <Link
              href="#quienes-somos"
              onClick={() => setMenuOpen(false)}
            >
              {t.about}
            </Link>

            <Link
              href="#alojamientos"
              onClick={() => setMenuOpen(false)}
            >
              {t.stays}
            </Link>

            <Link
              href="#experiencias"
              onClick={() => setMenuOpen(false)}
            >
              {t.experiences}
            </Link>

            <Link
              href="#reservar"
              onClick={() => setMenuOpen(false)}
            >
              {t.book}
            </Link>

            <Link
              href="#contacto"
              onClick={() => setMenuOpen(false)}
            >
              {t.contact}
            </Link>

            <select
              value={lang}
              onChange={(e) =>
                setLang(e.target.value as 'es' | 'en')
              }
              className="border rounded-xl px-3 py-2 bg-white main-text-dark"
            >
              <option value="es">ES</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  )
}