import React from "react";
import heroImage from "../assets/hero-image.png";
import logo from "../assets/design-build-deploy-logo.png";
import { FaDownload } from "react-icons/fa";
import { easeIn, easeInOut, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Resume from "../assets/resume-aug-2024.pdf";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-full flex flex-col justify-center items-center">
        {" "}
        <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center text-center overflow-hidden">
          <motion.div
            className="w-3/4 sm:w-9/12 flex flex-col justify-center items-center text-[#C9C9C9] p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1, ease: easeIn }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-[4rem] font-medium tracking-wide p-2">
              Frontend <span className="font-black uppercase">Developer</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal uppercase p-2">
              Shane <span className="text-[#C9C9C9] font-black">Kenzler</span>
            </h2>
            <img
              className="h-[6.4em] w-[6.4em] my-5"
              src={logo}
              alt="Design Build and Deploy Logo"
            />
            <p className="w-11/12 sm:w-8/12 text-sm sm:text-base text-[#C9C9C9] font-light tracking-wide p-2">
              I{" "}
              <span className="font-semibold italic">
                design, build and deploy
              </span>{" "}
              responsive web apps using React JS, Tailwind CSS and Framer Motion
            </p>
            <Link
              to={Resume}
              download="resume-aug-2024.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                className="bg-yellow-400 flex justify-center items-center text-[#101824] text-center gap-2 font-bold rounded-md cursor-pointer hover:bg-[#C9C9C9]  px-8 py-2 mt-8"
              >
                <FaDownload size={14} />
                Download CV
              </button>
            </Link>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 3,
                delay: 2,
                ease: easeInOut,
              },
            }}
            viewport={{ once: true }}
            className="w-full sm:w-6/12 object-fill mt-2"
            src={heroImage}
            alt="Profile Hero Image"
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
