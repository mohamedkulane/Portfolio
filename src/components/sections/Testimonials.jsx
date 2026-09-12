import { useState } from "react"

import {
  AnimatePresence,
  motion,
} from "framer-motion"

import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
} from "lucide-react"

import Container from "@/components/layout/Container"
import SectionBadge from "@/components/common/SectionBadge"
import { testimonials } from "@/data/testimonials"

function Testimonials() {
  const [current, setCurrent] = useState(0)

  if (testimonials.length === 0) {
    return null
  }

  const testimonial = testimonials[current]

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const previous = () => {
    setCurrent(
      (current - 1 + testimonials.length) % testimonials.length
    )
  }

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-portfolio-background py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-portfolio-green/[0.055] blur-[150px]"
      />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          <SectionBadge icon={Quote}>Testimonials</SectionBadge>

          <h2 className="mt-6 max-w-3xl text-4xl font-normal leading-[1.08] tracking-[-0.055em] text-white sm:text-5xl lg:text-[58px]">
            Trusted by forward-
            <span className="block text-portfolio-green">
              thinking teams
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-portfolio-muted">
            Real feedback from people and teams I have worked with.
          </p>
        </motion.div>

        <div className="relative mx-auto mt-12 max-w-[1120px] lg:mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: 26 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -26 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid items-center gap-10 lg:grid-cols-[minmax(280px,360px)_1fr] lg:gap-16"
            >
              <div className="group relative overflow-hidden rounded-[1.7rem] border border-white/[0.10] bg-[#101611] shadow-[0_24px_80px_rgba(0,0,0,0.32)] transition-all duration-500 hover:-translate-y-1 hover:border-portfolio-green/35 hover:shadow-[0_26px_70px_rgba(0,0,0,0.32),0_0_40px_rgba(2,245,161,0.08)]">
                <div className="relative aspect-[4/4.5] overflow-hidden">
                  {testimonial.image && !testimonial.placeholder ? (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                    />
                  ) : (
                    <div className="relative flex h-full flex-col items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_30%,rgba(2,245,161,0.18),transparent_42%),linear-gradient(145deg,#16231b,#080c0a)] p-8 text-center">
                      <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-portfolio-green/[0.10] blur-3xl" />
                      <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-portfolio-green/35 bg-portfolio-green/[0.12] text-3xl font-semibold text-portfolio-green shadow-[0_0_45px_rgba(2,245,161,0.14)]">
                        {testimonial.name
                          .split(" ")
                          .map((part) => part[0])
                          .join("")}
                      </div>
                      <Quote className="relative mt-6 h-10 w-10 text-portfolio-green/70" />
                      <p className="relative mt-3 max-w-[210px] text-sm leading-6 text-portfolio-muted">
                        Client success story
                      </p>
                    </div>
                  )}

                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(4,7,6,0)_35%,rgba(4,7,6,0.72)_100%)]" />

                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/[0.12] bg-black/65 p-4 backdrop-blur-xl">
                    <div className="text-2xl font-semibold text-portfolio-green">
                      {testimonial.metric || "Client story"}
                    </div>
                    <div className="mt-1 text-sm font-medium text-white/90">
                      {testimonial.metricTitle || testimonial.metricLabel || "Real feedback from a real collaboration"}
                    </div>

                    {testimonial.metricTitle && testimonial.metricLabel && (
                      <div className="mt-1 text-xs leading-5 text-white/65">
                        {testimonial.metricLabel}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <Quote className="h-10 w-10 text-portfolio-green/80" />

                <blockquote className="mt-6 text-xl leading-9 text-white sm:text-2xl sm:leading-10 lg:text-[28px] lg:leading-[1.45]">
                  “{testimonial.quote}”
                </blockquote>

                <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="mt-1 text-sm text-portfolio-muted">
                      {testimonial.role}
                    </div>
                  </div>

                  {testimonial.rating && (
                    <div
                      className="flex items-center gap-1 text-portfolio-green"
                      aria-label={`${testimonial.rating} out of 5 stars`}
                    >
                      {Array.from({ length: testimonial.rating }).map((_, index) => (
                        <Star key={index} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {testimonials.length > 1 && (
            <div className="mt-9 flex items-center justify-between gap-4 lg:pl-[424px]">
              <div className="flex items-center gap-2">
                {testimonials.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCurrent(index)}
                    aria-label={`Show testimonial ${index + 1}`}
                    aria-current={current === index ? "true" : undefined}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      current === index
                        ? "w-8 bg-portfolio-green shadow-[0_0_16px_rgba(2,245,161,0.42)]"
                        : "w-2 bg-white/20 hover:bg-white/45"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={previous}
                  aria-label="Previous testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-all duration-300 hover:border-portfolio-green/35 hover:bg-portfolio-green/[0.10] hover:text-portfolio-green"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-all duration-300 hover:border-portfolio-green/35 hover:bg-portfolio-green/[0.10] hover:text-portfolio-green"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}

export default Testimonials
