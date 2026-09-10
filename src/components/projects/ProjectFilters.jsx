import {
  Code2,
  Globe2,
  Layers3,
  LayoutGrid,
} from "lucide-react"

const filterIcons = {
  All: LayoutGrid,
  "Web Apps": Globe2,
  Frontend: Code2,
  "Full Stack": Layers3,
}

function ProjectFilters({
  filters,
  activeFilter,
  onChange,
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {filters.map((filter) => {
        const active = filter === activeFilter
        const Icon = filterIcons[filter] || LayoutGrid

        return (
          <button
            key={filter}
            type="button"
            onClick={() => onChange(filter)}
            className={`
              relative
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              px-5
              py-2.5
              text-sm
              font-medium
              transition-all
              duration-300

              ${
                active
                  ? `
                    border-portfolio-green/25
                    bg-[#1a2a17]
                    text-portfolio-green
                    shadow-[0_0_35px_rgba(124,241,90,0.20)]
                  `
                  : `
                    border-white/[0.09]
                    bg-[#111311]
                    text-portfolio-muted
                    hover:border-white/15
                    hover:bg-white/[0.05]
                    hover:text-white
                  `
              }
            `}
          >
            <Icon className="h-4 w-4" />

            {filter}
          </button>
        )
      })}
    </div>
  )
}

export default ProjectFilters