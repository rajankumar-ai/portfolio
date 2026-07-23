import Navbar from "../components/layout/Navbar";
import Hero from "../sections/Hero/Hero";
import About from "../sections/About/About";
import Skills from "../sections/Skills/Skills";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
      </main>

      <Footer />
    </>
  );
}

export default Home;