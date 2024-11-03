import viewImg from "./assets/images/views.svg.png";
import attachmentImg from "./assets/images/attachments.svg.png";
import commentImg from "./assets/images/comment.svg.png";
import integrationImg from "./assets/images/integrations.svg.png";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const MoreFeatures = () => {
  useEffect(() => {
    gsap.fromTo(
      ".morefeatures",
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
          trigger: ".morefeatures",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      ".morefeatures2",
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
          trigger: ".morefeatures2",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <main className="lg:px-20 px-8 lg:py-14 py-8 flex flex-col w-full">
      <h1 className="text-center font-bold md:text-2xl text-xl morefeatures">
        That’s not all, there’s more to it.
      </h1>
      <section className="grid md:grid-cols-3 grid-cols-1 gap-6 lg:pt-14 pt-8">
        <div className="md:col-span-2 col-auto w-full border border-gray-200 rounded-xl morefeatures">
          <img src={viewImg} alt="" />
          <div className="p-6">
            <h2 className="text-xs font-bold pb-2">Views</h2>
            <p className="text-xs leading-relaxed font-normal">
              Whether you prefer Kanban or Lists, we’ve got you covered with the
              Views you want. Filter and group as you like.
            </p>
          </div>
        </div>
        <div className="border border-gray-200 rounded-xl w-full morefeatures">
          <img src={attachmentImg} alt="" />
          <div className="p-6">
            <h2 className="text-xs font-bold pb-2">
              Go one step beyond with attachments
            </h2>
            <p className="text-xs leading-relaxed font-normal">
              Securely attach any relevant files to your issues with ease.
            </p>
          </div>
        </div>
        <div className="border border-gray-200 rounded-xl w-full morefeatures2">
          <img src={commentImg} alt="" />
          <div className="p-6">
            <h2 className="text-xs font-bold pb-2">Comments</h2>
            <p className="text-xs leading-relaxed font-normal">
              Collaborate and discuss details of an issue within a project using
              Comments and Activity.
            </p>
          </div>
        </div>
        <div className="border md:col-span-2 col-auto w-full border-gray-200 rounded-xl morefeatures2">
          <img src={integrationImg} alt="" />
          <div className="p-6">
            <h2 className="text-xs font-bold pb-2">
              Powerful Integrations (In progress)
            </h2>
            <p className="text-xs leading-relaxed font-normal">
              With our powerful integrations, you can seamlessly connect Plane
              with your favorite tools and get instant notifications on issues
              and updates from anywhere.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MoreFeatures;
