import { motion } from "framer-motion";
import Section from "../../components/layout/Section";
import SectionHeading from "../../components/ui/SectionHeading";
import { SERVICES } from "../../data/services";
import { fadeUp } from "../../constants/animation";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <Section id="services">
      <SectionHeading
        title="Services"
        subtitle="Solutions I provide for businesses and startups."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.title}
            {...fadeUp}
            transition={{
              ...fadeUp.transition,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >
            <ServiceCard
              title={service.title}
              description={service.description}
              Icon={service.icon}
            />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export default Services;