import { useEffect, useMemo, useRef, useState } from "react"

import {
  AnimatePresence,
  motion,
  useInView,
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
  const [currentSlide, setCurrentSlide] = useState(0)
  const carouselRef = useRef(null)
  const sectionRef = useRef(null)
  const headingInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  })

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects
    }

    return projects.filter(
      (project) =>
        project.category === activeFilter
    )
  }, [activeFilter])

  useEffect(() => {
    carouselRef.current?.scrollTo({
      left: 0,
      behavior: "smooth",
    })
  }, [activeFilter])

  const handleFilterChange = (filter) => {
    setCurrentSlide(0)
    setActiveFilter(filter)
  }

  const scrollToSlide = (index) => {
    const container = carouselRef.current
    const card = container?.querySelector(
      `[data-project-index="${index}"]`
    )

    if (!card) return

    container.scrollTo({
      left: card.offsetLeft,
      behavior: "smooth",
    })
    setCurrentSlide(index)
  }

  const scrollProjects = (direction) => {
    const nextIndex =
      direction === "right"
        ? Math.min(
            currentSlide + 1,
            filteredProjects.length - 1
          )
        : Math.max(currentSlide - 1, 0)

    scrollToSlide(nextIndex)
  }

  const handleCarouselScroll = () => {
    const container = carouselRef.current
    if (!container) return

    const cards = [
      ...container.querySelectorAll(
        "[data-project-index]"
      ),
    ]
    const closestIndex = cards.reduce(
      (closest, card, index) => {
        const distance = Math.abs(
          card.offsetLeft - container.scrollLeft
        )
        return distance < closest.distance
          ? { distance, index }
          : closest
      },
      { distance: Number.POSITIVE_INFINITY, index: 0 }
    )

    setCurrentSlide(closestIndex.index)
  }

  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        bg-portfolio-background
        py-16
        sm:py-20
        lg:py-24
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

      <Container
        ref={sectionRef}
        className="relative z-10"
      >

        {/* =========================================
            HEADING
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={headingInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          <SectionBadge icon={BriefcaseBusiness}>
            My Work
          </SectionBadge>

          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:gap-5">
            <h2
              className="
                text-4xl
                font-normal
                tracking-[-0.05em]
                text-white
                sm:text-5xl
                lg:text-[54px]
              "
            >
              Featured Projects
            </h2>

            <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-xs font-medium text-portfolio-muted">
              {projects.length} selected builds
            </span>
          </div>

          <p className="mt-4 max-w-xl text-base leading-7 text-portfolio-muted">
            A selection of products, platforms and
            engineering systems built with care.
          </p>
        </motion.div>

        {/* =========================================
            FILTERS
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={headingInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
          className="mt-10"
        >
          <ProjectFilters
            filters={projectFilters}
            activeFilter={activeFilter}
            onChange={handleFilterChange}
          />
        </motion.div>

        {/* =========================================
            PROJECTS WRAPPER
        ========================================= */}

        <div className="relative mx-auto mt-10 max-w-[1280px]">

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
                bg-[#111611]/95
                text-white
                shadow-xl
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-portfolio-green/45
                hover:bg-portfolio-green/[0.08]
                hover:text-portfolio-green
                xl:flex
              "
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}

          {/* Project cards */}
          <motion.div
            ref={carouselRef}
            id="project-grid"
            layout
            onScroll={handleCarouselScroll}
            className={`project-slider flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-3 ${
              filteredProjects.length === 1 ? "justify-center" : ""
            }`}
            aria-label="Featured projects slider"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map(
                (project, index) => (
                  <motion.div
                    layout
                    key={project.id}
                    data-project-index={index}
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
                      duration: 0.45,
                      delay: index * 0.06,
                      ease: "easeOut",
                    }}
                    className={`h-full flex-none snap-start ${
                      filteredProjects.length === 1
                        ? "w-[88%] md:w-[520px] xl:w-[420px]"
                        : "w-[88%] md:w-[calc((100%_-_1.25rem)/2)] xl:w-[calc((100%_-_2.5rem)/3)]"
                    }`}
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
                bg-[#111611]/95
                text-white
                shadow-xl
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-portfolio-green/45
                hover:bg-portfolio-green/[0.08]
                hover:text-portfolio-green
                xl:flex
              "
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}

          {filteredProjects.length > 1 && (
            <div className="mt-4 flex items-center justify-center gap-2">
              {filteredProjects.map((project, index) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => scrollToSlide(index)}
                  aria-label={`Show project ${index + 1}: ${project.title}`}
                  aria-current={currentSlide === index ? "true" : undefined}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    currentSlide === index
                      ? "w-8 bg-portfolio-green shadow-[0_0_16px_rgba(2,245,161,0.45)]"
                      : "w-2 bg-white/20 hover:bg-white/45"
                  }`}
                />
              ))}
            </div>
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
