import { cn } from "@/lib/utils"

function Container({
  children,
  className,
  as: Component = "div",
}) {
  return (
    <Component
      className={cn(
        "portfolio-container",
        className
      )}
    >
      {children}
    </Component>
  )
}

export default Container