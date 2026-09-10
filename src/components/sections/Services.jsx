import { motion } from "framer-motion"
import { Wrench } from "lucide-react"

import Container from "@/components/layout/Container"
import SectionBadge from "@/components/common/SectionBadge"
import { services } from "@/data/services"

function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-portfolio-background py-24 lg:py-28"
    >
      {/* Grid background */}
      <div
        aria-hidden="true"
        className="portfolio-grid pointer-events-none absolute inset-0 opacity-70"
      />

      {/* Fade grid edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-portfolio-background via-transparent to-portfolio-background"
      />

      {/* Central glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[230px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-portfolio-green/[0.035] blur-[140px]"
      />

      <Container className="relative z-10">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <SectionBadge icon={Wrench}>
            WHAT I OFFER
          </SectionBadge>

          <h2 className="mt-7 max-w-4xl text-4xl font-normal leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl lg:text-[56px]">
            Built for innovation. Designed for
            <span className="block">
              results.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-portfolio-muted">
            Comprehensive solutions to transform your ideas into
            reliable, modern and exceptional digital experiences.
          </p>
        </div>

        {/* Service cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon
            const featured = service.featured

            return (
              <motion.article
                key={service.title}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[1.6rem]
                  border
                  border-white/[0.08]
                  bg-[#101310]/95
                  p-7
                  transition-all
                  duration-300
                  hover:border-portfolio-green/25
                  ${
                    featured
                      ? "min-h-[280px] lg:col-span-2"
                      : "min-h-[240px]"
                  }
                `}
              >
                <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-portfolio-green/[0.07] blur-3xl" />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-portfolio-green/20 bg-portfolio-green/10 text-portfolio-green">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="mt-auto pt-10">
                    <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-portfolio-green">
                      {service.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-portfolio-muted">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Services