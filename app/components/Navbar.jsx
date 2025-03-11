"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open,setOpen] = useState(false)
  return (
    <nav className={`${!open ? 'h-[50px]': 'h-[240px]'} fixed top-0 z-50 w-full duration-500 bg-[#20242d] text-white font-[family-name:var(--font-geist-sans)]`}>
     <div className="flex px-2 justify-between items-center container mx-auto">
      <Link href="/">
          <Image src="/logo.WebP" width={50} height={50} alt="logo" style={{ width: "auto", height: "auto" }} priority />
        </Link>
        <ul className="md:flex hidden gap-4">
          <Link aria-label="About" href="#About" className="hover:text-teal-300">about</Link>
          <Link aria-label="servecis" href="#services" className="hover:text-teal-300">Services</Link>
          <Link aria-label="project" href="#Projects" className="hover:text-teal-300">latest Project</Link>
          <Link aria-label="project" href="#Experience" className="hover:text-teal-300">Work Experience</Link>
          <Link aria-label="Contact" href="#Contact" className="hover:text-teal-300">Contact Us</Link>
        </ul>
        <button onClick={()=>{setOpen(prev => !prev)}} title="Toggle Menu" aria-label="Toggle Navigation" className="btn md:hidden btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <ul className={`absolute top-12 mx-auto transition-all delay-200 flex flex-col left-0 md:hidden overflow-hidden ${open ? `` : 'hidden' } p-2 rounded-sm w-full gap-2`}>
          <Link aria-label="About"   href="#About" className="hover:bg-[#323846] p-2">about</Link>
          <Link aria-label="servecis" href="#servecis" className="hover:bg-[#323846] p-2">Services</Link>
          <Link aria-label="project"  href="#project" className="hover:bg-[#323846] p-2">latest Project</Link>
          <Link aria-label="Contact"  href="#Contact" className="hover:bg-[#323846] p-2">Contact Us</Link>
        </ul>
     </div>
    </nav>
  );
}
