import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import aboutDesign from "../assets/about-page-design.png";
import aboutBuild from "../assets/about-page-vscode.png";
import aboutDeploy from "../assets/about-page-react.png";

const About = () => {
  return (
    <>
      <Navbar />
      <h1 className="flex justify-center text-center text-[#C9C9C9] text-4xl font-bold mt-12">
        ABOUT<span className="font-light">&nbsp; Me</span>
      </h1>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        viewport={{ once: true }}
      >
        <img src={aboutDesign} alt="Portfolio Landing Pages with Figma logo" />
      </motion.div>
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
    </>
  );
};

export default About;
