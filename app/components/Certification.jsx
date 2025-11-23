import Image from "next/image";
import AnimatedHeader from "./Animationheader";
import { allCertifications } from "../data";

function Certification() {
  return (
    <>
      <AnimatedHeader
        Children={
          <div className=" text-white/80 py-16">
            <h1
              data-aos="fade-right"
              className="text-3xl font-bold pb-16 text-center text-white"
            >
              Certifications <span className="text-blue-500"></span>
            </h1>
            <div className="grid grid-cols-1 container mx-auto p-3 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {allCertifications.map((item) => (
                <div
                  key={item.id}
                  data-aos={item.dataAnimation}
                  className="bg-[#20242d] rounded-md p-4 text-center"
                >
                  <Image
                    src={item.src}
                    width={500}
                    height={300}
                    alt={item.alt}
                  />
                  <h2 className="text-xl pt-2 font-bold">{item.title}</h2>
                </div>
              ))}
            </div>
          </div>
        }
      />
    </>
  );
}

export default Certification;
