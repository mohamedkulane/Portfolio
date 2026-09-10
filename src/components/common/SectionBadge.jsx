import { cn } from "@/lib/utils"

function SectionBadge({
  children,
  icon: Icon,
  className,
}) {
  return (
    <div
      className={cn(
        "section-badge",
        className
      )}
    >
      {Icon && (
        <Icon className="h-4 w-4" />
      )}

      <span>{children}</span>
    </div>
  )
}

export default SectionBadge