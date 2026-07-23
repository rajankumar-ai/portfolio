import { motion } from "framer-motion";
import { SITE_CONFIG } from "../../config";
import Button from "../../components/ui/Button";
import TechBadges from "./TechBadges";

function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <p className="mb-4 text-lg font-medium text-blue-500">
        👋 {SITE_CONFIG.hero.greeting}
      </p>

      <h2 className="text-3xl font-semibold text-slate-300">
        {SITE_CONFIG.hero.name}
      </h2>

      <h1 className="mt-2 text-5xl font-extrabold leading-tight text-white lg:text-7xl">
        {SITE_CONFIG.hero.role}
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
        {SITE_CONFIG.hero.description}
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <Button>Hire Me</Button>
        <Button variant="secondary">Download CV</Button>
      </div>

      <TechBadges />
    </motion.div>
  );
}

export default HeroContent;