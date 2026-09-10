import {
  zodResolver,
} from "@hookform/resolvers/zod"

import {
  Mail,
  MapPin,
  MessageSquare,
  Send,
} from "lucide-react"

import {
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa"

import {
  useForm,
} from "react-hook-form"

import toast from "react-hot-toast"

import Container from "@/components/layout/Container"
import SectionBadge from "@/components/common/SectionBadge"

import {
  contactSchema,
} from "@/lib/validations"

import {
  sendContactEmail,
} from "@/lib/email"

import {
  profile,
} from "@/data/profile"

const inputClass = `
  w-full
  rounded-xl
  border
  border-[#164047]
  bg-[#092126]
  px-4
  py-3.5
  text-sm
  text-white
  outline-none
  transition-all
  placeholder:text-[#647D78]
  focus:border-[#02F5A1]/50
  focus:ring-2
  focus:ring-[#02F5A1]/10
`

function Contact() {
  const {
    register,
    handleSubmit,
    reset,

    formState: {
      errors,
      isSubmitting,
    },
  } = useForm({
    resolver:
      zodResolver(contactSchema),

    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = async (data) => {
    try {
      await sendContactEmail(data)

      toast.success(
        "Message sent successfully!"
      )

      reset()
    } catch (error) {
      console.error(error)

      toast.error(
        "Unable to send message. Please try again."
      )
    }
  }

  return (
    <section
      id="contact"
      className="relative bg-[#071B1F] py-24 lg:py-28"
    >
      <Container>
        <div className="flex flex-col items-center text-center">
          <SectionBadge
            icon={MessageSquare}
          >
            GET IN TOUCH
          </SectionBadge>

          <h2 className="mt-7 text-4xl font-normal tracking-[-0.045em] sm:text-5xl lg:text-[56px]">
            Let&apos;s Work Together
          </h2>

          <p className="mt-4 max-w-2xl text-portfolio-muted">
            Have a project in mind?
            Let&apos;s discuss how we can bring
            your ideas to life.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-[1200px] gap-10 lg:grid-cols-[1fr_0.95fr]">
          <form
            onSubmit={
              handleSubmit(onSubmit)
            }
            className="rounded-[1.6rem] border border-[#164047] bg-[#0B252A] p-6 sm:p-8"
          >
            <label className="block text-sm">
              Name
            </label>

            <input
              {...register("name")}
              className={`${inputClass} mt-2`}
              placeholder="Your name"
            />

            {errors.name && (
              <p className="mt-2 text-xs text-red-400">
                {errors.name.message}
              </p>
            )}

            <label className="mt-5 block text-sm">
              Email
            </label>

            <input
              {...register("email")}
              type="email"
              className={`${inputClass} mt-2`}
              placeholder="your.email@example.com"
            />

            {errors.email && (
              <p className="mt-2 text-xs text-red-400">
                {errors.email.message}
              </p>
            )}

            <label className="mt-5 block text-sm">
              Subject
            </label>

            <input
              {...register("subject")}
              className={`${inputClass} mt-2`}
              placeholder="Project discussion"
            />

            {errors.subject && (
              <p className="mt-2 text-xs text-red-400">
                {
                  errors.subject
                    .message
                }
              </p>
            )}

            <label className="mt-5 block text-sm">
              Message
            </label>

            <textarea
              {...register("message")}
              rows="6"
              className={`${inputClass} mt-2 resize-none`}
              placeholder="Tell me about your project..."
            />

            {errors.message && (
              <p className="mt-2 text-xs text-red-400">
                {
                  errors.message
                    .message
                }
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#02F5A1] px-6 py-3.5 text-sm font-semibold text-[#071B1F] transition-all hover:brightness-110 disabled:opacity-50"
            >
              {isSubmitting
                ? "Sending..."
                : "Send Message"}

              <Send className="h-4 w-4" />
            </button>
          </form>

          <div>
            <h3 className="text-2xl font-semibold">
              Let&apos;s Connect
            </h3>

            <p className="mt-5 leading-8 text-portfolio-muted">
              I&apos;m open to freelance
              projects, software development
              opportunities, collaboration and
              remote roles.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-5 rounded-2xl border border-[#164047] bg-[#0B252A] p-5 hover:border-[#02F5A1]/40"
              >
                <Mail className="text-[#02F5A1]" />

                <div>
                  <div className="text-sm text-portfolio-muted">
                    Email
                  </div>

                  <div className="mt-1">
                    {profile.email}
                  </div>
                </div>
              </a>

              <a
                href={
                  profile.whatsappUrl
                }
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 rounded-2xl border border-[#164047] bg-[#0B252A] p-5 hover:border-[#02F5A1]/40"
              >
                <FaWhatsapp className="h-5 w-5 text-[#02F5A1]" />

                <div>
                  <div className="text-sm text-portfolio-muted">
                    WhatsApp
                  </div>

                  <div className="mt-1">
                    {
                      profile.whatsappDisplay
                    }
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-5 rounded-2xl border border-[#164047] bg-[#0B252A] p-5">
                <MapPin className="text-[#02F5A1]" />

                <div>
                  <div className="text-sm text-portfolio-muted">
                    Location
                  </div>

                  <div className="mt-1">
                    {profile.location}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-9">
              <div className="text-sm text-portfolio-muted">
                Connect with me
              </div>

              <div className="mt-4 flex gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#164047] bg-[#0B252A] hover:border-[#02F5A1]/40 hover:text-[#02F5A1]"
                >
                  <FaGithub />
                </a>

                <a
                  href={
                    profile.whatsappUrl
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#164047] bg-[#0B252A] hover:border-[#02F5A1]/40 hover:text-[#02F5A1]"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact