import React from "react";
import AnimationCard from "../components/AnimationCard";
import { Animations } from "../AnimationData";
import Link from "next/link";

function page() {
  return (
    <div className="flex-1 overflow-auto p-4">
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))]">
        {Animations.map((Animation, index) => (
          <Link prefetch key={index} href={`/animations/${Animation.id}`}>
            <AnimationCard
              animationName={Animation.title}
              Animation={Animation.animation}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default page;
