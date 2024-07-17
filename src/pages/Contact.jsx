import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaEnvelope } from "react-icons/fa6";
import contactImage from "../assets/glasses-image.png";
import yellowOffice from "../assets/yellow-office.png";
import { easeIn, motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <Navbar />
        <div className="w-full flex justify-center items-center bg-yellow-400 mt-10">
          <img
            className="w-20 h-20 object-contain mx-2"
            src={contactImage}
            alt="Contact glasses graphic"
          />
          <h1 className="font-semibold text-2xl ">
            Get <span className="font-normal text-xl">in touch</span>
          </h1>
        </div>
        <div className="w-full lg:w-9/12 flex flex-col md:flex-row justify-center items-center p-2 mt-10">
          <div className="w-4/5 flex flex-col px-10">
            <h1 className="text-2xl text-[#C9C9C9] text-start font-normal tracking-wide px-5 mt-4">
              Let's make a time to{" "}
              <span className="text-yellow-400">chat.</span>
            </h1>
            <div className="w-full flex px-5 mt-2">
              <FaEnvelope size={"1.4rem"} color="#C9C9C9" />
              <h6 className="text-[#C9C9C9] text-sm font-nornmal text-start">
                &nbsp; shanekenzler@gmail.com
              </h6>
            </div>
            <p className="w-full sm:7/12 text-[#C9C9C9] text-sm/6 font-light text-justify tracking-wide px-5">
              <br />I am looking for opportunities to join an agile, innovative
              team with a culture that encourages growth and collaboration.
            </p>
            <form
              action="mailto:shanekenzler@gmail.com"
              method="get"
              enctype="text/plain"
              className="w-full flex flex-col justify-center items-start rounded-lg p-5 mt-4"
            >
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
                rows="6"
                cols="35"
                className="shadow shadow-black text-sm text-black placeholder-black appearance-none focus:outline-none rounded px-2 py-1 mb-2"
              ></textarea>
              <button
                type="submit"
                value="submit"
                className="flex justify-center items-center border-2 border-yellow-400 px-5 py-1 text-yellow-400 text-center text-sm tracking-wide gap-4 font-normal rounded-md my-5 cursor-pointer hover:border-[#C9C9C9] hover:text-[#C9C9C9]"
              >
                Let's Chat
              </button>
            </form>
          </div>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 1, ease: easeIn }}
            className="flex justify-center items-center w-5/12 sm:w-52 rounded-lg mx-10 mt-8 lg:mt-1"
            src={yellowOffice}
            alt="Phone chat Image"
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
