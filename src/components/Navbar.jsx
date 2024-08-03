import React from "react";
import { useState } from "react";
import logo from "../assets/design-build-deploy-logo.png";
import resume from "../assets/resume-jan-2024.pdf";
import { FaBars, FaXmark } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import TimeDisplay from "../components/TimeDisplay";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleHamburger = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="sticky w-full top-0 z-50 py-3 backdrop-blur-lg border-b neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <NavLink to="/">
            <div className="flex items-center flex-shrink-0 cursor-pointer">
              <img
                className="h-[4.2em] w-[4.2em] mr-3"
                src={logo}
                alt="Design Build and Deploy Logo"
              />
              <div className="flex flex-col text-sm text-white text-center font-semibold uppercase leading-tight tracking-wide">
                Design <span className="text-yellow-400">build</span> Deploy
              </div>
            </div>
          </NavLink>
          <ul className="hidden lg:flex ml-14 space-x-12 text-sm text-[#C9C9C9] cursor-pointer">
            <li className="px-2 hover:text-yellow-400">
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive
                    ? "border-b-2 border-yellow-400"
                    : "border-b-0";
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="px-2 hover:text-yellow-400">
              <NavLink
                to="/about"
                className={({ isActive }) => {
                  return isActive
                    ? "border-b-2 border-yellow-400"
                    : "border-b-0";
                }}
              >
                About
              </NavLink>
            </li>
            <li className="px-2 hover:text-yellow-400">
              <NavLink
                to="/projects"
                className={({ isActive }) => {
                  return isActive
                    ? "border-b-2 border-yellow-400"
                    : "border-b-0";
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
                    : "border-b-0";
                }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <TimeDisplay />
          <div className="lg:hidden md:flex flex-col justify-end">
            <button type="button" onClick={toggleHamburger}>
              {mobileMenuOpen ? (
                <FaXmark size={28} color="#FACC15" />
              ) : (
                <FaBars size={28} color="#FACC15" />
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
                      : "border-b-0";
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
                      : "border-b-0";
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
                      : "border-b-0";
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
                      : "border-b-0";
                  }}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
