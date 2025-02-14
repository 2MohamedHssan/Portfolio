"use client";
import Header from "./components/Header";
import About from "./components/About";
import Serves from "./components/Serves";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Certification from "./components/Certification";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';
import Experince from "./components/Experince";
import ParticleSystem from "./components/ParticleSystem";
import Cookes from "./components/Cookes";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true, 
    });
  }, []);
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      <Header/>
      <Cookes />
      <About/>
      <ParticleSystem />
      <Experince />
      <Skills/>
      <Certification />
      <Serves/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}
