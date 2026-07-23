import { motion } from "framer-motion";
import Container from "../../components/ui/Container";
import SectionHeading from "../../components/ui/SectionHeading";
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
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
            >
              <SkillCard
                title={skill.name}
                level={skill.level}
                Icon={skill.icon}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Skills;