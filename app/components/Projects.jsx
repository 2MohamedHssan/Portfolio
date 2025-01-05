import Link from "next/link"

function Projects() {
  return (
    <section>
        <div className='dark:bg-[#323846] dark:text-white bg-second-bg py-16'>
      <h1 className='text-3xl font-bold pb-16 text-center'>Latest <span className='text-[#01f3f4]'>Project</span></h1>
      <div className='grid grid-cols-1 container mx-auto p-3 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        <div className='bg-[#20242d] rounded-md overflow-hidden text-center'>
        <Link href="https://2mohamedhssan.github.io/EliteCorp/"><img className="h-64" src="Eipct1.png" alt="one" target="_blank" /></Link>
        </div>
        <div className='bg-[#20242d] rounded-md overflow-hidden text-center'>
        <Link href="https://2mohamedhssan.github.io/Bondi/"><img className="h-64" src="bondi.png" alt="tow" target="_blank" /></Link>
        </div>
        <div className='bg-[#20242d] rounded-md overflow-hidden text-center'>
        <Link href="https://2mohamedhssan.github.io/First-JsDesign/"><img src="swaping.png" className="h-64" alt="three" target="_blank" /></Link>
        </div>
        <div className='bg-[#20242d] rounded-md overflow-hidden text-center'>
        <Link href="https://2mohamedhssan.github.io/Dashboard-Design/index.html"><img src="dashbord.png" className="h-64" alt="four" target="_blank" /></Link>
        </div>
        <div className='bg-[#20242d] rounded-md overflow-hidden text-center'>
            <Link href="#"><img src="three.jpg" alt="five" target="_blank" /></Link>
        </div>
        <div className='bg-[#20242d] rounded-md overflow-hidden text-center'>
            <Link href="https://next-krye83eln-mohamed-hassans-projects-32952eb6.vercel.app/" target="_blank"><img src="tow.jpg" alt="six" /></Link>
        </div>
        <div className='bg-[#20242d] rounded-md overflow-hidden text-center'>
            <Link href="https://2mohamedhssan.github.io/Clipboard/" target="_blank"><img src="clipbord.png" className="h-64" alt="esven" /></Link>
        </div>
        <div className='bg-[#20242d] rounded-md overflow-hidden text-center'>
            <Link href="https://2mohamedhssan.github.io/Kasper-Design/" target="_blank"><img className="h-64" src="kasper.png" alt="eaght" /></Link>
        </div>
        <div className='bg-[#20242d] rounded-md overflow-hidden text-center'>
            <Link href="https://2mohamedhssan.github.io/First-Software-design/" target="_blank"><img className="h-64" src="profirst.png" alt="eaght" /></Link>
        </div>
        <div className='bg-[#20242d] rounded-md overflow-hidden text-center'>
            <Link href="https://2mohamedhssan.github.io/Awesome-Design/" target="_blank"><img className="h-64" src="tempthree.png" alt="eaght" /></Link>
        </div>

      </div>
    </div>
    </section>
  )
}

export default Projects
