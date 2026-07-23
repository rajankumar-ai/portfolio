import { motion } from "framer-motion";
import Section from "../../components/layout/Section";
import SectionHeading from "../../components/ui/SectionHeading";
import { EXPERIENCES } from "../../data/experience";
import { fadeUp } from "../../constants/animation";
import TimelineItem from "./TimelineItem";

function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        title="Work Experience"
        subtitle="My professional journey and career growth."
      />

      <div className="relative mx-auto mt-16 max-w-4xl">
        <div className="absolute left-2 top-0 h-full w-0.5 bg-slate-700"></div>

        <div className="space-y-10">
          {EXPERIENCES.map((item, index) => (
            <motion.div
              key={`${item.company}-${item.duration}`}
              {...fadeUp}
              transition={{
                ...fadeUp.transition,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <TimelineItem item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Experience;