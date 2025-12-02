"use client";

import { Animations } from "@/app/AnimationData";
import AnimationCard from "@/app/components/AnimationCard";
import CodeSnippet from "@/app/components/Animations/HTMLText";
import { useParams } from "next/navigation";
import React from "react";

function page() {
  const { AnimationId } = useParams();
  const FiltersAnimation = Animations.filter(
    (animation) => animation.id == AnimationId
  );

  if (FiltersAnimation.length < 1) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white flex justify-center items-center">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
        <div className="text-5xl">Animation Not Found! </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden text-white flex flex-col">
      <div>{/* <video src="https://youtube.com/@MHDevWeb"></video> */}</div>
      <div className="mx-auto pt-6">
        <AnimationCard
          animationName={FiltersAnimation?.[0]?.title}
          Animation={FiltersAnimation?.[0]?.animation}
        />
      </div>
      <CodeSnippet
        htmlCode={FiltersAnimation?.[0]?.html}
        cssCode={FiltersAnimation?.[0]?.css}
      />
    </div>
  );
}

export default page;
