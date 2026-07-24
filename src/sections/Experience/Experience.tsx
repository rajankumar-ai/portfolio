import Section from "../../components/layout/Section";
import SectionHeading from "../../components/ui/SectionHeading";
import MotionSection from "../../components/motion/MotionSection";
import { fadeUp } from "../../animations/fade";

import { EXPERIENCES } from "../../data/experience";
import TimelineItem from "./TimelineItem";

function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        title="Professional Experience"
        subtitle="A journey of software development, technical consulting, and delivering technology solutions."
      />

      <div className="relative mx-auto mt-16 max-w-5xl">
        <div className="absolute left-2 top-0 h-full w-0.5 bg-slate-700" />

        <div className="space-y-10">
          {EXPERIENCES.map((item, index) => (
            <MotionSection
              key={`${item.company}-${item.duration}`}
              variants={fadeUp}
              delay={index * 0.12}
            >
              <TimelineItem item={item} />
            </MotionSection>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Experience;