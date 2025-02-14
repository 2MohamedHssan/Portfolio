import Link from "next/link";
import { Typewriter } from 'react-simple-typewriter';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import dynamic from "next/dynamic"; 

const Lottie = dynamic(() => import("lottie-react"), { ssr: false }); 

import Animation from "../animation.json";

export default function Header() {
  return (
    <div className="bg-[#20242d] text-white px-2 py-8 md:py-20">
        <div className="flex flex-col md:flex-row justify-between items-center w-full container mx-auto font-[family-name:var(--font-geist-sans)]">
            <div >
                <p data-aos="fade-right"> Hello, It's Me </p> 
                <h1 data-aos="zoom-in" className="text-3xl font-bold py-2">Mohamed Hassan</h1>
                    <span data-aos="zoom-in" className="text-[#01f3f4] font-bold text-xl">
                        <Typewriter
                        words={['I am a Frontend Developer', 'I build responsive websites', 'Skilled in building server-side rendered apps with Next.js']}
                        loop={Infinity}
                        cursor={true}
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        />
                    </span>
                <div data-aos="fade-up" className="flex gap-3 text-xl mt-4">
                    <a href="https://www.facebook.com/profile.php?id=100043988671187" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                        <FaFacebook color="#01f3f4" />
                    </a>
                    <a href="https://www.linkedin.com/in/mohamed-hassan-9330a4234/"  aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin color="#01f3f4" />
                    </a>
                    <a href="https://github.com/2MohamedHssan" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                        <FaGithub color="#01f3f4" />
                    </a>
                </div>
                <Link download data-aos="fade-up" href="/MohamedCV.pdf" target="_blank" className="bg-[#01f3f4] imgview hover:bg-[#01f4f4ab] rounded-md mt-4 px-4 py-2 block w-fit">Download CV</Link>
            </div>
            <div className="flex items-center imgview overflow-hidden justify-center">
                <div className="w-full md:w-[500px]">
                    <Lottie animationData={Animation} loop={true} />
                </div>
            </div>
        </div>
    </div>
  );
}
