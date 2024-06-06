import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import contactImage from "../assets/glasses-image.png";
import avatarImage from "../assets/Profile_Avatar_Lrg.png";
import { FaCommentAlt } from "react-icons/fa";
import { FaMessage, FaEnvelope } from "react-icons/fa6";
import { easeInOut, motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="flex justify-center items-center w-full bg-yellow-400 my-4">
          {" "}
          <img
            className="w-20 h-20 object-contain mx-2"
            src={contactImage}
            alt="Contact glasses graphic"
          />
          <h1 className="font-semibold text-2xl ">
            Get <span className="font-normal text-xl">in touch</span>
          </h1>
        </div>
        <div className="w-full sm:w-1/4 flex flex-col md:flex-row justify-center items-center p-2">
          <div className="w-full flex flex-col">
            <h1 className="w-full text-3xl text-[#C9C9C9] text-start font-normal tracking-wide px-5 mt-4">
              Let's make a time to chat.
            </h1>
            <div className="w-full flex px-5 mt-4">
              <FaEnvelope size={"1.4rem"} color="#C9C9C9" />
              <h6 className="text-[#C9C9C9] text-sm font-nornmal text-start">
                &nbsp; shanekenzler@gmail.com
              </h6>
            </div>
            <p className="w-full md:w-72 text-[#C9C9C9] text-sm/6 font-light text-justify tracking-wide p-5">
              <br />I am looking for opportunities to join an agile, innovative
              team with a culture that encourages growth and collaboration.
            </p>
            <form className="w-full lg:w-80 flex flex-col justify-start items-start px-5">
              <label
                htmlFor="name-feild"
                className="text-[#C9C9C9] text-start text-sm mb-2"
              >
                Name:
              </label>
              <input
                type="text"
                name="name-feild"
                id="name-feild"
                placeholder="name"
                className="w-60 shadow shadow-black text-sm text-black placeholder-black appearance-none focus:outline-none rounded px-2 py-1 mb-2"
              ></input>
              <label
                htmlFor="email-feild"
                className="text-[#C9C9C9] text-start text-sm mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                name="email-feild"
                id="email-feild"
                placeholder="email"
                className="w-60 shadow shadow-black text-sm text-black placeholder-black appearance-none focus:outline-none rounded px-2 py-1 mb-2"
              ></input>
              <label
                htmlFor="message-feild"
                className="text-[#C9C9C9] text-start text-sm mb-2"
              >
                Message:
              </label>
              <textarea
                name="message-feild"
                id="message-feild"
                placeholder="message"
                rows="5"
                cols="40"
                className="shadow shadow-black text-sm text-black placeholder-black appearance-none focus:outline-none rounded px-2 py-1 mb-2"
              ></textarea>
              <button
                type="button"
                className="flex justify-center items-center border-2 border-yellow-400 px-5 py-1 text-yellow-400 text-center text-sm tracking-wide gap-4 font-normal rounded-md my-5 cursor-pointer hover:border-[#C9C9C9] hover:text-[#C9C9C9]"
              >
                Let's Chat
              </button>
            </form>
          </div>
          <motion.img
            animate={{ y: [0, 10, 0], scale: [0, 1.2, 1] }}
            transition={{
              duration: 2,
              delay: 1,
              ease: easeInOut,
            }}
            className="flex flex-shrink-0 justify-center items-center w-64 md:w-80 mx-10"
            src={avatarImage}
            alt="Avatar Image"
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
