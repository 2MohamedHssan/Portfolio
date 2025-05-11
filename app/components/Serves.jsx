import { FaCode } from 'react-icons/fa';
import { FiTrendingUp } from 'react-icons/fi';
import { BsPalette } from 'react-icons/bs';

export default function Serves() {
  return (
    <div id='services' className='bg-[#20242d] text-white/80 py-16'>
      <h1 data-aos="fade-right" className='text-3xl font-bold pb-16 text-center text-white'>Our <span className='text-[#01f3f4]'>Services</span></h1>
      <div className='grid grid-cols-1 container mx-auto p-3 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        <div data-aos="fade-up" className='bg-[#323846] rounded-md p-4 text-center'>
          <div data-aos="fade-up" className='flex justify-center my-4 text-[#01f3f4]'><FaCode size={50} /></div>
          <h2 className='text-xl font-bold'>Web Development</h2>
          <p>
            I provide professional web development services to bring your ideas to life with modern,
            responsive, and user-friendly websites. My expertise ensures seamless functionality and
            appealing designs that cater to your business needs.
          </p>
          <button className="bg-[#01f3f4] hover:bg-[#01f4f4ab] transition-colors duration-300 rounded-md mt-4 px-4 py-2">Read More</button>
        </div>
        <div data-aos="fade-up" className='bg-[#323846] rounded-md p-4 text-center'>
          <div data-aos="fade-up" className='flex justify-center my-4 text-[#01f3f4]'><BsPalette size={50} /></div>
          <h2 className='text-xl font-bold'>Graphic Design</h2>
          <p>
            I offer professional graphic design services to help businesses and individuals
            communicate visually and leave a lasting impression. From branding to digital and
            print designs, I focus on creating impactful and aesthetically pleasing visuals
            that align with your goals.
          </p>
          <button className="bg-[#01f3f4] hover:bg-[#01f4f4ab] transition-colors duration-300 rounded-md mt-4 px-4 py-2">Read More</button>
        </div>
        <div data-aos="fade-up" className='bg-[#323846] rounded-md p-4 text-center'>
          <div data-aos="fade-up" className='flex justify-center my-4 text-[#01f3f4]'><FiTrendingUp size={50} /></div>
          <h2 className='text-xl font-bold'>Digital Marketing</h2>
          <p>
            I provide comprehensive digital marketing services designed to grow your online
            presence, engage your target audience, and drive measurable results. My strategies
            combine creativity and data-driven insights to ensure your brand stands
            out in the digital landscape
          </p>
          <button className="bg-[#01f3f4] hover:bg-[#01f4f4ab] transition-colors duration-300 rounded-md mt-4 px-4 py-2">Read More</button>
        </div>
      </div>
    </div>
  )
}
