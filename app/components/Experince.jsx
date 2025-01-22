import React from 'react';
import { FaLaptopCode, FaBriefcase, FaTrophy } from 'react-icons/fa';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function Experince() {
  const { ref: projectsRef, inView: projectsInView } = useInView({ triggerOnce: true });
  const { ref: experienceRef, inView: experienceInView } = useInView({ triggerOnce: true });
  const { ref: awardsRef, inView: awardsInView } = useInView({ triggerOnce: true });

  return (
    <div className='bg-[#323846] bg-fixed relative py-20 h-screen' style={{backgroundImage:`url('/seven.jpg')`, backgroundSize:'cover',backgroundPosition:'center'}}>
      <div className='absolute inset-0 bg-black opacity-75'></div>
      <div className='grid grid-cols-1 h-screen container relative z-10 items-center justify-center mx-auto p-3 sm:grid-cols-3 gap-5'>
        <div ref={projectsRef} data-aos="fade-up" className=' rounded-md p-4 text-center'>
          <div data-aos="fade-up" duration='1500' className='flex justify-center my-4 text-[#01f3f4]'>
            <FaLaptopCode size={70} color="#01f3f4" className='imgview' />
          </div>
          <p className='text-white'>
            <span className='text-4xl font-bold m-3 text-teal-400'>
              {projectsInView && <CountUp start={0} end={20} duration={2} delay={1}/>}
              +
            </span>
          </p>
          <h2 className='text-xl font-bold text-[#01f3f4]'>Projects</h2>
        </div>

        <div ref={experienceRef} data-aos="fade-up" className=' rounded-md p-4 text-center' >
          <div data-aos="fade-up" duration='1500' className='flex justify-center my-4 text-[#01f3f4]' >
            <FaBriefcase size={70} color="#01f3f4" className='imgview' />
          </div>
          <p className='text-white'>
            <span className='text-4xl font-bold m-3 text-teal-400'>
              {experienceInView && <CountUp start={0} end={12} duration={2} delay={1} />}
              + M
            </span>
          </p>
          <h2 className='text-xl font-bold text-[#01f3f4]'>Experience</h2>
        </div>

        <div ref={awardsRef} data-aos="fade-up" className=' rounded-md p-4 text-center' >
          <div data-aos="fade-up" duration='1500' className=' flex justify-center my-4 text-[#01f3f4]'>
            <FaTrophy size={70} color="#01f3f4" className='imgview'/>
          </div>
          <p className='text-white'>
            <span className='text-4xl font-bold m-3 text-teal-400'>
              {awardsInView && <CountUp start={0} end={3} duration={2} delay={1} />}
            </span>
          </p>
          <h2 className='text-xl font-bold text-[#01f3f4]'>Awards</h2>
        </div>
      </div>
    </div>
  );
}

export default Experince;
