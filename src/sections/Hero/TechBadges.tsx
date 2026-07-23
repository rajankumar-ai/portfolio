import { TECH_STACK } from "../../config";

function TechBadges() {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {TECH_STACK.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300 transition hover:border-blue-500 hover:text-white"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

export default TechBadges;