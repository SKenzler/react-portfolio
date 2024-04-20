import React from "react";
import { useState } from "react";
import logo from "../assets/design-build-deploy-logo.png";
import { FaBars, FaXmark } from "react-icons/fa6";
import { FaDownload, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleHamburger = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img
              className="h-16 w-16 mr-3"
              src={logo}
              alt="Design Build and Deploy Logo"
            />
            <span className="text-[1.5rem] text-white font-logoFont tracking-wide">
              design build deploy
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 text-sm text-white">
            <li className="px-2">About</li>
            <li className="px-2">Portfolio</li>
            <li className="px-2">Contact</li>
          </ul>
          <div className="hidden lg:flex justify-center items-center space-x-12">
            <button
              type="button"
              className="bg-yellow-400 flex px-8 py-2 text-center gap-3 font-bold rounded-md cursor-pointer hover:scale-105"
            >
              <FaDownload size={14} />
              Download CV
            </button>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button type="button" onClick={toggleHamburger}>
              {mobileMenuOpen ? (
                <FaXmark size={24} color="white" />
              ) : (
                <FaBars size={24} color="white" />
              )}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul className="text-sm text-center text-white p-2">
              <li className="my-2">About</li>
              <li className="my-2">Portfolio</li>
              <li className="my-2">Contact</li>
            </ul>
            <button
              type="button"
              className="bg-yellow-400 flex px-5 py-2 text-center gap-2 font-bold rounded-md cursor-pointer hover:bg-yellow-500"
            >
              <FaDownload size={14} />
              Download CV
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
