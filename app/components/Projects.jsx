import { useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedHeader from "./Animationheader";
import { projects } from "../data";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = [
    "All",
    "HTML&CSS",
    "JavaScript",
    "Reactjs",
    "Nextjs",
    "Games",
  ];

  const handleCategoryChange = useCallback((category) => {
    setActiveCategory(category);
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <AnimatedHeader
        Children={
          <div id="Projects" className=" text-white py-16">
            <h1
              data-aos="fade-down"
              className="text-3xl font-bold pb-16 text-center"
            >
              Latest <span className="text-[#01f3f4]">Projects</span>
            </h1>

            <div className="flex flex-wrap justify-center items-center gap-5 mb-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 border rounded-md ${
                    activeCategory === category
                      ? "bg-teal-500 text-black"
                      : "bg-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 container mx-auto p-3 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {filteredProjects.map((project, index) => (
                <div
                  data-aos="flip-left"
                  data-aos-delay={index * 0.1}
                  key={index}
                  className="bg-[#20242d] border border-teal-200 p-1 duration-300 rounded-md overflow-hidden"
                >
                  <a
                    target="_blanck"
                    href={project.url}
                    rel="preload"
                    className="h-64 relative block our-work"
                    data-app={project.pname}
                  >
                    <Image
                      className=" h-full w-full transition-all duration-500 ease-in-out transform hover:scale-105"
                      src={project.imgsrc}
                      width={300}
                      height={300}
                      alt={project.pname}
                    />
                  </a>
                  <p className="border-b-[1px] border-t-[1px] w-full p-2 my-3 bg-gray-900">
                    {project.pname}
                  </p>
                  <div className="flex gap-2 flex-wrap justify-center">
                    {project.tools.map((tool, i) => (
                      <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        key={i}
                        className="border-[1px] rounded-md px-2 mb-2 bg-teal-900 text-sm"
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        }
      />
    </>
  );
}

export default Projects;
