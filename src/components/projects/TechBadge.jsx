function TechBadge({ children }) {
  return (
    <span className="rounded-lg border border-portfolio-green/20 bg-portfolio-green/[0.08] px-3 py-1.5 text-xs font-medium text-portfolio-green">
      {children}
    </span>
  )
}

export default TechBadge