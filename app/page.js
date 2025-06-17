'use client';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import About from './components/About';
import Serves from './components/Serves';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certification from './components/Certification';
import Experince from './components/Experince';
import ParticleSystem from './components/ParticleSystem';
import Cookes from './components/Cookes';
import CurentSkills from './components/CurentSkills';
import IntroMask from './components/Incoming';
import Navbar from './components/Navbar';

export default function Home() {
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const PageContent = (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <Header />
      <Cookes />
      <About />
      <ParticleSystem />
      <CurentSkills />
      <Experince />
      <Certification />
      <Serves />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );

  return (
    <>
      {!introDone ? (
        <IntroMask onFinish={() => setIntroDone(true)}>{PageContent}</IntroMask>
      ) : (
        PageContent
      )}
    </>
  );
}
