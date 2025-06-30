import { FaCode, FaNetworkWired } from 'react-icons/fa';
import { BsPalette } from 'react-icons/bs';
import AnimatedHeader from './Animationheader';
import { IoPulseOutline } from "react-icons/io5";

export default function Serves() {
  const services = [
    { icon: <FaCode size={50} />, titel: "Web Development", descrption: "I provide professional web development services to bring your ideas to life with modern,responsive, and user-friendly websites. My expertise ensures seamless functionality and appealing designs that cater to your business needs." },
    { icon: <BsPalette size={50} />, titel: "Graphic Design", descrption: "  I offer professional graphic design services to help businesses and individuals communicate visually and leave a lasting impression. From branding to digital and print designs, I focus on creating impactful and aesthetically pleasing visuals that align with your goals." },
    { icon: <FaNetworkWired size={40} className="text-[#01f3f4]" />, titel: "IT Specialist", descrption: "As an IT Specialist, I ensure reliable, secure, and efficient technology systems to support your business operations. From troubleshooting and network management to infrastructure setup and cybersecurity, I bring technical expertise and problem-solving skills that keep your systems running smoothly." },
    { icon: <IoPulseOutline size={40} className="text-[#01f3f4]" />, titel: "SEO", descrption: "I provide SEO services to improve your website’s visibility on search engines. I use Google Search Console to ensure proper indexing and help your site appear faster in search results. My focus is on boosting your ranking and attracting more organic traffic." }
  ]
  return (
    <>
      <AnimatedHeader Children={(
        <div id='services' className='text-white/80 py-16'>
          <h1 data-aos="fade-right" className='text-3xl font-bold pb-16 text-center text-white'>My <span className='text-[#01f3f4]'>Services</span></h1>
          <div className='grid grid-cols-1 container mx-auto p-3 sm:grid-cols-2 md:grid-cols-3 gap-5'>
            {services.map((service, index) => (
              <div key={index} data-aos="flip-right" data-aos-delay={200 * index} className='bg-[#323846] rounded-md p-4 text-center'>
                <div data-aos="fade-up" className='flex justify-center my-4 text-[#01f3f4]'>{service.icon}</div>
                <h2 className='text-xl font-bold'>{service.titel}</h2>
                <p>{service.descrption}</p>
                <button className="bg-[#1daaaa] hover:bg-[#01f4f4ab] transition-colors duration-300 rounded-md mt-4 px-4 py-2">Read More</button>
              </div>
            ))}
          </div>
        </div>
      )} />
    </>
  )
}
