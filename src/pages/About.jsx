import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
        <div className="w-4/6 flex justify-center items-center text-base text-[#C9C9C9] text-pretty p-5 mt-8">
          I have Frontend Developer for the last 2 years. My passion is
          designing, building and deploying scalable web apps using React JS,
          Tailwind CSS and Framer Motion. My skill set includes a solid
          grounding in HTML5, CSS3, JavaScript and React JS. In addition, I have
          derived strong programming principles from attaining a Bachelor Degree
          in Computer Science, enabling me to apply these skills toward the
          completion of personal projects. <br />
          <br />
          The following is an outline of my process in designing, buidling and
          deploying web apps:
        </div>
        <div className="w-full flex sm:flex-col justify-center items-center">
          <div className="flex my-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
              viewport={{ once: true }}
            >
              <img
                className="w-full object-fill"
                src={aboutDesign}
                alt="Portfolio Landing Pages with Figma logo"
              />
            </motion.div>
            <div className="w-4/12 text-sm text-[#C9C9C9] text-pretty tracking-wide p-5">
              <h1 className="text-2xl uppercase font-bold py-2">Design</h1>
              <p>Using Figma, I design wireframes, compnents and protypes</p>
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
                transition: { duration: 1, delay: 2 },
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
