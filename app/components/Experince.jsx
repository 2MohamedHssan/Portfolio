import React from 'react';
import { FaLaptopCode, FaBriefcase, FaTrophy } from 'react-icons/fa';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import AnimatedHeader from './Animationheader';

function Experience() {
  const data=[
    { icon: <FaLaptopCode size={70} className="imgview" />, count: 20, label: "Projects" },
    { icon: <FaBriefcase size={70} className="imgview" />, count: 6, label: "Experience", suffix: "Months" },
    { icon: <FaTrophy size={70} className="imgview" />, count: 3, label: "Awards" },
  ];
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
<>
<AnimatedHeader children={ 
      <div ref={ref} className="bg-gray-900 text-white py-16">
        <h1 data-aos="fade-down" className='text-3xl font-bold pb-16 text-center'>
          My <span className='text-[#01f3f4]'>Experience</span>
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-10">
          {data.map((item, index) => (
            <div key={index} data-aos="zoom-in" className="flex flex-col items-center">
              <div className="text-[#01f3f4] mb-2">{item.icon}</div>
              <h2 className="text-4xl font-bold">
                {inView ? <CountUp start={0} end={item.count} duration={2} /> : null}
                {item.suffix && ` ${item.suffix}`}
              </h2>
              <p className="text-lg">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    }/>
</>
  );
}

export default Experience;
