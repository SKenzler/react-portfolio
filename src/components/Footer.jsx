import React from "react";
import logo from "../assets/design-build-deploy-logo.png";
import { FaGithub, FaCodepen } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <div className="w-full flex justify-center items-center tracking-wide mb-2">
        <img
          className="h-10 w-10 mr-3"
          src={logo}
          alt="Design Build and Deploy Logo"
        />
        <p className="text-xs text-white tracking-wide">
          &copy; 2024 Design Build Deploy - Shane Kenzler{" "}
          <span className="font-extralight">All rights reserved</span>
        </p>
      </div>
      <div className="flex justify-center items-center">
        <Link to="https://github.com/SKenzler" target="_blank">
          <div className="hover:scale-125 cursor-pointer px-2">
            <FaGithub size={28} color="#C9C9C9" />
          </div>
        </Link>
        <Link
          to="https://www.linkedin.com/in/shane-kenzler-40567497/"
          target="_blank"
        >
          <div className="hover:scale-125 cursor-pointer px-2">
            <BsLinkedin size={28} color="#C9C9C9" />
          </div>
        </Link>
        <Link to="https://codepen.io/skenzler" target="_blank">
          <div className="hover:scale-125 cursor-pointer px-2">
            <FaCodepen size={28} color="#C9C9C9" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
