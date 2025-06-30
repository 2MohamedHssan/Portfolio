"use client";

import React, { useRef, useEffect } from 'react';
import 'swiper/css';
import {
  SiExpress, SiMongodb, SiNodedotjs, SiWordpress, SiZod, SiJest,
  SiStrapi, SiPhp, SiMysql, SiRedux, SiTailwindcss, SiTypescript,
  SiNextdotjs, SiGraphql, SiBootstrap
} from 'react-icons/si';
import { DiHtml5, DiCss3, DiJsBadge, DiReact } from 'react-icons/di';
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';
import gsap from 'gsap';
import AnimatedHeader from './Animationheader';

function Skills({ value }) {
  const sliderRef = useRef(null);

  useEffect(() => {
    value ? gsap.to(sliderRef.current, {
      x: '-50%',
      duration: 20,
      ease: 'linear',
      repeat: -1,
    }) : gsap.fromTo(sliderRef.current,
      { x: "-50%" }, {
      x: '0',
      duration: 20,
      ease: 'linear',
      repeat: -1,
    });
  }, []);

  const icons = [
    <DiHtml5 className='icon-glow' color="#e34c26" size={80} />,
    <SiZod className='icon-glow' color="#3B82F6" size={80} />,
    <DiCss3 className='icon-glow' color="#1572b6" size={80} />,
    <SiStrapi className='icon-glow' color="#1572b6" size={80} />,
    <SiRedux className='icon-glow' color="#764ABC" size={80} />,
    <SiWordpress className='icon-glow' color="#1572b6" size={80} />,
    <SiJest className='icon-glow' color="#e35b64" size={80} />,
    <FaGithub className='icon-glow' color="#000000" size={80} />,
    <DiJsBadge className='icon-glow' color="#f7df1e" size={80} />,
    <SiPhp className='icon-glow' color="#4F5D95" size={80} />,
    <SiMysql className='icon-glow' color="#00758F" size={80} />,
    <DiReact className='icon-glow' color="#61dbfb" size={80} />,
    <SiTailwindcss className='icon-glow' color="#38B2AC" size={80} />,
    <SiTypescript className='icon-glow' color="#3178C6" size={80} />,
    <SiNextdotjs className='icon-glow' color="#000000" size={80} />,
    <SiGraphql className='icon-glow' color="#E10098" size={80} />,
    <SiBootstrap className='icon-glow' color="#7952B3" size={80} />,
    <SiNodedotjs className='icon-glow' color="#339933" size={80} />,
    <SiExpress className='icon-glow' color="#fff" size={80} />,
    <SiMongodb className='icon-glow' color="#4DB33D" size={80} />,
    <Image src="/logo.svg" alt='vite' width={80} height={80} />
  ];

  return (
    <>
      <AnimatedHeader Children={(
        <div className="py-10 text-white overflow-hidden">
          <div className="w-full whitespace-nowrap">
            <div ref={sliderRef} className="flex gap-12 w-max">
              {icons.map((icon, i) => (
                <div key={i} className="flex-shrink-0">{icon}</div>
              ))}
              {/* Repeat icons for smooth loop */}
              {icons.map((icon, i) => (
                <div key={i + 'x'} className="flex-shrink-0">{icon}</div>
              ))}
            </div>
          </div>
        </div>
      )} />
    </>
  );
}

export default Skills;
