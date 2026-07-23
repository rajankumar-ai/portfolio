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
        title="Work Experience"
        subtitle="My professional journey and career growth."
      />

      <div className="relative mx-auto mt-16 max-w-4xl">
        <div className="absolute left-2 top-0 h-full w-0.5 bg-slate-700" />

        <div className="space-y-10">
          {EXPERIENCES.map((item, index) => (
            <MotionSection
              key={`${item.company}-${item.duration}`}
              variants={fadeUp}
              delay={index * 0.15}
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