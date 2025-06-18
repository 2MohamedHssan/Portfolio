import React from 'react'
import {
    SiExpress, SiMongodb, SiNodedotjs, SiWordpress, SiZod, SiJest,
    SiStrapi, SiPhp, SiMysql, SiRedux, SiTailwindcss, SiTypescript,
    SiNextdotjs, SiGraphql, SiBootstrap
} from 'react-icons/si';
import { DiHtml5, DiCss3, DiJsBadge, DiReact } from 'react-icons/di';
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';
export const skills = [
    {
        icon: <DiHtml5 size={40} className="text-[#e34c26]" />,
        title: 'HTML5',
        curent: true,
        description: 'Semantic structure and accessibility.',
    },
    {
        icon: <SiJest size={40} className="text-[#e35b64]" />,
        title: 'Jest',
        curent: false,
        description: 'Unit testing framework for JavaScript.',
    },
    {
        icon: <SiZod size={40} className="text-[#3B82F6]" />,
        title: 'Zod',
        curent: true,
        description: 'Schema validation for TypeScript.',
    },
    {
        icon: <SiStrapi size={40} className="text-[#8e75ff]" />,
        title: 'Strapi',
        curent: false,
        description: 'Headless CMS for custom APIs.',
    },
    {
        icon: <FaGithub size={40} className="text-[#000]" />,
        title: 'GitHub',
        description: 'Version control and collaboration.',
    },
    {
        icon: <DiCss3 size={40} className="text-[#1572b6]" />,
        title: 'CSS3',
        curent: true,
        description: 'Responsive styling and animations.',
    },
    {
        icon: <SiWordpress size={40} className="text-[#1572b6]" />,
        title: 'WordPress',
        curent: false,
        description: 'Flexible CMS for custom sites.',
    },

    {
        icon: <SiRedux size={40} className="text-[#764ABC]" />,
        title: 'Redux',
        curent: true,
        description: 'Predictable state container for JS apps.',
    },
    {
        icon: <DiJsBadge size={40} className="text-[#f7df1e]" />,
        title: 'JavaScript',
        curent: true,
        description: 'Core scripting language for the web.',
    },
    {
        icon: <SiPhp size={40} className="text-[#4F5D95]" />,
        title: 'PHP',
        curent: false,
        description: 'Backend scripting for dynamic sites.',
    },
    {
        icon: <DiReact size={40} className="text-[#61dbfb]" />,
        title: 'React',
        curent: true,
        description: 'Modern component-based UI development.',
    },
    {
        icon: <SiMysql size={40} className="text-[#00758F]" />,
        title: 'MySQL',
        curent: false,
        description: 'Structured database management.',
    },
    {
        icon: <SiNextdotjs size={40} className="text-[#000]" />,
        title: 'Next.js',
        curent: false,
        description: 'React framework for SSR & routing.',
    },
    {
        icon: <SiTypescript size={40} className="text-[#3178C6]" />,
        title: 'TypeScript',
        curent: true,
        description: 'Typed superset of JavaScript.',
    },


    {
        icon: <SiGraphql size={40} className="text-[#E10098]" />,
        title: 'GraphQL',
        curent: false,
        description: 'Query language for flexible APIs.',
    },
    {
        icon: <SiTailwindcss size={40} className="text-[#38B2AC]" />,
        title: 'Tailwind CSS',
        curent: true,
        description: 'Utility-first framework for fast styling.',
    },
    {
        icon: <Image src="/logo.svg" alt="Vite" width={40} height={40} />,
        title: 'Vite',
        curent: true,
        description: 'Fast build tool for modern frontends.',
    },
    {
        icon: <SiBootstrap size={40} className="text-[#7952B3]" />,
        title: 'Bootstrap',
        curent: false,
        description: 'Quick responsive design components.',
    },
    {
        icon: <SiNodedotjs size={40} className="text-[#339933]" />,
        title: 'Node.js',
        curent: true,
        description: 'JavaScript runtime for servers.',
    },
    {
        icon: <SiExpress size={40} className="text-white" />,
        title: 'Express.js',
        curent: false,
        description: 'Minimalist backend framework.',
    },
    {
        icon: <SiMongodb size={40} className="text-[#4DB33D]" />,
        title: 'MongoDB',
        curent: false,
        description: 'NoSQL database for scalable apps.',
    },
];
function CurentSkills() {
    return (
        <section className="bg-[#1f2937] py-12 px-6 text-white">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-10">My Skills</h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            data-aos="fade-up"

                            key={index}
                            className={`bg-[#323846] icon-glow hover:border-2 border-teal-400 transition-all dur rounded-md p-6 shadow hover:scale-105 duration-300 text-center ${skill.curent ? 'bg-teal-700' : ''}`}
                        >
                            <div className="mb-4 flex justify-center">{skill.icon}</div>
                            <h3 className="text-lg font-semibold mb-1">{skill.title}</h3>
                            <p className="text-sm text-gray-300">{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CurentSkills
