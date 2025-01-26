"use client";
import Header from "./components/Header";
import About from "./components/About";
import Serves from "./components/Serves";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Certifecation from "./components/Certifecation";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';
import Head from "next/head";
import Experince from "./components/Experince";
import ParticleSystem from "./components/ParticleSystem";

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
      <Head>
        <title>Mohamed Hassan</title>
      </Head>
      <Header/>
      <About/>
      <ParticleSystem />
      <Experince />
      <Skills/>
      <Certifecation />
      <Serves/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}
