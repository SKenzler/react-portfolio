import React from "react";
import Navbar from "../components/Navbar";
import ProjectCarousel from "../components/ProjectCarousel";
import images from "../utilities/images";
import FlipCard from "../components/FlipCard";
import cards from "../utilities/cards";

const Projects = () => {
  return (
    <>
      <Navbar />
      <h1 className="flex justify-center text-center text-[#C9C9C9] text-4xl font-bold mt-12">
        PROJECTS<span className="font-light">&nbsp; Designs</span>
      </h1>
      <p className="w-auto text-sm text-[#C9C9C9] text-center p-5">
        Designed in Figma. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Corrupti, ipsam vero molestias magni, pariatur beatae laborum
        dignissimos consequuntur autem, sequi suscipit.
      </p>
      <ProjectCarousel images={images} />
      <FlipCard cards={cards} />
    </>
  );
};

export default Projects;
