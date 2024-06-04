import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SkillSlider from "../components/SkillSlider";
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
        <h1 className="w-4/6 text-3xl text-[#C9C9C9] text-start font-normal mt-4">
          I'm a Frontend Developer from Perth, Australia.
        </h1>
        <div className="w-4/6 flex justify-center items-center text-base text-[#C9C9C9] text-pretty py-5 mt-2">
          My fous is on designing, building and delpoying experince for a user
          whilst clear message functionaly. designing, building and deploying
          creative web apps using React JS, Tailwind CSS and Framer Motion. My
          skill set includes a solid grounding in HTML5, CSS3, JavaScript and
          React JS. Is, I have derived strong programming principles from
          attaining a Bachelor Degree in Computer Science, enabling me to apply
          these skills toward the completion of personal projects. <br />
          <br />
          My skill set includes HTML5, CSS3, JavaScript, React JS, Bootstrap,
          Tailwind CSS, npm, Git, GitHub, VsCode and Figma:
        </div>
        <SkillSlider />
        <div className="w-full flex flex-col justify-start items-center p-2">
          <div className="w-1/2 flex flex-col sm:flex-row border border-[#C9C9C9] rounded-lg shadow-lg my-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 1 },
              }}
              viewport={{ once: true }}
            >
              <img
                className="w-3/4 sm:w-full object-fill"
                src={aboutDesign}
                alt="Portfolio Landing Pages with Figma logo"
              />
            </motion.div>
            <div className="w-full sm:w-4/12 flex flex-col justify-start items-start text-sm text-[#C9C9C9] text-pretty tracking-wide p-5">
              <h1 className="text-3xl sm:text-4xl text-start uppercase font-bold py-2">
                Design
              </h1>
              <p>Using Figma, I design wireframes, compnents and protypes</p>
            </div>
          </div>
          <div className="w-1/2 flex border border-[#C9C9C9] rounded-lg shadow-lg my-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 1 },
              }}
              viewport={{ once: true }}
            >
              <img src={aboutBuild} alt="Vscode logo with code examples" />
            </motion.div>
            <div className="w-4/12 text-sm text-[#C9C9C9] text-pretty tracking-wide p-5">
              <h1 className="text-2xl uppercase font-bold py-2">Build</h1>
              <p>
                Build using VsCode as an EDI React JS, Tailwind CSS and Framer
                Motion dependncies.
              </p>
            </div>
          </div>
          <div className="flex my-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 1 },
              }}
              viewport={{ once: true }}
            >
              <img
                src={aboutDeploy}
                alt="React logo with examples of deployed apps"
              />
            </motion.div>
            <div className="w-4/12 text-sm text-[#C9C9C9] text-pretty tracking-wide p-5">
              <h1 className="text-2xl uppercase font-bold py-2">Deploy</h1>
              <p>Deploy using GitHub pages</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
