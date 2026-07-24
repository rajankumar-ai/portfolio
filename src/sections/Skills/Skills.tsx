import Container from "../../components/ui/Container";
import SectionHeading from "../../components/ui/SectionHeading";
import MotionSection from "../../components/motion/MotionSection";
import { fadeUp } from "../../animations/fade";

import { SKILLS } from "../../data/skills";
import SkillCategory from "./SkillCategory";

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 py-24"
    >
      <Container>
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Modern technologies, frameworks, databases, and development tools I use to build scalable software solutions."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((category, index) => (
            <MotionSection
              key={category.title}
              variants={fadeUp}
              delay={index * 0.08}
            >
              <SkillCategory
                title={category.title}
                skills={category.skills}
                Icon={category.icon}
              />
            </MotionSection>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Skills;