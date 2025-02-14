import Image from "next/image"
import Link from "next/link"

function About() {
  return (
    <div className="bg-[#323846] text-white py-32 px-4">
        <div className="grid container mx-auto items-start grid-cols-1 md:grid-cols-2 gap-8 ">
           <div data-aos="fade-down" className="container mx-auto h-80 mr-10 imginmation-one rounded-full w-80">
              <div className="overflow-hidden container imginmation-tow rounded-full w-full h-full flex justify-center mx-auto">
              <Image src="/mohamed.WebP" width={200} height={50} alt="mohamed" />
              </div>
           </div>
            <div data-aos="fade-up" id="about" className="p-2">
                <h1 className="text-4xl font-bold">About <span className="text-[#01f3f4]">me</span></h1>
                <h2 className="text-xl font-bold">Frontend Developer</h2>
                <p className=" italic leading-relaxed text-lg">
                  I am a Front-End Developer with a passion for creating responsive and
                  user-friendly websites. I specialize in technologies like React, Next.js,
                  and Tailwind CSS, ensuring modern and efficient web applications.
                  I have recently started expanding my skills by learning WordPress and 
                  Laravel to grow into a Full-Stack Developer.I focus on delivering clean
                  code, seamless user experiences, and mobile-friendly designs.
                </p>
                <Link rel="preload" href="AboutMe" target="_blank" className="bg-[#01f3f4] md:mx-auto hover:bg-[#01f4f4ab] rounded-md mt-4 px-4 py-2 block w-fit">Read More</Link>
            </div>
            
        </div>
    </div>
  )
}

export default About