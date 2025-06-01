import React from 'react'
import {
    SiExpress, SiMongodb, SiNodedotjs, SiWordpress, SiZod, SiJest,
    SiStrapi, SiPhp, SiMysql, SiRedux, SiTailwindcss, SiTypescript,
    SiNextdotjs, SiGraphql, SiBootstrap
} from 'react-icons/si';
import { DiHtml5, DiCss3, DiJsBadge, DiReact } from 'react-icons/di';
import { FaGithub } from "react-icons/fa";
function CurentSkills() {
    const icons = [
        <DiHtml5 color="#e34c26" size={50} />,
        <SiZod color="#3B82F6" size={50} />,
        <DiCss3 color="#1572b6" size={50} />,
        <SiStrapi color="#1572b6" size={50} />,
        <SiRedux color="#764ABC" size={50} />,
        <SiWordpress color="#1572b6" size={50} />,
        <SiJest color="#e35b64" size={50} />,
        <FaGithub color="#000000" size={50} />,
        <DiJsBadge color="#f7df1e" size={50} />,
        <SiPhp color="#4F5D95" size={50} />,
        <SiMysql color="#00758F" size={50} />,
        <DiReact color="#61dbfb" size={50} />,
        <SiTailwindcss color="#38B2AC" size={50} />,
        <SiTypescript color="#3178C6" size={50} />,
        <SiNextdotjs color="#000000" size={50} />,
        <SiGraphql color="#E10098" size={50} />,
        <SiBootstrap color="#7952B3" size={50} />,
        <SiNodedotjs color="#339933" size={50} />,
        <SiExpress color="#fff" size={50} />,
        <SiMongodb color="#4DB33D" size={50} />,
        // <Image src="/logo.svg" alt='vite' width={50} height={50} />
    ];
    return (
        <div className='w-full bg-[#20242d] text-white/80 py-16'>
            <h1 className="text-3xl font-bold pb-16 text-center wave-text">Skills</h1>
            <div className='w-full container mx-auto p-10 md:p-3 flex gap-6 flex-wrap'>
                {icons.map((item, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        className='bg-[#323846] rounded-md w-fit p-4 text-center'
                    >
                        <div
                            className='icon'
                            style={{ animationDelay: `${index * 0.4}s` }}
                        >
                            {item}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CurentSkills
