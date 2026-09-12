import { useEffect, useMemo, useState } from "react"

import { motion } from "framer-motion"

import {
  ExternalLink,
  TrendingUp,
} from "lucide-react"

import { FaGithub } from "react-icons/fa"

import TechBadge from "@/components/projects/TechBadge"

function ProjectCard({ project }) {
  const fallbackImage = "/images/projects/dashboard.png"
  const images = useMemo(() => {
    const sources = project.images?.length
      ? project.images
      : Array.isArray(project.image)
        ? project.image
        : [project.image, project.image, project.image]

    return sources.filter(Boolean).slice(0, 3)
  }, [project.image, project.images])
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    setActiveImage(0)
  }, [project.id])

  useEffect(() => {
    if (images.length < 2) return undefined

    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % images.length)
    }, 5200)

    return () => window.clearInterval(interval)
  }, [images.length])

  useEffect(() => {
    const preloadedImages = images.map((source) => {
      const image = new window.Image()
      image.src = source
      return image
    })

    return () => {
      preloadedImages.forEach((image) => {
        image.src = ""
      })
    }
  }, [images])

  return (
    <article
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[1.65rem]
        border border-white/[0.09]
        bg-[#0d110f]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-portfolio-green/30
        hover:bg-[#121a13]
        hover:shadow-[0_20px_65px_rgba(0,0,0,0.38),0_0_0_1px_rgba(2,245,161,0.12),0_0_42px_rgba(2,245,161,0.09)]
      "
    >
      {/* Project Image */}
      <div
        className="
          relative
          aspect-[16/9]
          shrink-0
          overflow-hidden
          bg-[#111613]
        "
      >
        {/* Animated project images */}
        {images.map((image, index) => (
          <motion.img
            key={`${project.id}-${image}-${index}`}
            src={image || fallbackImage}
            alt={`${project.title} preview ${index + 1}`}
            initial={false}
            animate={{
              opacity: index === activeImage ? 0.9 : 0,
              scale: index === activeImage ? 1 : 1.012,
            }}
            transition={{ duration: 1.35, ease: "easeInOut" }}
            className="absolute inset-0 z-10 h-full w-full object-cover object-top will-change-[opacity,transform] transition-[filter] duration-700 group-hover:saturate-[1.12]"
            onError={(event) => {
              if (event.currentTarget.src.endsWith(fallbackImage)) {
                return
              }

              event.currentTarget.src = fallbackImage
            }}
          />
        ))}

        {/* Image Overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[11]
            bg-[linear-gradient(180deg,rgba(4,7,6,0.04)_0%,rgba(4,7,6,0.08)_42%,rgba(4,7,6,0.68)_100%)]
          "
        />

        {/* Category */}
        <span
          className="
            absolute
            left-4
            top-4
            z-20
            rounded-full
            border border-white/15
            bg-[#07100e]/75
            px-3
            py-1.5
            text-[11px]
            font-medium
            text-white
            backdrop-blur-md
            transition-colors
            duration-300
            group-hover:border-portfolio-green/35
            group-hover:text-portfolio-green
          "
        >
          {project.category}
        </span>

        {/* Actions */}
        <div className="absolute bottom-4 right-4 z-20 flex translate-y-1 items-center gap-2 opacity-90 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.title}`}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border border-white/15
                bg-[#07100e]/85
                text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-portfolio-green/30
                hover:text-portfolio-green
              "
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border border-white/15
            bg-[#07100e]/85
                text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-portfolio-green/30
                hover:text-portfolio-green
              "
            >
              <FaGithub className="h-4 w-4" />
            </a>
          )}
        </div>

        {images.length > 1 && (
          <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/45 px-2 py-1.5 backdrop-blur-md">
            {images.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`Show ${project.title} image ${index + 1}`}
                aria-current={activeImage === index ? "true" : undefined}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeImage === index
                    ? "w-5 bg-portfolio-green"
                    : "w-1.5 bg-white/45 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Project Information */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3
            className="
              text-xl
              font-semibold
              tracking-[-0.03em]
              text-white
              transition-colors
              duration-300
              group-hover:text-portfolio-green
            "
          >
            {project.title}
          </h3>

          <span className="mt-1 shrink-0 text-[11px] font-medium uppercase tracking-[0.16em] text-white/25">
            0{project.id}
          </span>
        </div>

        <p className="mt-3 line-clamp-2 min-h-[48px] text-sm leading-6 text-portfolio-muted/95">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex min-h-[58px] flex-wrap content-start gap-2">
          {project.technologies.map((technology) => (
            <TechBadge key={technology}>
              {technology}
            </TechBadge>
          ))}
        </div>

        {/* Project Highlight */}
        {project.highlight && (
          <div className="mt-auto border-t border-white/[0.08] pt-4">
            <div className="flex items-center gap-2 text-sm font-medium text-emerald-400">
              <TrendingUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />

              <span>{project.highlight}</span>
            </div>
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
