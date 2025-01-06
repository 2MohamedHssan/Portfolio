"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open,setOpen] = useState(false)
  const openMenuo = ()=>{
    setOpen(!open)
  }
  return (
    <nav className={`${!open ? 'h-[50px]': 'h-[150px]'} fixed top-0 z-50 w-full duration-500 dark:bg-[#20242d] bg-firstbg dark:text-white text-black font-[family-name:var(--font-geist-sans)]`}>
     <div className="flex p-2 justify-between items-center container mx-auto">
      <Link href="/">
          Mohamed.
        </Link>
        <ul className="md:flex hidden gap-4">
          <Link href="#About">about</Link>
          <Link href="#servecis">Services</Link>
          <Link href="#project">latest Project</Link>
          <Link href="#content">Content Us</Link>
        </ul>
        <button onClick={openMenuo} title="compo" className="btn md:hidden btn-square btn-ghost">
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
        <ul className={`absolute top-8 mx-auto left-0 border-b-2 border-b-white/50 md:hidden overflow-hidden ${open ? `` : 'hidden' } p-2 rounded-sm w-full gap-4`}>
          <li className="hover:bg-[#323846]">about</li>
          <li className="hover:bg-[#323846]">Services</li>
          <li className="hover:bg-[#323846]">latest work</li>
          <li className="hover:bg-[#323846]">Content</li>
        </ul>
     </div>
    </nav>
  );
}
