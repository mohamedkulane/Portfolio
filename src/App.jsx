import {
  Toaster,
} from "react-hot-toast"

import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import TechStack from "@/components/sections/TechStack"
import Skills from "@/components/sections/Skills"
import Experience from "@/components/sections/Experience"
import Projects from "@/components/sections/Projects"
import Services from "@/components/sections/Services"
import Testimonials from "@/components/sections/Testimonials"
import Contact from "@/components/sections/Contact"

function App() {
  return (
    <>
      <Navbar />

      <main className="bg-[#071B1F]">
        <Hero />
        <About />
        <TechStack />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3500,

          style: {
            background:
              "#0B252A",

            color: "#F4FFFC",

            border:
              "1px solid #164047",
          },

          success: {
            iconTheme: {
              primary:
                "#02F5A1",

              secondary:
                "#071B1F",
            },
          },
        }}
      />
    </>
  )
}

export default App
