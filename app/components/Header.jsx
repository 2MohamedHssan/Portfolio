import { Typewriter } from "react-simple-typewriter";
import dynamic from "next/dynamic";
import Animation from "../animation.json";
import AnimatedHeader from "./Animationheader";
import { links } from "../data";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Header() {
  return (
    // <>
    <AnimatedHeader
      hight={true}
      view={true}
      Children={
        <section className="flex flex-col md:flex-row justify-between items-start md:items-center w-full container gap-3 mx-auto font-[family-name:var(--font-geist-sans)]">
          <div className="px-2">
            <p data-aos="fade-right"> Hello, It's Me </p>
            <h1 className="text-3xl font-bold py-2 text-flicker-in-glow md:text-5xl lg:text-7xl">
              MOHAMED HASSAN
            </h1>
            <span
              data-aos="zoom-in"
              className="text-[#01f3f4] max-w-60 font-bold text-xl"
            >
              I am a Full Stack Developer
              <Typewriter
                words={[" Strapi", " Reactjs || Next & TailwindCss"]}
                loop={Infinity}
                cursor={true}
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={100}
                delaySpeed={1000}
              />
            </span>
            <div data-aos="fade-up" className="flex gap-3 text-xl mt-4">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.src}
                  aria-label={link.lable}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="w-full md:w-[400px]">
            <Lottie animationData={Animation} loop={true} />
          </div>
        </section>
      }
    />
    // </>
  );
}
