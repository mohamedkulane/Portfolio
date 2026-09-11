import { cn } from "@/lib/utils"

function Container({
  children,
  className,
  as: Component = "div",
  ...props
}) {
  return (
    <Component
      {...props}
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
