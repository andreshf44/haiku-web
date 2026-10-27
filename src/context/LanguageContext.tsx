
'use client'

import {
  createContext,
  ReactNode,
  useContext,
  useSyncExternalStore,
} from 'react'

type Language = 'es' | 'en'

type LanguageContextType = {
  lang: Language
  setLang: (lang: Language) => void
}

const STORAGE_KEY = 'haiku-language'
const LANGUAGE_CHANGE_EVENT = 'haiku-language-change'

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
)

function getSnapshot(): Language {
  const savedLanguage = localStorage.getItem(STORAGE_KEY)

  return savedLanguage === 'en' ? 'en' : 'es'
}

function getServerSnapshot(): Language {
  return 'es'
}

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback)
  window.addEventListener(LANGUAGE_CHANGE_EVENT, callback)

  return () => {
    window.removeEventListener('storage', callback)
    window.removeEventListener(LANGUAGE_CHANGE_EVENT, callback)
  }
}

export function LanguageProvider({
  children,
}: {
  children: ReactNode
}) {
  const lang = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  )

  const changeLanguage = (newLanguage: Language) => {
    localStorage.setItem(STORAGE_KEY, newLanguage)
    window.dispatchEvent(new Event(LANGUAGE_CHANGE_EVENT))
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLanguage }}>
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
