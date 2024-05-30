import React from "react";
import { FaGithub, FaCodepen } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-center items-center gap-8 m-5">
      <Link to="https://github.com/SKenzler" target="_blank">
        <div className="hover:scale-125 cursor-pointer">
          <FaGithub size={28} color="#C9C9C9" />
        </div>
      </Link>
      <Link
        to="https://www.linkedin.com/in/shane-kenzler-40567497/"
        target="_blank"
      >
        <div className="hover:scale-125 cursor-pointer">
          <BsLinkedin size={28} color="#C9C9C9" />
        </div>
      </Link>
      <Link to="https://codepen.io/skenzler" target="_blank">
        <div className="hover:scale-125 cursor-pointer">
          <FaCodepen size={28} color="#C9C9C9" />
        </div>
      </Link>
    </div>
  );
};

export default Footer;
