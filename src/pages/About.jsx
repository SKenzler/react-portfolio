import React from "react";
import { easeIn, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import contactImage from "../assets/glasses-image.png";
import profileImage from "../assets/portfolio-image.png";
import aboutDesign from "../assets/about-page-design.png";
import aboutBuild from "../assets/about-page-vscode.png";
import aboutDeploy from "../assets/about-page-react.png";
import reactLogo from "../assets/dev-logo-react.png";
import figmaLogo from "../assets/dev-logo-figma.png";
import vscodeLogo from "../assets/dev-logo-vscode.png";
import skills from "../utilities/skills";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="flex justify-center items-center w-full bg-yellow-400 mt-10">
          <img
            className="w-20 h-20 object-contain mx-2"
            src={contactImage}
            alt="Contact glasses graphic"
          />
          <h1 className="font-semibold text-2xl text-center">
            Who <span className="font-normal text-xl">is this guy?</span>
          </h1>
        </div>
        <div className="w-10/12 flex flex-col lg:flex-row justify-center items-center p-5 m-8">
          <div className="flex flex-col mb-5">
            <h1 className="text-2xl text-[#C9C9C9] text-center font-normal p-2">
              I'm a <span className="text-yellow-400">Frontend</span> Developer
              from Perth, Australia.
            </h1>
            <div className="flex flex-col md:flex-row w-full justify-center items-center mt-5">
              <p className="w-full lg:w-4/12 text-sm text-[#C9C9C9] font-normal text-pretty tracking-wide p-4">
                I have been a web developer for the last two years. My central
                focus is building web apps that engage the user and provide them
                with an impacting user experience. <br />
                <br />
                My approach involves incorporating user interaction and subtle
                animation to captivate the audience. A Bachelor Degree in
                Computer Science enables me to apply programming principles
                toward the completion of personal projects.
              </p>
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 1, delay: 1, ease: easeIn },
                }}
                viewport={{ once: true }}
                className="flex justify-center items-center w-10/12 md:w-4/12 object-contain mt-5 sm:mx-24"
                src={profileImage}
                alt="Profile Image with Development Icons"
              />
            </div>
          </div>
        </div>
        <h1 className="flex justify-center items-center text-2xl text-[#C9C9C9] text-center tracking-wide">
          My <span className="text-yellow-400">&nbsp; Skillset</span>
        </h1>
        <ul className="grid grid-cols-3 md:grid-cols-6 justify-center items-center gap-8 text-[#C9C9C9] text-sm text-center p-5 m-4">
          {skills.map((item) => (
            <motion.li
              key={item.id}
              className="flex flex-col w-[6em] h-[6em] justify-center items-center rounded-lg text-[#C9C9C9] font-semibold hover:scale-90 p-2"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1, delay: 1, ease: easeIn },
              }}
              viewport={{ once: true }}
            >
              {item.icon} {item.heading}
            </motion.li>
          ))}
        </ul>

        <h1 className="w-4/6 text-2xl text-[#C9C9C9] text-center font-normal mt-10">
          My <span className="text-yellow-400">Development</span> Process
        </h1>
        <div className="w-full flex flex-col lg:flex-row justify-center gap-10 items-center p-2 mt-10">
          <div className="w-72 h-[29em] flex flex-col border-2 border-[#C9C9C9] rounded-lg shadow-lg shadow-black hover:scale-105">
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 1, ease: easeIn },
              }}
              viewport={{ once: true }}
            >
              <img
                className="w-full object-fill p-2"
                src={aboutDesign}
                alt="Portfolio Landing Pages with Figma logo"
              />
            </motion.div>
            <h1 className="text-2xl text-yellow-400 text-center uppercase font-semibold py-2">
              Design
            </h1>
            <div className="w-full flex justify-start items-start text-sm text-[#C9C9C9] text-pretty leading-normal tracking-wide px-4">
              <p>
                Using a mobile first design approach to produce wireframes,
                components, design layouts, style guides and prototypes in Figma
                to assist in making design decisions.
              </p>
            </div>
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 2, delay: 1, ease: easeIn },
              }}
              viewport={{ once: true }}
              src={figmaLogo}
              className="w-14 m-auto"
              alt="Figma Logo"
            />
          </div>
          <div className="w-72 h-[29em] flex flex-col border-2 border-[#C9C9C9] rounded-lg shadow-lg shadow-black my-10 hover:scale-105">
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 1, ease: easeIn },
              }}
              viewport={{ once: true }}
            >
              <img
                className="w-full object-fill p-2"
                src={aboutBuild}
                alt="React code with React logo"
              />
            </motion.div>
            <h1 className="text-2xl text-yellow-400 text-center uppercase font-semibold py-2">
              Build
            </h1>
            <div className="w-full flex justify-start items-start text-sm text-[#C9C9C9] text-pretty leading-normal tracking-wide px-4">
              <p>
                The building process starts in Visual Studio Code. React JS is
                my prefered library and Git is implemeted for version control.
                Tailwind CSS is the framework I commonly use for styling.
              </p>
            </div>
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 2, delay: 1, ease: easeIn },
              }}
              viewport={{ once: true }}
              src={vscodeLogo}
              className="w-14 m-auto"
              alt="VS Code Logo"
            />
          </div>
          <div className="w-72 h-[29em] flex flex-col border-2 border-[#C9C9C9] rounded-lg shadow-lg shadow-black my-10 hover:scale-105">
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 1, ease: easeIn },
              }}
              viewport={{ once: true }}
            >
              <img
                className="w-full object-fill p-2"
                src={aboutDeploy}
                alt="Portfolio Landing Pages with Figma logo"
              />
            </motion.div>
            <h1 className="text-2xl text-yellow-400 text-center uppercase font-semibold py-2">
              Deploy
            </h1>
            <div className="w-full flex justify-start items-start text-sm text-[#C9C9C9] text-pretty leading-normal tracking-wide px-4">
              <p>
                The final build is then deployed to GitHub pages using Github
                Actions workflow. The workflow action is triggered with every
                push request to the remote repositiory.
              </p>
            </div>
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 2, delay: 1, ease: easeIn },
              }}
              viewport={{ once: true }}
              src={reactLogo}
              className="w-14 m-auto"
              alt="Raect Logo"
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
