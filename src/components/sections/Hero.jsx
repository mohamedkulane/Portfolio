import { motion } from "framer-motion"
import {
  ArrowRight,
  Braces,
  Code2,
  Database,
  Server,
  Sparkles,
} from "lucide-react"

import Container from "@/components/layout/Container"
import image1 from "public/images/profile/mohamed-profile.jpeg"

const highlights = [
  {
    value: "React + TS",
    label: "Frontend",
  },
  {
    value: "Node.js",
    label: "Backend",
  },
  {
    value: "PostgreSQL",
    label: "Database",
  },
  {
    value: "Remote",
    label: "Availability",
  },
]

const technologies = [
  {
    label: "React",
    icon: Code2,
  },
  {
    label: "TypeScript",
    icon: Braces,
  },
  {
    label: "Node.js",
    icon: Server,
  },
  {
    label: "PostgreSQL",
    icon: Database,
  },
]

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-portfolio-background pt-20"
    >
      {/* Background Effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-portfolio-green/[0.08] blur-[120px]" />

        <div className="absolute -right-40 -top-20 h-[600px] w-[600px] rounded-full bg-portfolio-green/[0.07] blur-[140px]" />

        <div className="absolute bottom-[-300px] left-[18%] h-[650px] w-[650px] rounded-full bg-portfolio-green/[0.05] blur-[150px]" />
      </div>

      <Container className="relative z-10">
        <div className="grid min-h-[calc(100vh-5rem)] items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-12">
          {/* ===================================================
              LEFT CONTENT
          =================================================== */}
          <div>
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="section-badge"
            >
              <Sparkles className="h-4 w-4" />

              <span>
                Software Engineer • Full-Stack Developer
              </span>
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.55,
                delay: 0.08,
              }}
              className="mt-7 max-w-3xl text-[clamp(3rem,6vw,5.4rem)] font-medium leading-[0.98] tracking-[-0.055em] text-white"
            >
              Building Digital
              <span className="block text-portfolio-green">
                Experiences That Matter.
              </span>
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.16,
              }}
              className="mt-7 max-w-2xl text-base leading-8 text-portfolio-muted sm:text-lg"
            >
              I build modern, scalable and reliable web applications
              with a strong focus on clean architecture, performance,
              usability and high-quality user experiences.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.24,
              }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.03] hover:bg-portfolio-green"
              >
                Get In Touch

                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-portfolio-green/30 hover:bg-portfolio-green/[0.07] hover:text-portfolio-green"
              >
                View Projects

                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

            {/* Highlight Stats */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.32,
              }}
              className="mt-14 grid max-w-3xl grid-cols-2 gap-y-7 border-t border-white/[0.08] pt-7 sm:grid-cols-4"
            >
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className={`${
                    index !== 0
                      ? "sm:border-l sm:border-white/[0.10] sm:pl-6"
                      : ""
                  }`}
                >
                  <div className="text-lg font-semibold text-portfolio-green sm:text-xl">
                    {item.value}
                  </div>

                  <div className="mt-1 text-xs text-portfolio-muted sm:text-sm">
                    {item.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ===================================================
              RIGHT PROFILE CARD
          =================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="relative order-first mx-auto w-full max-w-[570px] lg:order-last"
          >
            {/* Glow Behind Card */}
            <div className="absolute inset-10 -z-10 rounded-[3rem] bg-portfolio-green/[0.12] blur-[100px]" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[#0c100d] shadow-2xl">
              {/* Placeholder Background */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#101810] via-[#090c09] to-[#040604]">
                <Code2 className="h-24 w-24 text-portfolio-green/[0.12]" />
              </div>

              {/* Profile Image */}
              <img
                src="/images/profile/mohamedprofile.jpg"
                alt="Mohamed Ahmed"
                className="relative z-10 aspect-[4/5] w-full object-cover object-top saturate-[0.92] transition-transform duration-700 hover:scale-[1.015]"
                onError={(event) => {
                  event.currentTarget.style.display = "none"
                }}
              />

              {/* Bottom Image Gradient */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-44 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

              <div className="absolute bottom-20 left-6 z-30">
                <div className="text-xs font-medium uppercase tracking-[0.2em] text-portfolio-green">
                  Mohamed Ahmed
                </div>
                <div className="mt-1 text-sm text-white/75">
                  Software Engineer
                </div>
              </div>

              {/* Technology Floating Bar */}
              <div className="absolute bottom-5 left-1/2 z-30 -translate-x-1/2">
                <div className="flex items-center gap-1 rounded-full border border-white/10 bg-black/65 p-1.5 shadow-xl backdrop-blur-xl">
                  {technologies.map((technology) => {
                    const Icon = technology.icon

                    return (
                      <div
                        key={technology.label}
                        title={technology.label}
                        className="flex h-10 w-10 items-center justify-center rounded-full text-portfolio-green transition-colors duration-300 hover:bg-portfolio-green/10"
                      >
                        <Icon className="h-[18px] w-[18px]" />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Decorative Border */}
            <div className="pointer-events-none absolute -bottom-3 left-[14%] right-[14%] h-px bg-gradient-to-r from-transparent via-portfolio-green/70 to-transparent" />
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          y: [0, 7, 0],
        }}
        transition={{
          opacity: {
            delay: 0.7,
            duration: 0.4,
          },
          y: {
            duration: 1.7,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-portfolio-green lg:block"
      >
        <svg
          width="24"
          height="14"
          viewBox="0 0 24 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2L12 12L22 2"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.a>
    </section>
  )
}

export default Hero
