import Link from "next/link"

function About() {
  return (
    <div className="dark:bg-[#323846] bg-secondbg dark:text-white py-16 px-4">
        <div className="grid container mx-auto items-start grid-cols-1 md:grid-cols-2 gap-8 ">
           <div className="container mx-auto h-full mr-10">
              <div className="overflow-hidden container mx-auto flex items-center rounded-lg bg-teal-500 justify-center rotate-45 w-72 h-72 imgview my-4">
                <img src="mohamed_about1.png" className="w-[200px] h-96 mt-6 ml-8 -rotate-45" alt="mohamed" />
              </div>
           </div>
            <div className="p-2">
                <h1 className="text-4xl font-bold">About <span className="dark:text-[#01f3f4]">me</span></h1>
                <h2 className="text-xl font-bold">Frontend Developer</h2>
                <p className=" italic leading-relaxed text-lg">
                  I am a Front-End Developer with a passion for creating responsive and
                  user-friendly websites. I specialize in technologies like React, Next.js,
                  and Tailwind CSS, ensuring modern and efficient web applications.
                  I have recently started expanding my skills by learning WordPress and 
                  Laravel to grow into a Full-Stack Developer. 
                  I focus on delivering clean code, seamless user experiences, and mobile-friendly designs.
                </p>
                <Link href="/more" target="_blank" className="bg-[#01f3f4] md:mx-auto hover:bg-[#01f4f4ab] rounded-md mt-4 px-4 py-2 block w-fit">Read More</Link>
            </div>
        </div>
    </div>
  )
}

export default About
