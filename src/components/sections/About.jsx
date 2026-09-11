import { motion } from "framer-motion"
import {
  Code2,
  Download,
  Gauge,
  Sparkles,
} from "lucide-react"

import Container from "@/components/layout/Container"
import SectionBadge from "@/components/common/SectionBadge"
import GlowCard from "@/components/common/GlowCard"

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-portfolio-background"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-60 top-24 h-[600px] w-[600px] rounded-full bg-portfolio-green/[0.05] blur-[150px]"
      />

      <Container className="section-padding relative z-10">
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_0.95fr] lg:gap-20">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge icon={Code2}>
              FULL-STACK DEVELOPER
            </SectionBadge>

            <h2 className="mt-7 max-w-2xl text-4xl font-medium leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              Crafting Digital
              <span className="block">
                Experiences That Matter
              </span>
            </h2>

            <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-portfolio-muted">
              <p>
                I&apos;m a software developer focused on building
                modern web applications that combine clean interfaces
                with reliable engineering.
              </p>

              <p>
                My work spans frontend development, backend APIs,
                relational databases and full-stack application
                architecture using modern JavaScript technologies.
              </p>

              <p>
                I care about maintainable code, thoughtful system
                design, performance and creating software that solves
                real business problems.
              </p>
            </div>

            <a
              href="/resume/Mohamed_Ahmed_Mahmoud.pdf"
              download
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-portfolio-green"
            >
              <Download className="h-4 w-4" />

              Download Resume
            </a>
          </motion.div>

          {/* RIGHT */}
          <div className="grid gap-5 sm:grid-cols-2">
            <GlowCard className="p-7 sm:col-span-2">
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-portfolio-green/20 bg-portfolio-green/10 text-portfolio-green">
                  <Code2 className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Engineering Expertise
                  </h3>

                  <p className="mt-3 leading-7 text-portfolio-muted">
                    Building scalable web applications using modern
                    frontend, backend and database technologies.
                  </p>
                </div>
              </div>
            </GlowCard>

            <GlowCard className="p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-portfolio-green/20 bg-portfolio-green/10 text-portfolio-green">
                <Sparkles className="h-5 w-5" />
              </div>

              <h3 className="mt-7 text-xl font-semibold text-white">
                Clean Code
              </h3>

              <p className="mt-3 leading-7 text-portfolio-muted">
                Maintainable, readable and reusable code designed to
                grow with the product.
              </p>
            </GlowCard>

            <GlowCard className="p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-portfolio-green/20 bg-portfolio-green/10 text-portfolio-green">
                <Gauge className="h-5 w-5" />
              </div>

              <h3 className="mt-7 text-xl font-semibold text-white">
                Performance
              </h3>

              <p className="mt-3 leading-7 text-portfolio-muted">
                Building fast and responsive experiences across
                desktop, tablet and mobile devices.
              </p>
            </GlowCard>

            <GlowCard className="grid gap-6 p-7 sm:col-span-2 sm:grid-cols-3">
              <div>
                <div className="text-2xl font-semibold text-portfolio-green">
                  Full-Stack
                </div>

                <div className="mt-2 text-sm text-portfolio-muted">
                  Development
                </div>
              </div>

              <div className="sm:border-l sm:border-white/10 sm:pl-6">
                <div className="text-2xl font-semibold text-portfolio-green">
                  Scalable
                </div>

                <div className="mt-2 text-sm text-portfolio-muted">
                  Architecture
                </div>
              </div>

              <div className="sm:border-l sm:border-white/10 sm:pl-6">
                <div className="text-2xl font-semibold text-portfolio-green">
                  Remote
                </div>

                <div className="mt-2 text-sm text-portfolio-muted">
                  Availability
                </div>
              </div>
            </GlowCard>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About
