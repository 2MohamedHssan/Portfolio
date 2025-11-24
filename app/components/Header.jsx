"use client";
import { Typewriter } from "react-simple-typewriter";
import { links } from "../data";
import { motion } from "framer-motion";
import HeroAnimation from "./HeroAnimation";

export default function Header() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] text-white pt-20 md:pt-0">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <p className="text-cyan-400 font-mono mb-4 text-lg tracking-wider">
            Hello, It's Me
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            MOHAMED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              HASSAN
            </span>
          </h1>
          <div className="text-gray-300 font-bold text-xl md:text-2xl mb-8 h-8">
            I am a{" "}
            <span className="text-cyan-400">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "React & Next.js Expert",
                ]}
                loop={Infinity}
                cursor={true}
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </div>
          
          <p className="text-gray-400 text-lg max-w-lg mb-8 leading-relaxed">
            Building digital experiences with modern technologies. 
            Focused on creating accessible, pixel-perfect, and performant web applications.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
             <motion.a
              href="/Mohamed_Hassan.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all"
            >
              Download CV
            </motion.a>
            <motion.a
              href="#Contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-gray-700 rounded-full text-white font-semibold hover:bg-gray-800 transition-colors"
            >
              Contact Me
            </motion.a>
          </div>

          <div className="flex gap-6 text-2xl">
            {links.map((link, index) => (
              <motion.a
                key={index}
                href={link.src}
                aria-label={link.lable}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "#22d3ee" }}
                className="text-gray-400 transition-colors"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Column: 3D Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center"
        >
            {/* Glow effect behind the 3D model */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl transform scale-75" />
            <HeroAnimation />
        </motion.div>
      </div>
    </section>
  );
}
