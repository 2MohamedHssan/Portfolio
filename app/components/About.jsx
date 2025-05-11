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
          <h2 className="text-xl font-bold">Full Stack Developer</h2>
          <p className=" italic leading-relaxed text-lg">
            I'm Mohamed Hassan, a Full Stack Developer with a passion for building fast, responsive, and user-friendly web applications.
            I specialize in front-end technologies like React, Next.js, and Tailwind CSS, where I focus on turning UI designs into functional,
            interactive interfaces. On the backend, I’m actively working with Node.js, Express, and WordPress to strengthen my full stack capabilities.
            I aim to deliver clean, maintainable code and seamless user experiences across all devices. I'm constantly exploring new tools and frameworks
            to stay up to date and improve performance, accessibility, and design standards.
          </p>
          <Link rel="preload" href="AboutMe" target="_blank" className="bg-[#01f3f4] md:mx-auto hover:bg-[#01f4f4ab] rounded-md mt-4 px-4 py-2 block w-fit">Read More</Link>
        </div>

      </div>
    </div>
  )
}

export default About