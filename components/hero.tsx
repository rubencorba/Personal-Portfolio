"use client"

import { ChevronDown } from "lucide-react"
import PaPerfil3 from "../public/PaPerfil3.jpg"

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-primary/5 via-transparent to-transparent" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image Placeholder */}
        <div className="mb-12 flex justify-center">
          <div className="w-80 h-80 rounded-full bg-linear-to-br from-primary to-accent p-1">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
              <img
                src={ PaPerfil3.src }
                alt="Rubén Ernesto Corbalán"
                className="w-full h-full rounded-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          Rubén Corbalán
        </h1>

        <p className="text-2xl md:text-3xl font-light text-primary mb-6">Full Stack Developer</p>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Desarrollador web Full Stack con experiencia profesional en el desarrollo de aplicaciones web modernas
        </p>
        {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Creo soluciones web modernas y accesibles, combinando diseño creativo con ingeniería robusta. Apasionado por
          code quality, UX y tech innovation.
        </p> */}

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => scrollToSection("contacto")}
            className="cursor-pointer px-8 py-3 bg-linear-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all"
          >
            Contáctame
          </button>
          <a
            href="https://drive.google.com/drive/folders/1jSoIeOiQAtMBo5poc5-sars7SDMsIAzQ"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
          >
            Ver CV
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-primary" size={32} />
        </div>
      </div>
    </section>
  )
}
