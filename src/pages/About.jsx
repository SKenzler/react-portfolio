import React from "react";
import { easeIn, easeInOut, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SkillSlider from "../components/SkillSlider";
import { FaCircleRight } from "react-icons/fa6";
import contactImage from "../assets/glasses-image.png";
import profileImage from "../assets/profile-picture.png";
import aboutDesign from "../assets/about-page-design.png";
import aboutBuild from "../assets/about-page-vscode.png";
import aboutDeploy from "../assets/about-page-react.png";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="flex justify-center items-center w-full bg-yellow-400 my-4">
          <img
            className="w-20 h-20 object-contain mx-2"
            src={contactImage}
            alt="Contact glasses graphic"
          />
          <h1 className="font-semibold text-2xl ">
            Who <span className="font-normal text-xl">is this guy?</span>
          </h1>
        </div>
        <div className="w-10/12 flex flex-col lg:flex-row justify-center items-center border-b-2 border-yellow-400 p-5 m-8">
          <div className="flex flex-col">
            <h1 className="text-3xl text-[#C9C9C9] text-center font-normal px-2">
              I'm a Frontend Developer from Perth, Australia.
            </h1>
            <p className="text-base text-[#C9C9C9] font-normal text-pretty tracking-wide p-4">
              I have been a web developer for the last two years. My central
              focus is building web apps that engage the user and provide them
              with an impacting experience. Moving away from static designs, my
              approach involves incorporating user interaction, subtle animation
              clear navigation and enable the user to complete the task
              required. <br /> <br />I design, build and deploy creative web
              apps using React JS, Tailwind CSS and Framer Motion. My skill set
              includes a solid grounding in HTML5, CSS3, JavaScript and React
              JS. I have strong programming principles attained from my Bachelor
              Degree in Computer Science, enabling me to apply these skills
              toward the completion of personal projects.
            </p>
          </div>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1, ease: easeInOut }}
            className="flex flex-shrink-0 justify-end items-center w-3/4 object-cover sm:w-80 p-4 mx-10"
            src={profileImage}
            alt="Profile Image"
          />
        </div>
        <h1 className="flex justify-center items-center text-3xl text-[#C9C9C9] text-center tracking-wide">
          My Skillset
        </h1>
        <ul className="grid grid-cols-2 md:grid-cols-6 justify-center items-center gap-8 text-[#C9C9C9] text-sm p-5 my-4">
          <li className="flex w-[12em] bg-[#C9C9C9] justify-center items-center rounded-tr-full text-[#101824] font-semibold p-1">
            HTML5
          </li>
          <li className="flex w-[12em] bg-[#C9C9C9] justify-center items-center rounded-tl-full text-[#101824] font-semibold p-1">
            CSS3
          </li>
          <li className="flex w-[12em] bg-[#C9C9C9] justify-center items-center rounded-tr-full text-[#101824] font-semibold p-1">
            JavaScript
          </li>
          <li className="flex w-[12em] bg-[#C9C9C9] justify-center items-center rounded-tl-full text-[#101824] font-semibold p-1">
            React JS
          </li>{" "}
          <li className="flex w-[12em] bg-[#C9C9C9] justify-center items-center rounded-tr-full text-[#101824] font-semibold p-1">
            Bootstrap
          </li>
          <li className="flex w-[12em] bg-[#C9C9C9] justify-center items-center rounded-tl-full text-[#101824] font-semibold p-1">
            Tailwind CSS
          </li>
          <li className="flex w-[12em] bg-[#C9C9C9] justify-center items-center rounded-tr-full text-[#101824] font-semibold p-1">
            Framer Motion
          </li>
          <li className="flex w-[12em] bg-[#C9C9C9] justify-center items-center rounded-tl-full text-[#101824] font-semibold p-1">
            npm
          </li>
          <li className="flex w-[12em] bg-[#C9C9C9] justify-center items-center rounded-tr-full text-[#101824] font-semibold p-1">
            Git
          </li>
          <li className="flex w-[12em] bg-[#C9C9C9] justify-center items-center rounded-tl-full text-[#101824] font-semibold p-1">
            GitHub
          </li>
          <li className="flex w-[12em] bg-[#C9C9C9] justify-center items-center rounded-tr-full text-[#101824] font-semibold p-1">
            VsCode
          </li>
          <li className="flex w-[12em] bg-[#C9C9C9] justify-center items-center rounded-tl-full text-[#101824] font-semibold p-1">
            Figma
          </li>
        </ul>
        <SkillSlider />

        <h1 className="w-4/6 text-3xl text-[#C9C9C9] text-center font-normal mt-10">
          Development Process
        </h1>
        <div className="w-full flex flex-col lg:flex-row justify-center gap-5 items-center p-2">
          <div className="w-72 h-[28em] sm:w-1/4 flex flex-col shadow-lg shadow-black my-10 hover:scale-105">
            <h1 className="bg-[#C9C9C9]  text-3xl text-[#101824] text-center uppercase font-bold py-2">
              Design
            </h1>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 1 },
              }}
              viewport={{ once: true }}
            >
              <img
                className="w-50 object-fill bg-gray-200"
                src={aboutDesign}
                alt="Portfolio Landing Pages with Figma logo"
              />
            </motion.div>
            <div className="w-full flex justify-start items-start text-sm text-[#C9C9C9] text-justify tracking-wide p-5">
              <p>
                The first step in my development process is to produce
                wireframes, components, design layouts, style guides and
                prototypes in Figma. Based on the outcome I can make decisions
                regarding colours, fonts, images layouts and other design
                elements.
              </p>
            </div>
          </div>
          <div className="w-72 h-[28em] sm:w-1/4 flex flex-col shadow-lg shadow-black hover:scale-105 my-10">
            <h1 className="bg-[#C9C9C9] text-3xl text-[#101824] text-center uppercase font-bold py-2">
              Build
            </h1>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 1 },
              }}
              viewport={{ once: true }}
            >
              <img
                className="w-50 object-fill bg-gray-200"
                src={aboutBuild}
                alt="Code snippets with React logo"
              />
            </motion.div>
            <div className="w-full flex justify-start items-start text-sm text-[#C9C9C9] text-pretty tracking-wide p-5">
              <p>
                Building in VsCode, React JS, Tailwind CSS and Framer Motion.
              </p>
            </div>
          </div>
          <div className="w-72 h-[28em] sm:w-1/4 flex flex-col shadow-lg shadow-black hover:scale-105 my-10">
            <h1 className="bg-[#C9C9C9] text-3xl text-[#101824] text-center uppercase font-bold py-2">
              Deploy
            </h1>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 1 },
              }}
              viewport={{ once: true }}
            >
              <img
                className="w-50 object-fill bg-gray-200"
                src={aboutDeploy}
                alt="Portfolio Landing Pages with Figma logo"
              />
            </motion.div>
            <div className="w-full flex justify-start items-start text-sm text-[#C9C9C9] text-pretty tracking-wide p-5">
              <p>Using Figma, I design wireframes, compnents and protypes</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
