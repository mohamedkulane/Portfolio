import { motion } from "framer-motion"

import Container from "@/components/layout/Container"
import { technologies } from "@/data/technologies"

function TechStack() {
  return (
    <section className="relative overflow-hidden bg-portfolio-background py-20 md:py-24">
      {/* Decorative Green Circle */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[270px]
          -top-[180px]
          h-[620px]
          w-[620px]
          rounded-full
          border
          border-portfolio-green/[0.05]
          bg-portfolio-green/[0.035]
          shadow-[0_0_140px_rgba(124,241,90,0.06)]
        "
      />

      <Container className="relative z-10">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-normal tracking-[-0.035em] text-white md:text-4xl">
            Tech Stack &amp; Expertise
          </h2>

          <p className="mt-3 text-sm text-portfolio-muted md:text-base">
            Technologies I work with to build modern digital products
          </p>
        </div>

        {/* Technologies */}
        <div className="mx-auto mt-11 grid max-w-[1040px] grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {technologies.map((technology, index) => {
            const Icon = technology.icon

            return (
              <motion.div
                key={technology.name}
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.04,
                }}
                className="
                  group
                  flex
                  min-h-[132px]
                  flex-col
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-[#111311]
                  px-4
                  py-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-portfolio-green/40
                  hover:bg-[#1a2418]
                  hover:shadow-[0_0_35px_rgba(124,241,90,0.10)]
                "
              >
                <Icon
                  className="
                    h-8
                    w-8
                    text-portfolio-green
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                <span className="mt-5 text-center text-sm font-medium text-[#c7cbc6]">
                  {technology.name}
                </span>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default TechStack