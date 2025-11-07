import Header from "@/components/header"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br ">
      <Header />
      <Hero />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
