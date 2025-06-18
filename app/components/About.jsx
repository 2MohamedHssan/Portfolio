// import Image from "next/image"
// import Link from "next/link"

function About() {
  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
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
    </section>
  )
}

export default About