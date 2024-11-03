import logo from "./assets/images/logo.png";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="lg:px-20 px-8 py-6 flex items-center justify-between">
      <div className="lg:w-1/5">
        <img src={logo} alt="" className="h-6 cursor-pointer" />
      </div>
      {isOpen ? (
        <FaXmark
          className="cursor-pointer lg:hidden"
          onClick={() => setIsOpen((prevState) => !prevState)}
        />
      ) : (
        <FaBars
          className="cursor-pointer lg:hidden"
          onClick={() => setIsOpen((prevState) => !prevState)}
        />
      )}

      {isOpen ? (
        <ul
          className="flex flex-col absolute top-14 left-0 w-full h-screen bg-white gap-10 text-xs 
        font-medium cursor-pointer p-8 z-50"
        >
          <li>Pricing</li>
          <li>Changelog</li>
          <li>Blog</li>
          <li>About</li>
        </ul>
      ) : (
        <ul className="lg:flex hidden items-center gap-10 text-xs font-medium cursor-pointer">
          <li>Pricing</li>
          <li>Changelog</li>
          <li>Blog</li>
          <li>About</li>
        </ul>
      )}

      <div className="lg:flex hidden items-center gap-3 text-xs font-medium lg:w-1/5">
        <button className="bg-primary text-white px-4 py-2 rounded-md">
          Sign in
        </button>
        <button className="border border-primary text-primary px-4 py-2 rounded-md">
          Talk to Sales
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
