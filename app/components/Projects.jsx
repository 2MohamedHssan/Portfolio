import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
const projects = [
  { url: "https://techyardhub.com/", tools: ["React.js", "Tailwind"], imgsrc: "/Tech.png", pname: "TECH YARD HUB ", category: "Reactjs" },
  { url: "https://byload-uae.com/", tools: ["React.js", "Tailwind"], imgsrc: "/Byload.png", pname: "Bylaod ", category: "Reactjs" },
  { url: "#", tools: ["React.js", "Tailwind"], imgsrc: "/dashbordTech.png", pname: "Dashbord ", category: "Reactjs" },
  { url: "https://2mohamedhssan.github.io/EliteCorp/", imgsrc: "/Eipct1.png", pname: "EliteCorp", tools: ["HTML5", "TailwindCss", "JavaScript"], category: "JavaScript" },
  { url: "https://2mohamedhssan.github.io/Bondi/", imgsrc: "/bondi.png", tools: ["HTML5", "CSS3"], pname: "Bondi", category: "HTML&CSS" },
  { url: "https://2mohamedhssan.github.io/First-JsDesign/", imgsrc: "/swaping.png", tools: ["HTML5", "CSS3", "JavaScript"], pname: "JsDesign", category: "JavaScript" },
  { url: "https://2mohamedhssan.github.io/Dashboard-Design/index.html", tools: ["HTML5", "CSS3"], imgsrc: "/dashbord.png", pname: "Dashboard", category: "HTML&CSS" },
  { url: "https://github.com/2MohamedHssan/Next-app", tools: ["TailwindCss", "Next.js"], imgsrc: "/tow.jpg", pname: "Next-app", category: "Nextjs" },
  { url: "https://2mohamedhssan.github.io/Clipboard/", imgsrc: "/clipbord.png", tools: ["HTML5", "TailwindCss"], pname: "Clipboard", category: "HTML&CSS" },
  { url: "https://2mohamedhssan.github.io/Kasper-Design/", imgsrc: "/kasper.png", tools: ["HTML5", "CSS3"], pname: "Kasper", category: "HTML&CSS" },
  { url: "https://2mohamedhssan.github.io/First-Software-design/", tools: ["HTML5", "CSS3"], imgsrc: "/profirst.png", pname: "Company-portfolio", category: "HTML&CSS" },
  { url: "https://2mohamedhssan.github.io/Awesome-Design/", tools: ["HTML5", "CSS3"], imgsrc: "/tempthree.png", pname: "Design", category: "HTML&CSS" },
  { url: "https://telmeez-platform.vercel.app/", tools: ["Next.js", "Tailwind"], imgsrc: "/telmeez.png", pname: "Telmeez", category: "Nextjs" },
  { url: "https://portfolio-v418.vercel.app/", tools: ["Next.js", "Tailwind"], imgsrc: "/portoflio.png", pname: "myPortoflio", category: "Nextjs" },
  { url: "https://github.com/2MohamedHssan/DepoTask", tools: ["React.js", "Tailwind"], imgsrc: "/one.jpg", pname: "DepoTask", category: "Reactjs" },
  { url: "https://github.com/2MohamedHssan/Courses-front", tools: ["React.js", "Tailwind"], imgsrc: "/four.jpg", pname: "Courses-front", category: "Reactjs" },
  { url: "https://github.com/2MohamedHssan/Image-Gallery-app", tools: ["React.js", "Tailwind"], imgsrc: "/six.jpg", pname: "Image-Gallery-app", category: "Reactjs" },
];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "HTML&CSS", "JavaScript", "Reactjs", "Nextjs"];

  const handleCategoryChange = useCallback((category) => {
    setActiveCategory(category);
  }, []);

  const filteredProjects = activeCategory === "All" ? projects : projects.filter(project => project.category === activeCategory);

  return (
    <div id="Projects" className='bg-[#323846] text-white py-16'>
      <h1 data-aos="fade-down" className='text-3xl font-bold pb-16 text-center'>
        Latest <span className='text-[#01f3f4]'>Projects</span>
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-5 mb-4">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 border rounded-md ${activeCategory === category ? "bg-teal-500 text-black" : "bg-gray-700"}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className='grid grid-cols-1 container mx-auto p-3 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        {filteredProjects.map((project, index) => (
          <div data-aos="fade-up" key={index} className='bg-[#20242d] border border-teal-200 p-1 duration-300 rounded-md overflow-hidden'>
            <Link href={project.url} rel="preload" className="h-64 relative block our-work" data-app={project.pname} >
              <Image className=" h-full w-full transition-all duration-500 ease-in-out transform hover:scale-105" src={project.imgsrc} width={300} height={300} alt={project.pname} />
            </Link>
            <p className="border-b-[1px] border-t-[1px] w-full p-2 my-3 bg-gray-900">{project.pname}</p>
            <div className="flex gap-2 flex-wrap justify-center">
              {project.tools.map((tool, i) => (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  key={i} className="border-[1px] rounded-md px-2 mb-2 bg-teal-900 text-sm">
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
