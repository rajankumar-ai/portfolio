import Container from "../../components/ui/Container";
import SectionHeading from "../../components/ui/SectionHeading";
import MotionSection from "../../components/motion/MotionSection";
import { fadeUp } from "../../animations/fade";

import { SKILLS } from "../../data/skills";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 py-24"
    >
      <Container>
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Technologies I use to build fast, scalable and modern applications."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((skill, index) => (
            <MotionSection
              key={skill.name}
              variants={fadeUp}
              delay={index * 0.08}
            >
              <SkillCard
                title={skill.name}
                level={skill.level}
                Icon={skill.icon}
              />
            </MotionSection>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Skills;