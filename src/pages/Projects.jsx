import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCarousel from "../components/ProjectCarousel";
import images from "../utilities/images";
import FlipCard from "../components/FlipCard";
import cards from "../utilities/cards";

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screenflex flex-col">
        <div className="flex flex-col justify-center text-center mt-10">
          <h1 className="text-[#C9C9C9] text-4xl font-bold">
            PROJECTS<span className="font-light">&nbsp; Designs</span>
          </h1>
        </div>
        <div w-full flex justify-center>
          <ProjectCarousel images={images} />
        </div>
        <p className="text-sm text-[#C9C9C9] text-center tracking-wide m-5">
          The following are some Landing Page designs created in Figma.
        </p>
        <div w-full flex justify-center>
          <FlipCard cards={cards} />
        </div>
        <p className="text-sm text-[#C9C9C9] text-center tracking-wide m-5">
          The following are some Personal Projects build using React.
        </p>
        <Footer />
      </div>
    </>
  );
};

export default Projects;
