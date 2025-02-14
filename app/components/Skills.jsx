"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { SiWordpress } from 'react-icons/si';
import { SiZod } from 'react-icons/si';
import { Autoplay } from 'swiper/modules';
import { FaGithub } from "react-icons/fa";
import { SiJest, SiStrapi, SiPhp, SiMysql, SiRedux  } from "react-icons/si";
import { DiHtml5, DiCss3, DiJsBadge, DiReact } from 'react-icons/di';
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiGraphql, SiBootstrap } from 'react-icons/si';

function Skills() {
  return (
    <div className="py-20 bg-[#20242d] text-white bg-fisrtbg">
      <h1 className="text-3xl font-bold pb-16 text-center">Skills</h1>
      <div data-aos="zoom-in" className="container pt-20 mx-auto">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }
        }
          className="mySwiper"
          speed={3000}
          grabCursor={true}>
          <SwiperSlide><DiHtml5 color="#e34c26" size  ={80} alt="html" /></SwiperSlide>
          <SwiperSlide><SiZod color="#3B82F6" size  ={80} alt="zod" /></SwiperSlide>
          <SwiperSlide><DiCss3 color="#1572b6" size={80} alt="css" /></SwiperSlide>
          <SwiperSlide><SiStrapi color="#1572b6" size={80} alt="strapi" /></SwiperSlide>
          <SwiperSlide><SiRedux color="#764ABC" size={80} alt="Redux" /></SwiperSlide>
          <SwiperSlide><SiWordpress color="#1572b6" alt="wordpress" size={80} /></SwiperSlide>
          <SwiperSlide><SiJest color="#e35b64" alt="jest" size={80} /></SwiperSlide>
          <SwiperSlide><FaGithub color="#000000" alt="githup" size={80} /></SwiperSlide>
          <SwiperSlide><DiJsBadge color="#f7df1e" alt="js" size={80} /></SwiperSlide>
          <SwiperSlide><SiPhp color="#4F5D95" alt="php" size={80} /></SwiperSlide>
          <SwiperSlide><SiMysql color="#00758F" alt="sql" size={80} /></SwiperSlide>
          <SwiperSlide><DiReact color="#61dbfb" alt="react" size={80} /></SwiperSlide>
          <SwiperSlide><SiTailwindcss color="#38B2AC" alt="tailwind" size={80} /></SwiperSlide>
          <SwiperSlide><SiTypescript color="#3178C6" alt="typscript" size={80} /></SwiperSlide>
          <SwiperSlide><SiNextdotjs color="#000000" alt="next" size={80} /></SwiperSlide>
          <SwiperSlide><SiGraphql color="#E10098" alt="graphql" size={80} /></SwiperSlide>
          <SwiperSlide><SiBootstrap color="#7952B3" alt="bootstrap" size={80} /></SwiperSlide>
          <SwiperSlide><Image src="/logo.svg" alt='vite' width={80} height={80}/></SwiperSlide>
          <SwiperSlide><Image src="/nm_logo.png" alt='nm_logo' width={100} height={100}/></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Skills;
