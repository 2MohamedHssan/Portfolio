"use client";

import React, { useRef, useEffect } from "react";
import "swiper/css";
import {
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiWordpress,
  SiZod,
  SiJest,
  SiStrapi,
  SiPhp,
  SiMysql,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiGraphql,
  SiBootstrap,
} from "react-icons/si";
import { DiHtml5, DiCss3, DiJsBadge, DiReact } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import gsap from "gsap";

function Skills({ value }) {
  const sliderRef = useRef(null);

  useEffect(() => {
    value
      ? gsap.to(sliderRef.current, {
          x: "-50%",
          duration: 20,
          ease: "linear",
          repeat: -1,
        })
      : gsap.fromTo(
          sliderRef.current,
          { x: "-50%" },
          {
            x: "0",
            duration: 20,
            ease: "linear",
            repeat: -1,
          }
        );
  }, [value]);

  const icons = [
    <DiHtml5 className="icon-glow hover:text-[#e34c26] transition-colors duration-300" color="#6b7280" size={30} />,
    <SiZod className="icon-glow hover:text-[#3B82F6] transition-colors duration-300" color="#6b7280" size={30} />,
    <DiCss3 className="icon-glow hover:text-[#1572b6] transition-colors duration-300" color="#6b7280" size={30} />,
    <SiStrapi className="icon-glow hover:text-[#1572b6] transition-colors duration-300" color="#6b7280" size={30} />,
    <SiRedux className="icon-glow hover:text-[#764ABC] transition-colors duration-300" color="#6b7280" size={30} />,
    <SiWordpress className="icon-glow hover:text-[#1572b6] transition-colors duration-300" color="#6b7280" size={30} />,
    <SiJest className="icon-glow hover:text-[#e35b64] transition-colors duration-300" color="#6b7280" size={30} />,
    <FaGithub className="icon-glow hover:text-[#ffffff] transition-colors duration-300" color="#6b7280" size={30} />,
    <DiJsBadge className="icon-glow hover:text-[#f7df1e] transition-colors duration-300" color="#6b7280" size={30} />,
    <SiPhp className="icon-glow hover:text-[#4F5D95] transition-colors duration-300" color="#6b7280" size={30} />,
    <DiReact className="icon-glow hover:text-[#61dbfb] transition-colors duration-300" color="#6b7280" size={30} />,
    <SiTailwindcss className="icon-glow hover:text-[#38B2AC] transition-colors duration-300" color="#6b7280" size={30} />,
    <SiTypescript className="icon-glow hover:text-[#3178C6] transition-colors duration-300" color="#6b7280" size={30} />,
    <SiNextdotjs className="icon-glow hover:text-[#ffffff] transition-colors duration-300" color="#6b7280" size={30} />,
    <SiBootstrap className="icon-glow hover:text-[#7952B3] transition-colors duration-300" color="#6b7280" size={30} />,
    <SiNodedotjs className="icon-glow hover:text-[#339933] transition-colors duration-300" color="#6b7280" size={30} />,
    <SiExpress className="icon-glow hover:text-[#ffffff] transition-colors duration-300" color="#6b7280" size={30} />,
    <SiMongodb className="icon-glow hover:text-[#4DB33D] transition-colors duration-300" color="#6b7280" size={30} />,
    <Image src="/logo.svg" alt="vite" width={30} height={30} className="opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0" />,
  ];

  return (
    <div className="py-10 overflow-hidden bg-transparent relative z-10">
      <div className="w-full whitespace-nowrap mask-image-gradient">
        <div ref={sliderRef} className="flex gap-16 w-max items-center">
          {icons.map((icon, i) => (
            <div key={i} className="flex-shrink-0 transform hover:scale-110 transition-transform duration-300 cursor-pointer">
              {icon}
            </div>
          ))}
          {/* Repeat icons for smooth loop */}
          {icons.map((icon, i) => (
            <div key={i + "x"} className="flex-shrink-0 transform hover:scale-110 transition-transform duration-300 cursor-pointer">
              {icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;

