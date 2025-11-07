"use client"

import { useLanguage } from "@/context/LanguageContext"

export default function Experience() {
  const { t } = useLanguage()

  const experiences = [
    { skills: ["Typescript", "Next", "MySQL"] },
    { skills: ["Tailwind", "HTML", "CSS"] },
    { skills: ["React", "Node", "JavaScript", "PostgreSQL"] },
  ]

  const translatedExperiences = t("experience", "list") as any[]

  return (
    <section id="experiencia" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          {t("experience", "title")}
        </h2>
        <p className="text-muted-foreground mb-16 text-lg">{t("experience", "subtitle")}</p>

        <div className="space-y-8">
          {translatedExperiences.map((exp, index) => (
            <div key={index} className="group relative">
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-primary to-accent -translate-x-1/2" />

              {/* Timeline Dot */}
              <div className="absolute left-0 top-6 w-3 h-3 bg-primary rounded-full -translate-x-1 border-4 border-background group-hover:shadow-lg group-hover:shadow-primary/50 transition-all" />

              {/* Content */}
              <div className="pl-8 pb-8">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-2">
                  {exp.year}
                </span>
                <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                <p className="text-primary font-semibold mb-3">{exp.company}</p>
                <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {experiences[index].skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
