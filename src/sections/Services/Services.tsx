import Section from "../../components/layout/Section";
import SectionHeading from "../../components/ui/SectionHeading";
import MotionSection from "../../components/motion/MotionSection";

import { fadeUp } from "../../animations/fade";
import { SERVICES } from "../../data/services";

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
          <MotionSection
            key={service.title}
            variants={fadeUp}
            delay={index * 0.1}
          >
            <ServiceCard
              title={service.title}
              description={service.description}
              Icon={service.icon}
            />
          </MotionSection>
        ))}
      </div>
    </Section>
  );
}

export default Services;