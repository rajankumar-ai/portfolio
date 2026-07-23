import Container from "../../components/ui/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-20 bg-slate-950"
    >
      <Container>
        <div className="grid min-h-[90vh] items-center gap-16 lg:grid-cols-2">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>
    </section>
  );
}

export default Hero;