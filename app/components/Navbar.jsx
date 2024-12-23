"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open,setOpen] = useState(false)
  const openMenuo = ()=>{
    setOpen(!open)
  }
  return (
    <nav className={`${!open ? 'h-[50px]': 'h-[150px]'} duration-500 dark:bg-[#20242d] bg-firstbg dark:text-white text-black font-[family-name:var(--font-geist-sans)]`}>
     <div className="flex p-2 justify-between items-center container mx-auto">
      <Link href="/">
          Mohamed.
        </Link>
        <ul className="md:flex hidden gap-4">
          <li href="/">about</li>
          <li href="/">Services</li>
          <li href="/">latest work</li>
          <li href="/">Content</li>
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
        <ul className={`absolute top-8 text-center mx-auto left-0 border-b-2 border-b-white/50 md:hidden overflow-hidden ${open ? `` : 'hidden' } dark:bg-[#232730] p-2 rounded-sm w-full gap-4`}>
          <li>about</li>
          <li>Services</li>
          <li>latest work</li>
          <li>Content</li>
        </ul>
     </div>
    </nav>
  );
}
