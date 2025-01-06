export default function Contact() {
    return (
      <div id="content" className='bg-[#20242d] text-white py-16'>
        <h1 data-aos="fade-up" className='text-3xl font-bold pb-16 text-center'>Contact <span className='text-[#01f3f4]'>Me!</span></h1>    
        <form className="max-w-[800px] mx-auto text-center">
            <div data-aos="fade-up" className='grid grid-cols-1 container mx-auto p-3 sm:grid-cols-2 gap-5'>
                <input type="text" className="  caret-teal-400 bg-inputbg text-black" placeholder="First Name" />
                <input type="text" className="bg-inputbg  caret-teal-400 text-black" placeholder="Last Name"/>
            </div>
            <div data-aos="fade-up" className='grid grid-cols-1 container mx-auto p-3 sm:grid-cols-2 gap-5'>
                <input type="text" className="bg-inputbg text-black  caret-teal-400" placeholder="Subject" />
                <input type="email" className="bg-inputbg text-black  caret-teal-400" placeholder="Email"/>
            </div>
            <div data-aos="fade-up" className='container mx-auto p-3'>
                <textarea name="message" className= "caret-teal-400 bg-inputbg text-black focus:outline-none w-full min-h-48" placeholder="Type Your Message" ></textarea>
            </div>
            <input type="submit" data-aos="fade-up" className="bg-[#01f4f4ab] hover:bg-[#01f4f4c0] cursor-pointer rounded-md mt-4 px-4 py-2" value="Submite Message" />
        </form>
      </div>
    )
  }