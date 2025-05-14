"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { en } from "@/translations/en"
import { pt } from "@/translations/pt"
import { um } from "@/translations/um"
import { km } from "@/translations/km"

type Language = "en" | "pt" | "um" | "km"

type TranslationsType = {
  [key: string]: any
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  translations: {
    en: TranslationsType
    pt: TranslationsType
    um: TranslationsType
    km: TranslationsType
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  const translations = {
    en,
    pt,
    um,
    km,
  }

  // Function to get nested translation values using dot notation
  const t = (key: string): string => {
    const keys = key.split(".")
    let value = translations[language]

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        return key // Return the key if translation not found
      }
    }

    return value as string
  }

  // Load saved language preference
  useEffect(() => {
    setMounted(true)
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["en", "pt", "um", "km"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("language", language)
    }
  }, [language, mounted])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translations }}>{children}</LanguageContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useTranslation must be used within a LanguageProvider")
  }
  return context
}
