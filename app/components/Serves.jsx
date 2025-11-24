"use client";

import React from "react";
import { FaCode, FaNetworkWired } from "react-icons/fa";
import { BsPalette } from "react-icons/bs";
import { IoPulseOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Serves() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: <FaCode size={50} />,
      titel: "Web Development",
      descrption:
        "I provide professional web development services to bring your ideas to life with modern, responsive, and user-friendly websites. My expertise ensures seamless functionality and appealing designs that cater to your business needs.",
      color: "text-cyan-400",
      bg: "group-hover:bg-cyan-500/10",
      border: "group-hover:border-cyan-500/50"
    },
    {
      icon: <BsPalette size={50} />,
      titel: "Graphic Design",
      descrption:
        "I offer professional graphic design services to help businesses and individuals communicate visually and leave a lasting impression. From branding to digital and print designs, I focus on creating impactful and aesthetically pleasing visuals that align with your goals.",
      color: "text-purple-400",
      bg: "group-hover:bg-purple-500/10",
      border: "group-hover:border-purple-500/50"
    },
    {
      icon: <FaNetworkWired size={40} />,
      titel: "IT Specialist",
      descrption:
        "As an IT Specialist, I ensure reliable, secure, and efficient technology systems to support your business operations. From troubleshooting and network management to infrastructure setup and cybersecurity, I bring technical expertise and problem-solving skills that keep your systems running smoothly.",
      color: "text-blue-400",
      bg: "group-hover:bg-blue-500/10",
      border: "group-hover:border-blue-500/50"
    },
    {
      icon: <IoPulseOutline size={40} />,
      titel: "SEO",
      descrption:
        "I provide SEO services to improve your website’s visibility on search engines. I use Google Search Console to ensure proper indexing and help your site appear faster in search results. My focus is on boosting your ranking and attracting more organic traffic.",
      color: "text-teal-400",
      bg: "group-hover:bg-teal-500/10",
      border: "group-hover:border-teal-500/50"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section
      ref={ref}
      id="services"
      className="relative py-20 px-6 overflow-hidden bg-[#0a0a0a] text-white"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored to elevate your digital presence and business operations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`group relative p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 ${service.border} transition-all duration-300 flex flex-col h-full`}
            >
              <div className={`mb-6 p-4 rounded-xl bg-gray-800/50 w-fit ${service.color} ${service.bg} transition-colors duration-300`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-100 group-hover:text-white transition-colors">
                {service.titel}
              </h3>
              
              <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                {service.descrption}
              </p>
              
              <button className="w-full py-3 px-6 rounded-xl bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 text-white font-medium transition-all duration-300 border border-gray-700 hover:border-transparent">
                Read More
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

