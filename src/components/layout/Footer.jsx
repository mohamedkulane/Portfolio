import {
  Code2,
  Mail,
  MapPin,
} from "lucide-react"

import {
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa"

import Container from "@/components/layout/Container"

import {
  navigation,
} from "@/data/navigation"

import {
  profile,
} from "@/data/profile"

function Footer() {
  return (
    <footer className="border-t border-[#164047] bg-[#071B1F]">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <a
              href="#home"
              className="flex items-center gap-2 text-2xl font-semibold text-[#02F5A1]"
            >
              <Code2 className="h-6 w-6" aria-hidden="true" />
              {profile.firstName}
            </a>

            <p className="mt-5 max-w-sm leading-7 text-portfolio-muted">
              Building reliable digital
              experiences with modern web
              technologies and thoughtful
              software engineering.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="mt-6 flex items-center gap-3 text-sm text-portfolio-muted hover:text-[#02F5A1]"
            >
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>

            <div className="mt-3 flex items-center gap-3 text-sm text-portfolio-muted">
              <MapPin className="h-4 w-4" />
              {profile.location}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Quick Links
            </h3>

            <nav className="mt-6 flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="w-fit text-sm text-portfolio-muted hover:text-[#02F5A1]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Connect With Me
            </h3>

            <p className="mt-5 text-portfolio-muted">
              Let&apos;s connect and create
              something useful together.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#164047] bg-[#0B252A] hover:text-[#02F5A1]"
              >
                <FaGithub />
              </a>

              <a
                href={
                  profile.whatsappUrl
                }
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#164047] bg-[#0B252A] hover:text-[#02F5A1]"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-[#164047] py-7 text-xs text-portfolio-subtle sm:flex-row sm:justify-between">
          <span>
            © 2025 Mohamed Ahmed. All rights
            reserved.
          </span>

          <span>
            Built with React &amp; Tailwind CSS
          </span>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
