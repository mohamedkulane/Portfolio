import {
  ExternalLink,
  Image as ImageIcon,
  TrendingUp,
} from "lucide-react"

import { FaGithub } from "react-icons/fa"

import TechBadge from "@/components/projects/TechBadge"

function ProjectCard({ project }) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-[1.55rem]
        border border-white/[0.08]
        bg-[#0d100d]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-portfolio-green/20
        hover:shadow-[0_25px_70px_rgba(0,0,0,0.30)]
      "
    >
      {/* Project Image */}
      <div
        className="
          relative
          aspect-[16/10]
          overflow-hidden
          bg-gradient-to-br
          from-[#18191e]
          via-[#101116]
          to-[#17131d]
        "
      >
        {/* Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <ImageIcon className="h-14 w-14 text-white/[0.08]" />
        </div>

        {/* Real Project Image */}
        <img
          src={project.image}
          alt={project.title}
          className="
            relative
            z-10
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-[1.035]
          "
          onError={(event) => {
            event.currentTarget.style.display = "none"
          }}
        />

        {/* Image Overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[11]
            bg-gradient-to-t
            from-black/35
            via-transparent
            to-black/10
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
            bg-black/55
            px-3
            py-1.5
            text-[11px]
            font-medium
            text-white
            backdrop-blur-md
          "
        >
          {project.category}
        </span>

        {/* Actions */}
        <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
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
                bg-[#151515]/90
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
                bg-[#151515]/90
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
      </div>

      {/* Project Information */}
      <div className="p-6">
        <h3
          className="
            text-xl
            font-semibold
            tracking-[-0.025em]
            text-white
            transition-colors
            duration-300
            group-hover:text-portfolio-green
          "
        >
          {project.title}
        </h3>

        <p className="mt-3 line-clamp-2 min-h-[48px] text-sm leading-6 text-portfolio-muted">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <TechBadge key={technology}>
              {technology}
            </TechBadge>
          ))}
        </div>

        {/* Project Highlight */}
        {project.highlight && (
          <div className="mt-5 border-t border-white/[0.07] pt-4">
            <div className="flex items-center gap-2 text-sm font-medium text-emerald-400">
              <TrendingUp className="h-4 w-4" />

              <span>{project.highlight}</span>
            </div>
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectCard