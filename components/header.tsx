"use client"

import { useEffect, useRef, useState } from "react"
import { Menu, X, Globe } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const langRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  const handleLanguageSelect = (lang: "es" | "en" | "pt") => {
    setLanguage(lang)
    setLangOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false)
      }
    }
    if (langOpen) document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [langOpen])

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
          Portfolio Rubén Corbalán
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {(["inicio", "proyectos", "experiencia", "contacto"] as const).map((key) => (
            <button
              key={key}
              onClick={() => scrollToSection(key)}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              {t("header", key)}
            </button>
          ))}
          {/* Custom Language Selector */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="hover:text-primary cursor-pointer flex items-center gap-2 text-foreground border border-border px-3 py-1.5 rounded-lg text-sm hover:bg-background/60 transition-colors"
            >
              <Globe size={16} />
              {language === "es" ? "Español" : language === "en" ? "English" : "Português"}
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-1 w-36 bg-neutral-50 border border-neutral-200 rounded shadow-md z-20">
                {[
                  { code: "es", name: "Español" },
                  { code: "en", name: "English" },
                  { code: "pt", name: "Português" },
                ].map(({ code, name }) => (
                  <div
                    key={code}
                    onClick={() => handleLanguageSelect(code as "es" | "en" | "pt")}
                    className={`px-3 py-1.5 cursor-pointer hover:bg-neutral-100 text-sm ${language === code ? "font-semibold text-primary" : "text-foreground"
                      }`}
                  >
                    {name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground" aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-6">
              {(["inicio", "proyectos", "experiencia", "contacto"] as const).map((key) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className="text-foreground hover:text-primary transition-colors text-left"
                >
                  {t("header", key)}
                </button>
              ))}

              {/* Selector idioma */}
              {/* Language Select (Mobile) */}
              <div className="relative" ref={langRef}>
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-2 text-foreground border border-border px-3 py-1.5 rounded-lg text-sm hover:bg-background/60 transition-colors"
                >
                  <Globe size={16} />
                  {language === "es" ? "Español" : language === "en" ? "English" : "Português"}
                </button>

                {langOpen && (
                  <div className="absolute left-0 mt-1 w-36 bg-neutral-50 border border-neutral-200 rounded shadow-md z-20">
                    {[
                      { code: "es", name: "Español" },
                      { code: "en", name: "English" },
                      { code: "pt", name: "Português" },
                    ].map(({ code, name }) => (
                      <div
                        key={code}
                        onClick={() => handleLanguageSelect(code as "es" | "en" | "pt")}
                        className={`px-3 py-1.5 cursor-pointer hover:bg-neutral-100 text-sm ${language === code ? "font-semibold text-primary" : "text-foreground"
                          }`}
                      >
                        {name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
