import Container from "../../components/ui/Container";
import MotionSection from "../../components/motion/MotionSection";
import { fadeUp } from "../../animations/fade";

import AboutContent from "./AboutContent";
import AboutStats from "./AboutStats";

function About() {
  return (
    <section
        id="about"
        className="scroll-mt-20 bg-slate-950 py-24"
        >
      <Container>
        <MotionSection
          variants={fadeUp}
          className="grid gap-16 lg:grid-cols-2"
        >
          <AboutContent />
          <AboutStats />
        </MotionSection>
      </Container>
    </section>
  );
}

export default About;