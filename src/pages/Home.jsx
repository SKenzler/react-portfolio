import React from "react";
import heroImage from "../assets/hero-image.png";
import { FaGithub } from "react-icons/fa";
import { easeIn, easeInOut, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-full flex flex-col justify-center items-center">
        {" "}
        <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center text-center overflow-hidden">
          <motion.div
            className="w-3/4 sm:w-9/12 flex flex-col justify-center items-center text-[#C9C9C9] mt-5 p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1, ease: easeIn }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-[4rem] font-medium tracking-wide p-2">
              Frontend <span className="font-black uppercase">Developer</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal uppercase p-2">
              Shane <span className="text-yellow-400 font-bold">Kenzler</span>
            </h2>
            <p className="w-9/12 text-sm sm:text-base text-[#C9C9C9] font-light p-2">
              I design, build and deploy responsive web apps using React JS,
              Tailwind CSS and Framer Motion
            </p>
            <Link to="https://github.com/SKenzler" target="_blank">
              <button
                type="button"
                className="w-[18em] flex justify-between items-center border-2 border-yellow-400 px-8 py-2 text-yellow-400 text-center text-base tracking-wide gap-4 font-normal rounded-md mt-5 cursor-pointer hover:border-[#C9C9C9] hover:text-[#C9C9C9]"
              >
                <FaGithub size={25} />
                Check out my Github
              </button>
            </Link>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                mass: 0.75,
                stiffness: 300,
                delay: 4,
              },
            }}
            viewport={{ once: true }}
            className="w-full sm:w-6/12 object-fill mt-20"
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
