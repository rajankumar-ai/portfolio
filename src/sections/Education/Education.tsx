import Container from "../../components/ui/Container";
import SectionHeading from "../../components/ui/SectionHeading";
import MotionSection from "../../components/motion/MotionSection";
import { fadeUp } from "../../animations/fade";

import { EDUCATION } from "../../data/education";
import EducationCard from "./EducationCard";

function Education() {
  return (
    <section
      id="education"
      className="bg-slate-950 py-24"
    >
      <Container>
        <SectionHeading
          title="Education"
          subtitle="Academic background that complements my technical expertise and professional experience."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {EDUCATION.map((item, index) => (
            <MotionSection
              key={item.degree}
              variants={fadeUp}
              delay={index * 0.1}
            >
              <EducationCard {...item} />
            </MotionSection>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Education;