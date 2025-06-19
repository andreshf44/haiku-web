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
        lang: 'Idioma',
    },
    en: {
        about: 'About Us',
        stays: 'Stays',
        experiences: 'Experiences',
        book: 'Book',
        contact: 'Contact',
        lang: 'Language',
    },
}

export default function Navbar() {
    const [lang, setLang] = useState<'es' | 'en'>('es')
    const [showMenu, setShowMenu] = useState(false)
    const t = translations[lang]

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setShowMenu(true)
          } else {
            setShowMenu(false)
          }
        }
    
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
      }, [])

    return (
        <nav className="p-4 flex justify-center items-center bg-[#efe9d7]">
            <h1 className="text-2xl font-bold text-[#004421]">Haiku</h1>
          
            <div className={`absolute space-x-4 transition-opacity duration-300 bg-[#f5f5ef]
                ${showMenu ? 'shadow-md opacity-100 w-screen p-[22px] fixed flex items-center justify-between' : 'opacity-0 pointer-events-none'}`}
            >
                <h1 className="text-2xl font-bold text-[#004421]">Haiku</h1>
                <div className='flex items-center gap-[25px]'>
                    <Link href="/">{t.about}</Link>
                    <Link href="/alojamientos">{t.stays}</Link>
                    <Link href="/experiencias">{t.experiences}</Link>
                    <Link href="/reservar">{t.book}</Link>
                    <Link href="/contacto">{t.contact}</Link>

                    {/* Selector de idioma */}
                    <select
                    value={lang}
                    onChange={(e) => setLang(e.target.value as 'es' | 'en')}
                    className="border rounded px-2 py-1 ml-4"
                    >
                        <option value="es">ES</option>
                        <option value="en">EN</option>
                    </select>
                </div>
            </div>
        </nav>
    )
}