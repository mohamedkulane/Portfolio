import {
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react"
import { useState } from "react"

import Container from "@/components/layout/Container"
import SectionBadge from "@/components/common/SectionBadge"
import SectionHeading from "@/components/common/SectionHeading"
import { testimonials } from "@/data/testimonials"

function Testimonials() {
  const [current, setCurrent] = useState(0)

  if (testimonials.length === 0) {
    return null
  }

  const testimonial = testimonials[current]

  const next = () => {
    setCurrent(
      (current + 1) % testimonials.length
    )
  }

  const previous = () => {
    setCurrent(
      (current - 1 + testimonials.length) %
        testimonials.length
    )
  }

  return (
    <section className="relative overflow-hidden bg-portfolio-background">
      <Container className="section-padding">
        <div className="flex flex-col items-center">
          <SectionBadge icon={Quote}>
            TESTIMONIALS
          </SectionBadge>

          <SectionHeading
            className="mt-7"
            title={
              <>
                Trusted by forward-
                <span className="block">
                  thinking teams
                </span>
              </>
            }
            description="Real feedback from people and teams I have worked with."
          />
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-10 lg:grid-cols-[360px_1fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.04]">
            <div className="aspect-[4/4.5] bg-white/[0.03]" />

            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="absolute inset-0 h-full w-full object-cover"
              onError={(event) => {
                event.currentTarget.style.display =
                  "none"
              }}
            />

            {testimonial.metric && (
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/70 p-5 backdrop-blur-xl">
                <div className="text-2xl font-semibold text-portfolio-green">
                  {testimonial.metric}
                </div>

                <div className="mt-1 text-sm text-white">
                  {testimonial.metricLabel}
                </div>
              </div>
            )}
          </div>

          <div>
            <Quote className="h-10 w-10 text-portfolio-green" />

            <blockquote className="mt-6 text-xl leading-9 text-white sm:text-2xl sm:leading-10">
              “{testimonial.quote}”
            </blockquote>

            <div className="mt-8">
              <div className="font-semibold text-white">
                {testimonial.name}
              </div>

              <div className="mt-1 text-sm text-portfolio-muted">
                {testimonial.role}
              </div>
            </div>

            {testimonials.length > 1 && (
              <div className="mt-8 flex gap-3">
                <button
                  type="button"
                  onClick={previous}
                  aria-label="Previous testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Testimonials