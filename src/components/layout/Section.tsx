import type { ReactNode } from "react";
import Container from "../ui/Container";

type Props = {
  id?: string;
  children: ReactNode;
};

function Section({ id, children }: Props) {
  return (
    <section
      id={id}
      className="bg-slate-950 py-24"
    >
      <Container>
        {children}
      </Container>
    </section>
  );
}

export default Section;