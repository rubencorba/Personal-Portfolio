"use client"

import { Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Left Side */}
          <div>
            <h3 className="text-xl font-bold mb-2">Rubén Ernesto Corbalán</h3>
            <p className="text-background/70">Full Stack Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/rub%C3%A9n-corbal%C3%A1n-760a06287/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/rubencorba"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>

          {/* CV Button */}
          <a
            href="https://drive.google.com/drive/folders/1jSoIeOiQAtMBo5poc5-sars7SDMsIAzQ"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-background rounded-lg font-semibold hover:bg-background/10 transition-colors"
          >
            Ver CV
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <p className="text-center text-background/70">
            © 2025 Rubén Ernesto Corbalán. Todos los derechos reservados. | Diseñado y desarrollado con ❤️
          </p>
        </div>
      </div>
    </footer>
  )
}
