import type { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

import Container from "../ui/Container";
import { useActiveSectionContext } from "../../context/ActiveSectionContext";

type Props = {
  id?: string;
  children: ReactNode;
};

function Section({ id = "", children }: Props) {
  const { setActiveSection } =
    useActiveSectionContext();

  const { ref } = useInView({
    threshold: 0.4,
    onChange(inView) {
      if (inView && id) {
        setActiveSection(id);
      }
    },
  });

  return (
    <section
      ref={ref}
      id={id}
      className="bg-slate-950 py-24"
    >
      <Container>{children}</Container>
    </section>
  );
}

export default Section;