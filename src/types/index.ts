import type { IconType } from "react-icons";


export interface Skill {
  name: string;
  level: string;
  icon: IconType;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  live: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
}



export interface Service {
  title: string;
  description: string;
  icon: IconType;
}