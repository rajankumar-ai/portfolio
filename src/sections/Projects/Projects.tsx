import Container from "../../components/ui/Container";
import SectionHeading from "../../components/ui/SectionHeading";
import MotionSection from "../../components/motion/MotionSection";
import { fadeUp } from "../../animations/fade";

import { PROJECTS } from "../../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 py-24"
    >
      <Container>
        <SectionHeading
          title="Featured Projects"
          subtitle="Some of my recent work."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <MotionSection
              key={project.title}
              variants={fadeUp}
              delay={index * 0.1}
            >
              <ProjectCard {...project} />
            </MotionSection>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;