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
      <div className="w-full h-screenflex flex-col">
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
