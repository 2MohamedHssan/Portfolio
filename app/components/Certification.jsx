import Image from "next/image";
import AnimatedHeader from "./Animationheader";

function Certification() {
  return (
    <>
      <AnimatedHeader bg={"bg-gray-900"} Children={(
        <div className=' text-white/80 py-16'>
          <h1 data-aos="fade-right" className='text-3xl font-bold pb-16 text-center text-white'>
            Certifications <span className='text-blue-500'></span>
          </h1>
          <div className='grid grid-cols-1 container mx-auto p-3 sm:grid-cols-2 md:grid-cols-3 gap-5'>
            <div data-aos="fade-down" className='bg-[#20242d] rounded-md p-4 text-center'>
              <Image src="/web.jpg" width={500} height={300} alt="Web Design Certification" />
              <h2 className='text-xl pt-2 font-bold'>Web Design</h2>
            </div>
            <div data-aos="fade-down" className='bg-[#20242d] rounded-md p-4 text-center'>
              <Image src="/photoshop.jpg" width={500} height={300} alt="Adobe Photoshop Certification" />
              <h2 className='text-xl pt-2 font-bold'>Adobe Photoshop</h2>
            </div>
            <div data-aos="fade-down" className='bg-[#20242d] rounded-md p-4 text-center'>
              <Image src="/IT.jpg" width={500} height={300} alt="IT Support Certification" />
              <h2 className='text-xl pt-2 font-bold'>IT Support</h2>
            </div>
            <div data-aos="fade-down" className='bg-[#20242d] rounded-md p-4 text-center'>
              <Image src="/mohamedFullstak.png" width={500} height={300} alt="IT Support Certification" />
              <h2 className='text-xl pt-2 font-bold'>Full Stack Development Internship</h2>
            </div>
          </div>
        </div>
      )} />
    </>
  );
}

export default Certification;
