'use client'

import { useState } from 'react'
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

  const t = translations[lang]

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-[#f5f5ef]/95 backdrop-blur-md shadow-sm">
      <div className="flex items-center justify-between px-5 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#004421]">
            <a href="/">Haiku</a>
        </h1>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8 text-[#004421]">
          <Link href="#quienes-somos">{t.about}</Link>
          <Link href="#alojamientos">{t.stays}</Link>
          <Link href="#experiencias">{t.experiences}</Link>
          <Link href="#reservar">{t.book}</Link>
          <Link href="#contacto">{t.contact}</Link>

          <select
            value={lang}
            onChange={(e) =>
              setLang(e.target.value as 'es' | 'en')
            }
            className="border rounded-lg px-2 py-1 bg-transparent"
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
            className={`absolute h-[2px] w-7 bg-[#004421] rounded transition-all duration-300 ${
              menuOpen ? 'rotate-45' : '-translate-y-2'
            }`}
          />

          <span
            className={`absolute h-[2px] w-7 bg-[#004421] rounded transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />

          <span
            className={`absolute h-[2px] w-7 bg-[#004421] rounded transition-all duration-300 ${
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
        <div className="bg-[#efe9d7]/95 backdrop-blur-lg rounded-3xl shadow-2xl p-6 border border-[#d7d0bf]">
          <div className="flex flex-col gap-5 text-[#004421] text-lg">
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
              className="border rounded-xl px-3 py-2 bg-white text-[#004421]"
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