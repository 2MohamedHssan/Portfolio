"use client";
import React from "react";
import { skills } from "../data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function CurentSkills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Categorize skills manually since data doesn't have categories
  const categories = {
    Frontend: [
      "HTML5", "CSS3", "JavaScript", "React", "Next.js", "TypeScript", 
      "Tailwind CSS", "Bootstrap", "Vite", "Redux"
    ],
    Backend: [
      "Node.js", "Express.js", "MongoDB", "PHP", "MySQL", "Strapi", 
      "WordPress", "GraphQL"
    ],
    Tools: ["Git", "GitHub", "Jest", "Zod","Playwright"]
  };

  const getCategory = (title) => {
    for (const [category, items] of Object.entries(categories)) {
      if (items.includes(title)) return category;
    }
    return "Other";
  };

  const categorizedSkills = skills.reduce((acc, skill) => {
    const category = getCategory(skill.title);
    if (!acc[category]) acc[category] = [];
    acc[category].push(skill);
    return acc;
  }, {});

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section ref={ref} className="py-20 px-6 relative overflow-hidden bg-[#0a0a0a] text-white">
       {/* Background Elements */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of technologies I use to build high-quality digital products.
          </p>
        </motion.div>

        <div className="space-y-16">
          {Object.entries(categorizedSkills).map(([category, categorySkills], catIndex) => (
            categorySkills.length > 0 && (
              <div key={category}>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: catIndex * 0.2 }}
                  className="text-2xl font-bold mb-8 pl-4 border-l-4 border-cyan-500 text-gray-200"
                >
                  {category}
                </motion.h3>
                
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                >
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className={`group relative p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 flex flex-col items-center text-center ${
                        skill.curent ? "shadow-[0_0_15px_rgba(34,211,238,0.1)]" : ""
                      }`}
                    >
                      {skill.curent && (
                        <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" title="Currently Using" />
                      )}
                      
                      <div className="mb-4 p-3 rounded-lg bg-gray-800/50 group-hover:bg-gray-800 transition-colors">
                        <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </div>
                      </div>
                      
                      <h4 className="font-semibold text-gray-200 mb-1 group-hover:text-cyan-400 transition-colors">
                        {skill.title}
                      </h4>
                      
                      {/* Tooltip-like description on hover could go here, or just keep it clean */}
                      <p className="text-xs text-gray-500 line-clamp-2">
                        {skill.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}

export default CurentSkills;
