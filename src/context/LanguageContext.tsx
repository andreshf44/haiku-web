'use client'

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

type Language = 'es' | 'en'

type LanguageContextType = {
  lang: Language
  setLang: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
)

export function LanguageProvider({
  children,
}: {
  children: ReactNode
}) {
  const [lang, setLang] = useState<Language>('es')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('haiku-language')

    if (savedLanguage === 'es' || savedLanguage === 'en') {
      setLang(savedLanguage)
    }
  }, [])

  const changeLanguage = (newLanguage: Language) => {
    setLang(newLanguage)
    localStorage.setItem('haiku-language', newLanguage)
  }

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang: changeLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error(
      'useLanguage debe utilizarse dentro de LanguageProvider'
    )
  }

  return context
}