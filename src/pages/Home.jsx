import React from "react";
import heroImage from "../assets/hero-image.png";
import { FaGithub, FaCodepen } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <div className="flex flex-col text-2xl  text-[#C9C9C9] text-center font-medium tracking-wide p-4">
        &lt; SHANE KENZLER Frontend Developer /&gt;
        <span className="text-base font-light">
          I design, build and deploy scalable web apps
        </span>
      </div>
      <button
        type="button"
        className="flex justify-center items-center border-2  border-yellow-400 px-5 py-2 text-yellow-400 text-center text-base tracking-wide gap-4 font-normal rounded-md cursor-pointer hover:scale-105"
      >
        <FaGithub size={25} />
        Checkout my Github
      </button>
      <img
        className="w-full transition ease-in-out delay-150"
        src={heroImage}
        alt="Profile Image"
      />
      <div className="flex justify-center items-center gap-4 hover:scale-110">
        <FaGithub size={28} color="#C9C9C9" />
        <BsLinkedin size={28} color="#C9C9C9" />
        <FaCodepen size={28} color="#C9C9C9" />
      </div>
    </>
  );
};

export default Home;
