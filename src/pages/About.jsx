import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SkillSlider from "../components/SkillSlider";
import { FaCircleRight } from "react-icons/fa6";
import contactImage from "../assets/glasses-image.png";
import aboutDesign from "../assets/about-page-design.png";
import aboutBuild from "../assets/about-page-vscode.png";
import aboutDeploy from "../assets/about-page-react.png";

const About = () => {
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
            Who <span className="font-normal text-xl">is this guy?</span>
          </h1>
        </div>
        <h1 className="w-full text-3xl text-[#C9C9C9] text-center font-normal px-5 mt-4">
          I'm a Frontend Developer from Perth, Australia.
        </h1>
        <div className="w-4/6 flex flex-rows text-base text-[#C9C9C9] text-pretty py-5 mt-2">
          My focus is on designing, building and delpoying creative web apps.
          The user experience is central interactive animation that conveys a
          clear message functionaly. designing, building and deploying creative
          web apps using React JS, Tailwind CSS and Framer Motion. My skill set
          includes a solid grounding in HTML5, CSS3, JavaScript and React JS. I
          have strong programming principles attained from my Bachelor Degree in
          Computer Science, enabling me to apply these skills toward the
          completion of personal projects.
        </div>
        <h1 className="flex justify-center items-center text-3xl text-[#C9C9C9] text-center tracking-wide">
          My Skillset
        </h1>
        <ul className="grid grid-cols-2 sm:grid-cols-3 justify-center items-center gap-4 text-[#C9C9C9] border-2 border-[#C9C9C9] rounded-lg p-10 my-4">
          <li className="flex justify-start items-center p-2">
            <FaCircleRight size={14} color="#FACC15" />
            &nbsp;HTML5
          </li>
          <li className="flex justify-start items-center p-2">
            <FaCircleRight size={14} color="#FACC15" />
            &nbsp;CSS3
          </li>
          <li className="flex justify-start items-center p-2">
            <FaCircleRight size={14} color="#FACC15" />
            &nbsp;JavaScript
          </li>
          <li className="flex justify-start items-center p-2">
            <FaCircleRight size={14} color="#FACC15" />
            &nbsp;React JS
          </li>{" "}
          <li className="flex justify-start items-center p-2">
            <FaCircleRight size={14} color="#FACC15" />
            &nbsp;Bootstrap
          </li>
          <li className="flex justify-start items-center p-2">
            <FaCircleRight size={14} color="#FACC15" />
            &nbsp;Tailwind CSS
          </li>
          <li className="flex justify-start items-center p-2">
            <FaCircleRight size={14} color="#FACC15" />
            &nbsp;Framer Motion
          </li>
          <li className="flex justify-start items-center p-2">
            <FaCircleRight size={14} color="#FACC15" />
            &nbsp;npm
          </li>
          <li className="flex justify-start items-center p-2">
            <FaCircleRight size={14} color="#FACC15" />
            &nbsp;Git
          </li>
          <li className="flex justify-start items-center p-2">
            <FaCircleRight size={14} color="#FACC15" />
            &nbsp;GitHub
          </li>
          <li className="flex justify-start items-center p-2">
            <FaCircleRight size={14} color="#FACC15" />
            &nbsp;VsCode
          </li>
          <li className="flex justify-start items-center p-2">
            <FaCircleRight size={14} color="#FACC15" />
            &nbsp;Figma
          </li>
        </ul>
        <SkillSlider />
        <h1 className="w-4/6 text-3xl text-[#C9C9C9] text-center font-normal mt-4">
          Development Process
        </h1>
        <div className="w-full flex flex-col sm:flex-row justify-center gap-5 items-center p-2">
          <div className="w-72 h-[25em] sm:w-1/4 flex flex-col shadow-lg shadow-black my-10 hover:scale-105">
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
                className="w-50 object-fill"
                src={aboutDesign}
                alt="Portfolio Landing Pages with Figma logo"
              />
            </motion.div>
            <div className="w-full flex justify-start items-start text-sm text-[#C9C9C9] text-pretty tracking-wide p-5">
              <p>
                By producing wireframes, components, design concepts and
                prototypes in Figma, decisions about colours, fonts, images
                layouts and other design elements can be made.
              </p>
            </div>
          </div>
          <div className="w-72 h-[25em] sm:w-1/4 flex flex-col shadow-lg shadow-black hover:scale-105 my-10">
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
                className="w-50 object-fill"
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
          <div className="w-72 h-[25em] sm:w-1/4 flex flex-col shadow-lg shadow-black hover:scale-105 my-10">
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
                className="w-50 object-fill"
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
