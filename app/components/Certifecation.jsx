import React from 'react'

function Certifecation() {
  return (
    <div className='bg-[#323846] text-white/80 py-16'>
      <h1 data-aos="fade-right" className='text-3xl font-bold pb-16 text-center text-white'>Certifecations <span className='text-[#01f3f4]'></span></h1>
      <div className='grid grid-cols-1 container mx-auto p-3 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        <div data-aos="fade-down" className='bg-[#20242d] rounded-md p-4 text-center'>
          <img src="/web.jpg" alt="web" />
          <h2 className='text-xl pt-2 font-bold'>Web Design</h2>
        </div>
        <div data-aos="fade-down" className='bg-[#20242d] rounded-md p-4 text-center'>
          <img src="/photoshop.jpg" alt="web" />
          <h2 className='text-xl pt-2 font-bold'>Adobe Photoshop</h2>
        </div>
        <div data-aos="fade-down" className='bg-[#20242d] rounded-md p-4 text-center'>
          <img src="/IT.jpg" alt="web" />
          <h2 className='text-xl pt-2 font-bold'>IT Support</h2>
        </div>
      </div>
    </div>
  )
}

export default Certifecation
