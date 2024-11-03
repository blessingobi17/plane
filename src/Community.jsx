import { FaArrowRight } from "react-icons/fa";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Community = () => {
  useEffect(() => {
    gsap.fromTo(
      ".community-heading",
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
          trigger: ".community-heading",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      ".community-subheading",
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
          trigger: ".community-subheading",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      ".community-buttons",
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
        delay: 0.2,
        scrollTrigger: {
          trigger: ".community-buttons",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <main className="lg:pt-14 pt-8 flex flex-col w-full">
      <section className="bg-dark py-16 relative">
        <div className="flex flex-col items-center text-center relative z-50">
          <div className="md:w-2/4 w-full">
            <h2 className="text-white lg:text-3xl text-2xl font-bold community-heading">
              Join our Community of 6000+ Members.
            </h2>
            <p className="text-xs font-light leading-relaxed pt-2 text-gray-300 community-subheading">
              Join the conversation, pitch your feature ideas, discover savvy
              solutions, and tap into the wisdom of a vibrant community of
              developers and Plane enthusiasts.
            </p>
          </div>
          <div className="flex justify-center text-xs font-semibold pt-10 community-buttons">
            <button className="bg-white px-4 py-2 rounded-md">
              Join our Community
            </button>
            <button className="px-4 py-2 rounded-md flex items-center gap-1 text-white">
              Read the Docs <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="communityCircle absolute bottom-0 left-2/4 -translate-x-2/4"></div>
      </section>
    </main>
  );
};

export default Community;
