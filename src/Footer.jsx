import logo2 from "./assets/images/logo2.png";
import { FaTwitter, FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    gsap.fromTo(
      ".footer",
      {
        opacity: 0,
        y: 30,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.3,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".footer",
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <footer className="lg:px-20 px-8 lg:py-14 py-8 flex flex-col w-full bg-black">
      <section className="flex md:flex-row flex-col lg:gap-0 gap-14 justify-between">
        <div className="footer">
          <img src={logo2} alt="" className="h-6" />
          <p className="text-xs font-normal pt-2 pb-8 text-white">
            Questions? Comments? Concerns?
          </p>
          <button className="bg-white px-4 py-2 rounded-md text-xs">
            Chat with us on Discord
          </button>
        </div>
        <div className="text-white flex md:flex-row flex-col lg:gap-28 gap-10">
          <div className="footer">
            <h6 className="font-bold text-sm pb-5">Company</h6>
            <ul className="font-light text-xs space-y-3">
              <li>Changelog</li>
              <li>Pricing</li>
              <li>About</li>
            </ul>
          </div>
          <div className="footer">
            <h6 className="font-bold text-sm pb-5">Legal</h6>
            <ul className="font-light text-xs space-y-3">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="footer">
            <h6 className="font-bold text-sm pb-5">Resources</h6>
            <ul className="font-light text-xs space-y-3">
              <li>Docs</li>
              <li>System Status</li>
            </ul>
          </div>
          <div className="footer">
            <h6 className="font-bold text-sm pb-5">Community</h6>
            <ul className="font-light text-xs space-y-3">
              <li className="flex items-center gap-1">
                <FaTwitter />
                Twitter
              </li>
              <li className="flex items-center gap-1">
                <FaGithub />
                GitHub
              </li>
              <li className="flex items-center gap-1">
                <FaYoutube />
                Youtube
              </li>
              <li className="flex items-center gap-1">
                <FaLinkedin />
                LinkedIn
              </li>
            </ul>
          </div>
        </div>
      </section>
      <p className="text-center text-xs font-light text-white pt-14 footer">
        &copy; 2024 Plane. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
