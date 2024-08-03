import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SendEmail from "../actions/SendEmail";
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
          <h1 className="font-semibold text-2xl text-center">
            Get <span className="font-normal text-xl">in touch</span>
          </h1>
        </div>
        <div className="w-full lg:w-9/12 flex flex-col md:flex-row justify-center items-center p-2 mt-10">
          <div className="w-4/5 flex flex-col">
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
            <p className="w-11/12 sm:w-7/12 text-[#C9C9C9] text-sm/6 font-light text-pretty tracking-wide px-5">
              <br />I am looking for opportunities to join an agile, innovative
              team with a culture that encourages growth and collaboration.
            </p>
            <SendEmail />
          </div>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 1, ease: easeIn }}
            className="hidden md:flex justify-center items-center w-3/12 sm:w-52 rounded-lg mx-10 mt-8 lg:mt-1"
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
