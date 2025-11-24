"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
  SiStrapi,
} from "react-icons/si";
import Image from "next/image";
import { PlaywrightSVG } from "./svg";

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const stats = [
    { label: "Years Experience", value: "1+" },
    { label: "Projects Completed", value: "20+" },
    { label: "Happy Clients", value: "10+" },
  ];

  const skills = [
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-300" },
    { name: "Strapi", icon: SiStrapi, color: "text-[#1572b6]" },
    { name: "Playwright", icon: PlaywrightSVG, color: "text-blue-400" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-20 px-6 md:px-20 overflow-hidden bg-[#0a0a0a] text-white flex items-center"
      id="about"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        {/* Left Column: Image/Visual */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0">
            {/* Decorative Frame */}
            <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-2xl transform rotate-6 translate-x-4 translate-y-4" />
            <div className="absolute inset-0 border-2 border-purple-500/30 rounded-2xl transform -rotate-3 -translate-x-4 -translate-y-4" />

            {/* Image Container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-900 shadow-2xl group">
              {/* Placeholder for user image - replacing with a code abstract or keeping the video idea if preferred, 
                  but for a professional static look, a clean div or image is better initially. 
                  Using a gradient placeholder for now if no image is provided. */}
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <motion.div
                  initial={{ opacity: 0, y: 250 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    src="/mohamed.png"
                    width={1000}
                    height={1000}
                    alt="mohamed"
                  />
                </motion.div>
              </div>

              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                <p className="text-cyan-400 font-mono text-sm mb-1">
                  @FullStackDev
                </p>
                <h3 className="text-2xl font-bold">
                  Building Digital Experiences
                </h3>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Me
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-300 text-lg leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            I'm a passionate{" "}
            <span className="text-cyan-400 font-semibold">
              Full-Stack Developer
            </span>{" "}
            dedicated to crafting efficient, scalable, and visually stunning web
            applications. With a strong foundation in both frontend aesthetics
            and backend logic, I bridge the gap between design and technology.
            My journey is driven by a curiosity to learn and a desire to solve
            complex problems with clean, maintainable code.
          </motion.p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mb-10 border-y border-gray-800 py-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h4 className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </h4>
                <p className="text-sm text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Tech Stack Icons */}
          <div className="mb-10">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index + 1) * 0.1 }}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="p-3 bg-gray-900 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-colors cursor-pointer relative group"
                >
                  <skill.icon className={`text-2xl ${skill.color}`} />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
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
        </motion.div>
      </div>
    </section>
  );
};

export default About;
