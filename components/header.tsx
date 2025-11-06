"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
          Portfolio Rubén Corbalán
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection("proyectos")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Proyectos
          </button>
          <button
            onClick={() => scrollToSection("experiencia")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Experiencia
          </button>
          <button
            onClick={() => scrollToSection("contacto")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Contacto
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground" aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-6">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("proyectos")}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Proyectos
              </button>
              <button
                onClick={() => scrollToSection("experiencia")}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Experiencia
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
