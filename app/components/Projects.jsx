import Link from "next/link"

function Projects() {
  return (
    <section>
        <div className='dark:bg-[#323846] dark:text-white bg-second-bg py-16'>
      <h1 className='text-3xl font-bold pb-16 text-center'>Latest <span className='text-[#01f3f4]'>Project</span></h1>
      <div className='grid grid-cols-1 container mx-auto p-3 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        <div className='bg-[#20242d] rounded-md overflow-hidden text-center'>
        <Link href="#"><img src="one.jpg" alt="one" /></Link>
        </div>
        <div className='bg-[#20242d] rounded-md overflow-hidden text-center'>
        <Link href="#"><img src="tow.jpg" alt="tow" /></Link>
        </div>
        <div className='bg-[#20242d] rounded-md overflow-hidden text-center'>
        <Link href="#"><img src="three.jpg" alt="three" /></Link>
        </div>
        <div className='bg-[#20242d] rounded-md overflow-hidden text-center'>
        <Link href="#"><img src="four.jpg" alt="four" /></Link>
        </div>
        <div className='bg-[#20242d] rounded-md overflow-hidden text-center'>
            <Link href="#"><img src="three.jpg" alt="five" /></Link>
        </div>
        <div className='bg-[#20242d] rounded-md overflow-hidden text-center'>
            <Link href="https://next-krye83eln-mohamed-hassans-projects-32952eb6.vercel.app/"><img src="tow.jpg" alt="six" /></Link>
        </div>

      </div>
    </div>
    </section>
  )
}

export default Projects
