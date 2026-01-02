
import Menu from "./components/Menu";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
        <Menu />
        <About />
        <Skills/>
        <Projects />
        <Contact />
        <Footer />
    </>
  );
}
