import React from "react";
import AnimatedHeader from "./Animationheader";
import { skills } from "../data";

function CurentSkills() {
  return (
    <>
      <AnimatedHeader
        Children={
          <section className="py-12 px-6 text-white">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-10">My Skills</h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                  <div
                    data-aos="flip-left"
                    data-aos-delay={index * 0.1}
                    key={index}
                    className={`bg-[#323846] icon-glow hover:border-2 border-teal-400 transition-all dur rounded-md p-6 shadow hover:scale-105 duration-300 text-center ${
                      skill.curent ? "bg-teal-700" : ""
                    }`}
                  >
                    <div className="mb-4 flex justify-center">{skill.icon}</div>
                    <h3 className="text-lg font-semibold mb-1">
                      {skill.title}
                    </h3>
                    <p className="text-sm text-gray-300">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        }
      />
    </>
  );
}

export default CurentSkills;
