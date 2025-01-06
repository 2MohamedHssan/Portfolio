"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { DiHtml5, DiCss3, DiJsBadge, DiReact, DiNodejs } from 'react-icons/di';
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiGraphql, SiBootstrap } from 'react-icons/si';

function Skills() {
  return (
    <div className="py-20 bg-[#20242d] text-white bg-fisrtbg">
      <h1 className="text-3xl font-bold pb-16 text-center">Skills</h1>
      <div data-aos="fade-up" className="container mx-auto">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          className="mySwiper"
          speed={1000}
          grabCursor={true}>
          <SwiperSlide><DiHtml5 color="#e34c26" size={80} /></SwiperSlide>
          <SwiperSlide><DiCss3 color="#1572b6" size={80} /></SwiperSlide>
          <SwiperSlide><DiJsBadge color="#f7df1e" size={80} /></SwiperSlide>
          <SwiperSlide><DiReact color="#61dbfb" size={80} /></SwiperSlide>
          <SwiperSlide><DiNodejs color="#8cc84b" size={80} /></SwiperSlide>
          <SwiperSlide><SiTailwindcss color="#38B2AC" size={80} /></SwiperSlide>
          <SwiperSlide><SiTypescript color="#3178C6" size={80} /></SwiperSlide>
          <SwiperSlide><SiNextdotjs color="#000000" size={80} /></SwiperSlide>
          <SwiperSlide><SiGraphql color="#E10098" size={80} /></SwiperSlide>
          <SwiperSlide><SiBootstrap color="#7952B3" size={80} /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Skills;
