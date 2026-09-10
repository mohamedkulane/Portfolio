import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiGit,
  SiGithub,
  SiDocker,
  SiVite,
} from "react-icons/si"

import {
  MonitorSmartphone,
  Globe2,
} from "lucide-react"

export const skillGroups = [
  {
    title: "Frontend Development",
    skills: [
      {
        name: "React.js",
        subtitle: "Core frontend technology",
        level: "Core",
        progress: 94,
        icon: SiReact,
      },
      {
        name: "JavaScript",
        subtitle: "Modern ES6+ development",
        level: "Core",
        progress: 92,
        icon: SiJavascript,
      },
      {
        name: "TypeScript",
        subtitle: "Typed application development",
        level: "Strong",
        progress: 84,
        icon: SiTypescript,
      },
      {
        name: "Next.js",
        subtitle: "React framework",
        level: "Strong",
        progress: 82,
        icon: SiNextdotjs,
      },
      {
        name: "Tailwind CSS",
        subtitle: "Modern UI development",
        level: "Core",
        progress: 93,
        icon: SiTailwindcss,
      },
    ],
  },

  {
    title: "Backend & APIs",
    skills: [
      {
        name: "Node.js",
        subtitle: "Backend development",
        level: "Strong",
        progress: 84,
        icon: SiNodedotjs,
      },
      {
        name: "REST APIs",
        subtitle: "API design & integration",
        level: "Strong",
        progress: 87,
        icon: Globe2,
      },
      {
        name: "Express.js",
        subtitle: "Server-side applications",
        level: "Strong",
        progress: 82,
        icon: SiExpress,
      },
      {
        name: "PostgreSQL",
        subtitle: "Relational databases",
        level: "Strong",
        progress: 84,
        icon: SiPostgresql,
      },
      {
        name: "Prisma ORM",
        subtitle: "Database access layer",
        level: "Strong",
        progress: 85,
        icon: SiPrisma,
      },
    ],
  },

  {
    title: "Tools & Others",
    skills: [
      {
        name: "Git & GitHub",
        subtitle: "Version control",
        level: "Strong",
        progress: 90,
        icon: SiGithub,
      },
      {
        name: "Responsive Design",
        subtitle: "Mobile-first interfaces",
        level: "Core",
        progress: 93,
        icon: MonitorSmartphone,
      },
      {
        name: "Docker",
        subtitle: "Container fundamentals",
        level: "Working",
        progress: 70,
        icon: SiDocker,
      },
      {
        name: "Vite",
        subtitle: "Frontend tooling",
        level: "Strong",
        progress: 88,
        icon: SiVite,
      },
      {
        name: "Git",
        subtitle: "Source control workflow",
        level: "Strong",
        progress: 90,
        icon: SiGit,
      },
    ],
  },
]