import Link from "next/link"
const projects={
  one:{
    url:"https://2mohamedhssan.github.io/EliteCorp/",
    imgsrc:'Eipct1.png',
  },
  tow:{
    url:"https://2mohamedhssan.github.io/Bondi/",
    imgsrc:'bondi.png',
  },
  three:{
    url:"https://2mohamedhssan.github.io/First-JsDesign/",
    imgsrc:'swaping.png',
  },
  four:{
    url:"https://2mohamedhssan.github.io/Dashboard-Design/index.html",
    imgsrc:'dashbord.png',
  },
  five:{
    url:"https://next-krye83eln-mohamed-hassans-projects-32952eb6.vercel.app/",
    imgsrc:'tow.jpg',
  },
  six:{
    url:"https://2mohamedhssan.github.io/Clipboard/",
    imgsrc:'clipbord.png',
  },
  seven:{
    url:"https://2mohamedhssan.github.io/Kasper-Design/",
    imgsrc:'kasper.png',
  },
  tow:{
    url:"https://2mohamedhssan.github.io/First-Software-design/",
    imgsrc:'profirst.png',
  },
  tow:{
    url:"https://2mohamedhssan.github.io/Awesome-Design/",
    imgsrc:'tempthree.png',
  },
}

function Projects() {
  return (
    <div className='bg-[#323846] text-white bg-second-bg py-16'>
      <h1 data-aos="fade-down" className='text-3xl font-bold pb-16 text-center'>Latest <span className='text-[#01f3f4]'>Project</span></h1>
      <div className='grid grid-cols-1 container mx-auto p-3 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        
        {Object.values(projects).map((project,index)=>(
          <div data-aos="fade-up" key={index} className='bg-[#20242d] border border-teal-200 p-1 hover:scale-125 transition-transform duration-300 rounded-md overflow-hidden text-center'>
            <Link href={project.url}><img className="h-64" src={`${project.imgsrc}`} alt={`projectImg-${index + 1 }`} target="_blank" /></Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
