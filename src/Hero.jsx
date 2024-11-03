import { FaChevronRight, FaMinus, FaArrowRight } from "react-icons/fa";
import heroImg from "./assets/images/hero_img.png";
import { useEffect } from "react";
import { gsap } from "gsap";

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      ".hero-heading",
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      ".hero-subheading",
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      ".hero-buttons",
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.6,
        ease: "power2.out",
        stagger: 0.2,
      }
    );

    gsap.fromTo(
      ".hero-image",
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.9,
        ease: "power2.out",
      }
    );
  }, []);
  return (
    <main className="lg:px-20 px-8 lg:py-14 py-8 flex flex-col items-center w-full">
      <div className="flex text-xs font-medium items-center gap-2 border border-gray-300 rounded-full px-3 py-2">
        <p className="text-primary">We're Open Source</p>
        <FaMinus className="rotate-90  text-gray-400" />
        <span className="flex items-center text-gray-400">
          <p>Star us on Github</p>
          <FaChevronRight className="" />
        </span>
      </div>
      <div className="lg:py-10 py-6 font-bold lg:w-3/5 w-full text-center leading-tight">
        <h1 className="lg:text-6xl text-3xl hero-heading">
          Project management tool from the future.
        </h1>
        <p className="lg:text-sm text-xs font-normal pt-3 leading-loose hero-subheading">
          Meet Plane. An open-source software development tool to manage issues,
          sprints, and product roadmaps with peace of mind.
        </p>
        <div className="flex justify-center text-xs font-semibold pt-5 hero-buttons">
          <button className="bg-primary text-white px-4 py-2 rounded-md">
            Get started in 30 seconds
          </button>
          <button className="px-4 py-2 rounded-md flex items-center gap-1">
            Book a demo <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImg} alt="" />
      </div>
    </main>
  );
};

export default Hero;
