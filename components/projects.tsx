"use client"

import { useState } from "react"
import { ExternalLink, Github, ChevronDown } from "lucide-react"
import Link from "next/link"

import VistaProyCamaras from "../public/VistaProyCamaras2.png"
import VistaProyCorralon from "../public/VistaProyCorralon2.png"
import VistaProyGDI from "../public/VistaProyGDI.png"
import VistaProyVamos from "../public/VistaProyVamos.png"
import VistaProyAjedrezSgo from "../public/VistaProyAjedrezSgo.png"
import VistaProyRickAndMorty from "../public/VistaProyRickAndMorty.png"

const projectsData = [
  {
    id: 1,
    title: "Integración Fotomultas",
    description: "Interfaz para gestión de fotomultas detectadas por cámaras en sistema de juzgado de faltas",
    image: VistaProyCamaras.src,
    repositorioPrivado: true,
    live: "#",
    github: "#",
    tags: ["React", "Node.js", "MySQL"],
  },
  {
    id: 2,
    title: "Proyecto Corralón",
    description: "Sistema de gestión de vehículos secuestrados en operativos policiales almacenados en corralón",
    image: VistaProyCorralon.src,
    repositorioPrivado: true,
    live: "https://testing3.sannicolas.gob.ar",
    github: "https://github.com/rubencorba/CorralonSanNicolas",
    tags: ["React", "Node.js", "MySQL", "FTP server"],
  },
  {
    id: 3,
    title: "Gestión Documental Inteligente",
    description: "Plataforma usada entre municipios para gestión de firmas en documentos y expedientes",
    image: VistaProyGDI.src,
    repositorioPrivado: true,
    live: "https://gdi-alfa-production.up.railway.app/",
    github: "https://github.com/GestionDocumentalInteligente/MVP-Frontend",
    tags: ["Typescript", "Next.js", "TailwindCSS"],
  },
  {
    id: 4,
    title: "Proyecto Vamos",
    description: "Aplicación que facilita servicios de traslado taxi-aeropuerto entre choferes y turistas",
    image: VistaProyVamos.src,
    live: "https://vamos-app.vercel.app/",
    github: "https://github.com/VamosONG/VamosApp",
    tags: ["React", "Node", "PostgreSQL"],
  },
  {
    id: 5,
    title: "Plataforma Ajedrez Santiago",
    description: "Página web con información de jugadores, profesores y torneos locales, con galerías de imágenes",
    image: VistaProyAjedrezSgo.src,
    live: "https://ajedrez-sgo-del-estero.vercel.app/",
    github: "https://github.com/rubencorba/AjedrezSgoDelEstero",
    tags: ["HTML", "CSS"],
  },
  {
    id: 6,
    title: "Proyecto Rick And Morty",
    description: "Primer proyecto personal. Aplicación que consume api pública de Rick and Morty. Incluye juego de memoria",
    image: VistaProyRickAndMorty.src,
    live: "https://rick-and-morty-lyart-zeta.vercel.app/",
    github: "https://github.com/rubencorba/Rick-And-Morty/tree/main/front",
    tags: ["Javascript", "React", "Vercel"],
  },
]

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="proyectos" className="py-24 px-6 bg-linear-to-b from-transparent to-primary/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          Proyectos Destacados
        </h2>
        <p className="text-muted-foreground mb-16 text-lg">
          Una selección de mis proyectos mas recientes y significativos
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl border border-border hover:border-primary/50 transition-all duration-300 flex flex-col object-cover bg-white"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Project Image */}
              <div className="relative  overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {project.repositorioPrivado ? (
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                 <p className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors font-bold text-xl text-white">
                  Repositorio privado
                  </p> 
                </div>
                ) : (
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
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

              {/* Project Info */}
              <div className="p-6 bg-card">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
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
