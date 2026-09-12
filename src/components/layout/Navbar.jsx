import { navigation } from "@/data/navigation"
import { Code2 } from "lucide-react"

import Container from "@/components/layout/Container"
import MobileNav from "@/components/layout/MobileNav"

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-xl">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <Code2 className="h-5 w-5 text-portfolio-green" aria-hidden="true" />

            <span className="text-portfolio-green">
              Mohamed
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[16px] font-medium text-portfolio-muted transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden h-11 items-center justify-center rounded-full bg-white px-6 text-[16.5px] font-semibold text-black transition-all duration-300 hover:bg-portfolio-green lg:inline-flex"
          >
            Hire Me
          </a>

          {/* Mobile Navigation */}
          <MobileNav />
        </nav>
      </Container>
    </header>
  )
}

export default Navbar
