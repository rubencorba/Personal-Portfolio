"use client"

import { useEffect, useState } from "react"
import { ExternalLink, Github, ChevronDown } from "lucide-react"
import Link from "next/link"

import VistaProyCamaras from "../public/VistaProyCamaras2.png"
import VistaProyCorralon from "../public/VistaProyCorralon2.png"
import VistaProyGDI from "../public/VistaProyGDI.png"
import VistaProyVamos from "../public/VistaProyVamos.png"
import VistaProyAjedrezSgo from "../public/VistaProyAjedrezSgo.png"
import VistaProyRickAndMorty from "../public/VistaProyRickAndMorty.png"
import { useLanguage } from "@/context/LanguageContext"

export const projectsData = [
  {
    id: 1,
    image: VistaProyCamaras.src,
    repositorioPrivado: true,
    live: "#",
    github: "#",
    tags: ["React", "Node.js", "MySQL"],
  },
  {
    id: 2,
    image: VistaProyCorralon.src,
    repositorioPrivado: true,
    live: "https://testing3.sannicolas.gob.ar",
    github: "https://github.com/rubencorba/CorralonSanNicolas",
    tags: ["React", "Node.js", "MySQL", "FTP server"],
  },
  {
    id: 3,
    image: VistaProyGDI.src,
    /* repositorioPrivado: true, */
    live: "https://demo.gdilatam.com/",
    github: "https://github.com/GestionDocumentalInteligente/MVP-Frontend",
    tags: ["Typescript", "Next.js", "TailwindCSS"],
  },
  {
    id: 4,
    image: VistaProyVamos.src,
    live: "https://vamos-app.vercel.app/",
    github: "https://github.com/VamosONG/VamosApp",
    tags: ["React", "Node", "PostgreSQL"],
  },
  {
    id: 5,
    image: VistaProyAjedrezSgo.src,
    live: "https://ajedrez-sgo-del-estero.vercel.app/",
    github: "https://github.com/rubencorba/AjedrezSgoDelEstero",
    tags: ["HTML", "CSS"],
  },
  {
    id: 6,
    image: VistaProyRickAndMorty.src,
    live: "https://rick-and-morty-lyart-zeta.vercel.app/",
    github: "https://github.com/rubencorba/Rick-And-Morty/tree/main/front",
    tags: ["Javascript", "React", "Vercel"],
  },
]

export default function Projects() {
  const { t } = useLanguage()
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [touchedId, setTouchedId] = useState<number | null>(null)

  const translatedList = t("projects", "list") as any[]

  useEffect(() => {
    const handleTouchOutside = (event: TouchEvent) => {
      // Si el usuario toca fuera de cualquier tarjeta de proyecto
      if (!(event.target as HTMLElement).closest(".project-card")) {
        setTouchedId(null)
      }
    }

    document.addEventListener("touchstart", handleTouchOutside)
    return () => {
      document.removeEventListener("touchstart", handleTouchOutside)
    }
  }, [])

  return (
    <section id="proyectos" className="py-14 px-6 bg-linear-to-b from-transparent to-primary/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          {t("projects", "title")}
        </h2>
        <p className="text-muted-foreground mb-16 text-lg">
          {t("projects", "subtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projectsData.map((project: any, index: number) => {
            const translation = translatedList[index]
            const isActive = hoveredId === index || touchedId === index

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-border hover:border-primary/50 transition-all duration-300 flex flex-col object-cover bg-white"
                onMouseEnter={() => setHoveredId(index)}
                onMouseLeave={() => setHoveredId(null)}
                onTouchStart={() => {
                  if (touchedId === index) {
                    // segundo toque → dejar que los enlaces funcionen
                    setTouchedId(null)
                  } else {
                    // primer toque → mostrar overlay
                    setTouchedId(index)
                  }
                }}
              >
                {/* Imagen del proyecto */}
                <div className="relative overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={translation.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Overlay */}
                  {project.repositorioPrivado ? (
                    <div
                      className={`absolute inset-0 bg-black/50 transition-opacity duration-300 flex items-center justify-center gap-4
                      ${isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                    >
                      <p className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors font-bold text-xl text-white">
                        {t("projects", "privateRepo")}
                      </p>
                    </div>
                  ) : (
                    <div
                      className={`absolute inset-0 bg-black/50 transition-opacity duration-300 flex items-center justify-center gap-4
                      ${isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                        aria-label="View live site"
                      >
                        <ExternalLink className="text-white" size={24} />
                      </a>
                      <span className="text-white font-light text-xl">/</span>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                        aria-label="View GitHub repository"
                      >
                        <Github className="text-white" size={24} />
                      </a>
                    </div>
                  )}
                </div>

                {/* Información del proyecto */}
                <div className="p-6 bg-card">
                  <h3 className="text-xl font-semibold mb-2">{translation.title}</h3>
                  <p className="text-muted-foreground mb-4">{translation.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags?.map((tag: string) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* More Projects Button */}
        {/* <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
          >
            Ver Más Proyectos
            <ChevronDown className="-rotate-90" size={20} />
          </Link>
        </div> */}
      </div>
    </section>
  )
}
