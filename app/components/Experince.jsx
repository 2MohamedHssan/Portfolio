import React from 'react';
import { FaLaptopCode, FaBriefcase, FaTrophy } from 'react-icons/fa';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div className="bg-[#323846] relative py-20 flex justify-center min-h-screen items-start md:items-center bg-[url('/seven.jpg')] bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div ref={ref} className="grid grid-cols-1 container relative z-10 items-center justify-center mx-auto p-3 sm:grid-cols-3 gap-5">

        <div className="rounded-md p-4 text-center">
          <div className="flex justify-center my-4 text-[#01f3f4]">
            <FaLaptopCode size={70} className="imgview" />
          </div>
          <p className="text-white">
            <span className="text-4xl font-bold m-3 text-teal-400">
              {inView && <CountUp start={0} end={20} duration={2} delay={0.5} easing="easeOutCubic" />}+
            </span>
          </p>
          <h2 className="text-xl font-bold text-[#01f3f4]">Projects</h2>
        </div>

        <div className="rounded-md p-4 text-center">
          <div className="flex justify-center my-4 text-[#01f3f4]">
            <FaBriefcase size={70} className="imgview" />
          </div>
          <p className="text-white">
            <span className="text-4xl font-bold m-3 text-teal-400">
              {inView && <CountUp start={0} end={6} duration={2} delay={0.5} easing="easeOutCubic" />}+ Months
            </span>
          </p>
          <h2 className="text-xl font-bold text-[#01f3f4]">Experience</h2>
        </div>

        <div className="rounded-md p-4 text-center">
          <div className="flex justify-center my-4 text-[#01f3f4]">
            <FaTrophy size={70} className="imgview" />
          </div>
          <p className="text-white">
            <span className="text-4xl font-bold m-3 text-teal-400">
              {inView && <CountUp start={0} end={3} duration={2} delay={0.5} easing="easeOutCubic" />}
            </span>
          </p>
          <h2 className="text-xl font-bold text-[#01f3f4]">Awards</h2>
        </div>
      </div>
    </div>
  );
}

export default Experience;
