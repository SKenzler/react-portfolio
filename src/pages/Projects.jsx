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
      <div className="w-full h-full flex flex-col justify-center items-center">
        <Navbar />
        <div className="flex justify-center items-center w-full bg-yellow-400 my-4">
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
        <h1 className="w-full text-3xl text-[#C9C9C9] text-center font-normal px-5 mt-4">
          My Design Concepts and Personal Projects
        </h1>
        <div className="w-4/6 text-base text-[#C9C9C9] text-pretty mt-8">
          Using a mobile first design approach, my aim is to create high impact,
          clean and creative designs. The design process Figma wireframes,
          components and protypes.
        </div>
        <div className="flex relative w-full justify-center items-center overflow-hidden">
          <ProjectCarousel images={images} />
        </div>
        <div className="w-full flex justify-center mt-20">
          <FlipCard cards={cards} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Projects;
