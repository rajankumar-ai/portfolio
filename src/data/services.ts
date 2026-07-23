import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiGoogleads,
} from "react-icons/si";

import type { Service } from "../types";

export const SERVICES: Service[] = [
  {
    title: "Frontend Development",
    description:
      "Responsive, fast and modern web applications built with React, TypeScript and Tailwind CSS.",
    icon: SiReact,
  },
  {
    title: "Backend Development",
    description:
      "REST APIs, authentication, databases and scalable server-side applications.",
    icon: SiNodedotjs,
  },
  {
    title: "Automation & AI",
    description:
      "Python automation tools, AI integrations and workflow optimization for businesses.",
    icon: SiPython,
  },
  {
    title: "Digital Marketing",
    description:
      "Google Ads, SEO, landing pages and conversion-focused marketing solutions.",
    icon: SiGoogleads,
  },
];