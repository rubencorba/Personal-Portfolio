"use client"

import { useState } from "react"
import { Mail, Loader } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export default function Contact() {
  const { t } = useLanguage()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await fetch("https://formsubmit.co/ajax/e44cdbaff4af7bbcc42084f9e3489f67", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: "Nuevo mensaje desde mi portfolio",
          _captcha: "false",
          _template: "box",
        }),
      })

      setSuccess(true)
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setSuccess(false), 3000)
    } catch (err) {
      console.error("Error enviando el mensaje:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" className="py-24 px-6 bg-linear-to-b from-primary/5 to-transparent">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          {t("contact", "title")}
        </h2>
        <p className="text-muted-foreground mb-12 text-lg">{t("contact", "subtitle")}</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              {t("contact", "name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder={t("contact", "placeholderName")}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              {t("contact", "email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder={t("contact", "placeholderEmail")}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-2">
              {t("contact", "message")}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              placeholder={t("contact", "placeholderMessage")}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-8 py-3 bg-linear-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
          >
            {loading ? (
              <>
                <Loader size={20} className="animate-spin" />
                {t("contact", "sending")}
              </>
            ) : (
              <>
                <Mail size={20} />
                {t("contact", "sendMessage")}
              </>
            )}
          </button>

          {success && (
            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-700 text-center">
              {t("contact", "success")}
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
