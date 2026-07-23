import { SITE_CONFIG } from "../../config";
import Button from "../../components/ui/Button";
import TechBadges from "./TechBadges";

function HeroContent() {
  return (
    <div>
      <p className="mb-4 text-lg font-medium text-blue-500">
        👋 {SITE_CONFIG.hero.greeting}
      </p>

      <h1 className="text-5xl font-extrabold leading-tight text-white lg:text-7xl">
        {SITE_CONFIG.hero.heading}
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
        {SITE_CONFIG.hero.description}
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <Button>Hire Me</Button>
        <Button variant="secondary">Download CV</Button>
      </div>

      <TechBadges />
    </div>
  );
}

export default HeroContent;