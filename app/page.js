import Header from "./components/Header";
import About from "./components/About";
import Serves from "./components/Serves";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Certifecation from "./components/Certifecation";
export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      <Header/>
      <About/>
      <Skills/>
      <Certifecation />
      <Serves/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}
