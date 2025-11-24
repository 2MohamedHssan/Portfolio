"use client";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiTypescript,
  SiMongodb,
  SiStrapi,
} from "react-icons/si";

const HeroAnimation = () => {
  const icons = [
    { Icon: SiReact, color: "text-cyan-400", x: -120, y: -80, delay: 0 },
    { Icon: SiNextdotjs, color: "text-white", x: 120, y: -60, delay: 1 },
    { Icon: SiTailwindcss, color: "text-cyan-300", x: -100, y: 80, delay: 2 },
    { Icon: SiNodedotjs, color: "text-green-500", x: 100, y: 100, delay: 3 },
    { Icon: SiTypescript, color: "text-blue-500", x: 0, y: -140, delay: 1.5 },
    { Icon: SiStrapi, color: "text-[#1572b6]", x: 0, y: 140, delay: 2.5 },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Central Core */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-32 h-32 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-2xl opacity-50"
      />
      
      <div className="relative w-24 h-24 bg-gray-900 rounded-full border border-gray-800 flex items-center justify-center z-10 shadow-2xl shadow-cyan-500/20">
        <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
      </div>

      {/* Orbiting Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-[300px] h-[300px] border border-gray-800/50 rounded-full border-dashed"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute w-[450px] h-[450px] border border-gray-800/30 rounded-full border-dashed"
      />

      {/* Floating Icons */}
      {icons.map(({ Icon, color, x, y, delay }, index) => (
        <motion.div
          key={index}
          className={`absolute p-4 bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-800 shadow-xl ${color}`}
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{
            x: [x, x + 10, x],
            y: [y, y - 10, y],
            opacity: 1,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: delay,
          }}
          whileHover={{ scale: 1.2, zIndex: 20 }}
        >
          <Icon className="text-3xl" />
        </motion.div>
      ))}
    </div>
  );
};

export default HeroAnimation;
