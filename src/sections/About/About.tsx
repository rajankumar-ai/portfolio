import { motion } from "framer-motion";
import Container from "../../components/ui/Container";
import AboutContent from "./AboutContent";
import AboutStats from "./AboutStats";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 py-24"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid gap-16 lg:grid-cols-2"
        >
          <AboutContent />
          <AboutStats />
        </motion.div>
      </Container>
    </section>
  );
}

export default About;