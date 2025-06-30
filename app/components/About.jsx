// import Image from "next/image"
// import Link from "next/link"

import AnimatedHeader from "./Animationheader"

function About() {
  return (
    <>
      <AnimatedHeader bg={"bg-black"} Children={
        <section className=" text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center h-screen justify-center overflow-hidden">
          <div className="max-w-4xl mx-auto text-center z-10">
            <h2 className="text-3xl font-bold pb-16 text-center wave-text">About Me</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a <span className="text-cyan-400 font-semibold">Full-Stack Developer</span> with a strong passion for building fast, scalable, and user-friendly web applications.
              My main stack is <span className="text-pink-400 font-medium">React</span> on the frontend and <span className="text-green-400 font-medium">Node.js / Express</span> on the backend.
            </p>
            <p className="text-lg text-gray-400 mt-4">
              I enjoy creating responsive interfaces, working with RESTful APIs, and integrating databases like <span className="text-green-500">MongoDB</span> and <span className="text-blue-400">MySQL</span>. I'm always looking for ways to improve user experience and optimize performance. Clean code, component reusability, and teamwork are what I value most.
            </p>
            <div className="mt-8 flex justify-center gap-6">
              <a href="/MohamedCV.pdf" download className="bg-cyan-500 hover:bg-cyan-400 transition px-6 py-2 rounded-full text-white font-medium shadow-md">
                Download CV
              </a>
              <a href="#Contact" className="border border-cyan-500 hover:bg-cyan-500 transition px-6 py-2 rounded-full text-cyan-300 hover:text-white font-medium shadow-md">
                Contact Me
              </a>
            </div>
          </div>
          <div className=" overflow-hidden">
            <div className=" absolute inset-0 w-full left-0 bottom-0 h-full">
              <video loop muted autoPlay className='' src="/run-tweak-repeat.mp4"></video>
              <img src="/thunder.webp" alt="" className="absolute md:block hidden md:top-[24.3rem] animate-pulse md:left-[18rem] w-60 h-60" />
              <div className="h-full bg-[#000000a8] absolute z-0 left-0 top-0 w-full"></div>
            </div>
          </div>
        </section>
      } />
    </>
  )
}

export default About