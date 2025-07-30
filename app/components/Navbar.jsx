"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import AnimatedHeader from "./Animationheader";

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scroll, setScroll] = useState(false)
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handler = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollWidth(scrolled);

      if (window.scrollY > 20) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler);
  }, [])

  return (
    <div className="sticky top-0 z-50 ">
      <AnimatedHeader Children={(
    <nav className={`md:p-2 w-full duration-500 ${scroll && "bg-black/90"} text-white lg:text-lg font-[family-name:var(--font-geist-sans)]`}>
      <div className={`h-[2px] left-0 bg-teal-300 fixed md:top-[62px] top-12`} style={{ width: `${scrollWidth}%` }}></div>
      <div className="flex px-2 md:px-0 justify-between items-center container mx-auto">
        <Link href="/">
          <Image src="/logo.WebP" width={50} height={50} alt="logo" />
        </Link>
        <ul className="md:flex hidden gap-4">
          <Link aria-label="About" href="#About" className="hover:text-teal-300">About</Link>
          <Link aria-label="servecis" href="#services" className="hover:text-teal-300">Services</Link>
          <Link aria-label="project" href="#Projects" className="hover:text-teal-300">Project</Link>
          <Link aria-label="project" href="#experience" className="hover:text-teal-300">Work Experience</Link>
          <Link aria-label="Contact" href="#Contact" className="hover:text-teal-300">Contact Me</Link>
        </ul>
        <button onClick={() => { setOpen(prev => !prev) }} title="Toggle Menu" aria-label="Toggle Navigation" className="btn md:hidden btn-square btn-ghost">
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
        <ul className={`absolute ${scroll ? "bg-black/90" : "bg-[#20242d]"} top-12 px-auto transition-all delay-200 flex flex-col left-0 md:hidden overflow-hidden ${open ? `h-60 block` : 'h-0 hidden'} p-2 rounded-sm w-full gap-2`}>
          <Link aria-label="About" href="#About" onClick={_ => setOpen(false)} className="hover:bg-[#323846] p-2">About</Link>
          <Link aria-label="project" href="#experience" onClick={_ => setOpen(false)} className="hover:bg-[#323846] p-2">Work Experience</Link>
          <Link aria-label="servecis" href="#services" onClick={_ => setOpen(false)} className="hover:bg-[#323846] p-2">Services</Link>
          <Link aria-label="project" href="#Projects" onClick={_ => setOpen(false)} className="hover:bg-[#323846] p-2">Project</Link>
          <Link aria-label="Contact" href="#Contact" onClick={_ => setOpen(false)} className="hover:bg-[#323846] p-2">Contact Me</Link>
        </ul>
      </div>
    </nav>
      )}/>
    </div>

  );
}
