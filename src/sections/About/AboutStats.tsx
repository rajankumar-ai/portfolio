import { ABOUT } from "../../data/about";

function AboutStats() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {ABOUT.stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center"
        >
          <h3 className="text-4xl font-bold text-blue-500">
            {stat.number}
          </h3>

          <p className="mt-2 text-slate-400">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default AboutStats;