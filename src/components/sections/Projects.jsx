import { useMemo, useState } from "react"

import {
  AnimatePresence,
  motion,
} from "framer-motion"

import {
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

import Container from "@/components/layout/Container"
import SectionBadge from "@/components/common/SectionBadge"
import ProjectCard from "@/components/projects/ProjectCard"
import ProjectFilters from "@/components/projects/ProjectFilters"

import {
  projectFilters,
  projects,
} from "@/data/projects"

function Projects() {
  const [activeFilter, setActiveFilter] =
    useState("All")

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects
    }

    return projects.filter(
      (project) =>
        project.category === activeFilter
    )
  }, [activeFilter])

  const scrollProjects = (direction) => {
    const container =
      document.getElementById("project-grid")

    if (!container) return

    const amount =
      container.clientWidth * 0.8

    container.scrollBy({
      left:
        direction === "right"
          ? amount
          : -amount,
      behavior: "smooth",
    })
  }

  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        bg-portfolio-background
        py-24
        lg:py-28
      "
    >
      {/* =========================================
          BACKGROUND GLOWS
      ========================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[320px]
          top-[280px]
          h-[650px]
          w-[650px]
          rounded-full
          bg-portfolio-green/[0.035]
          blur-[150px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[320px]
          bottom-[-150px]
          h-[650px]
          w-[650px]
          rounded-full
          bg-portfolio-green/[0.03]
          blur-[150px]
        "
      />

      <Container className="relative z-10">

        {/* =========================================
            HEADING
        ========================================= */}

        <div className="flex flex-col items-center text-center">
          <SectionBadge icon={BriefcaseBusiness}>
            My Work
          </SectionBadge>

          <h2
            className="
              mt-6
              text-4xl
              font-normal
              tracking-[-0.045em]
              text-white
              sm:text-5xl
              lg:text-[54px]
            "
          >
            Featured Projects
          </h2>

          <p className="mt-4 max-w-xl text-base text-portfolio-muted">
            Showcasing selected projects and
            engineering work.
          </p>
        </div>

        {/* =========================================
            FILTERS
        ========================================= */}

        <div className="mt-10">
          <ProjectFilters
            filters={projectFilters}
            activeFilter={activeFilter}
            onChange={setActiveFilter}
          />
        </div>

        {/* =========================================
            PROJECTS WRAPPER
        ========================================= */}

        <div className="relative mx-auto mt-12 max-w-[1220px]">

          {/* Left carousel control */}
          {filteredProjects.length > 2 && (
            <button
              type="button"
              onClick={() =>
                scrollProjects("left")
              }
              aria-label="Previous projects"
              className="
                absolute
                -left-5
                top-[38%]
                z-30
                hidden
                h-12
                w-12
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border border-white/15
                bg-[#151815]/90
                text-white
                shadow-xl
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-portfolio-green/30
                hover:text-portfolio-green
                xl:flex
              "
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}

          {/* Project cards */}
          <motion.div
            id="project-grid"
            layout
            className="
              grid
              gap-5
              md:grid-cols-2
              xl:grid-cols-3
            "
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map(
                (project, index) => (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{
                      opacity: 0,
                      y: 20,
                      scale: 0.98,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: 10,
                      scale: 0.98,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.04,
                    }}
                  >
                    <ProjectCard
                      project={project}
                    />
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right carousel control */}
          {filteredProjects.length > 2 && (
            <button
              type="button"
              onClick={() =>
                scrollProjects("right")
              }
              aria-label="Next projects"
              className="
                absolute
                -right-5
                top-[38%]
                z-30
                hidden
                h-12
                w-12
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border border-white/15
                bg-[#151815]/90
                text-white
                shadow-xl
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-portfolio-green/30
                hover:text-portfolio-green
                xl:flex
              "
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div
            className="
              mx-auto
              mt-12
              max-w-xl
              rounded-2xl
              border border-white/[0.08]
              bg-white/[0.03]
              p-10
              text-center
              text-sm
              text-portfolio-muted
            "
          >
            Projects for this category will be
            added soon.
          </div>
        )}
      </Container>
    </section>
  )
}

export default Projects