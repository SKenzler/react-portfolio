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
      <div className="flex flex-col justify-center items-center h-screen w-full bg-blob bg-no-repeat bg-fill bg-center animate-scale-blob">
        {" "}
      </div>
      <Navbar />
      <div className="flex flex-col md:flex-row justify-center items-center text-center mt-80 md:mt-28">
        <motion.div
          className="w-3/4 flex flex-col justify-center items-center text-[#C9C9C9] mt-5 p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2, ease: easeIn }}
        >
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
          <Link to="https://github.com/SKenzler" target="_blank">
            <button
              type="button"
              className="flex justify-between items-center border-2 border-yellow-400 px-5 py-2 text-yellow-400 text-center text-base tracking-wide gap-4 font-normal rounded-md mt-5 cursor-pointer hover:border-[#C9C9C9] hover:text-[#C9C9C9]"
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
            transition: { duration: 2, delay: 3, ease: easeInOut },
          }}
          viewport={{ once: true }}
          className="w-full sm:w-2/4 object-fill"
          src={heroImage}
          alt="Profile Hero Image"
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;
