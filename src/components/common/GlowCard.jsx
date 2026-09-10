import { cn } from "@/lib/utils"

function GlowCard({
  children,
  className,
}) {
  return (
    <div
      className={cn(
        "portfolio-card portfolio-card-hover",
        className
      )}
    >
      {children}
    </div>
  )
}

export default GlowCard