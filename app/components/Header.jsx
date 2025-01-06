import Link from "next/link";
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
export default function Header() {
  return (
    <div className="bg-[#20242d] text-white px-2 py-8 md:py-20">
        <div className="flex justify-between w-full container mx-auto font-[family-name:var(--font-geist-sans)]">
            <div >
                <p data-aos="fade-right">Hello, It's Me</p> 
                <h1 data-aos="zoom-in" className="text-3xl font-bold">Mohamed Hassan</h1>
                <p data-aos="zoom-in">I'm A <span className="text-[#01f3f4] font-bold text-xl">Front End Developer</span></p>
                <p data-aos="zoom-in" className="md:max-w-64 lg:max-w-full">
                    with a passion for creating responsive and
                    user-friendly websites.
                </p>
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
            <div data-aos="fade-up" className=" hidden md:flex items-center imgview overflow-hidden justify-center rounded-lg border-8 border-teal-400 rotate-6 w-72 h-72">
                <div className="rounded-lg border-8 z-20 flex justify-center items-center border-teal-400 w-64 h-64">
                    <div className="rounded-lg border-8 z-20 flex justify-center items-center border-teal-400 w-56 h-56">
                        <div className="rounded-lg border-8 z-20 flex justify-center items-center border-teal-400 w-48 h-48">
                            <div className="rounded-lg border-8 z-20 flex justify-center items-center border-teal-400 w-40 h-40">
                                <div className="rounded-lg border-8 z-20 flex justify-center items-center border-teal-400 w-36 h-36">
                                    <div className="rounded-lg border-8 z-20 flex justify-center items-center border-teal-400 w-28 h-28">
                                        <div className="rounded-lg border-8 z-20 flex justify-center items-center border-teal-400 w-20 h-20">
                                            <img src="mohamed.png" className="max-w-[500px] ml-6 mt-12" alt="mohamed" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
