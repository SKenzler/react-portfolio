import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCarousel from "../components/ProjectCarousel";
import contactImage from "../assets/glasses-image.png";
import images from "../utilities/images";
import FlipCard from "../components/FlipCard";
import cards from "../utilities/cards";

const Projects = () => {
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
            Some{" "}
            <span className="font-normal text-xl">desings and projects</span>
          </h1>
        </div>
        <div className="w-4/6 flex justify-center items-center text-base text-[#C9C9C9] text-pretty p-5 mt-8">
          I have Frontend Developer for the last 2 years. My passion is
          designing, building and deploying scalable web apps using React JS,
          Tailwind CSS and Framer Motion. My skill set includes a solid
          grounding in HTML5, CSS3, JavaScript and React JS. In addition, I have
          derived strong programming principles from attaining a Bachelor Degree
          in Computer Science, enabling me to apply these skills toward the
          completion of personal projects.
        </div>
        <div className="w-full flex justify-center">
          <ProjectCarousel images={images} />
        </div>
        <div w-full flex justify-center>
          <FlipCard cards={cards} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Projects;
