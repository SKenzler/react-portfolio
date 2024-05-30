import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import contactImage from "../assets/glasses-image.png";
import { FaCommentAlt } from "react-icons/fa";
import { FaMessage, FaEnvelope } from "react-icons/fa6";
import { easeIn, motion } from "framer-motion";

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
        <div className="w-3/5 flex flex-col md:flex-row justify-center items-center p-10">
          <div className="flex flex-col w-full">
            <div className="flex px-5">
              <FaEnvelope size={"1.4rem"} color="#C9C9C9" />
              <h6 className="text-[#C9C9C9] text-sm font-nornmal text-start">
                &nbsp; shanekenzler@gmail.com
              </h6>
            </div>
            <p className="text-[#C9C9C9] text-sm/6 font-light text-justify tracking-wide p-5">
              Let's make a time to chat. I am looking for opportunities to join
              an agile, innovative team with a culture that encourages growth
              and collaboration.
            </p>
            <form className="flex flex-col justify-start items-start px-5">
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
          <motion.div
            className="w-full flex justify-center p-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1, ease: easeIn }}
          >
            <FaMessage size={"12rem"} color="#C9C9C9" />
          </motion.div>
          <motion.div
            className="w-full flex justify-center p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 2, ease: easeIn }}
          >
            <FaCommentAlt size={"8rem"} color="#FACC15" />
          </motion.div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
