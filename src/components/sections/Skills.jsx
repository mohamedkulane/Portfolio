import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

import Container from "@/components/layout/Container"
import SectionBadge from "@/components/common/SectionBadge"
import { skillGroups } from "@/data/skills"

function getLevelStyles(level) {
  if (level === "Core") {
    return {
      badge:
        "border-portfolio-green/25 bg-portfolio-green/10 text-portfolio-green",
      bar: "from-[#365832] to-[#7cf15a]",
    }
  }

  if (level === "Strong") {
    return {
      badge:
        "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",
      bar: "from-[#355a32] to-[#7cf15a]",
    }
  }

  return {
    badge:
      "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
    bar: "from-[#2e5030] to-[#6ad94c]",
  }
}

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-portfolio-background py-24 lg:py-28"
    >
      {/* Background Glow Left */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[300px]
          top-[200px]
          h-[650px]
          w-[650px]
          rounded-full
          bg-portfolio-green/[0.035]
          blur-[140px]
        "
      />

      {/* Background Glow Right */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[300px]
          bottom-[-100px]
          h-[650px]
          w-[650px]
          rounded-full
          bg-portfolio-green/[0.03]
          blur-[150px]
        "
      />

      <Container className="relative z-10">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <SectionBadge icon={Sparkles}>
            My Expertise
          </SectionBadge>

          <h2 className="mt-6 text-4xl font-normal tracking-[-0.045em] text-white sm:text-5xl">
            Skills &amp; Technologies
          </h2>

          <p className="mt-4 max-w-2xl text-base text-portfolio-muted">
            A comprehensive overview of my technical skills and
            technologies I use to build modern applications.
          </p>
        </div>

        {/* Skill Columns */}
        <div className="mx-auto mt-14 grid max-w-[1180px] items-start gap-6 lg:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <motion.article
              key={group.title}
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.45,
                delay: groupIndex * 0.08,
              }}
              className="
                overflow-hidden
                rounded-[1.45rem]
                border border-white/[0.08]
                bg-[#111511]
                p-6
                shadow-[0_20px_50px_rgba(0,0,0,0.18)]
              "
            >
              {/* Card Header */}
              <div className="relative border-b border-white/[0.07] pb-5 pl-4">
                <span className="absolute bottom-5 left-0 top-0 w-[3px] rounded-full bg-gradient-to-b from-portfolio-green/25 to-portfolio-green" />

                <h3 className="text-xl font-medium tracking-[-0.025em] text-white">
                  {group.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="mt-5 space-y-5">
                {group.skills.map((skill) => {
                  const Icon = skill.icon
                  const levelStyles =
                    getLevelStyles(skill.level)

                  return (
                    <div key={skill.name}>
                      {/* Skill information */}
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex min-w-0 items-center gap-3">
                          <div
                            className="
                              flex h-9 w-9
                              shrink-0
                              items-center
                              justify-center
                              rounded-lg
                              bg-white/[0.035]
                              text-portfolio-green
                            "
                          >
                            <Icon className="h-4 w-4" />
                          </div>

                          <div className="min-w-0">
                            <div className="truncate text-sm font-medium text-[#e4e7e3]">
                              {skill.name}
                            </div>

                            <div className="mt-0.5 truncate text-[11px] text-portfolio-subtle">
                              {skill.subtitle}
                            </div>
                          </div>
                        </div>

                        <span
                          className={`
                            shrink-0
                            rounded-full
                            border
                            px-2.5 py-1
                            text-[10px]
                            font-medium
                            ${levelStyles.badge}
                          `}
                        >
                          {skill.level}
                        </span>
                      </div>

                      {/* Progress */}
                      <div className="mt-3 h-[5px] overflow-hidden rounded-full bg-white/[0.045]">
                        <motion.div
                          initial={{
                            width: 0,
                          }}
                          whileInView={{
                            width: `${skill.progress}%`,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            duration: 0.8,
                            ease: "easeOut",
                          }}
                          className={`
                            h-full
                            rounded-full
                            bg-gradient-to-r
                            ${levelStyles.bar}
                          `}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Skills