import Link from "next/link";
import Lottie from "lottie-react";
import { Typewriter } from 'react-simple-typewriter';
import Animation from "../animation.json";
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
export default function Header() {
  return (
    <div className="bg-[#20242d] text-white px-2 py-8 md:py-20">
        <div className="flex justify-between items-center w-full container mx-auto font-[family-name:var(--font-geist-sans)]">
            <div >
                <p data-aos="fade-right">Hello, It's Me</p> 
                <h1 data-aos="zoom-in" className="text-3xl font-bold py-2">Mohamed Hassan</h1>
                <p data-aos="zoom-in"><span className="text-[#01f3f4] font-bold text-xl"><Typewriter
                    words={['I am a Frontend Developer', 'I build responsive websites', 'Skilled in building server-side rendered apps with Next.js']}
                    loop={Infinity}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    /></span></p>
                <div data-aos="fade-up" className="flex gap-3 text-xl mt-4">
                    <a href="https://www.facebook.com/profile.php?id=100043988671187" target="_blank" rel="noopener noreferrer">
                        <FaFacebook color="#01f3f4" />
                    </a>
                    <a href="https://www.linkedin.com/in/mohamed-hassan-9330a4234/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin color="#01f3f4" />
                    </a>
                    <a href="https://github.com/2MohamedHssan" target="_blank" rel="noopener noreferrer">
                        <FaGithub color="#01f3f4" />
                    </a>
                </div>
                <Link data-aos="fade-up" href="/MohamedCV.pdf" target="_blank" className="bg-[#01f3f4] imgview hover:bg-[#01f4f4ab] rounded-md mt-4 px-4 py-2 block w-fit">Download CV</Link>
            </div>
            <div data-aos="fade-up" className=" hidden md:flex items-center imgview overflow-hidden justify-center">
                <div style={{ width: 400, height: 400 }}>
                    <Lottie animationData={Animation} loop={true} />
                </div>
            </div>
        </div>
    </div>
  );
}
