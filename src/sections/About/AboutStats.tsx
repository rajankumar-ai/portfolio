import { ABOUT } from "../../data/about";
import MotionSection from "../../components/motion/MotionSection";
import { fadeUp } from "../../animations/fade";

function AboutStats() {
  return (
    <MotionSection
      variants={fadeUp}
      className="grid grid-cols-1 gap-6 sm:grid-cols-3"
    >
      {ABOUT.stats.map((stat) => (
        <div
          key={stat.label}
          className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10"
        >
          <h3 className="text-5xl font-extrabold text-blue-500 transition-colors duration-300 group-hover:text-blue-400">
            {stat.number}
          </h3>

          <p className="mt-3 text-base font-medium text-slate-300">
            {stat.label}
          </p>
        </div>
      ))}
    </MotionSection>
  );
}

export default AboutStats;