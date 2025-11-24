"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import Header from './components/Header';
import About from "./components/About";
import Serves from "./components/Serves";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certification from "./components/Certification";
import Experince from "./components/Experince";
import ParticleSystem from "./components/ParticleSystem";
import Cookes from "./components/Cookes";
import CurentSkills from "./components/CurentSkills";
import IntroMask from "./components/Incoming";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);
  const [cycleStage, setCycleStage] = useState(0);
  const texts = ["Web Developer", "Problem Solver", "🚀 Let’s Go!"];
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setCycleStage(index);
      if (index === texts.length) {
        clearInterval(interval);
      }
      index++;
    }, 100);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    const timeout = setTimeout(() => {
      setIntroDone(true);
    }, 1000);

    return () => clearTimeout(timeout);
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
        <>
          <div className="w-screen h-screen flex justify-center items-center bg-black overflow-hidden">
            <div className=" w-full flex flex-col justify-center items-center py-10">
              <h1 className="text-3xl font-bold py-2 text-white text-flicker-in-glow md:text-5xl lg:text-7xl">
                MOHAMED HASSAN
              </h1>
              <div className="animate-pulse w-96 h-96 relative rounded-full overflow-hidden bg-gray-700 shadow-lg border-4 border-teal-400">
                <img
                  src="/mohamed.WebP"
                  alt="Mohamed Hassan"
                  className=" object-cover"
                />
              </div>
              <span className="animate-fade-in text-white md:text-5xl lg:text-7xl">
                {texts[cycleStage] ?? ""}
              </span>
            </div>
          </div>
          <IntroMask onFinish={() => setIntroDone(true)}>
            {PageContent}
          </IntroMask>
        </>
      ) : (
        PageContent
      )}
    </>
  );
}
