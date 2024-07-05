import React from "react";
import { easeInOut, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SkillSlider from "../components/SkillSlider";
import contactImage from "../assets/glasses-image.png";
import profileImage from "../assets/profile-picture.png";
import aboutDesign from "../assets/about-page-design.png";
import aboutBuild from "../assets/about-page-vscode.png";
import aboutDeploy from "../assets/about-page-react.png";
import reactLogo from "../assets/dev-logo-react.png";
import skills from "../utilities/skills";

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
          <div className="flex flex-col mb-5">
            <h1 className="text-3xl text-[#C9C9C9] text-center font-normal px-2">
              I'm a Frontend Developer from Perth, Australia.
            </h1>
            <p className="text-base text-[#C9C9C9] font-normal text-pretty tracking-wide p-4">
              I have been a web developer for the last two years. My central
              focus is building web apps that engage the user and provide them
              with an impacting user experience. My approach involves
              incorporating user interaction, subtle animation and clear
              navigation. <br /> <br />I design, build and deploy creative web
              apps using React JS, Tailwind CSS and Framer Motion. My Bachelor
              Degree in Computer Science enables me to apply programming
              principles toward the completion of personal projects.
            </p>
          </div>
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 1, ease: easeInOut }}
            className="flex flex-shrink-0 justify-center items-center w-3/4 object-contain sm:w-80 mx-10"
            src={profileImage}
            alt="Profile Image"
          />
        </div>
        <h1 className="flex justify-center items-center text-3xl text-[#C9C9C9] text-center tracking-wide p-5">
          My Skillset
        </h1>
        <ul className="grid grid-cols-3 md:grid-cols-6 bg-[#C9C9C9] justify-center items-center gap-8 text-[#C9C9C9] text-sm text-center px-5 m-4">
          {skills.map((item) => (
            <li
              key={item.id}
              className="flex flex-col w-[6em] h-[6em] justify-center items-center rounded-lg text-[#101824] font-semibold hover:scale-90 p-2"
            >
              {item.icon} {item.heading}
            </li>
          ))}
        </ul>
        <SkillSlider />

        <h1 className="w-4/6 text-3xl text-[#C9C9C9] text-center font-normal mt-10">
          My Development Process
        </h1>
        <div className="w-10/12 flex flex-col lg:flex-row justify-center gap-8 items-center p-2">
          <div className="w-72 h-[28em] sm:w-1/4 flex flex-col shadow-lg shadow-black my-10 hover:scale-105">
            <h1 className="text-3xl text-[#C9C9C9] text-center uppercase font-semibold py-2">
              Design
            </h1>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 1 },
              }}
              viewport={{ once: true }}
            >
              <img
                className="w-full object-fill"
                src={aboutDesign}
                alt="Portfolio Landing Pages with Figma logo"
              />
            </motion.div>
            <div className="w-full flex flex-col justify-start items-start text-sm text-[#C9C9C9] text-pretty tracking-wide p-5">
              <p>
                Using a mobile first design approach to produce wireframes,
                components, design layouts, style guides and prototypes in Figma
                to make design decisions.
              </p>
            </div>
          </div>
          <div className="w-72 h-[28em] sm:w-1/4 flex flex-col shadow-lg shadow-black hover:scale-105 my-10">
            <h1 className="text-3xl text-[#C9C9C9] text-center uppercase font-semibold py-2">
              Build
            </h1>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 1 },
              }}
              viewport={{ once: true }}
            >
              <img
                className="w-full object-fill"
                src={aboutBuild}
                alt="Code snippets with React logo"
              />
            </motion.div>
            <div className="w-full flex justify-start items-start text-sm text-[#C9C9C9] text-pretty tracking-wide p-5">
              <p>
                Building in VsCode, React JS, Tailwind CSS and Framer Motion.
              </p>
              <img src={reactLogo} className="w-20" alt="React Logo" />
            </div>
          </div>
          <div className="w-72 h-[28em] sm:w-1/4 flex flex-col shadow-lg shadow-black hover:scale-105 my-10">
            <h1 className="text-3xl text-[#C9C9C9] text-center uppercase font-semibold py-2">
              Deploy
            </h1>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 1 },
              }}
              viewport={{ once: true }}
            >
              <img
                className="w-full object-fill"
                src={aboutDeploy}
                alt="Portfolio Landing Pages with Figma logo"
              />
            </motion.div>
            <div className="w-full flex justify-start items-start text-sm text-[#C9C9C9] text-pretty tracking-wide p-5">
              <p>
                Deploy the finshed project using GitHub Actions workflows to
                automatically trigger with every push command.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
