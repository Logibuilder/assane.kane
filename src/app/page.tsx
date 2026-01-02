import Menu from '../components/Menu';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="container-fluid p-0">
        <Menu />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}