import Link from "next/link";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";

function layout({ children }) {
  return (
    <div className="relative max-h-screen min-h-screen overflow-auto bg-[#0a0a0a] text-white flex">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-h-screen hidden h-screen overflow-auto min-w-52 p-4 bg-neutral-900 md:block">
        <Link
          prefetch
          href={"/"}
          className="flex gap-4 hover:ml-1 items-center"
        >
          <BsArrowLeft /> Home
        </Link>
        <h1 className=" text-center py-4 text-xl"> Category</h1>
        <div className="py-4 flex flex-col gap-5 text-gray-300">
          <div>
            <Link
              prefetch
              href={"/animations"}
              className="hover:text-orange-600"
            >
              Css Aniamtion
            </Link>{" "}
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4">{children}</div>
    </div>
  );
}

export default layout;
