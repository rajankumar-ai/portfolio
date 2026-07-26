import Button from "../../components/ui/Button";
import MotionSection from "../../components/motion/MotionSection";
import { fadeLeft } from "../../animations/fade";
import { SITE_CONFIG } from "../../config";
import TechBadges from "./TechBadges";

function HeroContent() {
  return (
    <MotionSection variants={fadeLeft}>
      <p className="mb-4 text-lg font-medium text-blue-500">
        👋 {SITE_CONFIG.hero.greeting}
      </p>

      <h2 className="text-3xl font-semibold text-slate-300">
        {SITE_CONFIG.hero.name}
      </h2>

      <h1 className="mt-2 text-5xl font-extrabold leading-tight text-white lg:text-5xl">
        {SITE_CONFIG.hero.role}
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
        {SITE_CONFIG.hero.description}
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
  <Button
    href="https://pixelmedia.space"
    target="_blank"
    rel="noopener noreferrer"
  >
    🚀 Visit Pixel Media
  </Button>

  <Button
    variant="secondary"
    href="/profile.pdf"
    download
  >
    📄 Download
  </Button>

  <Button
    variant="secondary"
    onClick={() =>
      document
        .getElementById("contact")
        ?.scrollIntoView({
          behavior: "smooth",
        })
    }
  >
    💬 Reach Me
  </Button>
</div>

      <TechBadges />
    </MotionSection>
  );
}

export default HeroContent;