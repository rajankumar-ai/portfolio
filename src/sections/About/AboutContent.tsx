import { ABOUT } from "../../data/about";

function AboutContent() {
  return (
    <div>
      <p className="text-blue-500 font-semibold uppercase tracking-wider">
        {ABOUT.sectionTitle}
      </p>

      <h2 className="mt-4 text-4xl font-bold text-white">
        {ABOUT.heading}
      </h2>

      <p className="mt-6 leading-8 text-slate-400">
        {ABOUT.description}
      </p>

      <ul className="mt-8 space-y-3">
        {ABOUT.highlights.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 text-slate-300"
          >
            ✅ {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AboutContent;