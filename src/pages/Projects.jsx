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
            <span className="font-normal text-xl">designs and projects</span>
          </h1>
        </div>
        <h1 className="w-4/6 text-3xl text-[#C9C9C9] text-start font-normal mt-4">
          Landing Page Design Concepts
        </h1>
        <div className="w-4/6 text-base text-[#C9C9C9] text-pretty mt-8">
          The following are some examples of design concepts created in Figma.
        </div>

        <ProjectCarousel images={images} />

        <div className="w-full flex justify-center mt-10">
          <FlipCard cards={cards} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Projects;
