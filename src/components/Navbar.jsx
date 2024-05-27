import React from "react";
import { useState } from "react";
import logo from "../assets/design-build-deploy-logo.png";
import { FaBars, FaXmark } from "react-icons/fa6";
import { FaDownload, FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleHamburger = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <NavLink to="/">
            <div className="flex items-center flex-shrink-0 cursor-pointer">
              <img
                className="h-16 w-16 mr-3"
                src={logo}
                alt="Design Build and Deploy Logo"
              />
              <span className="text-sm text-white tracking-wide">
                design{" "}
                <span className="text-yellow-400 font-semibold uppercase">
                  build
                </span>{" "}
                deploy
              </span>
            </div>
          </NavLink>
          <ul className="hidden lg:flex ml-14 space-x-12 text-sm text-white cursor-pointer">
            <li className="px-2">
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive
                    ? "border-b-2 border-yellow-400"
                    : "border-b-2 border-[#101824]";
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="px-2">
              <NavLink
                to="/about"
                className={({ isActive }) => {
                  return isActive
                    ? "border-b-2 border-yellow-400"
                    : "border-b-2 border-[#101824]";
                }}
              >
                About
              </NavLink>
            </li>
            <li className="px-2">
              <NavLink
                to="/projects"
                className={({ isActive }) => {
                  return isActive
                    ? "border-b-2 border-yellow-400"
                    : "border-b-2 border-[#101824]";
                }}
              >
                Projects
              </NavLink>
            </li>
            <li className="px-2">
              <NavLink
                to="/contact"
                className={({ isActive }) => {
                  return isActive
                    ? "border-b-2 border-yellow-400"
                    : "border-b-2 border-[#101824]";
                }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="hidden lg:flex justify-center items-center space-x-12">
            <button
              type="button"
              className="bg-yellow-400 flex px-5 py-2 text-center gap-2 font-bold rounded-md cursor-pointer hover:bg-[#C9C9C9]"
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
              <li className="p-2">
                <NavLink
                  to="/"
                  className={({ isActive }) => {
                    return isActive
                      ? "border-b-2 border-yellow-400"
                      : "border-b-2 border-[#101824]";
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li className="p-2">
                <NavLink
                  to="/about"
                  className={({ isActive }) => {
                    return isActive
                      ? "border-b-2 border-yellow-400"
                      : "border-b-2 border-[#101824]";
                  }}
                >
                  About
                </NavLink>
              </li>
              <li className="p-2">
                <NavLink
                  to="/projects"
                  className={({ isActive }) => {
                    return isActive
                      ? "border-b-2 border-yellow-400"
                      : "border-b-2 border-[#101824]";
                  }}
                >
                  Projects
                </NavLink>
              </li>
              <li className="p-2">
                <NavLink
                  to="/contact"
                  className={({ isActive }) => {
                    return isActive
                      ? "border-b-2 border-yellow-400"
                      : "border-b-2 border-[#101824]";
                  }}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <button
              type="button"
              className="bg-yellow-400 flex px-5 py-2 text-center gap-2 font-bold rounded-md cursor-pointer hover:bg-[#C9C9C9]"
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
