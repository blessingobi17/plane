import { FaArrowRight } from "react-icons/fa";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Setup = () => {
  useEffect(() => {
    gsap.fromTo(
      ".setup-heading",
      {
        opacity: 0,
        y: 50,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".setup-heading",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      ".setup-subheading",
      {
        opacity: 0,
        y: 50,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        delay: 0.1,
        scrollTrigger: {
          trigger: ".setup-heading",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      ".setup-buttons",
      {
        opacity: 0,
        y: 50,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        delay: 0.6,
        scrollTrigger: {
          trigger: ".setup-heading",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      ".setup-quote",
      {
        opacity: 0,
        y: 50,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.3,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".setup-quote",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <main className="lg:px-20 px-8 lg:py-14 py-8 flex flex-col w-full">
      <section className="bg-dark rounded-3xl py-16 lg:px-28 px-4 relative">
        <div className="flex flex-col items-center text-center relative z-50">
          <div className="lg:w-2/4 w-full">
            <h2 className="text-white lg:text-3xl text-2xl font-bold setup-heading">
              Setup in 5 minutes. Hosted on your domain.com
            </h2>
            <p className="text-xs font-light leading-relaxed pt-2 text-gray-300 setup-subheading">
              Plane is proudly Open-source, released under the AGPL-3.0 license
              and can be easily self-hosted using Docker.
            </p>
          </div>
          <div className="flex justify-center text-xs font-semibold pt-14 setup-buttons">
            <button className="bg-white px-4 py-2 rounded-md">
              Self-host Plane
            </button>
            <button className="px-4 py-2 rounded-md flex items-center gap-1 text-white">
              Read the Docs <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 items-center lg:justify-between justify-center w-full lg:pt-28 pt-14 relative z-50">
          <div className="text-white text-center setup-quote">
            <h3 className="lg:text-2xl text-xl font-semibold pb-2">22847</h3>
            <p className="text-xs font-normal text-gray-300">Github stars</p>
          </div>
          <span className="stroke bg-gray-400"></span>
          <div className="text-white text-center setup-quote">
            <h3 className="lg:text-2xl text-xl font-semibold pb-2">1132</h3>
            <p className="text-xs font-normal text-gray-300">Forks</p>
          </div>
          <span className="stroke bg-gray-400"></span>
          <div className="text-white text-center setup-quote">
            <h3 className="lg:text-2xl text-xl font-semibold pb-2">50,000+</h3>
            <p className="text-xs font-normal text-gray-300">Github clones</p>
          </div>
          <span className="stroke bg-gray-400"></span>
          <div className="text-white text-center setup-quote">
            <h3 className="lg:text-2xl text-xl font-semibold pb-2">40+</h3>
            <p className="text-xs font-normal text-gray-300">Contributors</p>
          </div>
        </div>
        <div className="semiCircle absolute bottom-0 left-2/4 -translate-x-2/4"></div>
      </section>
    </main>
  );
};

export default Setup;
