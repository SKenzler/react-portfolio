import React from "react";
import { FaGithub, FaCodepen } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import heroImage from "../assets/hero-image.png";

const Home = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center text-center ">
        <div className="w-3/4 flex flex-col justify-center items-center text-[#C9C9C9] mt-5 p-5">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-wide p-2">
            Frontend <span className="font-black uppercase">Developer</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal uppercase p-2">
            Shane <span className="text-yellow-400 font-bold">Kenzler</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#C9C9C9] font-light p-2">
            I design, build and deploy responsive web apps using React JS,
            Tailwind CSS and Framer Motion
          </p>

          <button
            type="button"
            className="flex justify-between items-center border-2 border-yellow-400 px-5 py-2 text-yellow-400 text-center text-base tracking-wide gap-4 font-normal rounded-md mt-5 cursor-pointer hover:border-[#C9C9C9] hover:text-[#C9C9C9]"
          >
            <FaGithub size={25} />
            Checkout my Github
          </button>
        </div>
        <div className="flex justify-end items-center">
          <img
            className="w-full object-fill shrink-0"
            src={heroImage}
            alt="Profile Hero Image"
          />
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 m-5">
        <FaGithub size={28} color="#C9C9C9" />
        <BsLinkedin size={28} color="#C9C9C9" />
        <FaCodepen size={28} color="#C9C9C9" />
      </div>
    </>
  );
};

export default Home;
