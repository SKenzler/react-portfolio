import React from "react";
import logo from "../assets/design-build-deploy-logo.png";
import { FaGithub, FaCodepen } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col justify-start items-center my-10">
      <div className="flex justify-center items-center gap-4 sm:gap-10 m-2">
        <Link to="https://github.com/SKenzler" target="_blank">
          <div className="hover:scale-125 cursor-pointer px-2">
            <FaGithub size={21} color="#FACC15" />
          </div>
        </Link>
        <Link
          to="https://www.linkedin.com/in/shane-kenzler-40567497/"
          target="_blank"
        >
          <div className="hover:scale-125 cursor-pointer px-2">
            <BsLinkedin size={21} color="#FACC15" />
          </div>
        </Link>
        <Link to="https://codepen.io/skenzler" target="_blank">
          <div className="hover:scale-125 cursor-pointer px-2">
            <FaCodepen size={21} color="#FACC15" />
          </div>
        </Link>
      </div>
      <div className="w-full flex justify-center items-center tracking-wide m-4">
        <p className="text-xs text-white text-center tracking-wide">
          &copy; 2024 Design Build Deploy - Shane Kenzler{" "}
          <span className="font-extralight">
            <br />
            All rights reserved
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
