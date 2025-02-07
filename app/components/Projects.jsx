import { useState } from "react";
import Link from "next/link";

const projects = [
  { url: "https://2mohamedhssan.github.io/EliteCorp/", imgsrc: "Eipct1.png", pname: "EliteCorp", tools: ["HTML5", "TailwindCss", "JavaScript"], category: "HTML&CSS&JS" },
  { url: "https://2mohamedhssan.github.io/Bondi/", imgsrc: "bondi.png", tools: ["HTML5", "CSS3"], pname: "Bondi", category: "HTML&CSS" },
  { url: "https://2mohamedhssan.github.io/First-JsDesign/", imgsrc: "swaping.png", tools: ["HTML5", "CSS3", "JavaScript"], pname: "JsDesign", category: "HTML&CSS&JS" },
  { url: "https://2mohamedhssan.github.io/Dashboard-Design/index.html", tools: ["HTML5", "CSS3"], imgsrc: "dashbord.png", pname: "Dashboard", category: "HTML&CSS" },
  { url: "https://next-krye83eln-mohamed-hassans-projects-32952eb6.vercel.app/", tools: ["HTML5", "CSS3", "Nextjs"], imgsrc: "tow.jpg", pname: "testNext-app", category: "Nextjs" },
  { url: "https://2mohamedhssan.github.io/Clipboard/", imgsrc: "clipbord.png", tools: ["HTML5", "TailwindCss"], pname: "Clipboard", category: "HTML&CSS" },
  { url: "https://2mohamedhssan.github.io/Kasper-Design/", imgsrc: "kasper.png", tools: ["HTML5", "CSS3"], pname: "Kasper", category: "HTML&CSS" },
  { url: "https://2mohamedhssan.github.io/First-Software-design/", tools: ["HTML5", "CSS3"], imgsrc: "profirst.png", pname: "Company-portfolio", category: "HTML&CSS" },
  { url: "https://2mohamedhssan.github.io/Awesome-Design/", tools: ["HTML5", "CSS3"], imgsrc: "tempthree.png", pname: "Design", category: "HTML&CSS" },
  { url: "https://telmeez-platform.vercel.app/", tools: ["Next", "tailwind"], imgsrc: "telmeez.png", pname: "telmeez", category: "Nextjs" },
  { url: "https://2mohamedhssan.github.io/", tools: ["There are more projects using React and Next.js but not deployed yet!"], imgsrc: "one.jpg", pname: "All", category: "Reactjs" }
];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "HTML&CSS", "HTML&CSS&JS", "Reactjs", "Nextjs"];

  const filteredProjects = activeCategory === "All" ? projects : projects.filter(project => project.category === activeCategory);

  return (
    <div className='bg-[#323846] text-white bg-second-bg py-16'>
      <h1 data-aos="fade-down" className='text-3xl font-bold pb-16 text-center'>
        Latest <span className='text-[#01f3f4]'>Project</span>
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-5 mb-4">
        {categories.map((category, index) => (
          <button 
            key={index}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 border rounded-md ${activeCategory === category ? "bg-teal-500 text-black" : "bg-gray-700"}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className='grid grid-cols-1 container mx-auto p-3 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        {filteredProjects.map((project, index) => (
          <div data-aos="fade-up" key={index} className='bg-[#20242d] border border-teal-200 p-1 hover:scale-110 transition-transform duration-300 rounded-md overflow-hidden text-center'>
            <Link rel="preload" href={project.url}>
              <img className="h-64 w-full" src={project.imgsrc} alt={`projectImg-${index + 1}`} />
            </Link>
            <p className="border-b-[1px] border-t-[1px] w-full p-2 my-3 bg-gray-900">{project.pname}</p>
            <div className="flex gap-2 flex-wrap justify-center">
              {project.tools.map((tool, i) => (
                <span key={i} className="border-[1px] rounded-md px-2 mb-2 bg-teal-900 text-sm">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
