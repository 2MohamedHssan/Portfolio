export default function Contact() {
    return (
      <div className='dark:bg-[#20242d] dark:text-white bg-secondbg py-16'>
        <h1 className='text-3xl font-bold pb-16 text-center'>Contact <span className='text-[#01f3f4]'>Me!</span></h1>    
        <form className="max-w-[800px] mx-auto text-center">
            <div className='grid grid-cols-1 container mx-auto p-3 sm:grid-cols-2 gap-5'>
                <input type="text" className="  dark:caret-teal-400 caret-green-400 dark:bg-inputbg bg-white text-black" placeholder="First Name" />
                <input type="text" className="dark:bg-inputbg  dark:caret-teal-400 caret-green-400 bg-white text-black" placeholder="Last Name"/>
            </div>
            <div className='grid grid-cols-1 container mx-auto p-3 sm:grid-cols-2 gap-5'>
                <input type="text" className="dark:bg-inputbg bg-white text-black  dark:caret-teal-400 caret-green-400" placeholder="Subject" />
                <input type="email" className="dark:bg-inputbg bg-white text-black  dark:caret-teal-400 caret-green-400" placeholder="Email"/>
            </div>
            <div className='container mx-auto p-3'>
                <textarea name="message" className= "dark:caret-teal-400 caret-green-400 dark:bg-inputbg bg-white text-black focus:outline-none w-full min-h-48" placeholder="Type Your Message" ></textarea>
            </div>
            <input type="submit" className="bg-[#01f4f4ab] hover:bg-[#01f4f4c0] cursor-pointer rounded-md mt-4 px-4 py-2" value="Submite Message" />
        </form>
      </div>
    )
  }