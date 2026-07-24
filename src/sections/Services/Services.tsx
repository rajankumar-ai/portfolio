import Container from "../../components/ui/Container";
import SectionHeading from "../../components/ui/SectionHeading";
import MotionSection from "../../components/motion/MotionSection";
import { fadeUp } from "../../animations/fade";

import { SERVICES } from "../../data/services";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section
      id="services"
      className="bg-slate-900 py-24"
    >
      <Container>
        <SectionHeading
          title="Services"
          subtitle="Professional software development services focused on building reliable, scalable, and user-friendly digital solutions."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
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
      </Container>
    </section>
  );
}

export default Services;