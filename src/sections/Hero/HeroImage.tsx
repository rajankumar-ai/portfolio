import profileImage from "../../assets/images/profile.webp";

import MotionSection from "../../components/motion/MotionSection";
import { fadeRight } from "../../animations/fade";

function HeroImage() {
  return (
    <MotionSection
      variants={fadeRight}
      delay={0.2}
      className="flex justify-center"
    >
      <div className="relative h-96 w-96">
        {/* Glow */}

        <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl" />

        {/* Border */}

        <div className="relative overflow-hidden rounded-full border-4 border-blue-500 shadow-2xl">

          <img
            src={profileImage}
            alt="Rajan Kumar"
            className="h-96 w-96 object-cover"
          />

        </div>
      </div>
    </MotionSection>
  );
}

export default HeroImage;