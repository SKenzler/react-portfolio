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
        <div className="flex justify-center items-center w-full bg-yellow-400 mt-10">
          <img
            className="w-20 h-20 object-contain mx-2"
            src={contactImage}
            alt="Contact glasses graphic"
          />
          <h1 className="font-semibold text-2xl text-center">
            Some{" "}
            <span className="font-normal text-xl">designs and projects</span>
          </h1>
        </div>
        <h1 className="w-full text-2xl text-[#C9C9C9] text-center font-normal px-5 mt-10">
          My <span className="text-yellow-400">Design</span>&nbsp;Concepts
        </h1>
        <div className="w-5/12 text-sm text-[#C9C9C9] text-center font-normal text-pretty mt-8">
          Using a mobile first design approach, I create UI concepts and designs
          in Figma before building even starts. Browse through some of my recent
          creations.
        </div>
        <div className="flex relative w-full justify-center items-center overflow-hidden">
          <ProjectCarousel images={images} />
        </div>
        <h1 className="w-full text-2xl text-[#C9C9C9] text-center font-normal mt-10">
          My Personal <span className="text-yellow-400">Projects</span>
        </h1>
        <div className="w-5/12 text-sm text-[#C9C9C9] text-center font-normal text-pretty mt-8">
          Building with the React JS library, I complete personal projects to
          continiously develop my skills and knowledge base. Hover over these
          recent builds to reveil an explanation for each.
        </div>
        <div className="w-full flex justify-center mt-14">
          <FlipCard cards={cards} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Projects;
