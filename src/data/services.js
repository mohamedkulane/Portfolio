import {
  Code2,
  Database,
  Gauge,
  Layers3,
  MonitorSmartphone,
  Server,
} from "lucide-react"

export const services = [
  {
    title: "Full-Stack Development",
    description:
      "Complete web applications covering frontend interfaces, backend logic and relational databases.",
    icon: Layers3,
    featured: true,
  },
  {
    title: "Responsive Design",
    description:
      "Mobile-first interfaces designed to work smoothly across different screen sizes and devices.",
    icon: MonitorSmartphone,
    featured: true,
  },
  {
    title: "Frontend Development",
    description:
      "Modern user interfaces built with React, JavaScript, TypeScript and Tailwind CSS.",
    icon: Code2,
  },
  {
    title: "Backend & APIs",
    description:
      "Reliable application logic and REST APIs using Node.js and modern backend practices.",
    icon: Server,
  },
  {
    title: "Database Design",
    description:
      "Relational database schemas, data modelling and application integration using PostgreSQL.",
    icon: Database,
  },
  {
    title: "Performance Optimization",
    description:
      "Improving frontend loading, application responsiveness and overall user experience.",
    icon: Gauge,
  },
]