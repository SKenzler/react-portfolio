import React from "react";
import { easeIn, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import contactImage from "../assets/glasses-image.png";
import profileImage from "../assets/portfolio-image.png";
import aboutDesign from "../assets/about-page-design.png";
import aboutBuild from "../assets/about-page-vscode.png";
import aboutDeploy from "../assets/about-page-react.png";
import reactLogo from "../assets/dev-logo-react.png";
import figmaLogo from "../assets/dev-logo-figma.png";
import vscodeLogo from "../assets/dev-logo-vscode.png";
import pencil from "../assets/logo-pencil.png";
import hammer from "../assets/logo-hammer.png";
import rocket from "../assets/logo-rocket.png";
import skills from "../utilities/skills";
import ReactGA from "react-ga";

const About = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

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
            <div className="flex flex-col-reverse lg:flex-row w-full justify-center items-center mt-5">
              <p className="w-full lg:w-4/12 text-sm text-[#C9C9C9] font-normal text-pretty tracking-wide p-4 mt-5">
                I have been a web developer for the last two years. My central
                focus is building web apps that engage the user and provide them
                with a positive user experience. <br />
                <br />
                To draw in the audience, my strategy combines user interaction
                with subdued animation. I finish personal projects by using the
                programming principles I learnt while earning my Computer
                Science Bachelor's degree.
              </p>
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 1, delay: 1, ease: easeIn },
                }}
                viewport={{ once: true }}
                className="flex justify-center items-center w-9/12 sm:w-[20em] object-contain rounded-lg mt-5 sm:mx-24"
                src={profileImage}
                alt="Profile Image with Development Icons"
              />
            </div>
          </div>
        </div>
        <h1 className="flex justify-center items-center text-2xl text-[#C9C9C9] text-center tracking-wide">
          My <span className="text-yellow-400">&nbsp; Skillset</span>
        </h1>
        <ul className="grid grid-cols-3 md:grid-cols-6 justify-center items-center gap-8 text-[#C9C9C9] text-sm text-center p-5 my-2">
          {skills.map((item) => (
            <motion.li
              key={item.id}
              className="flex flex-col w-[6em] h-[6em] justify-center items-center rounded-lg text-[#C9C9C9] font-normal hover:scale-90 gap-2 my-2"
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
        <Link to="https://github.com/SKenzler" target="_blank">
          <button
            type="button"
            className="w-[18em] flex justify-between items-center border-2 border-yellow-400 px-8 py-2 text-yellow-400 text-center text-base tracking-wide gap-4 font-normal rounded-md cursor-pointer hover:border-[#C9C9C9] hover:text-[#C9C9C9] my-5"
          >
            <FaGithub size={25} />
            Check out my Github
          </button>
        </Link>
        <h1 className="w-4/6 text-2xl text-[#C9C9C9] text-center font-normal mt-16">
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
            <div className="w-full flex text-sm text-[#C9C9C9] text-pretty leading-normal tracking-wide px-3">
              <p>
                Using a mobile first design approach, I initially produce mood
                boards, design layouts, style guides, components, wireframes and
                prototypes in Figma to assist in making design decisions.
              </p>
            </div>
            <div className="flex justify-center items-center mt-1">
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 2, delay: 1, ease: easeIn },
                }}
                viewport={{ once: true }}
                src={pencil}
                className="w-14"
                alt="Logo Pencil"
              />
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 2, delay: 1, ease: easeIn },
                }}
                viewport={{ once: true }}
                src={figmaLogo}
                className="w-14"
                alt="Figma Logo"
              />
            </div>
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
            <div className="w-full flex text-sm text-[#C9C9C9] text-pretty leading-normal tracking-wide px-3">
              <p>
                The building process happens in VS Code. React JS is my prefered
                library and Git ensures version control. Framer Motion enables
                animation and Tailwind CSS adds styling.
              </p>
            </div>
            <div className="flex justify-center items-center mt-1">
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 2, delay: 1, ease: easeIn },
                }}
                viewport={{ once: true }}
                src={hammer}
                className="w-14"
                alt="Logo Hammer"
              />
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 2, delay: 1, ease: easeIn },
                }}
                viewport={{ once: true }}
                src={vscodeLogo}
                className="w-14"
                alt="VS Code Logo"
              />
            </div>
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
            <div className="w-full flex text-sm text-[#C9C9C9] text-pretty leading-normal tracking-wide px-4">
              <p>
                The final build is then tested, debugged and deployed to GitHub
                pages using Github Actions workflow. The workflow is triggered
                with every push to the remote repository.
              </p>
            </div>
            <div className="flex justify-center items-center mt-1">
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 2, delay: 1, ease: easeIn },
                }}
                viewport={{ once: true }}
                src={rocket}
                className="w-14"
                alt="Logo Rocket"
              />
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 2, delay: 1, ease: easeIn },
                }}
                viewport={{ once: true }}
                src={reactLogo}
                className="w-14"
                alt="React Logo"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
