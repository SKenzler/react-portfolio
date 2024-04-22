import React from "react";
import { FaGithub, FaCodepen } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import heroImage from "../assets/hero-image.png";

const Home = () => {
  return (
    <>
      <div className="flex justify-around items-center p-2">
        <div className="flex flex-col justify-center items-center px-2">
          <h1 className="text-2x1 text-[#C9C9C9] text-center font-medium tracking-wide">
            &lt; <span className="text-3xl font-semibold">SHANE KENZLER</span>{" "}
            Frontend Developer &#47;&gt;
          </h1>
          <p className="text-lg  text-[#C9C9C9] font-light">
            I design, build and deploy scalable web apps
          </p>

          <button
            type="button"
            className="flex justify-between items-center border-2  border-yellow-400 px-5 py-2 text-yellow-400 text-center text-base tracking-wide gap-4 font-normal rounded-md mt-10 cursor-pointer hover:border-[#C9C9C9] hover:text-[#C9C9C9]"
          >
            <FaGithub size={25} />
            Checkout my Github
          </button>
        </div>

        <img
          className="flex justify-end items-end w-3/5"
          src={heroImage}
          alt="Profile Hero Image"
        />
      </div>
      <div className="flex justify-center items-center gap-4 mt-10 hover:animate-pulse">
        <FaGithub size={24} color="#C9C9C9" />
        <BsLinkedin size={24} color="#C9C9C9" />
        <FaCodepen size={24} color="#C9C9C9" />
      </div>
    </>
  );
};

export default Home;
