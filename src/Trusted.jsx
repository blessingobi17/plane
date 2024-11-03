import deloitte from "./assets/images/deloitte.png";
import appsmith from "./assets/images/appsmith.png";
import vigilant from "./assets/images/vigilant.png";
import edison from "./assets/images/edison.png";
import kobe from "./assets/images/kobe.png";
import simplamo from "./assets/images/simplamo.png";
import soulpage from "./assets/images/soulpage.png";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Trusted = () => {
  useEffect(() => {
    gsap.fromTo(
      ".trusted-logo",
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
          trigger: ".trusted-logo",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <main className="lg:py-14 py-8 w-full">
      <div className="flex justify-center">
        <p className="border border-gray-300 rounded-full px-3 py-2 text-xs font-normal">
          Trusted by <span className="font-bold">1000+ Teams</span> across{" "}
          <span className="font-bold">100+ Countries</span>
        </p>
      </div>
      <div className="flex flex-wrap lg:gap-0 gap-6 lg:justify-between items-center justify-center px-10 lg:pt-10 pt-6 w-full">
        <img src={deloitte} alt="" className="h-4 trusted-logo" />
        <img src={appsmith} alt="" className="h-4 trusted-logo" />
        <img src={vigilant} alt="" className="h-4 trusted-logo" />
        <img src={edison} alt="" className="h-4 trusted-logo" />
        <img src={kobe} alt="" className="h-4 trusted-logo" />
        <img src={simplamo} alt="" className="h-4 trusted-logo" />
        <img src={soulpage} alt="" className="h-4 trusted-logo" />
      </div>
    </main>
  );
};

export default Trusted;
