import visualize from "./assets/images/visualize-as-you-like.webp.png";
import conquer from "./assets/images/conquer-with-cycles.webp.png";
import sdk from "./assets/images/sdk.webp.png";
import { FaEye, FaCloudDownloadAlt } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  useEffect(() => {
    gsap.fromTo(
      ".feature1",
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
          trigger: ".feature1",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      ".feature2",
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
          trigger: ".feature2",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      ".feature3",
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
          trigger: ".feature3",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <main className="lg:px-20 px-8 lg:py-14 py-8 flex flex-col w-full">
      <section className="flex md:flex-row flex-col justify-between lg:pb-28 pb-14">
        <div className="md:w-2/5 w-full feature1">
          <h2 className="text-primary text-xs font-bold">START SIMPLE</h2>
          <p className="pt-2 text-2xl font-bold">
            Simple, yet great UX, so you can get started in minutes
          </p>
          <p className="text-xs leading-loose pt-3">
            Start as a basic task tracking tool. Customize your work-flows,based
            on Backlog, Unstarted, Started, Completed issues, in just a few
            seconds, and view it as you like.
          </p>
          <div className="pt-6 lg:space-y-4 md:space-y-2">
            <div className="hover:bg-gray-100 px-3 py-3 rounded-md flex gap-2">
              <FaEye className="text-primary h-5 w-5" />
              <p className="leading-loose text-xs">
                <span className="font-bold">Visualize as you like.</span> Switch
                between List, Kanban, or Calendar across any views within
                clicks.
              </p>
            </div>
            <div className="hover:bg-gray-100 px-3 py-3 rounded-md flex gap-2">
              <FaGear className="text-primary h-5 w-5 mt-1" />
              <p className="leading-loose text-xs">
                <span className="font-bold"> Custom workflows. </span>
                Define unique issue states for each team, and extend them the
                way you like.
              </p>
            </div>
            <div className="hover:bg-gray-100 px-3 py-3 rounded-md flex gap-2">
              <FaCloudDownloadAlt className="text-primary h-7 w-7" />
              <p className="leading-loose text-xs">
                <span className="font-bold"> Easy Importers.</span>
                Import issues from your existing issue tracker into Plane in
                just couple of minutes. Coming soon for self-hosted.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-2/4 w-full md:pt-0 pt-6 feature1">
          <img src={visualize} alt="" />
        </div>
      </section>
      <section className="flex justify-between md:flex-row-reverse flex-col lg:pb-28 pb-14">
        <div className="md:w-2/5 w-full feature2">
          <h2 className="text-primary text-xs font-bold">EASY ADOPT</h2>
          <p className="pt-2 text-2xl font-bold">
            Cycles and Modules, a better way to use any frameworks
          </p>
          <p className="text-xs leading-loose pt-3">
            Simplify your transition to Waterfall, Agile, and other workflows to
            keep up team's momentum with Cycles and Modules.
          </p>
          <div className="pt-6 space-y-4">
            <div className="hover:bg-gray-100 px-3 py-3 rounded-md flex gap-2">
              <FaEye className="text-primary h-5 w-5" />
              <p className="leading-loose text-xs">
                <span className="font-bold">Visualize as you like.</span> Switch
                between List, Kanban, or Calendar across any views within
                clicks.
              </p>
            </div>
            <div className="hover:bg-gray-100 px-3 py-3 rounded-md flex gap-2">
              <FaGear className="text-primary h-5 w-5 mt-1" />
              <p className="leading-loose text-xs">
                <span className="font-bold"> Custom workflows. </span>
                Define unique issue states for each team, and extend them the
                way you like.
              </p>
            </div>
            <div className="hover:bg-gray-100 px-3 py-3 rounded-md flex gap-2">
              <FaCloudDownloadAlt className="text-primary h-7 w-7" />
              <p className="leading-loose text-xs">
                <span className="font-bold"> Easy Importers.</span>
                Import issues from your existing issue tracker into Plane in
                just couple of minutes. Coming soon for self-hosted.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-2/4 w-full md:pt-0 pt-6 feature2">
          <img src={conquer} alt="" />
        </div>
      </section>
      <section className="flex md:flex-row flex-col justify-between">
        <div className="md:w-2/5 w-full feature3">
          <h2 className="text-primary text-xs font-bold">SMOOTHLY EXTENDED</h2>
          <p className="pt-2 text-2xl font-bold">
            Extend or Integrate with your favourite tools
          </p>
          <p className="text-xs leading-loose pt-3">
            Start as a basic task tracking tool. Customize your work-flows,based
            on Backlog, Unstarted, Started, Completed issues, in just a few
            seconds, and view it as you like.
          </p>
          <div className="pt-6 space-y-4">
            <div className="hover:bg-gray-100 px-3 py-3 rounded-md flex gap-2">
              <FaEye className="text-primary h-5 w-5" />
              <p className="leading-loose text-xs">
                <span className="font-bold">Visualize as you like.</span> Switch
                between List, Kanban, or Calendar across any views within
                clicks.
              </p>
            </div>
            <div className="hover:bg-gray-100 px-3 py-3 rounded-md flex gap-2">
              <FaGear className="text-primary h-5 w-5 mt-1" />
              <p className="leading-loose text-xs">
                <span className="font-bold"> Custom workflows. </span>
                Define unique issue states for each team, and extend them the
                way you like.
              </p>
            </div>
            <div className="hover:bg-gray-100 px-3 py-3 rounded-md flex gap-2">
              <FaCloudDownloadAlt className="text-primary h-7 w-7" />
              <p className="leading-loose text-xs">
                <span className="font-bold"> Easy Importers.</span>
                Import issues from your existing issue tracker into Plane in
                just couple of minutes. Coming soon for self-hosted.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-2/4 w-full md:pt-0 pt-6 feature3">
          <img src={sdk} alt="" />
        </div>
      </section>
    </main>
  );
};

export default Features;
