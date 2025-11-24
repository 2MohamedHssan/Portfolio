"use client";

import React from "react";
import { FaLaptopCode, FaBriefcase, FaTrophy, FaCalendarAlt } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    {
      icon: <FaLaptopCode size={40} />,
      count: 20,
      suffix: "+",
      label: "Projects Completed",
      color: "text-cyan-400",
      border: "group-hover:border-cyan-500/50",
      shadow: "shadow-cyan-500/20",
      delay: 0.2,
    },
    {
      icon: <FaBriefcase size={40} />,
      count: 12,
      suffix: "+",
      label: "Months Experience",
      color: "text-purple-400",
      border: "group-hover:border-purple-500/50",
      shadow: "shadow-purple-500/20",
      delay: 0.4,
    },
    {
      icon: <FaTrophy size={40} />,
      count: 1,
      label: "Awards Won",
      color: "text-blue-400",
      border: "group-hover:border-blue-500/50",
      shadow: "shadow-blue-500/20",
      delay: 0.6,
    },
  ];

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Uni & Do",
      date: "July 2025 - Present",
      description: `Building and maintaining a scalable full-stack application using React and Strapi. Developed responsive, accessible UIs with Tailwind CSS, implemented dynamic routing with React Router, and integrated Strapi CMS with custom APIs to support frontend needs. Prioritized performance, code reusability, and a seamless user experience.`,
      tech: ["Next.js", "React","TypeScript", "Tailwind CSS", "Node.js","Strapi"],
      side: "left",
    },
    {
      title: "Front-End Developer",
      company: "Tech-Yard Hub",
      date: "March 2025 - July 2025",
      description: "Developing and optimizing user interfaces using React and Tailwind CSS. Working on a large dashboard with nested and dynamic routes.",
      tech: ["React", "Tailwind CSS","JavaScript", "HTML/CSS", "Git"],
      side: "right",
    },
    {
      title: "Full-Stack Intern (Node.js & React)",
      company: "Ideas & Concepts",
      date: "January 2025 - May 2025",
      description: "Gaining hands-on experience in full-stack development using Node.js and React. Working on backend APIs and front-end interfaces.",
      tech: ["React","Tailwind CSS","Git","JavaScript","Node.js", "mongoDb", "express.js"],
      side: "left",
    },
    {
      title: "IT Support",
      company: "NCPC",
      date: "September 2023 - September 2024",
      description: "Provided technical support, troubleshooting hardware and software issues, and maintaining network infrastructure.",
      tech: ["IT","Network +", "Comptea A", "CCNA"],
      side: "right",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 md:px-20 overflow-hidden bg-[#0a0a0a] text-white"
      id="experience"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full z-10 relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Journey</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            From humble beginnings to professional excellence. Here's a timeline of my growth and achievements.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-32">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: item.delay }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative group p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 ${item.border} transition-all duration-300 flex flex-col items-center text-center`}
            >
              <div className={`mb-6 p-4 rounded-full bg-gray-800/50 ${item.color} shadow-lg ${item.shadow}`}>
                {item.icon}
              </div>
              
              <h3 className="text-5xl font-bold text-white mb-2">
                {inView ? (
                  <CountUp start={0} end={item.count} duration={2.5} separator="," />
                ) : (
                  0
                )}
                <span className={`text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500`}>
                  {item.suffix || ""}
                </span>
              </h3>
              
              <p className="text-gray-400 font-medium text-lg tracking-wide uppercase">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Timeline Section */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-blue-500 opacity-30 rounded-full" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex flex-col md:flex-row items-center justify-between mb-16 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Spacer for desktop alignment */}
              <div className="hidden md:block w-5/12" />

              {/* Timeline Dot */}
              <div className="absolute left-[-6px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-[#0a0a0a] shadow-[0_0_15px_rgba(34,211,238,0.5)] z-20 mt-6 md:mt-0" />

              {/* Content Card */}
              <div className="w-full md:w-5/12 pl-8 md:pl-0">
                <div className="relative p-6 bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-cyan-500/30 transition-colors group">
                  {/* Date Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-cyan-400 text-sm font-medium mb-4">
                    <FaCalendarAlt size={12} />
                    {exp.date}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-purple-400 font-medium mb-4">{exp.company}</p>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 text-xs font-medium text-gray-300 bg-gray-800 rounded-lg border border-gray-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
