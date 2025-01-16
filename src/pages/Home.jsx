import React from "react";
import { useEffect } from "react";
import heroImage from "../assets/hero-image.png";
import logo from "../assets/design-build-deploy-logo.png";
import { FaDownload } from "react-icons/fa";
import { easeIn, easeInOut, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Resume from "../assets/resume-aug-2024.pdf";
import ReactGA from "react-ga";

const Home = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-screen h-screen flex flex-col justify-start items-center">
        {" "}
        <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center text-center">
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
            <p className="w-11/12 md:w-2/4 text-base sm:text-lg text-[#C9C9C9] font-light tracking-wide p-2">
              I{" "}
              <span className="font-semibold italic">
                design, build and deploy
              </span>{" "}
              responsive web apps using Next.js, React JS, Tailwind CSS and
              Framer Motion
            </p>
            <a
              href={Resume}
              download="Kenzler_Resume"
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
            </a>
          </motion.div>
          <div className="w-full flex justify-center items-center">
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
              className="w-4/5 object-fill mt-2"
              src={heroImage}
              alt="Profile Hero Image"
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
