"use client"

import { createContext, useContext, useState, ReactNode, useEffect } from "react"
import { translations } from "./translations"

type Language = "es" | "en" | "pt"

type LanguageContextType = {
    language: Language
    setLanguage: (lang: Language) => void
    t: (section: string, key?: string) => any
}


const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>("es")

    // Detectar idioma inicial (localStorage o navegador)
    useEffect(() => {
        const storedLang = localStorage.getItem("language") as Language | null
        if (storedLang && ["es", "en", "pt"].includes(storedLang)) {
            setLanguage(storedLang)
        } else {
            const browserLang = navigator.language.slice(0, 2) as Language
            if (["es", "en", "pt"].includes(browserLang)) {
                setLanguage(browserLang)
            } else {
                setLanguage("es")
            }
        }
    }, [])

    // Guardar idioma cuando cambia
    useEffect(() => {
        localStorage.setItem("language", language)
    }, [language])

    const t = (section: string, key?: string): any => {
        const langData = translations[language] as Record<string, any>
        const sectionData = langData[section]
        if (!sectionData) return ""
        return key ? sectionData[key] ?? "" : sectionData
    }


    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    const context = useContext(LanguageContext)
    if (!context) throw new Error("useLanguage must be used within LanguageProvider")
    return context
}