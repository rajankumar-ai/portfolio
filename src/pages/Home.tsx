import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SEO from "../components/common/SEO";
import ScrollToTop from "../components/common/ScrollToTop";
import ScrollProgress from "../components/common/ScrollProgress";
import Hero from "../sections/Hero/Hero";
import About from "../sections/About/About";
import Skills from "../sections/Skills/Skills";
import Projects from "../sections/Projects/Projects";
import Experience from "../sections/Experience/Experience";
import Services from "../sections/Services/Services";
import Contact from "../sections/Contact/Contact";

function Home() {
  return (
    <>
      <SEO
      title="Rajan Kumar | AI-Assisted Full-Stack Developer"
      description="Portfolio of Rajan Kumar showcasing React, TypeScript, Node.js, AI, and modern web development projects."
      keywords="React Developer, TypeScript, Node.js, AI Developer, Full Stack Developer, Portfolio"
    />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Contact />
      </main>

      <Footer />

      <ScrollToTop />
    </>
  );
}

export default Home;