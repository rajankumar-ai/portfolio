import Navbar from "../components/layout/Navbar";
import Hero from "../sections/Hero/Hero";
import About from "../sections/About/About";
import Skills from "../sections/Skills/Skills";
import Projects from "../sections/Projects/Projects";
import Experience from "../sections/Experience/Experience";
import Services from "../sections/Services/Services";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
      </main>

      <Footer />
    </>
  );
}

export default Home;