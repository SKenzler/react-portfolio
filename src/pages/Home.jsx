import React from "react";
import { FaGithub, FaCodepen } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div
          className="bg-cover bg-center h-80 w-96"
          style={{
            backgroundImage: "url('/assets/hero-image.png')",
          }}
        ></div>
      </div>
      <div className="flex flex-col justify-center items-center mt-10 px-2 hover:animate-pulse">
        <h1 className="text=2x1 text-[#C9C9C9] text-center font-medium tracking-wide">
          &lt; <span className="text-3xl font-semibold">SHANE KENZLER</span>{" "}
          Frontend Developer &#47;&gt;
        </h1>
        <p className="text-lg  text-[#C9C9C9] font-light">
          I design, build and deploy scalable web apps
        </p>
      </div>

      <div className="flex justify-center items-center mt-10">
        <button
          type="button"
          className="flex justify-center items-center border-2  border-yellow-400 px-5 py-2 text-yellow-400 text-center text-base tracking-wide gap-4 font-normal rounded-md cursor-pointer hover:border-[#C9C9C9] hover:text-[#C9C9C9]"
        >
          <FaGithub size={25} />
          Checkout my Github
        </button>
      </div>
      <div className="flex justify-center items-center gap-4 hover:animate-pulse">
        <FaGithub size={24} color="#C9C9C9" />
        <BsLinkedin size={24} color="#C9C9C9" />
        <FaCodepen size={24} color="#C9C9C9" />
      </div>
    </>
  );
};

export default Home;
