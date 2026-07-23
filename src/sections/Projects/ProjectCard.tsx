import Card from "../../components/ui/Card";

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
    <Card className="overflow-hidden p-0">
      <img
        src={image}
        alt={title}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-4 text-slate-400">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-800 px-3 py-1 text-sm text-blue-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex gap-4">
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
          >
            Live Demo
          </a>

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-700 px-4 py-2 text-white transition hover:border-blue-500"
          >
            GitHub
          </a>
        </div>
      </div>
    </Card>
  );
}

export default ProjectCard;