import Card from "../../components/ui/Card";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type Props = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  live: string;
};

function ProjectCard({
  title,
  description,
  technologies,
  image,
  github,
  live,
}: Props) {
  return (
    <Card className="group overflow-hidden p-0 transition-all duration-300 hover:-translate-y-2">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex gap-3">
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
          >
            <FaExternalLinkAlt size={14} />
            Live Demo
          </a>

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-2.5 font-medium text-white transition hover:border-blue-500 hover:text-blue-400"
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      </div>
    </Card>
  );
}

export default ProjectCard;