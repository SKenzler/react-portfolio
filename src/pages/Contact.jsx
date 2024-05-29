import React from "react";
import Navbar from "../components/Navbar";
import contactImage from "../assets/contact-image.png";
import { Link } from "react-router-dom";
import { FaGithub, FaCodepen } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div w-full h-screen flex flex-col justify-center items-center>
        <h1 className="flex justify-center  text-center text-[#C9C9C9] text-4xl font-bold mt-12">
          CONTACT<span className="font-light">&nbsp; Me</span>
        </h1>
        <div className="flex justify-center items-center w-full bg-yellow-400 font-semibold text-2xl my-4">
          {" "}
          <img
            className="w-20 h-20 object-contain mx-2"
            src={contactImage}
            alt="Contact glasses graphic"
          />
          Get <span className="font-normal"> in Touch</span>
        </div>
        <p className="text-[#C9C9C9] text-sm/6 font-light text-justify tracking-wide p-5">
          Let's make a time to chat. I am looking for opportunities to join an
          agile, innovative team with a culture that encourages growth and
          collaboration.
        </p>
      </div>
      <form className="flex flex-col justify-start items-center">
        <label for="name-feild" className="text-[#C9C9C9] text-start text-sm">
          Name:
        </label>
        <input
          type="text"
          name="name-feild"
          placeholder="name"
          className="rounded-[4px] my-2"
        ></input>
        <input
          type="email"
          placeholder="email"
          className="rounded-[4px] mb-2"
        ></input>
        <input
          type="textarea"
          placeholder="message"
          className="rounded-[4px] mb-2"
        ></input>
        <button
          type="button"
          className="flex justify-center items-center border-2 border-yellow-400 px-5 py-1 text-yellow-400 text-center text-sm tracking-wide gap-4 font-normal rounded-md my-5 cursor-pointer hover:border-[#C9C9C9] hover:text-[#C9C9C9]"
        >
          Let's Chat
        </button>
      </form>
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
    </>
  );
};

export default Contact;
