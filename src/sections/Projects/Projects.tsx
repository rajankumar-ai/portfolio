import { motion } from "framer-motion";
import Container from "../../components/ui/Container";
import SectionHeading from "../../components/ui/SectionHeading";
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
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;