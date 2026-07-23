import Section from "../../components/layout/Section";
import SectionHeading from "../../components/ui/SectionHeading";
import MotionSection from "../../components/motion/MotionSection";
import { fadeUp } from "../../animations/fade";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

function Contact() {
  return (
    <Section id="contact">
      <MotionSection variants={fadeUp}>
        <SectionHeading
          title="Contact Me"
          subtitle="Let's discuss your next project."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </MotionSection>
    </Section>
  );
}

export default Contact;