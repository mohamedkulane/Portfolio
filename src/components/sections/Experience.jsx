import { useRef } from "react"

import {
  motion,
  useInView,
} from "framer-motion"

import {
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  Layers3,
} from "lucide-react"

import Container from "@/components/layout/Container"
import SectionBadge from "@/components/common/SectionBadge"
import TechBadge from "@/components/projects/TechBadge"

const experienceEntries = [
  {
    year: "2025 — Present",
    title: "Freelance Full-Stack Web Developer",
    company: "Independent / Remote",
    description:
      "Building modern web applications and management systems from frontend to backend, including databases, authentication, APIs, responsive interfaces, and deployment.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
    ],
    icon: BriefcaseBusiness,
  },
  {
    year: "2024 — Present",
    title: "Software Engineering Student",
    company: "Hormuud University",
    description:
      "Building a strong foundation in software engineering while applying academic concepts through practical projects. Areas of focus include programming, databases, data structures & algorithms, system design, and software architecture.",
    tags: [
      "Software Engineering",
      "DSA",
      "Databases",
      "System Design",
    ],
    icon: GraduationCap,
  },
  {
    year: "2024 — Present",
    title: "Full-Stack Project Developer",
    company: "Personal & Academic Projects",
    description:
      "Designing and developing practical software systems that solve real-world workflow and management problems.",
    projects: [
      "Multi-Branch Real Estate Management System",
      "Clinic Management System",
      "Pharmacy Management System",
      "School Enrollment Platform",
    ],
    tags: [
      "Full Stack",
      "REST APIs",
      "RBAC",
      "PostgreSQL",
      "Architecture",
    ],
    icon: Layers3,
  },
]

function Experience() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.15,
  })

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative overflow-hidden bg-portfolio-background py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[280px] top-1/3 h-[540px] w-[540px] rounded-full bg-portfolio-green/[0.035] blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[280px] bottom-0 h-[540px] w-[540px] rounded-full bg-portfolio-green/[0.025] blur-[140px]"
      />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <SectionBadge icon={BriefcaseBusiness}>
            Career Journey
          </SectionBadge>

          <h2 className="mt-6 text-4xl font-normal leading-[1.05] tracking-[-0.055em] text-white sm:text-5xl lg:text-[58px]">
            <span className="text-portfolio-green">Experience that</span>{" "}
            <em className="font-normal text-white not-italic sm:italic">
              speaks volumes.
            </em>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-portfolio-muted">
            A growing journey in software engineering — combining academic
            foundations, real-world projects, and modern full-stack development.
          </p>
        </motion.div>

        <div className="relative mx-auto mt-12 max-w-[1180px] lg:mt-16">
          <motion.div
            aria-hidden="true"
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-5 left-5 top-5 w-px origin-top bg-portfolio-green/25 lg:bottom-0 lg:left-1/2 lg:top-0"
          />

          <div className="space-y-8 lg:space-y-0">
            {experienceEntries.map((entry, index) => {
              const Icon = entry.icon
              const isLeft = index % 2 === 0

              return (
                <div
                  key={entry.title}
                  className="relative pl-12 lg:min-h-[248px] lg:pl-0"
                >
                  <motion.div
                    aria-hidden="true"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.12,
                      ease: "easeOut",
                    }}
                    className="absolute left-[15px] top-8 z-20 flex h-3 w-3 items-center justify-center rounded-full bg-portfolio-green shadow-[0_0_0_5px_rgba(2,245,161,0.10),0_0_24px_rgba(2,245,161,0.42)] lg:left-1/2 lg:top-9 lg:-translate-x-1/2"
                  />

                  <motion.article
                    initial={{
                      opacity: 0,
                      x: isLeft ? -28 : 28,
                      y: 14,
                    }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`group relative rounded-[1.45rem] border border-white/[0.09] bg-[#10191B]/95 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-1 hover:border-portfolio-green/35 hover:bg-[#111F1B] hover:shadow-[0_24px_65px_rgba(0,0,0,0.28),0_0_36px_rgba(2,245,161,0.08)] lg:w-[calc(50%-2.5rem)] lg:p-7 ${
                      isLeft ? "lg:mr-auto" : "lg:ml-auto"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-portfolio-green/20 bg-portfolio-green/[0.08] text-portfolio-green transition-all duration-500 group-hover:border-portfolio-green/40 group-hover:bg-portfolio-green/[0.14]">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div className="min-w-0">
                          <p className="text-xs font-medium uppercase tracking-[0.14em] text-portfolio-green">
                            {entry.year}
                          </p>
                          <p className="mt-1 text-xs text-portfolio-subtle">
                            {entry.company}
                          </p>
                        </div>
                      </div>

                      <span className="text-sm font-medium text-white/20">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-white transition-colors duration-300 group-hover:text-portfolio-green sm:text-2xl">
                      {entry.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-portfolio-muted">
                      {entry.description}
                    </p>

                    {entry.projects && (
                      <div className="mt-5 border-t border-white/[0.08] pt-4">
                        <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-white/45">
                          Selected projects
                        </p>
                        <div className="grid gap-2 sm:grid-cols-2">
                          {entry.projects.map((project) => (
                            <div
                              key={project}
                              className="flex items-start gap-2 text-xs leading-5 text-portfolio-muted"
                            >
                              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-portfolio-green" />
                              <span>{project}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-5 flex flex-wrap gap-2">
                      {entry.tags.map((tag) => (
                        <TechBadge key={tag}>{tag}</TechBadge>
                      ))}
                    </div>
                  </motion.article>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Experience
