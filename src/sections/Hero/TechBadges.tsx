import { motion } from "framer-motion";
import { TECH_STACK } from "../../config";

function TechBadges() {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {TECH_STACK.map((tech, index) => (
        <motion.span
          key={tech}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.1,
          }}
          className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300 transition hover:border-blue-500 hover:text-white"
        >
          {tech}
        </motion.span>
      ))}
    </div>
  );
}

export default TechBadges;