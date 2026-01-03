import { Header } from "@/components/layout/Header/Header";
import { Hero } from "@/components/sections/Hero/Hero";
import {Projects}  from "@/components/sections/Projects/Projects";
import {Skills}  from "@/components/sections/Skills/Skills";
import {Contact}  from "@/components/sections/Contact/Contact";
import { About } from "@/components/sections/About/About";
// Importe tes autres sections ici une fois créées (Skills, Contact)

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <About /> 
        <Hero /> 
        <Skills /> 
        <Projects /> 
        <Contact /> 
      </main>
      {/* <Footer />  */}
    </>
  );
}