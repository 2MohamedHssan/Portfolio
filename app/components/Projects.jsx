import Link from "next/link"
const projects=[
  {
    url:"https://2mohamedhssan.github.io/EliteCorp/",
    imgsrc:'Eipct1.png',
    pname:'one',
    tools:['HTML5' , 'CSS3'],
  },
  {
    url:"https://2mohamedhssan.github.io/Bondi/",
    imgsrc:'bondi.png',
    tools:['HTML5' , 'CSS3'],
    pname:'tow'
  },
  {
    url:"https://2mohamedhssan.github.io/First-JsDesign/",
    imgsrc:'swaping.png',
    tools:['HTML5' , 'CSS3'],
    pname:'three'
  },
  {
    url:"https://2mohamedhssan.github.io/Dashboard-Design/index.html",
    tools:['HTML5' , 'CSS3'],
    imgsrc:'dashbord.png',
    pname:'four'
  },
  {
    url:"https://next-krye83eln-mohamed-hassans-projects-32952eb6.vercel.app/",
    tools:['HTML5' , 'CSS3'],
    imgsrc:'tow.jpg',
    pname:'five'
  },
  {
    url:"https://2mohamedhssan.github.io/Clipboard/",
    imgsrc:'clipbord.png',
    tools:['HTML5' , 'TailwindCss'],
    pname:'six'
  },
  {
    url:"https://2mohamedhssan.github.io/Kasper-Design/",
    imgsrc:'kasper.png',
    tools:['HTML5' , 'CSS3'],
    pname:'seven'
  },
  {
    url:"https://2mohamedhssan.github.io/First-Software-design/",
    tools:['HTML5' , 'CSS3'],
    imgsrc:'profirst.png',
    pname:'egiht'
  },
  {
    url:"https://2mohamedhssan.github.io/Awesome-Design/",
    tools:['HTML5' , 'CSS3'],
    imgsrc:'tempthree.png',
    pname:'nigen'
  },
]

function Projects() {
  return (
    <div className='bg-[#323846] text-white bg-second-bg py-16'>
      <h1 data-aos="fade-down" className='text-3xl font-bold pb-16 text-center'>Latest <span className='text-[#01f3f4]'>Project</span></h1>
      <div className='grid grid-cols-1 container mx-auto p-3 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        
        {projects.map((project,index)=>(
          <div data-aos="fade-up" key={index} className='bg-[#20242d] border border-teal-200 p-1 hover:scale-125 transition-transform duration-300 rounded-md overflow-hidden text-center'>
          <div>
          <Link href={project.url}><img className="h-64 w-full " src={`${project.imgsrc}`} alt={`projectImg-${index + 1 }`} target="_blank" /></Link>
          <div className="flex gap-4 items-center">
          <p className="border-[1px] rounded-md w-fit px-2 m-3 bg-teal-900">{project.pname}</p>
          {project.tools.map((tool,i)=>(
            <div key={i} className="border-[1px] rounded-md w-fit px-2 m-3 bg-teal-900">
              <p>{tool}</p>
            </div>
          ))}
          </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
